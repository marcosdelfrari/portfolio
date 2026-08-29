import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import ProjectDetail from "@/components/project-detail";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/lib/projects";
import { buildProjectJsonLd, buildProjectMetadata } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return buildProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildProjectJsonLd(project)} />
      <ProjectDetail project={project} />
    </>
  );
}
