import React from "react";
import ListProjects from "./listProjects";
import SectionHeading from "./sectionHeading";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

function allProjects() {
  return (
    <section className="m-7">
      <Link href="/" className="flex font-thin text-xl items-center gap-1">
        <GoArrowLeft /> Voltar
      </Link>

      <SectionHeading>Todos os Projetos</SectionHeading>
      <ListProjects />
    </section>
  );
}

export default allProjects;
