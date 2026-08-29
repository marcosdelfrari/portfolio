import JsonLd from "@/components/json-ld";
import ProjectsPage from "@/components/projects-page";
import { buildProjectsJsonLd, buildProjectsMetadata } from "@/lib/seo";

export const metadata = buildProjectsMetadata();

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Projetos de Marcos Lucas</h1>
      <JsonLd data={buildProjectsJsonLd()} />
      <ProjectsPage />
    </>
  );
}
