import { experiencesData, showCase, social } from "@/lib/data";
import { homeFaqs } from "@/lib/faq";
import {
  getAllProjects,
  getProjectBySlug,
  getProjectPath,
} from "@/lib/projects";
import {
  absoluteUrl,
  buildHomeJsonLd,
  buildProjectJsonLd,
  buildProjectsJsonLd,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "@/lib/seo";

export type MarkdownPageResult = {
  status: number;
  markdown: string;
};

const NEGOTIABLE_PATH_PATTERN = /^\/(?:projetos(?:\/[^/]+)?)?$/;

export function prefersMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) {
    return false;
  }

  return acceptHeader
    .split(",")
    .some((entry) => entry.trim().toLowerCase().startsWith("text/markdown"));
}

export function shouldNegotiateMarkdown(pathname: string): boolean {
  return NEGOTIABLE_PATH_PATTERN.test(pathname);
}

export function estimateMarkdownTokens(markdown: string): number {
  return Math.ceil(markdown.length / 4);
}

function appendJsonLd(markdown: string, data: unknown): string {
  return `${markdown}\n\n## Structured data\n\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`\n`;
}

function buildHomeMarkdown(): string {
  const featuredProjects = getAllProjects().slice(0, 8);
  const experienceLines = experiencesData
    .map(
      (experience) =>
        `### ${experience.title} @ ${experience.enterprise}\n\n${experience.date}\n\n${experience.description}\n\nTecnologias: ${experience.tags.join(", ")}`,
    )
    .join("\n\n");

  const projectLines = featuredProjects
    .map(
      (project) =>
        `- [${project.title}](${absoluteUrl(getProjectPath(project.slug))}) (${project.years}) — ${project.description}`,
    )
    .join("\n");

  const faqLines = homeFaqs
    .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
    .join("\n\n");

  const contactLines = social
    .map((item) => `- [${item.name}](${item.hash})`)
    .join("\n");

  const showcaseLines = showCase
    .map(
      (project) =>
        `- ${project.title}: ${project.description}${project.linkLive ? ` — [demo](${project.linkLive})` : ""}`,
    )
    .join("\n");

  const markdown = `# ${SITE_TITLE}

${SITE_DESCRIPTION}

## Sobre

Oi, meu nome é **Marcos**, engenheiro de software front-end focado na construção de interfaces e experiências digitais.

## Destaques

${showcaseLines}

## Projetos recentes

${projectLines}

[Ver todos os projetos](${absoluteUrl("/projetos")})

## Experiência

${experienceLines}

## Contato

${contactLines}

## FAQ

${faqLines}
`;

  return appendJsonLd(markdown, buildHomeJsonLd());
}

function buildProjectsMarkdown(): string {
  const projectLines = getAllProjects()
    .map(
      (project) =>
        `## [${project.title}](${absoluteUrl(getProjectPath(project.slug))})

${project.description}

- Ano: ${project.years}
- Cliente/owner: ${project.owner}
- Stack: ${project.builtWith.filter(Boolean).join(", ")}
${project.linkLive ? `- Demo: ${project.linkLive}` : ""}
${project.linkCode ? `- Código: ${project.linkCode}` : ""}`,
    )
    .join("\n\n");

  const markdown = `# Projetos de ${SITE_NAME}

Catálogo completo de projetos front-end publicados neste portfólio.

${projectLines}
`;

  return appendJsonLd(markdown, buildProjectsJsonLd());
}

function buildProjectMarkdown(slug: string): MarkdownPageResult | null {
  const project = getProjectBySlug(slug);

  if (!project) {
    return null;
  }

  const markdown = `# ${project.title}

${project.description}

- Ano: ${project.years}
- Cliente/owner: ${project.owner}
- Stack: ${project.builtWith.filter(Boolean).join(", ")}
- Página: ${absoluteUrl(getProjectPath(project.slug))}
${project.linkLive ? `- Demo: ${project.linkLive}` : ""}
${project.linkCode ? `- Código: ${project.linkCode}` : ""}

[← Voltar para projetos](${absoluteUrl("/projetos")})
`;

  return {
    status: 200,
    markdown: appendJsonLd(markdown, buildProjectJsonLd(project)),
  };
}

export function buildMarkdownForPath(pathname: string): MarkdownPageResult | null {
  if (pathname === "/") {
    return { status: 200, markdown: buildHomeMarkdown() };
  }

  if (pathname === "/projetos") {
    return { status: 200, markdown: buildProjectsMarkdown() };
  }

  const projectMatch = pathname.match(/^\/projetos\/([^/]+)$/);
  if (projectMatch) {
    return buildProjectMarkdown(projectMatch[1]);
  }

  return null;
}

export function buildMarkdownResponseHeaders(
  markdown: string,
): Record<string, string> {
  return {
    "Content-Type": "text/markdown; charset=utf-8",
    "x-markdown-tokens": String(estimateMarkdownTokens(markdown)),
    Vary: "Accept",
    "Cache-Control": "public, max-age=3600, s-maxage=3600",
  };
}
