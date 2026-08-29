import { getOpenApiUrl } from "@/lib/api-catalog";
import { getAuthMdUrl } from "@/lib/agent-auth";
import { getAgentSkillsIndexUrl } from "@/lib/agent-skills-paths";
import { getMcpServerCardUrl } from "@/lib/mcp-paths";
import {
  absoluteUrl,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/seo";

export const AI_CATALOG_PATH = "/.well-known/ai-catalog.json";

export type AiCatalogEntry = {
  identifier: string;
  displayName: string;
  type: string;
  url: string;
  description?: string;
  representativeQueries: string[];
};

export type AiCatalogManifest = {
  specVersion: "1.0";
  host: {
    displayName: string;
    identifier: string;
    documentationUrl: string;
  };
  entries: AiCatalogEntry[];
};

function getSiteHost(): string {
  return new URL(getSiteUrl()).hostname;
}

function buildEntryId(namespace: string, name: string): string {
  return `urn:air:${getSiteHost()}:${namespace}:${name}`;
}

export function buildAiCatalog(): AiCatalogManifest {
  return {
    specVersion: "1.0",
    host: {
      displayName: SITE_NAME,
      identifier: `did:web:${getSiteHost()}`,
      documentationUrl: absoluteUrl("/llms.txt"),
    },
    entries: [
      {
        identifier: buildEntryId("document", "auth-md"),
        displayName: "auth.md — Agent Registration",
        type: "text/markdown",
        url: getAuthMdUrl(),
        description:
          "Instruções de registro agentic com metadados OAuth em /.well-known.",
        representativeQueries: [
          "how do agents register with marcosdelfrari.com",
          "auth.md agent registration discovery",
          "oauth protected resource metadata for portfolio",
        ],
      },
      {
        identifier: buildEntryId("server", "mcp"),
        displayName: "MCP Server Card (SEP-1649)",
        type: "application/mcp-server-card+json",
        url: getMcpServerCardUrl(),
        description:
          "Cartão de descoberta do servidor MCP com transporte streamable-http em /mcp.",
        representativeQueries: [
          "connect to Marcos Lucas portfolio MCP server",
          "what tools does marcosdelfrari.com MCP expose",
          "MCP server card discovery endpoint",
        ],
      },
      {
        identifier: buildEntryId("catalog", "agent-skills"),
        displayName: "Agent Skills Discovery Index",
        type: "application/json",
        url: getAgentSkillsIndexUrl(),
        description:
          "Índice de skills publicadas em /.well-known/agent-skills/index.json.",
        representativeQueries: [
          "what agent skills does marcosdelfrari.com publish",
          "portfolio discovery skill for Marcos Lucas site",
          "agent skills index RFC 0.2.0",
        ],
      },
      {
        identifier: buildEntryId("runtime", "webmcp"),
        displayName: "WebMCP Browser Tools",
        type: "application/vnd.webmcp.tools+json",
        url: absoluteUrl("/webmcp.js"),
        description:
          "Ferramentas expostas no navegador via document.modelContext.registerTool.",
        representativeQueries: [
          "search projects in Marcos Lucas portfolio",
          "navigate to portfolio projects page",
          "get contact links for Marcos Lucas",
        ],
      },
      {
        identifier: buildEntryId("document", "llms-txt"),
        displayName: `${SITE_NAME} — llms.txt`,
        type: "text/plain",
        url: absoluteUrl("/llms.txt"),
        description:
          "Resumo legível por máquina do portfólio, projetos, experiência e FAQ.",
        representativeQueries: [
          "quem é Marcos Lucas e qual é a experiência dele",
          "quais projetos front-end o Marcos Lucas desenvolveu",
          "como entrar em contato com Marcos Lucas",
        ],
      },
      {
        identifier: buildEntryId("document", "openapi"),
        displayName: "OpenAPI Specification",
        type: "application/vnd.oai.openapi+json",
        url: getOpenApiUrl(),
        description: "Especificação OpenAPI das APIs públicas do portfólio.",
        representativeQueries: [
          "openapi spec for marcosdelfrari.com APIs",
          "portfolio webmcp API schema",
          "machine-readable API description",
        ],
      },
      {
        identifier: buildEntryId("catalog", "api-catalog"),
        displayName: "API Catalog (RFC 9727)",
        type: "application/linkset+json",
        url: absoluteUrl("/.well-known/api-catalog"),
        description:
          "Catálogo de recursos machine-readable para descoberta automatizada.",
        representativeQueries: [
          "list discovery resources on marcosdelfrari.com",
          "where is the API catalog for this portfolio",
          "machine-readable site metadata endpoints",
        ],
      },
      {
        identifier: buildEntryId("document", "sitemap"),
        displayName: "Sitemap",
        type: "application/xml",
        url: absoluteUrl("/sitemap.xml"),
        description: "Mapa de URLs indexáveis do portfólio.",
        representativeQueries: [
          "list all pages on marcosdelfrari.com",
          "what project pages exist in the portfolio",
          "site structure and indexed URLs",
        ],
      },
      {
        identifier: buildEntryId("collection", "projetos"),
        displayName: "Projetos",
        type: "text/html",
        url: absoluteUrl("/projetos"),
        description:
          "Catálogo de projetos web com Next.js, React, Angular e TypeScript.",
        representativeQueries: [
          "show front-end projects by Marcos Lucas",
          "portfolio projects built with Next.js and React",
          "case studies and live demos from Marcos Lucas",
        ],
      },
      {
        identifier: buildEntryId("profile", "home"),
        displayName: SITE_TITLE,
        type: "text/html",
        url: absoluteUrl("/"),
        description: SITE_DESCRIPTION,
        representativeQueries: [
          "Marcos Lucas front-end engineer portfolio",
          "perfil profissional de engenheiro de software front-end",
          "experiência com Next.js React Angular TypeScript",
        ],
      },
    ],
  };
}
