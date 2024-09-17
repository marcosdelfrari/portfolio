import React from "react";

import { links } from "@/lib/data";
import Link from "next/link";

function menu() {
  return (
    <div className="justify-end items-end h-[16rem] ">
      {links.map((links, link) => (
        <Link
          key={link}
          href={links.hash}
          className="block px-5 text-end text-base font-thin underline"
        >
          {links.name}
        </Link>
      ))}
      <a
        href="/marcos-cv.pdf"
        target="_blank"
        className="block px-5 text-end text-base font-thin underline"
      >
        Resumo
      </a>
    </div>
  );
}

export default menu;
