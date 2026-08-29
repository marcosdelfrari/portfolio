import {
  getContactLinks,
  getDiscoveryResources,
  getFaq,
  getProfile,
  getProject,
  listProjects,
  searchProjects,
} from "@/lib/webmcp-handlers";

export type McpToolDefinition = {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
};

export const MCP_TOOLS: McpToolDefinition[] = [
  {
    name: "search_projects",
    description:
      "Search portfolio projects by title, description, technology stack, owner, or year.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Search term, e.g. Next.js, ecommerce, landing page.",
        },
        limit: {
          type: "integer",
          description: "Maximum number of matching projects to return.",
          minimum: 1,
          maximum: 20,
        },
      },
      required: ["query"],
    },
  },
  {
    name: "list_projects",
    description: "List projects from the Marcos Lucas portfolio.",
    inputSchema: {
      type: "object",
      properties: {
        limit: {
          type: "integer",
          description: "Optional maximum number of projects to return.",
          minimum: 1,
          maximum: 50,
        },
      },
    },
  },
  {
    name: "get_project",
    description: "Get a single portfolio project by slug.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "Project slug from /projetos/[slug].",
        },
      },
      required: ["slug"],
    },
  },
  {
    name: "get_profile",
    description:
      "Get Marcos Lucas profile summary, technologies, and professional experience.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_faq",
    description:
      "Get frequently asked questions about Marcos Lucas and this portfolio.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_contact_links",
    description: "Get contact and social profile links for Marcos Lucas.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_discovery",
    description:
      "Get machine-readable discovery resources such as llms.txt, AI catalog, API catalog, and sitemap.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

type JsonRpcParams = Record<string, unknown>;

export async function executeMcpTool(
  name: string,
  args: JsonRpcParams = {},
): Promise<unknown> {
  switch (name) {
    case "search_projects": {
      const query = String(args.query ?? "");
      const limit = Number(args.limit ?? 10);
      return {
        query,
        projects: searchProjects(query, Number.isFinite(limit) ? limit : 10),
      };
    }
    case "list_projects": {
      const limit = Number(args.limit ?? 0);
      return {
        projects: listProjects(Number.isFinite(limit) && limit > 0 ? limit : undefined),
      };
    }
    case "get_project": {
      const slug = String(args.slug ?? "");
      if (!slug) {
        throw new Error("slug is required");
      }

      const project = getProject(slug);
      if (!project) {
        throw new Error("project not found");
      }

      return { project };
    }
    case "get_profile":
      return getProfile();
    case "get_faq":
      return { faqs: getFaq() };
    case "get_contact_links":
      return { links: getContactLinks() };
    case "get_discovery":
      return getDiscoveryResources();
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
