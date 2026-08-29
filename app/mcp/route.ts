import { executeMcpTool, MCP_TOOLS } from "@/lib/mcp-tools";
import { MCP_PROTOCOL_VERSION } from "@/lib/mcp-paths";
import {
  MCP_SERVER_NAME,
  MCP_SERVER_VERSION,
} from "@/lib/mcp-server-card";

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: string | number | null;
  method?: string;
  params?: Record<string, unknown>;
};

type JsonRpcResponse = {
  jsonrpc: "2.0";
  id: string | number | null;
  result?: unknown;
  error?: {
    code: number;
    message: string;
    data?: unknown;
  };
};

function jsonRpcResult(id: string | number | null, result: unknown): JsonRpcResponse {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(
  id: string | number | null,
  code: number,
  message: string,
  data?: unknown,
): JsonRpcResponse {
  return {
    jsonrpc: "2.0",
    id,
    error: { code, message, data },
  };
}

async function handleRequest(request: JsonRpcRequest): Promise<JsonRpcResponse | null> {
  const id = request.id ?? null;
  const method = request.method ?? "";
  const params = request.params ?? {};

  if (method === "notifications/initialized") {
    return null;
  }

  if (id === null) {
    return null;
  }

  switch (method) {
    case "initialize":
      return jsonRpcResult(id, {
        protocolVersion: MCP_PROTOCOL_VERSION,
        capabilities: {
          tools: {},
        },
        serverInfo: {
          name: MCP_SERVER_NAME,
          title: "Marcos Lucas Portfolio MCP",
          version: MCP_SERVER_VERSION,
        },
      });
    case "ping":
      return jsonRpcResult(id, {});
    case "tools/list":
      return jsonRpcResult(id, {
        tools: MCP_TOOLS,
      });
    case "tools/call": {
      const toolName = String(params.name ?? "");
      const args =
        params.arguments && typeof params.arguments === "object"
          ? (params.arguments as Record<string, unknown>)
          : {};

      try {
        const result = await executeMcpTool(toolName, args);
        return jsonRpcResult(id, {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
          isError: false,
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Tool execution failed";
        return jsonRpcResult(id, {
          content: [{ type: "text", text: message }],
          isError: true,
        });
      }
    }
    default:
      return jsonRpcError(id, -32601, `Method not found: ${method}`);
  }
}

const MCP_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: MCP_HEADERS,
  });
}

export async function GET() {
  return Response.json(
    {
      status: "ok",
      server: MCP_SERVER_NAME,
      version: MCP_SERVER_VERSION,
      transport: "streamable-http",
    },
    { headers: MCP_HEADERS },
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(jsonRpcError(null, -32700, "Parse error"), {
      status: 400,
      headers: MCP_HEADERS,
    });
  }

  const requests = Array.isArray(payload) ? payload : [payload];
  const responses: JsonRpcResponse[] = [];

  for (const item of requests) {
    if (!item || typeof item !== "object") {
      continue;
    }

    const response = await handleRequest(item as JsonRpcRequest);
    if (response) {
      responses.push(response);
    }
  }

  if (responses.length === 0) {
    return new Response(null, {
      status: 202,
      headers: MCP_HEADERS,
    });
  }

  if (Array.isArray(payload)) {
    return Response.json(responses, { headers: MCP_HEADERS });
  }

  return Response.json(responses[0], { headers: MCP_HEADERS });
}
