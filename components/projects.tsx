"use client";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
import Showcase from "./showcase";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import Link from "next/link";

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
      <div className="flex underline font-bold justify-end items-center ">
        <Link href="/projetos">Veja todos os projetos</Link>
        <MdArrowOutward />
      </div>
    </motion.section>
  );
}

export default projects;
