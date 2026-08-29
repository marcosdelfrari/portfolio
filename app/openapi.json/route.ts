import { buildOpenApiDocument } from "@/lib/api-catalog";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

export function GET() {
  return Response.json(buildOpenApiDocument(), {
    headers: {
      "Content-Type": "application/vnd.oai.openapi+json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
