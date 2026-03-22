import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import path from "path";

export default function (eleventyConfig) {
  // Vite Plugin with configuration
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      publicDir: "public", // Static assets copied as-is
      build: {
        emptyOutDir: false, // Preserve Eleventy files
        rollupOptions: {
          input: {
            main: path.resolve(process.cwd(), "src/assets/js/main.js"),
          },
        },
      },
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        fs: {
          allow: [process.cwd()],
          strict: false
        },
        allowedHosts: [
          'zunkiree.com',
          'www.zunkiree.com',
          'dev-zunkiree.simplifycodes.com',
          'localhost',
          '127.0.0.1'
        ]
      }
    },
  });

  // Copy static assets with proper path mapping
  // Vite will process CSS through PostCSS/Tailwind during build
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Custom filter to find item by attribute value
  eleventyConfig.addFilter("find", function(array, attr, value) {
    if (!array || !Array.isArray(array)) return null;
    return array.find(item => item[attr] === value);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
