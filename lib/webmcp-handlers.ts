import { experiencesData, social } from "@/lib/data";
import { homeFaqs } from "@/lib/faq";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectPath,
} from "@/lib/projects";
import {
  AI_CATALOG_PATH,
  buildAiCatalog,
} from "@/lib/ai-catalog";
import { getAuthMdUrl } from "@/lib/agent-auth";
import { getAgentSkillsIndexUrl } from "@/lib/agent-skills-paths";
import { getMcpEndpointUrl, getMcpServerCardUrl } from "@/lib/mcp-paths";
import {
  API_CATALOG_PATH,
  buildApiCatalogLinkset,
  buildDiscoveryLinkset,
} from "@/lib/agent-discovery";
import {
  absoluteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/seo";

function serializeProject(project: ReturnType<typeof getAllProjects>[number]) {
  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
    owner: project.owner,
    years: project.years,
    builtWith: project.builtWith.filter(Boolean),
    linkLive: project.linkLive || null,
    linkCode: project.linkCode || null,
    url: absoluteUrl(getProjectPath(project.slug)),
  };
}

export function listProjects(limit?: number) {
  const projects = getAllProjects().map(serializeProject);
  return typeof limit === "number" && limit > 0
    ? projects.slice(0, limit)
    : projects;
}

export function searchProjects(query: string, limit = 10) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  return getAllProjects()
    .filter((project) => {
      const haystack = [
        project.title,
        project.description,
        project.owner,
        project.years,
        ...project.builtWith,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    })
    .slice(0, limit)
    .map(serializeProject);
}

export function getProject(slug: string) {
  const project = getProjectBySlug(slug);
  return project ? serializeProject(project) : null;
}

export function getProfile() {
  return {
    name: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
    ],
    experiences: experiencesData.map((experience) => ({
      title: experience.title,
      enterprise: experience.enterprise,
      date: experience.date,
      description: experience.description,
      tags: experience.tags,
    })),
  };
}

export function getFaq() {
  return homeFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}

export function getContactLinks() {
  return social.map((item) => ({
    name: item.name,
    url: item.hash,
  }));
}

export function getDiscoveryResources() {
  return {
    authMd: getAuthMdUrl(),
    oauthProtectedResource: absoluteUrl("/.well-known/oauth-protected-resource"),
    oauthAuthorizationServer: absoluteUrl("/.well-known/oauth-authorization-server"),
    agentSkillsIndex: getAgentSkillsIndexUrl(),
    mcpServerCard: getMcpServerCardUrl(),
    mcpEndpoint: getMcpEndpointUrl(),
    llmsTxt: absoluteUrl("/llms.txt"),
    aiCatalog: absoluteUrl(AI_CATALOG_PATH),
    apiCatalog: absoluteUrl(API_CATALOG_PATH),
    sitemap: absoluteUrl("/sitemap.xml"),
    robots: absoluteUrl("/robots.txt"),
    projects: absoluteUrl("/projetos"),
    aiCatalogManifest: buildAiCatalog(),
    apiCatalogLinkset: buildApiCatalogLinkset(),
    discoveryLinkset: buildDiscoveryLinkset(),
  };
}
