const CACHE_CONTROL = "public, max-age=300, s-maxage=300";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "marcosdelfrari.com",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": CACHE_CONTROL,
      },
    },
  );
}
