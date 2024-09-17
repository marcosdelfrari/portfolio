import React, { Children } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function sectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="font-extralight tracking-wider mt-[3rem] 2xl:mt-[0rem] text-xl mb-4 border-b border-gray-500">
      {children}
    </div>
  );
}

export default sectionHeading;
