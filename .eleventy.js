import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import path from "path";
import fs from "fs";

// Simple Vite plugin to copy non-HTML files (like sitemap.xml) after build
function copyNonHtmlFiles() {
  return {
    name: 'copy-non-html-files',
    closeBundle() {
      const eleventyTempDir = path.resolve(process.cwd(), '.11ty-vite');
      const outputDir = path.resolve(process.cwd(), 'dist');
      const filesToCopy = ['sitemap.xml', 'robots.txt'];

      filesToCopy.forEach(file => {
        const src = path.join(eleventyTempDir, file);
        const dest = path.join(outputDir, file);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      });
    }
  };
}

export default function (eleventyConfig) {
  // Vite Plugin with configuration
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      publicDir: "public", // Static assets copied as-is
      plugins: [copyNonHtmlFiles()],
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
          'zunkireelabs.com',
          'www.zunkireelabs.com',
          '.zunkireelabs.com',
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
  eleventyConfig.addPassthroughCopy({ "src/assets/videos": "assets/videos" });

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

  // Date filter with multiple format support
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    }
    if (format === "%B %d, %Y") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    if (format === "%B %Y") {
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
    return d.toISOString();
  });

  // Head filter - limit array to first N items
  eleventyConfig.addFilter("head", function(array, n) {
    if (!array || !Array.isArray(array)) return [];
    return array.slice(0, n);
  });

  // Reject items where attribute equals value
  eleventyConfig.addFilter("rejectattr", function(array, attr, comparison, value) {
    if (!array || !Array.isArray(array)) return [];
    if (comparison === "equalto") {
      return array.filter(item => {
        const itemValue = attr.split('.').reduce((obj, key) => obj?.[key], item);
        return itemValue !== value;
      });
    }
    return array;
  });

  // Truncate filter
  eleventyConfig.addFilter("truncate", function(str, length) {
    if (!str) return '';
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  });

  // Split filter for breadcrumbs
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator).filter(s => s.length > 0);
  });

  // Title case filter
  eleventyConfig.addFilter("titleCase", function(str) {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
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
