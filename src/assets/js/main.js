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

  // Split all hero headlines into word spans before any animation
  document.querySelectorAll('.hero-headline').forEach(splitHeadlineWords);

  // Force all slides hidden immediately — overrides any inline/CSS opacity
  gsap.set(slides, { autoAlpha: 0, pointerEvents: 'none' });
  gsap.set(document.querySelectorAll('[data-slide] .hero-word'), { y: 24, autoAlpha: 0 });
  gsap.set(document.querySelectorAll('[data-slide] .inline-block'), { autoAlpha: 0 });

  // Entrance animation for slide 0 — eyebrow then staggered words + mockup scale
  const slide0Container = document.querySelectorAll('[data-slide="0"]');
  gsap.set(slide0Container, { autoAlpha: 1, pointerEvents: 'auto' });
  const eyebrow0 = document.querySelector('[data-slide="0"] .inline-block');
  const words0   = document.querySelectorAll('[data-slide="0"] .hero-word');
  const mockup0  = document.querySelector('.hero-mockup-slide[data-slide="0"]');
  gsap.to(eyebrow0, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
  gsap.to(words0, {
    y: 0, autoAlpha: 1,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.04,
    delay: 0.1
  });
  if (mockup0) {
    gsap.fromTo(mockup0,
      { autoAlpha: 0, scale: 0.95 },
      { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power2.out', delay: 0.2 }
    );
  }

  // ── Sliding pill ───────────────────────────────────────────────
  function slidePillTo(index) {
    const container = document.querySelector('#hero-dots-container');
    const dot       = document.querySelector(`[data-dot-pos="${index}"]`);
    const pill      = document.querySelector('#hero-dot-pill');
    if (!container || !dot || !pill) return;
    const x = dot.getBoundingClientRect().left - container.getBoundingClientRect().left;
    gsap.to(pill, { x, duration: 0.7, ease: 'power3.inOut' });
  }

  setTimeout(() => slidePillTo(0), 60);

  // Listen for slide change events dispatched from Alpine
  document.addEventListener('hero:slide', (e) => {
    const { prev, next } = e.detail;

    slidePillTo(next);

    const allSlides = document.querySelectorAll('[data-slide]');
    const outEls    = document.querySelectorAll(`[data-slide="${prev}"]`);
    const inEls     = document.querySelectorAll(`[data-slide="${next}"]`);

    // Kill ALL slide tweens — prevents abandoned slides from staying partially visible
    gsap.killTweensOf(allSlides);

    // Force-hide any slide that is neither outgoing nor incoming (orphan guard)
    allSlides.forEach(el => {
      const idx = el.getAttribute('data-slide');
      if (idx !== String(prev) && idx !== String(next)) {
        gsap.set(el, { autoAlpha: 0, y: 20, pointerEvents: 'none' });
      }
    });

    // Prep in-slide: hidden, words reset to below
    gsap.set(inEls, { autoAlpha: 0, pointerEvents: 'none' });
    gsap.set(document.querySelectorAll(`[data-slide="${next}"] .hero-word`), { y: 20, autoAlpha: 0 });
    gsap.set(document.querySelectorAll(`[data-slide="${next}"] .inline-block`), { autoAlpha: 0 });

    // EXIT — eyebrow fades, words stagger upward, mockup scales down
    const outEyebrow = document.querySelector(`[data-slide="${prev}"] .inline-block`);
    const outWords   = document.querySelectorAll(`[data-slide="${prev}"] .hero-word`);
    const outMockup  = document.querySelector(`.hero-mockup-slide[data-slide="${prev}"]`);
    gsap.to(outEyebrow, { autoAlpha: 0, duration: 0.2, ease: 'power2.in' });
    if (outMockup) gsap.to(outMockup, { autoAlpha: 0, scale: 0.95, duration: 0.3, ease: 'power2.in' });
    gsap.to(outWords, {
      y: -16, autoAlpha: 0,
      duration: 0.25,
      ease: 'power2.in',
      stagger: 0.025,
      onComplete: () => {
        gsap.set(outEls, { autoAlpha: 0, pointerEvents: 'none' });

        // ENTER — text slides in, mockup scales up
        gsap.set(inEls, { autoAlpha: 1, pointerEvents: 'auto' });
        const inEyebrow = document.querySelector(`[data-slide="${next}"] .inline-block`);
        const inWords   = document.querySelectorAll(`[data-slide="${next}"] .hero-word`);
        const inMockup  = document.querySelector(`.hero-mockup-slide[data-slide="${next}"]`);
        gsap.to(inEyebrow, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(inWords, {
          y: 0, autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.035,
          onComplete: () => gsap.set(inEls, { pointerEvents: 'auto' })
        });
        if (inMockup) {
          gsap.fromTo(inMockup,
            { autoAlpha: 0, scale: 0.95 },
            { autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
          );
        }
      }
    });
  });
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

// ─── Scroll-Controlled Hero Carousel (ScrollTrigger Pin) ─────────
function initHeroScrollCarousel() {
  const hero = document.querySelector('.hero-dark');
  if (!hero) return;

  let lastTarget = 0;

  function goToSlide(index) {
    const btn = document.querySelector(`[data-dot-pos="${index}"]`);
    if (btn) btn.click();
  }

  // start: 'top -80' — pin fires after hero has scrolled 80px up,
  // so the full dashboard mockup is visible before the viewport locks
  ScrollTrigger.create({
    trigger: hero,
    start: 'top -80',
    end: () => '+=' + window.innerHeight * 1.5,
    pin: true,
    pinSpacing: true,
    onLeave: () => {
      const metricsEl = hero.parentElement?.nextElementSibling;
      gsap.to(hero, { opacity: 0, duration: 0.5, ease: 'power2.in' });
      startBlobAmbient();
      // Scroll metrics section into view while hero is fading — fills the empty spacer gap
      gsap.delayedCall(0.2, () => {
        if (metricsEl) scrollTo(metricsEl);
      });
    },
    onEnterBack: () => {
      stopBlobAmbient();
      gsap.killTweensOf(hero);
      // Reset pb1 to its start transform while hero is still opacity:0
      const pb1 = document.querySelector('#page-blob-1');
      if (pb1) gsap.set(pb1, { x: 0, y: 0, scaleX: 1, scaleY: 1 });
      // Jump to pin-start (no smooth) — user sees nothing, no empty spacer flash
      scrollTo(80, true);
      // Rebuild the scroll-driven drift so it owns pb1 again
      initPageBackground();
      // Fade hero back in at the clean position
      gsap.to(hero, { opacity: 1, duration: 0.5, ease: 'power1.out' });
    },
    onUpdate: (self) => {
      let target = 0;
      if (self.progress >= 0.67) target = 2;
      else if (self.progress >= 0.34) target = 1;
      if (target !== lastTarget) {
        lastTarget = target;
        goToSlide(target);
      }
    }
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

// ─── Boot ─────────────────────────────────────────────────────────
function boot() {
  Alpine.start();
  initSmoothScroll();       // smooth scroll first — ScrollTrigger syncs to Lenis
  initHeroScrollCarousel(); // pin must be first — creates spacer before other ScrollTriggers measure positions
  initPageBackground();
  initHeroBackground();
  initHeroCarousel();
  initScrollReveals();
  initBlueColorShift();
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
