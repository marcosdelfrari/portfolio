import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { MdArrowOutward } from "react-icons/md";

function listProjects() {
  const projects = getAllProjects();

  return (
    <section>
      <table className="table-auto my-5 w-full">
        <thead className="font-bold border-b border-white/10 text-base text-left text-zinc-100">
          <tr>
            <th>Ano</th>
            <th>Título</th>
            <th className="hidden sm:table-cell">Cliente</th>
            <th className="hidden lg:block">Construído com</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.slug} className="border-b border-white/10">
              <td className="h-10 font-extralight text-sm">{project.years}</td>
              <td className="font-bold text-sm">
                <Link
                  href={`/projetos/${project.slug}`}
                  className="hover:underline"
                >
                  {project.title}
                </Link>
              </td>
              <td className="hidden sm:table-cell text-sm font-extralight">
                {project.owner}
              </td>
              <td className="hidden lg:table-cell text-sm">
                <div className="flex items-center">
                  <ul className="list-disc">
                    {project.builtWith.map((tech, idx) => (
                      <li
                        key={idx}
                        className="inline-block bg-white/10 text-zinc-200 px-2 py-1 text-[0.75rem] font-normal rounded-md m-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
              <td>
                <div className="flex gap-1 text-sm">
                  {" "}
                  {project.linkLive ? (
                    <a
                      href={project.linkLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline"
                    >
                      Site <MdArrowOutward />
                    </a>
                  ) : (
                    " "
                  )}
                  {project.linkCode ? (
                    <a
                      href={project.linkCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center hover:underline"
                    >
                      GitHub <MdArrowOutward />
                    </a>
                  ) : (
                    " "
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default listProjects;
