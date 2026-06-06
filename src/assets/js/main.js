// Import CSS (required for Vite bundling)
import '../css/main.css';

// Import GA4 analytics tracking
import './analytics.js';

// Import Alpine.js and plugins
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

// Import GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Import Lottie + Search icon animation data
import lottie from 'lottie-web';
import searchSparkleData from '../icons/search-sparkle.json';

// Import Lenis smooth scroll
import Lenis from 'lenis';

// Expose GSAP globally so Alpine x-data can reference it
window.gsap = gsap;

// Register plugins before starting
Alpine.plugin(collapse);

// Make Alpine available globally
window.Alpine = Alpine;

// ─── Smooth Scroll (Lenis) ──────────────────────────────────────
let lenis = null;

function initSmoothScroll() {
  // Honour reduced-motion: fall back to native scrolling
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Keep ScrollTrigger in sync with Lenis' scroll position
  lenis.on('scroll', ScrollTrigger.update);

  // Drive Lenis from GSAP's ticker (single RAF loop — avoids jitter)
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Lenis-aware programmatic scroll (target = px number or element/selector)
function scrollTo(target, immediate = false) {
  if (lenis) {
    lenis.scrollTo(target, { immediate });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) el.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' });
  }
}

// ─── Full-Page Background Blob — scroll-driven drift (Homepage) ──
// Single owner of #page-blob-1's transform DURING the hero. The scrub
// ScrollTrigger and the ambient wander never run at the same time —
// we kill one before starting the other, so they can't fight (the old
// "sometimes moves, sometimes not" bug).
let _pageBlobDrift = null;

function buildPageBlobDrift() {
  const pb1 = document.querySelector('#page-blob-1');
  if (!pb1) return null;

  // Drift from the top-left toward the hero mockup, tied to scroll.
  // scrub:1.5 = follows the scroll closely but with a smooth, slight lag.
  return gsap.to(pb1, {
    x: 350,
    y: 220,
    scaleX: 0.85,
    scaleY: 0.8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-dark',
      start: 'top -80',
      end: () => '+=' + window.innerHeight * 1.5,
      scrub: 1.5,
    },
  });
}

function initPageBackground() {
  _pageBlobDrift = buildPageBlobDrift();
}

function killPageBlobDrift() {
  if (!_pageBlobDrift) return;
  if (_pageBlobDrift.scrollTrigger) _pageBlobDrift.scrollTrigger.kill();
  _pageBlobDrift.kill();
  _pageBlobDrift = null;
}

// ─── Blob Ambient Float (post-metrics) ───────────────────────────
let _blobAmbientActive = false;

function startBlobAmbient() {
  if (_blobAmbientActive) return;
  _blobAmbientActive = true;

  // Hand off control: remove the scroll-driven drift so it can't fight
  // the ambient wander over pb1's transform.
  killPageBlobDrift();

  const pb1 = document.querySelector('#page-blob-1');
  const pb2 = document.querySelector('#page-blob-2');
  const pb3 = document.querySelector('#page-blob-3');
  if (!pb1) return;

  // Clear any residual tweens before the wander takes over.
  gsap.killTweensOf([pb1, pb2, pb3].filter(Boolean));

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // pb1 CSS center is at ~(250px, 200px) in viewport.
  // Keep it within viewport: x shift keeps center in [0, vw], y in [0, vh]
  function wander1() {
    if (!_blobAmbientActive) return;
    gsap.to(pb1, {
      x: gsap.utils.random(-220, vw - 300),
      y: gsap.utils.random(-150, vh - 150),
      scaleX: gsap.utils.random(0.8, 1.6),
      scaleY: gsap.utils.random(0.7, 1.4),
      duration: gsap.utils.random(5, 9),
      ease: 'sine.inOut',
      onComplete: wander1
    });
  }
  wander1();

  if (pb2) {
    function wander2() {
      if (!_blobAmbientActive) return;
      gsap.to(pb2, {
        x: gsap.utils.random(-(vw * 0.3), vw * 0.2),
        y: gsap.utils.random(-vh * 0.2, vh * 0.5),
        scaleX: gsap.utils.random(0.6, 1.5),
        scaleY: gsap.utils.random(0.6, 1.4),
        duration: gsap.utils.random(7, 12),
        ease: 'sine.inOut',
        onComplete: wander2
      });
    }
    gsap.delayedCall(1.5, wander2);
  }

  if (pb3) {
    function wander3() {
      if (!_blobAmbientActive) return;
      gsap.to(pb3, {
        x: gsap.utils.random(-(vw * 0.2), vw * 0.3),
        y: gsap.utils.random(-vh * 0.3, vh * 0.3),
        scaleX: gsap.utils.random(0.5, 1.3),
        scaleY: gsap.utils.random(0.5, 1.2),
        duration: gsap.utils.random(9, 15),
        ease: 'sine.inOut',
        onComplete: wander3
      });
    }
    gsap.delayedCall(3, wander3);
  }
}

