import { randomBytes } from "crypto";
import {
  AGENT_CLAIM_PATH,
  PORTFOLIO_SCOPES,
} from "@/lib/agent-auth";
import { absoluteUrl } from "@/lib/seo";

function createToken(prefix: string): string {
  return `${prefix}_${randomBytes(24).toString("base64url")}`;
}

export async function POST(request: Request) {
  let body: { type?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "invalid_request", message: "Expected JSON body." },
      { status: 400 },
    );
  }

  if (body.type !== "anonymous") {
    return Response.json(
      {
        error: "unsupported_identity_type",
        message: "Only anonymous registration is enabled for this portfolio.",
      },
      { status: 400 },
    );
  }

  const registrationId = createToken("reg");
  const identityAssertion = createToken("id_assert");
  const claimToken = createToken("claim");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

  return Response.json({
    registration_id: registrationId,
    registration_type: "anonymous",
    identity_assertion: identityAssertion,
    assertion_expires: expiresAt,
    pre_claim_scopes: [...PORTFOLIO_SCOPES],
    claim_url: absoluteUrl(AGENT_CLAIM_PATH),
    claim_token: claimToken,
    claim_token_expires: expiresAt,
    post_claim_scopes: [...PORTFOLIO_SCOPES],
  });
}
