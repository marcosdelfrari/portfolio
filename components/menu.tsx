import React from "react";

import { links } from "@/lib/data";
import Link from "next/link";

function menu() {
  return (
    <div className="sm:justify-end sm:items-end sm:h-[16rem] ">
      <Link
        href="/#Sobre"
        className="sm:hidden px-5 text-end text-[0.7rem] sm:tracking-wider tracking-wide sm:text-base font-light sm:font-thin underline"
      >
        Contato
      </Link>
      {links.map((links, link) => (
        <Link
          key={link}
          href={links.hash}
          className="sm:block px-5 sm:hover:scale-105 text-end sm:tracking-wider tracking-wide text-[0.7rem] sm:text-base font-light sm:font-thin underline"
        >
          {links.name}
        </Link>
      ))}
      <a
        href="/marcos-cv.pdf"
        target="_blank"
        className="sm:block sm:hover:scale-105 px-5 text-end text-[0.7rem] sm:tracking-wider tracking-wide sm:text-base  font-light sm:font-thin underline"
      >
        Resumo
      </a>
    </div>
  );
}

export default menu;
