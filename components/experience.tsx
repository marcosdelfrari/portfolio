"use client";
import React, { useEffect, useRef, useState } from "react";
import { experiencesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

type experienceProps = (typeof experiencesData)[number];

function Experience({
  date,
  linkedin,
  title,
  enterprise,
  description,
  tags,
}: experienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={
        isMobile
          ? {
              scale: scaleProgress,
              opacity: opacityProgress,
            }
          : {}
      }
    >
      <section className="py-5 sm:flex">
        <div className="sm:w-[15rem] sm:text-end sm:pr-3">
          <div className="text-sm font-medium ">{date}</div>
        </div>
        <div className="sm:w-full sm:border-l border-gray-900 dark:border-gray-50 sm:px-5 flex-grow">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base font-bold hover:underline"
          >
            {title} - {enterprise} <MdArrowOutward />
          </a>
          <p className="text-sm font-light">{description}</p>

          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-900 text-white dark:bg-[#f9fafb3b] px-2 py-1 rounded-md text-[0.75rem] font-normal "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Experience;
