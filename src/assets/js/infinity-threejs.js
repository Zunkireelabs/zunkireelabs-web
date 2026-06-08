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

  // ── Ribbon ────────────────────────────────────────────────────────────
  function makeRibbon(faceW, edgeT, steps) {
    const hw = faceW / 2, ht = edgeT / 2;
    const shape = new THREE.Shape();
    shape.moveTo(-hw, -ht); shape.lineTo(hw, -ht);
    shape.lineTo(hw,   ht); shape.lineTo(-hw, ht);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { steps, bevelEnabled: false, extrudePath: curve });
    geo.computeVertexNormals();
    return geo;
  }

  const mainGeom = makeRibbon(0.26, 0.05, 400);
  const mainMat  = new THREE.ShaderMaterial({
    uniforms: { uA: { value: new THREE.Color('#7ee8a2') }, uB: { value: new THREE.Color('#80deea') }, uHalf: { value: S } },
    vertexShader:   `varying float vX; void main(){ vX=position.x; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uA,uB; uniform float uHalf; varying float vX;
                     void main(){ float t=clamp((vX+uHalf)/(uHalf*2.0),0.0,1.0); gl_FragColor=vec4(mix(uA,uB,t),1.0); }`,
    side: THREE.DoubleSide,
  });

  const mainMesh = new THREE.Mesh(mainGeom, mainMat);
  scene.add(mainMesh);

  // ── Starburst sprite texture (4-point lens-flare style) ───────────────
  function makeStarTexture(size = 128) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d');
    const cx = size / 2, cy = size / 2;

    // Soft outer glow halo
    const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.48);
    halo.addColorStop(0,   'rgba(210,255,230,0.45)');
    halo.addColorStop(0.4, 'rgba(130,240,200,0.14)');
    halo.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, size, size);

    // 4 elongated spike arms
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    const arms = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
    for (const angle of arms) {
      const ex = cx + Math.cos(angle) * size * 0.46;
      const ey = cy + Math.sin(angle) * size * 0.46;
      const lg = ctx.createLinearGradient(cx, cy, ex, ey);
      lg.addColorStop(0,   'rgba(255,255,255,1)');
      lg.addColorStop(0.25,'rgba(255,255,255,0.7)');
      lg.addColorStop(0.65,'rgba(200,255,230,0.2)');
      lg.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = lg;
      ctx.lineWidth = 2.2;
      ctx.stroke();
    }
    ctx.restore();

    // Bright white centre core
    const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.13);
    core.addColorStop(0,   'rgba(255,255,255,1)');
    core.addColorStop(0.6, 'rgba(255,255,255,0.5)');
    core.addColorStop(1,   'rgba(255,255,255,0)');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.13, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(c);
  }

  const starTex = makeStarTexture(128);

  // ── ✦ HTML stars — equally spaced along loop, positioned via projection ─
  const STAR_COUNT = 12;
  const STAR_T     = Array.from({ length: STAR_COUNT }, (_, i) => i / STAR_COUNT);
  // Stagger phases so stars twinkle independently
  const STAR_PHASE = STAR_T.map((_, i) => i * (Math.PI * 2 / STAR_COUNT));
  const starEls    = STAR_T.map((t, i) => ({
    t,
    phase: STAR_PHASE[i],
    el: container.querySelector(`[data-inf-star="${i}"]`),
  }));

  // ── Moving trails — thin bright LINE + large starburst at the head ────
  // THREE.Line renders at 1px which IS correct here (matches the reference).
  // The key is bright saturated color + high opacity so 1px is clearly visible.
  const TRAIL_COUNT = 5;
  const TAIL        = 38;
  const trailData   = [];
  const _sq = new THREE.Vector3();

  // Head-star system: one sprite per trail, updated each frame
  const headPos = new Float32Array(TRAIL_COUNT * 3);
  const headGeo = new THREE.BufferGeometry();
  headGeo.setAttribute('position', new THREE.BufferAttribute(headPos, 3));

  const headMat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uTex: { value: starTex } },
    vertexShader: `
      uniform float uTime; varying float vAlpha;
      void main() {
        float pulse = 0.82 + 0.18 * sin(uTime * 2.2);
        vAlpha = pulse;
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = pulse * 0.24 * (320.0 / -mv.z);
        gl_Position  = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform sampler2D uTex; varying float vAlpha;
      void main() {
        vec4 s = texture2D(uTex, gl_PointCoord);
        if (s.a * vAlpha < 0.01) discard;
        gl_FragColor = vec4(s.rgb, s.a * vAlpha);
      }`,
    transparent: true, depthWrite: false, depthTest: false,
    blending: THREE.AdditiveBlending,
  });

  mainMesh.add(new THREE.Points(headGeo, headMat));

  // Palette: bright lime-greens and cyan matching the ribbon but saturated
  const lineColors = [
    '#c2f547', // lime
    '#7ee8a2', // mint
    '#80deea', // cyan
    '#aaef60', // yellow-lime
    '#a0f0d0', // pale mint
  ];

  // Per-tab color palettes: ribbon gradient [uA, uB] + 5 trail colors
  const TAB_PALETTES = [
    { uA: '#7ee8a2', uB: '#80deea', trails: ['#c2f547', '#7ee8a2', '#80deea', '#aaef60', '#a0f0d0'] }, // Agentic AI: mint/cyan
    { uA: '#60a5fa', uB: '#818cf8', trails: ['#38bdf8', '#60a5fa', '#818cf8', '#7dd3fc', '#c4b5fd'] }, // AI Search: blue/indigo
    { uA: '#fb923c', uB: '#fbbf24', trails: ['#f97316', '#fb923c', '#fbbf24', '#fdba74', '#fde68a'] }, // Data Infrastructure: orange/amber
    { uA: '#76b900', uB: '#a3e635', trails: ['#76b900', '#86efac', '#a3e635', '#bbf7d0', '#d9f99d'] }, // Automation: brand green/lime
  ];

  // Color transition state
  const _tc = new THREE.Color();
  let colorStartTime = -1;
  const COLOR_DURATION = 0.4;
  let colorFrom = null;
  let colorTarget = null;

  function setTabColors(tabIndex) {
    const palette = TAB_PALETTES[tabIndex];
    if (!palette) return;
    colorFrom = {
      uA:     mainMat.uniforms.uA.value.clone(),
      uB:     mainMat.uniforms.uB.value.clone(),
      trails: trailData.map(s => s.mat.uniforms.uColor.value.clone()),
    };
    colorTarget = palette;
    colorStartTime = clock.getElapsedTime();
  }

  // Vertex shader — fade from head (aFade=0) to tail (aFade=1)
  const lineVert = `
    attribute float aFade; varying float vFade;
    void main() { vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `;
  const lineFrag = `
    uniform vec3 uColor; uniform float uOpacity; varying float vFade;
    void main() {
      float a = uOpacity * (1.0 - vFade * vFade);
      if (a < 0.01) discard;
      gl_FragColor = vec4(uColor, a);
    }
  `;

  for (let i = 0; i < TRAIL_COUNT; i++) {
    const buf     = new Float32Array(TAIL * 3);
    const fadeArr = new Float32Array(TAIL);
    for (let j = 0; j < TAIL; j++) fadeArr[j] = j / (TAIL - 1);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(buf, 3));
    geo.setAttribute('aFade',    new THREE.BufferAttribute(fadeArr, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor:   { value: new THREE.Color(lineColors[i % lineColors.length]) },
        uOpacity: { value: 0.82 + Math.random() * 0.15 },
      },
      vertexShader: lineVert, fragmentShader: lineFrag,
      transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    mainMesh.add(new THREE.Line(geo, mat));

    trailData.push({
      geo, buf, mat,
      t:       i / TRAIL_COUNT,
      speed:   0.0007 + Math.random() * 0.0009,
      tailLen: 0.10  + Math.random() * 0.06,   // longer tail so line is visible
    });
  }

  // ── Labels ────────────────────────────────────────────────────────────
  const LABELS = [
    { attr: 'agentic-ai', t: 0.625, px: -72, py: -33 },
    { attr: 'ai-search',  t: 0.125, px:  72, py: -38 },
    { attr: 'data-infra', t: 0.375, px: -72, py:  28 },
    { attr: 'automation', t: 0.875, px:  72, py:  28 },
  ];

  LABELS.forEach(cfg => {
    cfg.el    = container.querySelector(`[data-inf="${cfg.attr}"]`);
    cfg.dotEl = cfg.el ? cfg.el.querySelector('[data-inf-dot]') : null;
  });

  const _lv = new THREE.Vector3();

  function positionLabels() {
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    const ry = mainMesh.rotation.y;
    const cosR = Math.cos(ry), sinR = Math.sin(ry);

    LABELS.forEach(({ el, t, fixed, px, py }) => {
      if (!el) return;
      if (fixed) { _lv.copy(fixed); }
      else {
        curve.getPoint(t, _lv);
        const nx = _lv.x * cosR + _lv.z * sinR;
        const nz = -_lv.x * sinR + _lv.z * cosR;
        _lv.x = nx; _lv.z = nz;
      }
      _lv.project(camera);
      el.style.left    = ((_lv.x + 1) / 2 * cw + px) + 'px';
      el.style.top     = ((-_lv.y + 1) / 2 * ch + py) + 'px';
      el.style.opacity = '1';
    });

    // Position ✦ HTML stars along the lemniscate
    starEls.forEach(({ t, el }) => {
      if (!el) return;
      curve.getPoint(t, _lv);
      const nx = _lv.x * cosR + _lv.z * sinR;
      const nz = -_lv.x * sinR + _lv.z * cosR;
      _lv.x = nx; _lv.z = nz;
      _lv.project(camera);
      el.style.left = ((_lv.x + 1) / 2 * cw) + 'px';
      el.style.top  = ((-_lv.y + 1) / 2 * ch) + 'px';
    });
  }

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

    // Smooth color transition across ribbon and trails
    if (colorStartTime >= 0 && colorTarget && colorFrom) {
      const p = Math.min(1, (t - colorStartTime) / COLOR_DURATION);
      mainMat.uniforms.uA.value.copy(colorFrom.uA).lerp(_tc.set(colorTarget.uA), p);
      mainMat.uniforms.uB.value.copy(colorFrom.uB).lerp(_tc.set(colorTarget.uB), p);
      trailData.forEach((s, i) => {
        s.mat.uniforms.uColor.value.copy(colorFrom.trails[i]).lerp(_tc.set(colorTarget.trails[i]), p);
      });
      if (p >= 1) colorStartTime = -1;
    }

    headMat.uniforms.uTime.value = t;

    // Twinkle ✦ HTML stars — gentle independent fade in/out, no glow
    starEls.forEach(({ el, phase }) => {
      if (!el) return;
      el.style.opacity = (0.20 + 0.50 * Math.abs(Math.sin(t * 0.55 + phase))).toFixed(2);
    });

    trailData.forEach((s, idx) => {
      s.t = (s.t + s.speed) % 1;

      for (let j = 0; j < TAIL; j++) {
        const pt = ((s.t - (j / TAIL) * s.tailLen) + 1) % 1;
        curve.getPoint(pt, _sq);
        s.buf[j*3] = _sq.x; s.buf[j*3+1] = _sq.y; s.buf[j*3+2] = _sq.z;
      }
      s.geo.attributes.position.needsUpdate = true;

      // Park the head star at j=0 (the leading point of each trail)
      headPos[idx*3]   = s.buf[0];
      headPos[idx*3+1] = s.buf[1];
      headPos[idx*3+2] = s.buf[2];
    });

    headGeo.attributes.position.needsUpdate = true;
    positionLabels();
    renderer.render(scene, camera);
  }

  animate();

  function destroy() {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    io.disconnect();
    mainGeom.dispose(); mainMat.dispose();
    headGeo.dispose(); headMat.dispose();
    starTex.dispose();
    trailData.forEach(s => { s.geo.dispose(); s.mat.dispose(); });
    renderer.dispose();
  }

  return { destroy, setTabColors };
}

