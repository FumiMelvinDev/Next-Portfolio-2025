import { getProjects } from "@/lib/projects";
import { SITE } from "@/lib/site";

export async function GET() {
  const projects = await getProjects();
  const baseUrl = SITE.url.replace(/\/$/, "");

  const pages = ["", "projects"];

  const urls = [
    ...pages.map((p) => `${baseUrl}/${p}`),
    ...projects.map((p) => `${baseUrl}/projects/${p.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
