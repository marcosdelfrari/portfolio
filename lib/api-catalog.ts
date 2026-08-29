import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export const OPENAPI_PATH = "/openapi.json";
export const API_HEALTH_PATH = "/api/health";
export const API_DOCS_PATH = "/llms.txt";

type LinkTarget = {
  href: string;
  type?: string;
  title?: string;
};

function link(href: string, options: Omit<LinkTarget, "href"> = {}): LinkTarget[] {
  return [{ href, ...options }];
}

export function buildOpenApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: `${SITE_NAME} Portfolio API`,
      version: "1.0.0",
      description: SITE_DESCRIPTION,
    },
    servers: [{ url: absoluteUrl("/") }],
    paths: {
      "/api/webmcp": {
        get: {
          summary: "Portfolio discovery and data API",
          parameters: [
            {
              name: "action",
              in: "query",
              required: true,
              schema: {
                type: "string",
                enum: [
                  "list_projects",
                  "search_projects",
                  "get_project",
                  "get_profile",
                  "get_faq",
                  "get_contact_links",
                  "get_discovery",
                ],
              },
            },
            { name: "query", in: "query", schema: { type: "string" } },
            { name: "slug", in: "query", schema: { type: "string" } },
            { name: "limit", in: "query", schema: { type: "integer" } },
          ],
          responses: {
            "200": { description: "Successful response" },
            "400": { description: "Invalid request" },
            "404": { description: "Resource not found" },
          },
        },
      },
      "/mcp": {
        get: {
          summary: "MCP server status",
          responses: {
            "200": { description: "Server metadata" },
          },
        },
        post: {
          summary: "MCP JSON-RPC endpoint",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { type: "object" },
              },
            },
          },
          responses: {
            "200": { description: "JSON-RPC response" },
          },
        },
      },
      "/agent/identity": {
        post: {
          summary: "Anonymous agent registration",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    type: { type: "string", enum: ["anonymous"] },
                  },
                  required: ["type"],
                },
              },
            },
          },
          responses: {
            "200": { description: "Registration response" },
          },
        },
      },
      "/api/health": {
        get: {
          summary: "Service health check",
          responses: {
            "200": { description: "Service is healthy" },
          },
        },
      },
    },
  };
}

export function buildApiCatalogLinkset() {
  const serviceDesc = link(absoluteUrl(OPENAPI_PATH), {
    type: "application/vnd.oai.openapi+json",
    title: "OpenAPI specification",
  });
  const serviceDoc = link(absoluteUrl(API_DOCS_PATH), {
    type: "text/plain",
    title: `${SITE_NAME} — llms.txt`,
  });
  const status = link(absoluteUrl(API_HEALTH_PATH), {
    type: "application/json",
    title: "Health check",
  });

  return {
    linkset: [
      {
        anchor: absoluteUrl("/api/webmcp"),
        "service-desc": serviceDesc,
        "service-doc": serviceDoc,
        status,
      },
      {
        anchor: absoluteUrl("/mcp"),
        "service-desc": serviceDesc,
        "service-doc": link(absoluteUrl("/.well-known/mcp/server-card.json"), {
          type: "application/json",
          title: "MCP Server Card",
        }),
        status,
      },
      {
        anchor: absoluteUrl("/agent/identity"),
        "service-desc": serviceDesc,
        "service-doc": link(absoluteUrl("/auth.md"), {
          type: "text/markdown",
          title: "auth.md",
        }),
        status,
      },
    ],
  };
}

export function getOpenApiUrl(): string {
  return absoluteUrl(OPENAPI_PATH);
}

export function getApiHealthUrl(): string {
  return absoluteUrl(API_HEALTH_PATH);
}
