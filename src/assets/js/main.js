// Import CSS (required for Vite bundling)
import '../css/main.css';

// Import GA4 analytics tracking
import './analytics.js';

// Import Alpine.js and plugins
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

// Register plugins before starting
Alpine.plugin(collapse);

// Make Alpine available globally
window.Alpine = Alpine;

// Start Alpine when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Alpine.start());
} else {
  Alpine.start();
}
