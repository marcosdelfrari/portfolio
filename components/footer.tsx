"use client";
import React from "react";
import { motion } from "framer-motion";
import Menu from "./menu";

function footer() {
  return (
    <motion.footer
      className="flex-col"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex justify-center sm:hidden my-[2rem]">
        <Menu />
      </div>
      <div className="flex flex-col items-center justify-center border-black dark:border-[#a097cd] border-t h-[5rem] font-extralight text-center  text-[0.7rem]">
        <span>Projetado no Figma e codificado no VS Code. </span>
        <span>Construído com Next.js e Tailwind CSS.</span>
        <span>Implantado com Vercel.</span>
      </div>
    </motion.footer>
  );
}

export default footer;
