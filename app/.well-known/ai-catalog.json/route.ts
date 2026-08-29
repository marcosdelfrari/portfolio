import { buildAiCatalog } from "@/lib/ai-catalog";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

export function GET() {
  return Response.json(buildAiCatalog(), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
