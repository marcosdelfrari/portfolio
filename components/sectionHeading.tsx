import React, { Children } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function sectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="font-normal tracking-wider mt-[3rem] lg:mt-[1rem] text-lg mb-4 border-b border-white/10 text-zinc-100">
      {children}
    </div>
  );
}

export default sectionHeading;
