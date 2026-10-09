import services from './services.json' with { type: 'json' };

// Ids of the services that have /locations/{city}/{id}/ pages.
//
// service.njk resolves `service` from servicesDetails.json, which carries no
// skipLocationPages flag — that flag lives in services.json. Gating the city
// pills on `service.skipLocationPages` therefore always reads undefined and
// renders the pills anyway, which is how three solutions shipped twelve broken
// city links. Gate on membership of this list instead, so services.json stays
// the single source of truth.
export default services.filter((s) => !s.skipLocationPages).map((s) => s.id);
