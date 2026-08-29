import {
  API_CATALOG_CONTENT_TYPE,
  API_CATALOG_LINK_HEADER,
  buildApiCatalogLinkset,
} from "@/lib/agent-discovery";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600";

function buildResponseHeaders(): HeadersInit {
  return {
    "Content-Type": API_CATALOG_CONTENT_TYPE,
    Link: API_CATALOG_LINK_HEADER,
    "Cache-Control": CACHE_CONTROL,
  };
}

export function GET() {
  return Response.json(buildApiCatalogLinkset(), {
    headers: buildResponseHeaders(),
  });
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: buildResponseHeaders(),
  });
}
