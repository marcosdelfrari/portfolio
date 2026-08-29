import { createOgImage, ogContentType, ogSize } from "@/lib/og";
import { getAllProjects } from "@/lib/projects";

export const alt = "Projetos de Marcos Lucas";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  const total = getAllProjects().length;

  return createOgImage({
    eyebrow: "Catálogo de projetos",
    title: "Projetos",
    subtitle: `${total} projetos web, landing pages e interfaces desenvolvidas por Marcos Lucas.`,
    chips: ["Next.js", "Angular", "Vue", "WordPress"],
  });
}
