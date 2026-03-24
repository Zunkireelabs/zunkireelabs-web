# Zunkiree Web Deployment Setup

> **FOR AI ASSISTANTS (Claude Max, etc.):**
> When asked to "set up deployment" or "deploy" using this file, follow these rules:
> 1. Ask the user: **"Which environment do you want to deploy? dev, staging, or production?"**
> 2. Based on the answer, ask follow-up questions:
>    - **dev** → Ask: "Do you want to deploy the shared `develop` branch, or a feature branch?"
>      - If **develop** → no further questions (deploys `dev-zunkiree.zunkireelabs.com`)
>      - If **feature** → Ask: "What is the client name?" and "What is the feature name?"
>        (maps to branch `feature/{client}-{feature}`)
>    - **staging** → Ask: "Do you want to deploy the shared `staging` branch, or a client-specific staging?"
>      - If **staging** → no further questions (deploys `staging-zunkiree.zunkireelabs.com`)
>      - If **client-specific** → Ask: "What is the client name?"
>        (maps to branch `staging/{client}`)
>    - **production** → No further questions needed (always deploys `zunkireelabs.com`)
> 3. Replace `{CLIENT}` and `{FEATURE}` placeholders in the commands with the user's answers
> 4. Do NOT ask about Docker, Traefik, networking, or any other infrastructure — handle it automatically
> 5. If the VPS already has Docker/Traefik set up (check first), skip to the deploy section
> 6. Always verify the deployment worked at the end

---

## Architecture

```
GitHub Actions (CI/CD) — auto-triggers on push
  │
  ├─ Build Docker image → push to ghcr.io/zunkiree-technologies/zunkiree-web
  └─ SSH into VPS → pull image → run container with Traefik labels
        │
        ▼
┌──────────────────────────────────────────────────┐
│  VPS (Single Server)                             │
│                                                  │
│  Traefik (reverse proxy, port 80/443)            │
│    ├─ Auto-discovers Docker containers           │
│    ├─ Routes domains via Host() rules            │
│    └─ Auto-provisions Let's Encrypt TLS certs    │
│                                                  │
│  Docker Network: "hosting"                       │
│    ├─ zunkiree-dev-{client}-{feature}            │
│    ├─ zunkiree-dev                               │
│    ├─ zunkiree-staging-{client}                  │
│    ├─ zunkiree-staging                           │
│    └─ zunkiree-production                        │
└──────────────────────────────────────────────────┘
```

### Environment Mapping

| Environment | Branch Pattern | Domain | Container Name |
|---|---|---|---|
| **dev** | `feature/{client}-{feature}` | `dev-{client}-{feature}.zunkireelabs.com` | `zunkiree-dev-{client}-{feature}` |
| **dev** | `develop` | `dev-zunkiree.zunkireelabs.com` | `zunkiree-dev` |
| **staging** | `staging/{client}` | `staging-{client}.zunkireelabs.com` | `zunkiree-staging-{client}` |
| **staging** | `staging` | `staging-zunkiree.zunkireelabs.com` | `zunkiree-staging` |
| **production** | `main` | `zunkireelabs.com` | `zunkiree-production` |

### Key Details

- **Docker Registry:** `ghcr.io/zunkiree-technologies/zunkiree-web`
- **App Port:** 80 (nginx serving static files inside container)
- **Docker Network:** `hosting`
- **Traefik Config:** `/opt/traefik/traefik.yml`
- **GitHub Repo:** `https://github.com/Zunkiree-Technologies/zunkireelabs-web`
- **Wildcard DNS:** `*.zunkireelabs.com` → VPS IP
- **Production DNS:** `zunkireelabs.com` → VPS IP (separate A record)

---

## Section 1: First-Time VPS Setup (Run Once)

> **AI ASSISTANT:** Before deploying, check if setup is already done:
> ```bash
> docker --version && docker network ls | grep hosting && docker ps | grep traefik
> ```
> If all three pass, skip to Section 2. Otherwise run the steps below.

### 1a. Install Docker

```bash
apt update && apt upgrade -y
curl -fsSL https://get.docker.com | sh
systemctl enable docker && systemctl start docker
docker --version
```

### 1b. Create Docker Network

```bash
docker network create hosting
```

### 1c. Set Up Traefik

