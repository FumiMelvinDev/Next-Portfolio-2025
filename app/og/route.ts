export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "Fumi Melvin Portfolio").slice(
    0,
    100
  );
  const subtitle = (
    searchParams.get("subtitle") || "Full-stack & Flutter developer"
  ).slice(0, 100);

  const svg = `<?xml version="1.0" encoding="utf-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
    <rect width="1200" height="630" fill="#0f172a" />

    <g transform="translate(80, 140)">
      <rect x="0" y="0" width="1040" height="350" rx="16" fill="#0b1220" opacity="0.8" />

      <text x="40" y="90" font-family="Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="56" font-weight="700" fill="#fff">${escapeXml(
        title
      )}</text>

      <text x="40" y="150" font-family="Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="28" font-weight="400" fill="#9CA3AF">${escapeXml(
        subtitle
      )}</text>

      <g transform="translate(40, 220)">
        <rect width="180" height="44" rx="8" fill="#111827" opacity="0.6" />
        <text x="18" y="30" font-family="Inter, Roboto, system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="18" fill="#fff">Fumi Melvin</text>
      </g>
    </g>
  </svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
