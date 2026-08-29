import { MCP_TOOLS } from "@/lib/mcp-tools";
import {
  MCP_ENDPOINT_PATH,
  MCP_PROTOCOL_VERSION,
  MCP_SERVER_CARD_PATH,
  MCP_SERVER_CARD_SCHEMA,
} from "@/lib/mcp-paths";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export const MCP_SERVER_NAME = "com.marcosdelfrari/portfolio";
export const MCP_SERVER_VERSION = "1.0.0";

export {
  getMcpEndpointUrl,
  getMcpServerCardUrl,
} from "@/lib/mcp-paths";

export function buildMcpServerCard() {
  return {
    $schema: MCP_SERVER_CARD_SCHEMA,
    version: "1.0",
    protocolVersion: MCP_PROTOCOL_VERSION,
    serverInfo: {
      name: MCP_SERVER_NAME,
      title: `${SITE_NAME} Portfolio MCP`,
      version: MCP_SERVER_VERSION,
    },
    description: SITE_DESCRIPTION,
    documentationUrl: absoluteUrl("/llms.txt"),
    websiteUrl: absoluteUrl("/"),
    transport: {
      type: "streamable-http",
      endpoint: MCP_ENDPOINT_PATH,
    },
    capabilities: {
      tools: {
        listChanged: false,
      },
    },
    authentication: {
      required: false,
      schemes: [],
    },
    tools: MCP_TOOLS,
  };
}