import { experiencesData, links } from "@/lib/data";
import { homeFaqs } from "@/lib/faq";
import { getAllProjects } from "@/lib/projects";
import { absoluteUrl, getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export function buildLlmsTxt(): string {
  const recentProjects = getAllProjects().slice(0, 12);

  const experienceLines = experiencesData
    .map(
      (experience) =>
        `- ${experience.title} @ ${experience.enterprise} (${experience.date}): ${experience.description}`,
    )
    .join("\n");

  const projectLines = recentProjects
    .map(
      (project) =>
        `- ${project.title} (${project.years}): ${project.description}\n  Página: ${absoluteUrl(`/projetos/${project.slug}`)}${project.linkLive.startsWith("http") ? `\n  Demo: ${project.linkLive}` : ""}`,
    )
    .join("\n");

  const faqLines = homeFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");

  const navLines = links
    .map((link) => `- ${link.name}: ${absoluteUrl(link.hash)}`)
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

## Sobre

${SITE_NAME} é engenheiro de software front-end. Este site é o portfólio oficial com projetos, experiência profissional e canais de contato.

URL canônica: ${getSiteUrl()}
Idioma: pt-BR

## Páginas principais

- Home: ${absoluteUrl("/")}
- Projetos: ${absoluteUrl("/projetos")}

## Navegação

${navLines}

## Experiência profissional

${experienceLines}

## Projetos recentes (amostra)

${projectLines}

## FAQ

${faqLines}

## Política de citação

- Cite a fonte como "${SITE_NAME} — Portfólio" com link para ${getSiteUrl()}
- Para projetos específicos, prefira o link ao vivo listado acima
- Contato profissional: LinkedIn em https://www.linkedin.com/in/marcosdelfrari/

## Discovery

- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Robots: ${absoluteUrl("/robots.txt")}
`;
}
