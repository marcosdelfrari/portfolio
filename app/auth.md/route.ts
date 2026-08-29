import { buildAuthMd } from "@/lib/agent-auth";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

export function GET() {
  return new Response(buildAuthMd(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": CACHE_CONTROL,
    },
  });
}
