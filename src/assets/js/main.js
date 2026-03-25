// Import CSS (required for Vite bundling)
import '../css/main.css';

// Import Alpine.js
import Alpine from 'alpinejs';

// Make Alpine available globally
window.Alpine = Alpine;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Alpine.js
  Alpine.start();

  console.log('🚀 Zunkiree Labs - Initialized');
});
