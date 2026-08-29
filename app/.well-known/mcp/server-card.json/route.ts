import { buildMcpServerCard } from "@/lib/mcp-server-card";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

export function GET() {
  return Response.json(buildMcpServerCard(), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
