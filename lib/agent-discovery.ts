import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { AI_CATALOG_PATH } from "@/lib/ai-catalog";
import { getAuthMdUrl } from "@/lib/agent-auth";
import { getAgentSkillsIndexUrl } from "@/lib/agent-skills-paths";
import { getMcpServerCardUrl } from "@/lib/mcp-paths";

export const RFC9727_PROFILE = "https://www.rfc-editor.org/info/rfc9727";

export const API_CATALOG_PATH = "/.well-known/api-catalog";

export const API_CATALOG_CONTENT_TYPE = `application/linkset+json; profile="${RFC9727_PROFILE}"`;

export const API_CATALOG_LINK_HEADER = `<${API_CATALOG_PATH}>; rel="api-catalog"`;

export const HOME_LINK_HEADER = [
  API_CATALOG_LINK_HEADER,
  "</llms.txt>; rel=\"describedby\"",
  "</llms.txt>; rel=\"service-doc\"",
].join(", ");

export { buildApiCatalogLinkset, getApiHealthUrl, getOpenApiUrl } from "@/lib/api-catalog";

export function buildDiscoveryLinkset() {
  return {
    linkset: [
      {
        anchor: absoluteUrl(API_CATALOG_PATH),
        item: [
          { href: getAuthMdUrl(), title: `${SITE_NAME} — auth.md` },
          { href: getMcpServerCardUrl(), title: `${SITE_NAME} — MCP Server Card` },
          { href: getAgentSkillsIndexUrl(), title: `${SITE_NAME} — Agent Skills Index` },
          { href: absoluteUrl(AI_CATALOG_PATH), title: `${SITE_NAME} — AI Catalog (ARD)` },
          { href: absoluteUrl("/llms.txt"), title: `${SITE_NAME} — llms.txt` },
          { href: absoluteUrl("/sitemap.xml"), title: "Sitemap" },
          { href: absoluteUrl("/robots.txt"), title: "Robots" },
          { href: absoluteUrl("/projetos"), title: "Projects catalog" },
        ],
      },
    ],
  };
}