// ─────────────────────────────────────────────────────────────────────────────
// Zoomed variant — pans to whichever node the Section B tab selects
// ─────────────────────────────────────────────────────────────────────────────
export function initThreeInfinityZoom(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const container = canvas.parentElement;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  // Narrow FOV (13° vs original 40°) = ~4× zoom; camera pans via lookAt lerp
  const camera = new THREE.PerspectiveCamera(13, 1, 0.1, 100);
  camera.position.set(0, 0.15, 4.7);

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

  function makeRibbon(faceW, edgeT, steps) {
    const hw = faceW / 2, ht = edgeT / 2;
    const shape = new THREE.Shape();
    shape.moveTo(-hw, -ht); shape.lineTo(hw, -ht);
    shape.lineTo(hw,   ht); shape.lineTo(-hw, ht);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { steps, bevelEnabled: false, extrudePath: curve });
    geo.computeVertexNormals();
    return geo;
  }

  const mainGeom = makeRibbon(0.26, 0.05, 400);
  const mainMat  = new THREE.ShaderMaterial({
    uniforms: { uA: { value: new THREE.Color('#7ee8a2') }, uB: { value: new THREE.Color('#80deea') }, uHalf: { value: S } },
    vertexShader:   `varying float vX; void main(){ vX=position.x; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uA,uB; uniform float uHalf; varying float vX;
                     void main(){ float t=clamp((vX+uHalf)/(uHalf*2.0),0.0,1.0); gl_FragColor=vec4(mix(uA,uB,t),1.0); }`,
    side: THREE.DoubleSide,
  });

  const mainMesh = new THREE.Mesh(mainGeom, mainMat);
  scene.add(mainMesh);

  // ── Per-tab focus targets: camera aim + label curve position ─────────────
  const FOCUS_TARGETS = [
    { lookAt: [-1.37,  0.97, 0.4], t: 0.625, name: 'Agentic AI',         uA: '#7ee8a2', uB: '#80deea' },
    { lookAt: [ 1.37,  0.97, 0.4], t: 0.125, name: 'AI Search',          uA: '#60a5fa', uB: '#818cf8' },
    { lookAt: [-1.37, -0.97,-0.4], t: 0.375, name: 'Data Infrastructure', uA: '#fb923c', uB: '#fbbf24' },
    { lookAt: [ 1.37, -0.97,-0.4], t: 0.875, name: 'Automation',         uA: '#76b900', uB: '#a3e635' },
  ];

  // Smooth camera look-at lerp
  const lookAtCurrent = new THREE.Vector3(...FOCUS_TARGETS[0].lookAt);
  const lookAtTarget  = new THREE.Vector3(...FOCUS_TARGETS[0].lookAt);
  camera.lookAt(lookAtCurrent);

  // Active label t-value (which point on the curve to label)
  let activeLabelT = FOCUS_TARGETS[0].t;

  // Color transition
  const _tc = new THREE.Color();
  let colorFrom   = null;
  let colorTarget = null;
  let colorStart  = -1;
  const COLOR_DUR = 0.45;

  // ── Trails ────────────────────────────────────────────────────────────────
  const TRAIL_COUNT = 3;
  const TAIL        = 38;
  const trailData   = [];
  const _sq         = new THREE.Vector3();

  const lineVert = `
    attribute float aFade; varying float vFade;
    void main() { vFade = aFade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `;
  const lineFrag = `
    uniform vec3 uColor; uniform float uOpacity; varying float vFade;
    void main() {
      float a = uOpacity * (1.0 - vFade * vFade);
      if (a < 0.01) discard;
      gl_FragColor = vec4(uColor, a);
    }
  `;

  const zoomLineColors = ['#c2f547', '#7ee8a2', '#80deea'];
  for (let i = 0; i < TRAIL_COUNT; i++) {
    const buf     = new Float32Array(TAIL * 3);
    const fadeArr = new Float32Array(TAIL);
    for (let j = 0; j < TAIL; j++) fadeArr[j] = j / (TAIL - 1);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(buf, 3));
    geo.setAttribute('aFade',    new THREE.BufferAttribute(fadeArr, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor:   { value: new THREE.Color(zoomLineColors[i]) },
        uOpacity: { value: 0.85 },
      },
      vertexShader: lineVert, fragmentShader: lineFrag,
      transparent: true, depthWrite: false, depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    mainMesh.add(new THREE.Line(geo, mat));
    trailData.push({ geo, buf, mat, t: i / TRAIL_COUNT, speed: 0.0007 + i * 0.0003, tailLen: 0.12 });
  }

  // ── Label (single element, repositioned each frame) ───────────────────────
  const labelEl     = document.getElementById('inf-zoom-label');
  const labelTextEl = document.getElementById('inf-zoom-label-text');
  const _lv         = new THREE.Vector3();

  function positionLabel() {
    if (!labelEl) return;
    const cw = canvas.clientWidth, ch = canvas.clientHeight;

    curve.getPoint(activeLabelT, _lv);
    _lv.project(camera);

    // offset label slightly above-left of the projected point
    labelEl.style.left    = ((_lv.x + 1) / 2 * cw - 80) + 'px';
    labelEl.style.top     = ((-_lv.y + 1) / 2 * ch - 38) + 'px';
    labelEl.style.opacity = '1';
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  function setFocus(tabIndex) {
    const f = FOCUS_TARGETS[tabIndex];
    if (!f) return;

    lookAtTarget.set(...f.lookAt);
    activeLabelT = f.t;

    if (labelTextEl) labelTextEl.textContent = f.name;

    // Kick off ribbon + trail color transition
    colorFrom = {
      uA:     mainMat.uniforms.uA.value.clone(),
      uB:     mainMat.uniforms.uB.value.clone(),
      trails: trailData.map(s => s.mat.uniforms.uColor.value.clone()),
    };
    colorTarget = f;
    colorStart  = clock.getElapsedTime();
  }

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight > 80 ? container.clientHeight : Math.round(w * 0.38);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    positionLabel();
  }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  let rafId;
  let visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
  io.observe(canvas);

  const clock = new THREE.Clock();

  function animate() {
    rafId = requestAnimationFrame(animate);
    if (!visible) return;

    const elapsed = clock.getElapsedTime();

    // Smooth camera pan toward target look-at
    lookAtCurrent.lerp(lookAtTarget, 0.07);
    camera.lookAt(lookAtCurrent);

    // Color transition
    if (colorStart >= 0 && colorTarget && colorFrom) {
      const p = Math.min(1, (elapsed - colorStart) / COLOR_DUR);
      mainMat.uniforms.uA.value.copy(colorFrom.uA).lerp(_tc.set(colorTarget.uA), p);
      mainMat.uniforms.uB.value.copy(colorFrom.uB).lerp(_tc.set(colorTarget.uB), p);
      // Blend trails toward new A color as a proxy
      trailData.forEach((s, i) => {
        s.mat.uniforms.uColor.value.copy(colorFrom.trails[i]).lerp(_tc.set(colorTarget.uA), p);
      });
      if (p >= 1) colorStart = -1;
    }

    // Advance trails
    trailData.forEach(s => {
      s.t = (s.t + s.speed) % 1;
      for (let j = 0; j < TAIL; j++) {
        const pt = ((s.t - (j / TAIL) * s.tailLen) + 1) % 1;
        curve.getPoint(pt, _sq);
        s.buf[j*3] = _sq.x; s.buf[j*3+1] = _sq.y; s.buf[j*3+2] = _sq.z;
      }
      s.geo.attributes.position.needsUpdate = true;
    });

    positionLabel();
    renderer.render(scene, camera);
  }

  animate();

  return {
    setFocus,
    destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      mainGeom.dispose(); mainMat.dispose();
      trailData.forEach(s => { s.geo.dispose(); s.mat.dispose(); });
      renderer.dispose();
    }
  };
}
