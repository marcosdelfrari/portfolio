function parseFormBody(body: string): Record<string, string> {
  return Object.fromEntries(new URLSearchParams(body));
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let token = "";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = parseFormBody(await request.text());
    token = params.token ?? "";
  } else {
    try {
      const body = await request.json();
      token = String(body.token ?? "");
    } catch {
      return Response.json(
        { error: "invalid_request", message: "Unable to parse revocation request." },
        { status: 400 },
      );
    }
  }

  if (!token) {
    return Response.json(
      { error: "invalid_request", message: "token is required." },
      { status: 400 },
    );
  }

  return new Response(null, { status: 200 });
}
