import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import type { ProjectWithSlug } from "@/lib/projects";
import { getProjectPath } from "@/lib/projects";

interface ProjectDetailProps {
  project: ProjectWithSlug;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const hasLiveLink = project.linkLive.startsWith("http");
  const hasCodeLink = Boolean(project.linkCode);

  return (
    <article className="m-7 max-w-4xl">
      <Link
        href="/projetos"
        className="flex font-thin text-xl items-center gap-1 mb-8 hover:opacity-80"
      >
        <GoArrowLeft /> Voltar para projetos
      </Link>

      <header className="mb-8">
        <p className="text-sm font-extralight uppercase tracking-wide mb-2">
          {project.owner} · {project.years}
        </p>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg font-extralight leading-relaxed">
          {project.description}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tecnologias</h2>
        <ul className="flex flex-wrap gap-2">
          {[...project.builtWith].filter(Boolean).map(String).map((tech) => (
            <li
              key={tech}
              className="inline-block bg-gray-900 text-white dark:bg-[#f9fafb3b] px-3 py-1 text-sm font-extralight rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4 text-sm font-medium">
        {hasLiveLink ? (
          <a
            href={project.linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 border-b border-current hover:opacity-80"
          >
            Ver site ao vivo <MdArrowOutward />
          </a>
        ) : null}
        {hasCodeLink ? (
          <a
            href={project.linkCode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 border-b border-current hover:opacity-80"
          >
            Ver código no GitHub <MdArrowOutward />
          </a>
        ) : null}
      </section>

      <p className="mt-10 text-xs font-extralight opacity-70">
        Página do portfólio: {getProjectPath(project.slug)}
      </p>
    </article>
  );
}
