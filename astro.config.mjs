import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Set SITE when the real domain is connected. Google has no website on the profile yet.
const site = process.env.SITE ?? "https://claphamcarcare.co.uk";

export default defineConfig({
  site,
  compressHTML: true,
  trailingSlash: "never",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
