import locations from './locations.js';
import services from './services.json' with { type: 'json' };

// Generate all location × service combinations for programmatic SEO
const pages = [];

for (const location of locations) {
  for (const service of services) {
    const serviceContent = location.services?.[service.id];
    const hasUniqueContent = !!serviceContent;

    // For non-HQ locations without unique service content,
    // canonical points to main service page to avoid thin content penalty
    const canonicalUrl = hasUniqueContent
      ? null  // Use default (self-referencing)
      : `/services/${service.id}/`;

    pages.push({
      locationId: location.id,
      serviceId: service.id,
      locationName: location.name,
      serviceName: service.title,
      isHeadquarters: location.isHeadquarters,
      hasUniqueContent: hasUniqueContent,
      canonicalUrl: canonicalUrl,
      title: serviceContent?.title || `${service.title} in ${location.name} | Zunkiree Labs`,
      description: serviceContent?.description || `${service.description} Professional ${service.title.toLowerCase()} services in ${location.name}, ${location.country}.`,
      permalink: `/locations/${location.id}/${service.id}/`
    });
  }
}

export default pages;
