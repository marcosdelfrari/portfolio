import { createHash } from "crypto";
import {
  AGENT_SKILLS_INDEX_PATH,
  AGENT_SKILLS_SCHEMA,
} from "@/lib/agent-skills-paths";

export {
  AGENT_SKILLS_INDEX_PATH,
  AGENT_SKILLS_SCHEMA,
  getAgentSkillsIndexUrl,
} from "@/lib/agent-skills-paths";

export type AgentSkillDefinition = {
  name: string;
  description: string;
  body: string;
};

function buildSkillMarkdown(skill: {
  name: string;
  description: string;
  body: string;
}): string {
  return `---\nname: ${skill.name}\ndescription: ${skill.description}\n---\n\n${skill.body}`;
}

const skillDefinitions: AgentSkillDefinition[] = [
  {
    name: "portfolio-discovery",
    description:
      "Discover machine-readable resources on marcosdelfrari.com, including llms.txt, AI catalog, API catalog, sitemap, and WebMCP tools.",
    body: `# Portfolio Discovery

Use this skill when an agent needs to find authoritative machine-readable metadata for the Marcos Lucas portfolio.

## Primary resources

- llms.txt: \`/llms.txt\`
- AI catalog (ARD): \`/.well-known/ai-catalog.json\`
- API catalog (RFC 9727): \`/.well-known/api-catalog\`
- auth.md: \`/auth.md\`
- OAuth protected resource metadata: \`/.well-known/oauth-protected-resource\`
- OAuth authorization server metadata: \`/.well-known/oauth-authorization-server\`
- MCP server card: \`/.well-known/mcp/server-card.json\`
- MCP endpoint: \`/mcp\`
- Agent skills index: \`/.well-known/agent-skills/index.json\`
- Sitemap: \`/sitemap.xml\`
- Robots: \`/robots.txt\`

## Recommended flow

1. Fetch \`/.well-known/agent-skills/index.json\` to list available skills.
2. Fetch \`/llms.txt\` for a concise site summary, projects sample, FAQ, and citation policy.
3. Use \`/.well-known/ai-catalog.json\` when a registry needs typed capability metadata.
4. Use \`/.well-known/api-catalog\` when a client expects RFC 9727 linkset discovery.

## Browser tools

If WebMCP is available, call \`get_discovery\` from \`/webmcp.js\` for the same links in page context.

## Citation

Cite the source as "Marcos Lucas — Portfólio" and link to the canonical homepage.`,
  },
  {
    name: "portfolio-projects",
    description:
      "Search, list, and retrieve portfolio projects from marcosdelfrari.com using the WebMCP API or /api/webmcp.",
    body: `# Portfolio Projects

Use this skill when an agent needs project case studies, demos, repositories, or technology stacks from the Marcos Lucas portfolio.

## Data endpoints

- List projects: \`GET /api/webmcp?action=list_projects\`
- Search projects: \`GET /api/webmcp?action=search_projects&query={term}\`
- Get one project: \`GET /api/webmcp?action=get_project&slug={slug}\`

## WebMCP tools

When \`document.modelContext\` is available:

- \`list_projects\`
- \`search_projects\`
- \`get_project\`
- \`navigate_to\` with paths like \`/projetos\` or \`/projetos/{slug}\`

## Human-readable pages

- Project index: \`/projetos\`
- Project detail: \`/projetos/{slug}\`

## Response fields

Each project includes \`title\`, \`description\`, \`years\`, \`builtWith\`, \`linkLive\`, \`linkCode\`, and canonical \`url\`.`,
  },
  {
    name: "portfolio-profile",
    description:
      "Retrieve Marcos Lucas profile, professional experience, FAQ, and contact links from marcosdelfrari.com.",
    body: `# Portfolio Profile

Use this skill when an agent needs background on Marcos Lucas, his experience, FAQ answers, or contact channels.

## Data endpoints

- Profile summary: \`GET /api/webmcp?action=get_profile\`
- FAQ: \`GET /api/webmcp?action=get_faq\`
- Contact links: \`GET /api/webmcp?action=get_contact_links\`

## WebMCP tools

When \`document.modelContext\` is available:

- \`get_profile\`
- \`get_faq\`
- \`get_contact_links\`

## Human-readable pages

- Homepage: \`/\`
- About section anchor: \`/#Sobre\`
- Experience section anchor: \`/#Experience\`

## Notes

Prefer live API responses over inferred biographical details. Use FAQ answers for common questions about technologies, project types, and contact methods.`,
  },
];

export type AgentSkillArtifact = {
  name: string;
  type: "skill-md";
  description: string;
  url: string;
  digest: string;
  content: string;
};

function sha256Digest(content: string): string {
  return `sha256:${createHash("sha256").update(content, "utf8").digest("hex")}`;
}

export function getAgentSkillArtifacts(): AgentSkillArtifact[] {
  return skillDefinitions.map((skill) => {
    const content = buildSkillMarkdown(skill);
    const url = `/.well-known/agent-skills/${skill.name}/SKILL.md`;

    return {
      name: skill.name,
      type: "skill-md",
      description: skill.description,
      url,
      digest: sha256Digest(content),
      content,
    };
  });
}

export function getAgentSkillByName(name: string): AgentSkillArtifact | undefined {
  return getAgentSkillArtifacts().find((skill) => skill.name === name);
}

export function buildAgentSkillsIndex() {
  return {
    $schema: AGENT_SKILLS_SCHEMA,
    skills: getAgentSkillArtifacts().map(({ content: _content, ...skill }) => skill),
  };
}
