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
      <div className="flex items-center justify-center border-white/10 border-t h-[3.5rem] font-normal text-center text-xs text-zinc-500">
        <span>
          Desenvolvido por{" "}
          <a
            href="https://marcosdelfrari.com"
            className="underline hover:opacity-80"
          >
            marcosdelfrari.com
          </a>
        </span>
      </div>
    </motion.footer>
  );
}

export default footer;
