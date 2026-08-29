import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/seo";

export const AUTH_MD_PATH = "/auth.md";
export const OAUTH_PROTECTED_RESOURCE_PATH = "/.well-known/oauth-protected-resource";
export const OAUTH_AUTHORIZATION_SERVER_PATH =
  "/.well-known/oauth-authorization-server";

export const AGENT_IDENTITY_PATH = "/agent/identity";
export const AGENT_CLAIM_PATH = "/agent/identity/claim";
export const OAUTH_TOKEN_PATH = "/oauth2/token";
export const OAUTH_REVOKE_PATH = "/oauth2/revoke";

export const PORTFOLIO_SCOPES = [
  "portfolio.read",
  "discovery.read",
  "mcp.invoke",
] as const;

export const IDENTITY_ASSERTION_REVOKED_EVENT =
  "https://schemas.workos.com/events/agent/auth/identity/assertion/revoked";

function getIssuer(): string {
  return absoluteUrl("/").replace(/\/$/, "");
}

function getResource(): string {
  return absoluteUrl("/");
}

export function getAuthMdUrl(): string {
  return absoluteUrl(AUTH_MD_PATH);
}

export function buildOAuthProtectedResourceMetadata() {
  const issuer = getIssuer();

  return {
    resource: getResource(),
    resource_name: SITE_NAME,
    resource_documentation: absoluteUrl("/llms.txt"),
    authorization_servers: [issuer],
    scopes_supported: [...PORTFOLIO_SCOPES],
    bearer_methods_supported: ["header"],
  };
}

export function buildOAuthAuthorizationServerMetadata() {
  const issuer = getIssuer();

  return {
    resource: getResource(),
    authorization_servers: [issuer],
    scopes_supported: [...PORTFOLIO_SCOPES],
    bearer_methods_supported: ["header"],
    issuer,
    token_endpoint: absoluteUrl(OAUTH_TOKEN_PATH),
    revocation_endpoint: absoluteUrl(OAUTH_REVOKE_PATH),
    grant_types_supported: [
      "urn:ietf:params:oauth:grant-type:jwt-bearer",
      "urn:workos:agent-auth:grant-type:claim",
    ],
    agent_auth: {
      skill: getAuthMdUrl(),
      register_uri: absoluteUrl(AGENT_IDENTITY_PATH),
      identity_endpoint: absoluteUrl(AGENT_IDENTITY_PATH),
      claim_endpoint: absoluteUrl(AGENT_CLAIM_PATH),
      claim_uri: absoluteUrl(AGENT_CLAIM_PATH),
      revocation_uri: absoluteUrl(OAUTH_REVOKE_PATH),
      identity_types_supported: ["anonymous"],
      anonymous: {
        credential_types_supported: ["access_token", "identity_assertion"],
        claim_uri: absoluteUrl(AGENT_CLAIM_PATH),
      },
      events_supported: [IDENTITY_ASSERTION_REVOKED_EVENT],
    },
  };
}

export function buildAuthMd(): string {
  const issuer = getIssuer();
  const resource = getResource();

  return `# auth.md

You are an agent. This portfolio supports **agentic registration** for read-only access to discovery surfaces and MCP tools published by ${SITE_NAME}.

Resource server: \`${resource}\`
Authorization server: \`${issuer}\`

## Step 1 — Discover

### 1a. Protected Resource Metadata

\`\`\`http
GET /.well-known/oauth-protected-resource
\`\`\`

Key fields:

- \`resource\` — canonical API audience (\`${resource}\`)
- \`authorization_servers\` — OAuth authorization server base URLs
- \`scopes_supported\` — \`portfolio.read\`, \`discovery.read\`, \`mcp.invoke\`
- \`bearer_methods_supported\` — use \`Authorization: Bearer …\`

### 1b. Authorization Server Metadata

\`\`\`http
GET /.well-known/oauth-authorization-server
\`\`\`

Read the \`agent_auth\` block for registration endpoints:

- \`skill\` — this document
- \`register_uri\` / \`identity_endpoint\` — \`${absoluteUrl(AGENT_IDENTITY_PATH)}\`
- \`claim_uri\` — \`${absoluteUrl(AGENT_CLAIM_PATH)}\`
- \`revocation_uri\` — \`${absoluteUrl(OAUTH_REVOKE_PATH)}\`

## Step 2 — Pick a method

This site currently supports **anonymous** registration for agents without a bound user identity.

Send:

\`\`\`http
POST ${absoluteUrl(AGENT_IDENTITY_PATH)}
Content-Type: application/json

{ "type": "anonymous" }
\`\`\`

The response includes an \`identity_assertion\`, optional \`claim_token\`, and pre-claim scopes for read-only portfolio access.

## Step 3 — Exchange for an access token

\`\`\`http
POST ${absoluteUrl(OAUTH_TOKEN_PATH)}
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=<identity_assertion>
\`\`\`

## Step 4 — Use credentials

Call public discovery and MCP surfaces with the returned bearer token:

- MCP: \`${absoluteUrl("/mcp")}\`
- WebMCP browser tools: \`${absoluteUrl("/webmcp.js")}\`
- Discovery API: \`${absoluteUrl("/api/webmcp")}\`
- llms.txt: \`${absoluteUrl("/llms.txt")}\`

## Step 5 — Revoke

\`\`\`http
POST ${absoluteUrl(OAUTH_REVOKE_PATH)}
Content-Type: application/x-www-form-urlencoded

token=<access_token>
\`\`\`

## Notes

- ${SITE_TITLE}
- ${SITE_DESCRIPTION}
- Most portfolio content is public; registration exists so agents can obtain a stable credential for rate-limited or auditable automation.
`;
}
