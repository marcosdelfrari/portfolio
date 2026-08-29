import { createOgImage, ogContentType, ogSize } from "@/lib/og";
import { getProjectBySlug } from "@/lib/projects";

export const alt = "Projeto do portfólio de Marcos Lucas";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createOgImage({
      title: "Projeto não encontrado",
      subtitle: "Portfólio de Marcos Lucas",
    });
  }

  return createOgImage({
    eyebrow: `${project.owner} · ${project.years}`,
    title: project.title,
    subtitle: project.description,
    chips: [...project.builtWith].filter(Boolean).map(String).slice(0, 4),
  });
}
