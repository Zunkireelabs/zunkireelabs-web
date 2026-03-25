# Stage 1: Build the static site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source files and config
COPY src/ src/
COPY public/ public/
COPY .eleventy.js tailwind.config.js postcss.config.js ./

# Build the static site
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx/static.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