function stopBlobAmbient() {
  if (!_blobAmbientActive) return;
  _blobAmbientActive = false;
  const pb1 = document.querySelector('#page-blob-1');
  const pb2 = document.querySelector('#page-blob-2');
  const pb3 = document.querySelector('#page-blob-3');
  // Stop the wander only — the scroll-driven drift is rebuilt by the
  // caller (onEnterBack) after pb1 is reset to its start position.
  gsap.killTweensOf([pb1, pb2, pb3].filter(Boolean));
}

// ─── Hero Background Blob Animation ──────────────────────────────
function initHeroBackground() {
  const b1 = document.querySelector('#hero-blob-1');
  const b2 = document.querySelector('#hero-blob-2');
  const b3 = document.querySelector('#hero-blob-3');
  if (!b1) return;

  // Blob 1 — drift right + down, gentle breathing
  gsap.to(b1, { x: 80, y: 50, duration: 5, ease: 'sine.inOut', repeat: -1, yoyo: true });
  gsap.to(b1, { scale: 1.15, opacity: 0.7, duration: 3.5, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.5 });

  // Blob 2 — medium diagonal, offset phase
  gsap.to(b2, { x: -60, y: 40, duration: 7, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1 });

  // Blob 3 — large sweep
  gsap.to(b3, { x: 50, y: -30, duration: 10, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 2.5 });
}

// ─── Split headline text into .hero-word spans ────────────────────
function splitHeadlineWords(h1) {
  const result = [];
  h1.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Split plain text by spaces, wrap each word
      node.textContent.split(/(\s+)/).forEach(token => {
        if (!token) return;
        if (/^\s+$/.test(token)) {
          result.push(document.createTextNode(token));
        } else {
          const span = document.createElement('span');
          span.className = 'hero-word';
          span.textContent = token;
          result.push(span);
        }
      });
    } else if (node.nodeName === 'BR') {
      result.push(node.cloneNode());
    } else if (node.nodeName === 'SPAN') {
      // Colored inner span — keep wrapper, split its text children
      const wrapper = node.cloneNode(false);
      node.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          child.textContent.split(/(\s+)/).forEach(token => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
              wrapper.appendChild(document.createTextNode(token));
            } else {
              const span = document.createElement('span');
              span.className = 'hero-word';
              span.textContent = token;
              wrapper.appendChild(span);
            }
          });
        }
      });
      result.push(wrapper);
    }
  });
  h1.innerHTML = '';
  result.forEach(n => h1.appendChild(n));
}

