import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = String(site ?? "https://creativemkstudios.github.io").replace(/\/$/, "");
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}${base}sitemap-index.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
