/**
 * GA4 Conversion Tracking Utility
 * Tracks key user actions for SEO attribution
 */

// Ensure gtag is available
const gtag = window.gtag || function() {
  console.warn('GA4 not loaded');
};

/**
 * Track form submissions (generate_lead event)
 * @param {string} formId - Identifier for the form
 * @param {object} data - Additional form data
 */
export function trackFormSubmit(formId, data = {}) {
  gtag('event', 'generate_lead', {
    form_id: formId,
    form_name: data.formName || formId,
    page_location: window.location.href,
    page_title: document.title,
    ...data
  });
}

/**
 * Track CTA button clicks (schedule_call_click event)
 * @param {string} ctaId - Identifier for the CTA
 * @param {string} ctaText - Text of the CTA button
 * @param {string} destination - URL destination
 */
export function trackCTAClick(ctaId, ctaText, destination) {
  gtag('event', 'schedule_call_click', {
    cta_id: ctaId,
    cta_text: ctaText,
    link_url: destination,
    page_location: window.location.href,
    page_title: document.title
  });
}

/**
 * Track resource downloads (resource_download event)
 * @param {string} resourceName - Name of the resource
 * @param {string} resourceType - Type (ebook, report, case-study, etc.)
 * @param {string} resourceUrl - Download URL
 */
export function trackResourceDownload(resourceName, resourceType, resourceUrl) {
  gtag('event', 'resource_download', {
    resource_name: resourceName,
    resource_type: resourceType,
    file_url: resourceUrl,
    page_location: window.location.href,
    page_title: document.title
  });
}

/**
 * Track page scroll depth
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(percentage) {
  gtag('event', 'scroll_depth', {
    scroll_percentage: percentage,
    page_location: window.location.href,
    page_title: document.title
  });
}

/**
 * Initialize automatic tracking
 * Call this on DOMContentLoaded
 */
export function initAnalytics() {
  // Track contact form submissions
  document.querySelectorAll('form[data-track="form"]').forEach(form => {
    form.addEventListener('submit', (e) => {
      const formId = form.getAttribute('data-form-id') || form.id || 'unknown';
      const formName = form.getAttribute('data-form-name') || 'Contact Form';
      trackFormSubmit(formId, { formName });
    });
  });

  // Track CTA clicks
  document.querySelectorAll('a[data-track="cta"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const ctaId = link.getAttribute('data-cta-id') || 'cta';
      const ctaText = link.textContent.trim();
      const destination = link.href;
      trackCTAClick(ctaId, ctaText, destination);
    });
  });

  // Track resource downloads
  document.querySelectorAll('a[data-track="download"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const resourceName = link.getAttribute('data-resource-name') || 'Unknown Resource';
      const resourceType = link.getAttribute('data-resource-type') || 'document';
      const resourceUrl = link.href;
      trackResourceDownload(resourceName, resourceType, resourceUrl);
    });
  });

  // Track scroll depth milestones
  const scrollMilestones = [25, 50, 75, 100];
  const trackedMilestones = new Set();

  const checkScrollDepth = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    scrollMilestones.forEach(milestone => {
      if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackScrollDepth(milestone);
      }
    });
  };

  // Throttled scroll listener
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      checkScrollDepth();
      scrollTimeout = null;
    }, 250);
  }, { passive: true });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
  initAnalytics();
}