// ─── Hero Carousel GSAP Animation ────────────────────────────────
function initHeroCarousel() {
  const slides = document.querySelectorAll('[data-slide]');
  if (!slides.length) return;

  document.querySelectorAll('.hero-headline').forEach(splitHeadlineWords);

  const TOTAL = 3;
  let current = 0;

  // Hide everything first
  gsap.set(slides, { autoAlpha: 0, pointerEvents: 'none' });
  gsap.set(document.querySelectorAll('[data-slide] .hero-word'), { y: 24, autoAlpha: 0 });
  gsap.set(document.querySelectorAll('[data-slide] .inline-block'), { autoAlpha: 0 });

  // ── Indicators: active pill + progress fill ────────────────────
  const DURATION = 7; // seconds per slide
  let paused = false;
  let progressTween = null;
  const dots = Array.from(document.querySelectorAll('[data-dot-pos]'));
  const pauseBtn = document.querySelector('#hero-pause');

  function setActiveDot(index) {
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      const fill = d.querySelector('.hero-dot-fill');
      if (fill && i !== index) gsap.set(fill, { scaleX: 0 });
    });
  }

  // Fill the active pill over DURATION; advance on complete. The tween
  // IS the autoplay clock, so visual progress and advance stay in sync.
  function startProgress() {
    if (progressTween) progressTween.kill();
    const fill = dots[current] && dots[current].querySelector('.hero-dot-fill');
    if (!fill) return;
    gsap.set(fill, { scaleX: 0 });
    progressTween = gsap.to(fill, {
      scaleX: 1,
      duration: DURATION,
      ease: 'none',
      onComplete: () => goTo((current + 1) % TOTAL),
    });
    if (paused) progressTween.pause();
  }

  // ── Core transition ────────────────────────────────────────────
  function transitionTo(next, prev) {
    // Separate content divs from mockup divs — avoids autoAlpha flash
    const outContent = document.querySelectorAll(`[data-slide="${prev}"]:not(.hero-mockup-slide)`);
    const inContent  = document.querySelectorAll(`[data-slide="${next}"]:not(.hero-mockup-slide)`);
    const outMockup  = document.querySelector(`.hero-mockup-slide[data-slide="${prev}"]`);
    const inMockup   = document.querySelector(`.hero-mockup-slide[data-slide="${next}"]`);

    // Kill in-flight tweens
    outContent.forEach(el => gsap.killTweensOf(el));
    inContent.forEach(el => gsap.killTweensOf(el));
    if (outMockup) gsap.killTweensOf(outMockup);
    if (inMockup)  gsap.killTweensOf(inMockup);

    // Hide any third slide that isn't involved
    slides.forEach(el => {
      const idx = Number(el.getAttribute('data-slide'));
      if (idx !== prev && idx !== next) gsap.set(el, { autoAlpha: 0, pointerEvents: 'none' });
    });

    // Prep incoming
    gsap.set(inContent, { autoAlpha: 0, pointerEvents: 'none' });
    gsap.set(document.querySelectorAll(`[data-slide="${next}"] .hero-word`), { y: 20, autoAlpha: 0 });
    gsap.set(document.querySelectorAll(`[data-slide="${next}"] .inline-block`), { autoAlpha: 0 });

    // EXIT — eyebrow + words out, mockup scales down
    const outEyebrow = document.querySelector(`[data-slide="${prev}"] .inline-block`);
    const outWords   = document.querySelectorAll(`[data-slide="${prev}"] .hero-word`);
    gsap.to(outEyebrow, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' });
    if (outMockup) gsap.to(outMockup, { autoAlpha: 0, scale: 0.96, duration: 0.3, ease: 'power2.in' });

    const exitTarget = outWords.length ? outWords : outContent;
    gsap.to(exitTarget, {
      y: -14, autoAlpha: 0, duration: 0.25, ease: 'power2.in', stagger: 0.02,
      onComplete: () => {
        gsap.set(outContent, { autoAlpha: 0, pointerEvents: 'none' });

        // ENTER — show container, animate children
        gsap.set(inContent, { autoAlpha: 1, pointerEvents: 'auto' });
        const inEyebrow = document.querySelector(`[data-slide="${next}"] .inline-block`);
        const inWords   = document.querySelectorAll(`[data-slide="${next}"] .hero-word`);
        gsap.to(inEyebrow, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
        if (inWords.length) gsap.to(inWords, { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out', stagger: 0.03 });
        // Mockup separate — not part of inContent batch
        if (inMockup) gsap.fromTo(inMockup, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.55, ease: 'power2.out' });
      }
    });
  }

  // ── goTo — deduped entry point ─────────────────────────────────
  function goTo(next) {
    if (next === current) return;
    const prev = current;
    current = next;
    setActiveDot(next);
    startProgress();
    transitionTo(next, prev);
  }

  // ── Entrance for slide 0 ───────────────────────────────────────
  const slide0Content = document.querySelectorAll('[data-slide="0"]:not(.hero-mockup-slide)');
  const mockup0       = document.querySelector('.hero-mockup-slide[data-slide="0"]');
  gsap.set(slide0Content, { autoAlpha: 1, pointerEvents: 'auto' });
  gsap.to(document.querySelector('[data-slide="0"] .inline-block'), { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
  gsap.to(document.querySelectorAll('[data-slide="0"] .hero-word'), { y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out', stagger: 0.04, delay: 0.1 });
  if (mockup0) gsap.fromTo(mockup0, { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power2.out', delay: 0.2 });
  setActiveDot(0);
  startProgress();

  // ── Wire dots — click to jump; goTo restarts the progress clock ─
  dots.forEach(btn => {
    btn.addEventListener('click', () => goTo(Number(btn.dataset.dotPos)));
  });

  // ── Pause / play toggle (button only) ──────────────────────────
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      pauseBtn.classList.toggle('is-paused', paused);
      pauseBtn.setAttribute('aria-pressed', String(paused));
      pauseBtn.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      if (progressTween) paused ? progressTween.pause() : progressTween.resume();
    });
  }
}

// ─── Scroll Reveal Animations ─────────────────────────────────────
function initScrollReveals() {
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach((el) => {
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
}



// ─── Blue Section Scroll-Driven Page Color Shift ──────────────────
function initBlueColorShift() {
  const blueSec = document.querySelector('.section-blue');
  const overlay = document.getElementById('page-color-overlay');
  if (!blueSec || !overlay) return;

  const blobs = gsap.utils.toArray('#page-blob-1, #page-blob-2, #page-blob-3');

  gsap.timeline({
    scrollTrigger: {
      trigger: blueSec,
      start: 'top 90%',
      end: 'bottom 10%',
      scrub: 2,
    }
  })
  .fromTo(overlay,
    { backgroundColor: 'rgba(35,87,130,0)' },
    { backgroundColor: 'rgba(35,87,130,1)', ease: 'none', duration: 0.3 }, 0)
  .fromTo(blobs,
    { opacity: 1 },
    { opacity: 0, ease: 'none', duration: 0.3 }, 0)
  .to({}, { duration: 0.4 })
  .to(overlay,
    { backgroundColor: 'rgba(35,87,130,0)', ease: 'none', duration: 0.3 })
  .to(blobs,
    { opacity: 1, ease: 'none', duration: 0.3 }, '<');
}

// ─── FAQ Section — Full Green Background Shift (mirrors blue section) ─
function initFaqGreenGlow() {
  const ctaBand = document.getElementById('cta-band-section');
  const faqSec  = document.getElementById('faq-cta-section');
  const glow    = document.getElementById('faq-green-glow');
  const trigEl  = ctaBand || faqSec;
  if (!trigEl || !glow) return;

  const blobs = gsap.utils.toArray('#page-blob-1, #page-blob-2, #page-blob-3');

  gsap.timeline({
    scrollTrigger: {
      trigger: trigEl,
      endTrigger: faqSec || trigEl,
      start: 'top 90%',
      end: 'bottom 10%',
      scrub: 2,
    }
  })
  .fromTo(glow,  { opacity: 0 }, { opacity: 1, ease: 'none', duration: 0.3 }, 0)
  .fromTo(blobs, { opacity: 1 }, { opacity: 0, ease: 'none', duration: 0.3 }, 0)
  .to({}, { duration: 0.4 })
  .to(glow,  { opacity: 0, ease: 'none', duration: 0.3 })
  .to(blobs, { opacity: 1, ease: 'none', duration: 0.3 }, '<');
}

// ─── Zunkiree Search — Lottie Sparkle Icon ───────────────────────
function initSearchIcon() {
  const container = document.querySelector('#search-lottie');
  if (!container) return;

  // Deep-clone the animation data so we can recolor without mutating the import
  const data = JSON.parse(JSON.stringify(searchSparkleData));

  // Recolor the background circle gradient (layer index 4, shape index 1 = gradient fill)
  // Lottie gradient format: [pos, r, g, b, pos, r, g, b, ..., pos, a, pos, a, ...]
  // Replace teal-purple stops → brand green palette (#c8dfa0, #90a959, #6f9b34)
  const greenStops0 = [0, 0.784, 0.875, 0.627, 0.55, 0.565, 0.663, 0.349, 1, 0.435, 0.608, 0.204, 0, 1, 0.55, 1, 1, 1];
  const greenStops1 = [0, 0.435, 0.608, 0.204, 0.55, 0.565, 0.663, 0.349, 1, 0.784, 0.875, 0.627, 0, 1, 0.55, 1, 1, 1];
  try {
    const gradFill = data.layers[4].shapes[1].g.k;
    gradFill.k[0].s = greenStops0;
    gradFill.k[1].s = greenStops1;
    gradFill.k[2].s = greenStops0;
  } catch (_) { /* layer structure mismatch — use original colors */ }

  lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: data,
  });
}

// ─── Boot ─────────────────────────────────────────────────────────
function boot() {
  Alpine.start();
  initSmoothScroll();       // smooth scroll first — ScrollTrigger syncs to Lenis
  initPageBackground();
  initHeroBackground();
  initHeroCarousel();
  initScrollReveals();
  initBlueColorShift();
  initFaqGreenGlow();
  initSearchIcon();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// ─── Pointer-follow glow on .hero-btn-glow ──────────────────────
document.querySelectorAll('.hero-btn-glow').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--mouse-x', `${e.clientX - r.left}px`);
    btn.style.setProperty('--mouse-y', `${e.clientY - r.top}px`);
  });
});
