import { randomBytes } from "crypto";
import { PORTFOLIO_SCOPES } from "@/lib/agent-auth";

function parseFormBody(body: string): Record<string, string> {
  return Object.fromEntries(new URLSearchParams(body));
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let grantType = "";
  let assertion = "";
  let claimToken = "";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = parseFormBody(await request.text());
    grantType = params.grant_type ?? "";
    assertion = params.assertion ?? "";
    claimToken = params.claim_token ?? "";
  } else {
    try {
      const body = await request.json();
      grantType = String(body.grant_type ?? "");
      assertion = String(body.assertion ?? "");
      claimToken = String(body.claim_token ?? "");
    } catch {
      return Response.json(
        { error: "invalid_request", message: "Unable to parse token request." },
        { status: 400 },
      );
    }
  }

  if (
    grantType !== "urn:ietf:params:oauth:grant-type:jwt-bearer" &&
    grantType !== "urn:workos:agent-auth:grant-type:claim"
  ) {
    return Response.json(
      { error: "unsupported_grant_type", message: "Grant type is not supported." },
      { status: 400 },
    );
  }

  if (grantType === "urn:workos:agent-auth:grant-type:claim" && !claimToken) {
    return Response.json(
      { error: "authorization_pending", message: "Claim ceremony is pending." },
      { status: 400 },
    );
  }

  if (grantType === "urn:ietf:params:oauth:grant-type:jwt-bearer" && !assertion) {
    return Response.json(
      { error: "invalid_request", message: "assertion is required." },
      { status: 400 },
    );
  }

  const accessToken = `portfolio_${randomBytes(24).toString("base64url")}`;

  return Response.json({
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: 3600,
    scope: PORTFOLIO_SCOPES.join(" "),
  });
}
