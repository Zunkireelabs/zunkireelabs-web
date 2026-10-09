import locations from './locations.js';
import services from './services.json' with { type: 'json' };

// Generate all location × service combinations for programmatic SEO
const pages = [];

for (const location of locations) {
  for (const service of services) {
    // Newer solution lines opt out of the city x service matrix. Without this
    // every added service silently generates one page per location (4 today),
    // canonicalised away but still crawled — exactly the kind of thin,
    // auto-generated URL we spent a cleanup removing from Search Console.
    // Opt one in by deleting its skipLocationPages flag in services.json and
    // writing real city copy in locationServiceEntries.js.
    if (service.skipLocationPages) continue;
    const serviceContent = location.services?.[service.id];
    const hasUniqueContent = !!serviceContent;

    // For non-HQ locations without unique service content,
    // canonical points to main service page to avoid thin content penalty
    const canonicalUrl = hasUniqueContent
      ? null  // Use default (self-referencing)
      : `/solutions/${service.id}/`;

    pages.push({
      locationId: location.id,
      serviceId: service.id,
      locationName: location.name,
      serviceName: service.title,
      isHeadquarters: location.isHeadquarters,
      hasUniqueContent: hasUniqueContent,
      hasServiceFaqs: !!(serviceContent?.faqs && serviceContent.faqs.length),
      canonicalUrl: canonicalUrl,
      title: serviceContent?.title || `${service.title} in ${location.name} | Zunkiree Labs`,
      description: serviceContent?.description || `${service.description} Professional ${service.title.toLowerCase()} services in ${location.name}, ${location.country}.`,
      permalink: `/locations/${location.id}/${service.id}/`
    });
  }
}

export default pages;
