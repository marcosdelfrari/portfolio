export async function POST(request: Request) {
  let body: { claim_token?: string; email?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "invalid_request", message: "Expected JSON body." },
      { status: 400 },
    );
  }

  if (!body.claim_token) {
    return Response.json(
      { error: "invalid_request", message: "claim_token is required." },
      { status: 400 },
    );
  }

  return Response.json({
    status: "claim_pending",
    message:
      "Anonymous claim ceremonies are not required for read-only portfolio access. Contact links are available via get_contact_links.",
    verification_uri: "/#Sobre",
    user_code: "000000",
    login_hint: body.email ?? null,
  });
}
