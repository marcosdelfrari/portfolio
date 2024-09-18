"use client";
import React, { useEffect, useRef, useState } from "react";
import { showCase } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type CaseProps = (typeof showCase)[number];

function Case({
  title,
  preview,
  description,
  builtWith,
  linkLive,
  linkCode,
}: CaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
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
      <section className="mb-10 block sm:flex sm:m-3 sm:hover:scale-105 transition ">
        <div className="sm:w-[50rem] sm:justify-center scroll-hidden sm:flex sm:items-center">
          <Image
            src={preview}
            alt={title}
            width="321"
            height="195"
            quality="100"
            priority={true}
          />
        </div>
        <div className="flex flex-col mt-4 sm:w-full sm:m-0 sm:py-10 sm:pl-10">
          <span className="text-base font-semibold">{title}</span>
          <span className="font-light text-sm mb-2">{description}</span>
          <div className="flex items-center">
            <span className="text-sm font-semibold">Build:</span>
            <ul className="flex mx-1 gap-2">
              {builtWith.map((tech, techs) => (
                <li
                  key={techs}
                  className="bg-gray-900 text-white dark:bg-[#f9fafb3b] px-2 py-1 rounded-md text-[0.75rem] font-light"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between gap-2 mt-4">
            <a
              href={linkLive}
              className="border border-gray-900 w-1/2 font-light sm:font-thin text-center text-[0.75rem] px-4 py-2 b-b hover:underline hover:scale-105 dark:border-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
            <a
              href={linkCode}
              className="border bg-gray-900 border-gray-900 text-white w-1/2 font-light sm:font-thin text-center text-[0.75rem] px-4 py-2 b-b hover:scale-105 hover:underline dark:border-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Case;
