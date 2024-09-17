import React from "react";
import Image from "next/image";
import { showCase } from "@/lib/data";
import Case from "./case";

function showcase() {
  return (
    <section className="p-1 mt-10">
      {showCase.map((project, projects) => (
        <React.Fragment key={projects}>
          <Case {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default showcase;
