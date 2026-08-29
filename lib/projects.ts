import { projectsData } from "@/lib/data";

export type Project = (typeof projectsData)[number];

export type ProjectWithSlug = Project & { slug: string };

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildProjectsWithSlugs(): ProjectWithSlug[] {
  const slugCounts = new Map<string, number>();

  return projectsData.map((project) => {
    const baseSlug = slugify(project.title);
    const count = slugCounts.get(baseSlug) ?? 0;
    slugCounts.set(baseSlug, count + 1);
    const slug = count === 0 ? baseSlug : `${baseSlug}-${project.years}`;

    return { ...project, slug };
  });
}

const projectsIndex = buildProjectsWithSlugs();

export function getAllProjects(): ProjectWithSlug[] {
  return projectsIndex;
}

export function getProjectBySlug(slug: string): ProjectWithSlug | undefined {
  return projectsIndex.find((project) => project.slug === slug);
}

export function getProjectPath(slug: string): string {
  return `/projetos/${slug}`;
}
