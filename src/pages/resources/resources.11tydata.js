export default {
  eleventyComputed: {
    // The `resource-content.njk` layout does `{% set resource = ... %}`,
    // but a `set` inside a layout only exists during THAT layout's own
    // render pass — Eleventy renders each page's own content template to a
    // string first (using just the data cascade), then substitutes it into
    // the layout as `content`. So `resource` was never actually in scope
    // inside any of these pages' own bodies, even though the layout's own
    // markup (using the same `{% set resource %}`) rendered fine. Every
    // `{{ resource.title }}`/`{% for x in resource.results %}` etc. in a
    // page body was silently resolving to undefined (schema fields render
    // as empty strings; for-loops over undefined just produce zero items).
    // Computing `resource` here puts it in the real data cascade, so it's
    // available to the page body too, not just the layout.
    resource: (data) => {
      if (!data.slug || !data.resources || !Array.isArray(data.resources.items)) return null;
      return data.resources.items.find((item) => item.slug === data.slug) || null;
    },
  },
};
