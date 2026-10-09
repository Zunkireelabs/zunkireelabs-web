import services from './services.json' with { type: 'json' };

// The subset of services.json that takes part in the city × service matrix.
//
// locationServicePages.js skips any service with `skipLocationPages`, so no
// /locations/{city}/{serviceId}/ page is generated for it. Every template that
// renders city links must therefore iterate THIS list rather than `services`,
// or it emits one broken link per location for each skipped solution.
//
// Templates that look a service up by id (rather than listing city links) still
// iterate the full `services` collection — see location-service.njk's resolver.
export default services.filter((s) => !s.skipLocationPages);