```bash
# Create directories
mkdir -p /opt/traefik
touch /opt/traefik/acme.json
chmod 600 /opt/traefik/acme.json

# Create Traefik config
cat > /opt/traefik/traefik.yml <<'EOF'
api:
  dashboard: false

entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
  websecure:
    address: ":443"

providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    exposedByDefault: false
    network: hosting

certificatesResolvers:
  letsencrypt:
    acme:
      email: admin@zunkireelabs.com
      storage: /acme.json
      httpChallenge:
        entryPoint: web
EOF

# Run Traefik
docker run -d \
  --name traefik \
  --network hosting \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v /opt/traefik/traefik.yml:/traefik.yml:ro \
  -v /opt/traefik/acme.json:/acme.json \
  traefik:v3.0
```

### 1d. Create Deploy User (if not using root)

```bash
adduser --disabled-password --gecos "" deploy
usermod -aG docker deploy
mkdir -p /home/deploy/.ssh
# Add the public key that matches GitHub secret VPS_SSH_KEY
echo "PASTE_PUBLIC_KEY_HERE" > /home/deploy/.ssh/authorized_keys
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh
```

---

## Section 2: Branch Workflow

The standard workflow for making changes:

```
feature/{client}-{feature}  →  develop  →  staging  →  main
        │                         │           │          │
   Auto-deploys to          Auto-deploys  Auto-deploys  Auto-deploys
   dev-{client}-{feature}   dev-zunkiree  staging-      zunkireelabs
   .zunkireelabs.com        .zunkiree...  zunkiree...   .com
```

1. Create a feature branch: `git checkout -b feature/acme-dashboard`
2. Push to trigger auto-deploy: `git push -u origin feature/acme-dashboard`
3. Preview at: `https://dev-acme-dashboard.zunkireelabs.com`
4. When ready, merge to `develop` for shared dev testing
5. Merge to `staging` for pre-production validation
6. Merge to `main` for production release

---

## Section 3: Manual Deploy (Legacy)

For local testing without CI, the `deploy.sh` script and `docker-compose.dev.yml` still work:

```bash
# Build and deploy dev locally
./deploy.sh

# Or manually
npm run build
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up -d
```

---

## Section 4: Verification

After deploying, run these checks on the VPS:

```bash
# 1. Check container is running
docker ps --filter "name=CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# 2. Check Traefik sees it
docker logs traefik --tail 20 2>&1 | grep -i "CONTAINER_NAME"

# 3. Check TLS cert status
docker logs traefik --tail 50 2>&1 | grep -iE "acme|letsencrypt|certificate"

# 4. List all Zunkiree deployments
docker ps --filter "label=zunkiree.env" \
  --format "table {{.Names}}\t{{.Status}}\t{{.Label \"zunkiree.env\"}}"
```

---

## Section 5: Cleanup / Remove a Deployment

Feature branch containers are **automatically removed** when the branch is deleted (via the cleanup GitHub Actions workflow).

To manually remove:

```bash
CONTAINER="CONTAINER_NAME"
docker stop "$CONTAINER" 2>/dev/null || true
docker rm "$CONTAINER" 2>/dev/null || true
docker image prune -f --filter "until=24h"
echo "Removed: $CONTAINER"
```

---

## Section 6: Troubleshooting

### TLS Certificate Not Working
```bash
docker logs traefik --tail 100 2>&1 | grep -iE "acme|letsencrypt|certificate|error"
dig DOMAIN +short
docker restart CONTAINER_NAME
```

### Container Not Accessible
```bash
docker inspect CONTAINER_NAME | grep -A5 "Networks"
docker inspect CONTAINER_NAME --format '{{json .Config.Labels}}' | python3 -m json.tool
docker logs CONTAINER_NAME --tail 50
```

---

## GitHub Secrets Reference

These must be set in the GitHub repo (Settings > Secrets and variables > Actions):

| Secret | Value | Description |
|---|---|---|
| `VPS_HOST` | VPS IP address | SSH target |
| `VPS_USER` | `deploy` (or `root`) | SSH username |
| `VPS_SSH_KEY` | Full SSH private key | For pipeline SSH access |
| `GHCR_PAT` | GitHub PAT | `read:packages` + `write:packages` scope, for VPS-side docker pull |
| `DOMAIN` | `zunkireelabs.com` | Base domain for dev/staging subdomains |
| `PRODUCTION_DOMAIN` | `zunkireelabs.com` | Production domain (used by main branch) |

---

## DNS Requirements

| Type | Name | Value |
|---|---|---|
| `A` | `*.zunkireelabs.com` | VPS IP | Wildcard for all dev/staging subdomains |
| `A` | `@` (zunkireelabs.com) | VPS IP | Production |
| `A` | `www` | VPS IP | Production www redirect |
