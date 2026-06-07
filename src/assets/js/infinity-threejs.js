import * as THREE from 'three';

export function initThreeInfinity(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const container = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0.15, 4.7);
  camera.lookAt(0, 0, 0);

  const S = 2.9;

  class LemniscateCurve extends THREE.Curve {
    getPoint(t, target = new THREE.Vector3()) {
      const a = t * Math.PI * 2;
      const d = 1 + Math.sin(a) * Math.sin(a);
      return target.set(
        (S * Math.cos(a)) / d,
        (S * Math.sin(a) * Math.cos(a)) / d,
        S * 0.14 * Math.sin(a * 2)
      );
    }
  }

  const curve = new LemniscateCurve();

  const S2 = (S * 2).toFixed(2);
  const Sf = S.toFixed(2);

  function makeShader(c1, c2, opacity = 1.0) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uC1: { value: new THREE.Color(c1) },
        uC2: { value: new THREE.Color(c2) },
      },
      vertexShader: /* glsl */`
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform vec3 uC1;
        uniform vec3 uC2;
        varying vec3 vPos;
        void main() {
          float t = clamp((vPos.x + ${Sf}) / ${S2}, 0.0, 1.0);
          vec3 color = mix(uC1, uC2, t);
          gl_FragColor = vec4(color, ${opacity.toFixed(2)});
        }
      `,
      transparent:  opacity < 1.0,
      blending:     opacity < 1.0 ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite:   opacity >= 1.0,
      side:         THREE.DoubleSide,
    });
  }

  const ribbonMat = makeShader('#a8e060', '#2eb888');
  const glowMat   = makeShader('#c8ff70', '#40d090', 0.38);

  const mainGeom = new THREE.TubeGeometry(curve, 300, 0.092, 22, true);
  const glowGeom = new THREE.TubeGeometry(curve, 200, 0.18,  12, true);

  const mainMesh = new THREE.Mesh(mainGeom, ribbonMat);
  const glowMesh = new THREE.Mesh(glowGeom, glowMat);
  scene.add(glowMesh);
  scene.add(mainMesh);

  // ── Shooting star — 3-particle train ─────────────────────────────
  // Head is bright white; each trailing particle shrinks and fades.
  const COMET_GAP = 0.024; // parametric gap between particles on [0,1]

  const cometParts = [
    {
      mesh: new THREE.Mesh(
        new THREE.SphereGeometry(0.10, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      ),
      offset: 0,
    },
    {
      mesh: new THREE.Mesh(
        new THREE.SphereGeometry(0.065, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xccffaa, transparent: true, opacity: 0.70 })
      ),
      offset: COMET_GAP,
    },
    {
      mesh: new THREE.Mesh(
        new THREE.SphereGeometry(0.038, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0x88ee55, transparent: true, opacity: 0.38 })
      ),
      offset: COMET_GAP * 2,
    },
  ];

  const cometLight = new THREE.PointLight(0xffffff, 5.0, 1.6);
  cometParts.forEach(({ mesh }) => mainMesh.add(mesh));
  mainMesh.add(cometLight);

  // ── Label config ──────────────────────────────────────────────────
  // t = curve parameter for both positioning and proximity check
  // Governance uses a fixed 3D point but still has a t for the comet crossing (centre at t=0.25)
  const LABELS = [
    { attr: 'agentic-ai', t: 0.625, px: -36, py: -18 },
    { attr: 'ai-search',  t: 0.125, px:  36, py: -18 },
    { attr: 'data-infra', t: 0.375, px: -36, py:  18 },
    { attr: 'automation', t: 0.875, px:  36, py:  18 },
    { attr: 'governance', t: 0.25,  fixed: new THREE.Vector3(0, S * 0.42, 0), px: 0, py: -14 },
  ];

  LABELS.forEach(cfg => {
    cfg.el    = container.querySelector(`[data-inf="${cfg.attr}"]`);
    cfg.dotEl = cfg.el ? cfg.el.querySelector('[data-inf-dot]') : null;
  });

  // ── Reusable vectors (no per-frame allocation) ────────────────────
  const _lv = new THREE.Vector3();
  const _cv = new THREE.Vector3();

  // ── Label positioning ─────────────────────────────────────────────
  function positionLabels() {
    const cw   = canvas.clientWidth;
    const ch   = canvas.clientHeight;
    const ry   = mainMesh.rotation.y;
    const cosR = Math.cos(ry);
    const sinR = Math.sin(ry);

    LABELS.forEach(({ el, t, fixed, px, py }) => {
      if (!el) return;
      if (fixed) {
        _lv.copy(fixed);
      } else {
        curve.getPoint(t, _lv);
        const nx = _lv.x * cosR + _lv.z * sinR;
        const nz = -_lv.x * sinR + _lv.z * cosR;
        _lv.x = nx;
        _lv.z = nz;
      }
      _lv.project(camera);
      el.style.left    = ((_lv.x + 1) / 2 * cw + px) + 'px';
      el.style.top     = ((-_lv.y + 1) / 2 * ch + py) + 'px';
      el.style.opacity = '1';
    });
  }

  // ── Proximity glow ────────────────────────────────────────────────
  // When the comet's curve-t is within THRESHOLD of a label's t,
  // the dot glows bright white + green halo. Fades smoothly via CSS transition.
  const GLOW_THRESHOLD = 0.09;

  const DOT_DEFAULT = '0 0 4px 2px rgba(255,255,255,0.35)';

  function updateDotGlows(cometT) {
    LABELS.forEach(({ dotEl, t: labelT }) => {
      if (!dotEl) return;
      let dist = Math.abs(cometT - labelT);
      if (dist > 0.5) dist = 1 - dist; // wrap on [0,1] circle
      const intensity = Math.max(0, 1 - dist / GLOW_THRESHOLD);
      if (intensity > 0) {
        const r  = Math.round(4  + intensity * 14);
        const s  = Math.round(2  + intensity * 8);
        const r2 = Math.round(r  * 2);
        const s2 = Math.round(s  + 6);
        const a1 = (0.4 + intensity * 0.6).toFixed(2);
        const a2 = (intensity * 0.65).toFixed(2);
        dotEl.style.boxShadow = `0 0 ${r}px ${s}px rgba(255,255,255,${a1}), 0 0 ${r2}px ${s2}px rgba(168,224,96,${a2})`;
        dotEl.style.transform = `scale(${(1 + intensity * 0.6).toFixed(2)})`;
      } else {
        dotEl.style.boxShadow = DOT_DEFAULT;
        dotEl.style.transform = 'scale(1)';
      }
    });
  }

  // ── Resize ────────────────────────────────────────────────────────
  function resize() {
    const w = container.clientWidth;
    const h = Math.round(w * 0.50);
    canvas.style.height = h + 'px';
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    positionLabels();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // ── Animation loop ────────────────────────────────────────────────
  let rafId;
  let visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);

  const clock = new THREE.Clock();

  function animate() {
    rafId = requestAnimationFrame(animate);
    if (!visible) return;

    const t = clock.getElapsedTime();

    mainMesh.rotation.y = Math.sin(t * 0.28) * 0.13;
    glowMesh.rotation.y = mainMesh.rotation.y;

    const cometT = (t * 0.14) % 1;

    // Position each particle behind the head by its offset
    cometParts.forEach(({ mesh, offset }) => {
      curve.getPoint(((cometT - offset) + 1) % 1, _cv);
      mesh.position.copy(_cv);
    });
    // Point light tracks the head
    curve.getPoint(cometT, _cv);
    cometLight.position.copy(_cv);

    positionLabels();
    updateDotGlows(cometT);

    renderer.render(scene, camera);
  }

  animate();

  return function destroy() {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    io.disconnect();
    mainGeom.dispose();
    glowGeom.dispose();
    ribbonMat.dispose();
    glowMat.dispose();
    renderer.dispose();
  };
}
