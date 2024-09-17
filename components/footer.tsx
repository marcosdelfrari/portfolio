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
      <div className="flex flex-col items-center justify-center border-black dark:border-[#a097cd] border-t h-[5rem] px-[5rem] font-extralight text-center  text-[0.7rem]">
        Projetado no Figma e codificado no VS Code. Construído com Next.js e
        Tailwind CSS. Implantado com Vercel.
      </div>
    </motion.footer>
  );
}

export default footer;
