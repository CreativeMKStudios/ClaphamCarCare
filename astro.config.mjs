import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE ?? "https://creativemkstudios.github.io";
const base = process.env.BASE ?? "/ClaphamCarCare";

export default defineConfig({
  site,
  base,
  compressHTML: true,
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
