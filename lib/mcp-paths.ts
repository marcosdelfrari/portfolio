import { absoluteUrl } from "@/lib/seo";

export const MCP_SERVER_CARD_PATH = "/.well-known/mcp/server-card.json";
export const MCP_ENDPOINT_PATH = "/mcp";

export const MCP_SERVER_CARD_SCHEMA =
  "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json";

export const MCP_PROTOCOL_VERSION = "2025-06-18";

export function getMcpServerCardUrl(): string {
  return absoluteUrl(MCP_SERVER_CARD_PATH);
}

export function getMcpEndpointUrl(): string {
  return absoluteUrl(MCP_ENDPOINT_PATH);
}
