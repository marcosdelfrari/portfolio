(function registerPortfolioWebMcpTools() {
  if (typeof document === "undefined" || !document.modelContext) {
    return;
  }

  var controller = new AbortController();
  var signal = controller.signal;
  var modelContext = document.modelContext;
  var registerOptions = { signal: signal };

  function fetchWebmcp(action, params) {
    var url = new URL("/api/webmcp", window.location.origin);
    url.searchParams.set("action", action);

    if (params) {
      Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.set(key, String(value));
        }
      });
    }

    return fetch(url.toString()).then(function (response) {
      return response.json();
    });
  }

  function registerTool(tool) {
    return modelContext.registerTool(tool, registerOptions);
  }

  registerTool({
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
    execute: function (input) {
      return fetchWebmcp("search_projects", input);
    },
  });

  registerTool({
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
    execute: function (input) {
      return fetchWebmcp("list_projects", input);
    },
  });

  registerTool({
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
    execute: function (input) {
      return fetchWebmcp("get_project", input);
    },
  });

  registerTool({
    name: "get_profile",
    description:
      "Get Marcos Lucas profile summary, technologies, and professional experience.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    execute: function () {
      return fetchWebmcp("get_profile");
    },
  });

  registerTool({
    name: "get_faq",
    description: "Get frequently asked questions about Marcos Lucas and this portfolio.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    execute: function () {
      return fetchWebmcp("get_faq");
    },
  });

  registerTool({
    name: "get_contact_links",
    description: "Get contact and social profile links for Marcos Lucas.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    execute: function () {
      return fetchWebmcp("get_contact_links");
    },
  });

  registerTool({
    name: "get_discovery",
    description:
      "Get machine-readable discovery resources such as llms.txt, AI catalog, API catalog, and sitemap.",
    inputSchema: {
      type: "object",
      properties: {},
    },
    execute: function () {
      return fetchWebmcp("get_discovery");
    },
  });

  registerTool({
    name: "navigate_to",
    description:
      "Navigate the browser to a portfolio page or in-page section anchor.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description:
            "Destination path or hash, e.g. /projetos, /, /#Experience, /projetos/nirvana-fit.",
        },
      },
      required: ["path"],
    },
    execute: function (input) {
      var path = String(input.path || "/");
      var destination = path.startsWith("#")
        ? window.location.pathname + path
        : path.startsWith("/")
          ? path
          : "/" + path;

      window.location.assign(destination);

      return {
        navigatedTo: new URL(destination, window.location.origin).href,
      };
    },
  });

  window.addEventListener("pagehide", function () {
    controller.abort();
  });
})();
