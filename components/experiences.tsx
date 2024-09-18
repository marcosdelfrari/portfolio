import React from "react";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./sectionHeading";
import Experience from "./experience";

function experiences() {
  return (
    <section id="Experience" className="px-7">
      <SectionHeading>Experiências</SectionHeading>

      {experiencesData.map((experience, experiences) => (
        <div key={experiences}>
          <Experience {...experience} />
        </div>
      ))}
    </section>
  );
}

export default experiences;
