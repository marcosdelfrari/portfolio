"use client";
import React from "react";
import Showcase from "./showcase";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function projects() {
  return (
    <motion.section
      className="px-7"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Projetos</SectionHeading>
      <div>
        <Showcase />
      </div>
      <div className="flex font-bold justify-end">
        <div className="border-b">
          <Link
            href="/projetos"
            className="flex sm:hover:scale-105 gap-1 items-center"
          >
            Veja todos os projetos <FaArrowRight />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default projects;
