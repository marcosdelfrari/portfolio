"use client";
import React from "react";
import { motion } from "framer-motion";

export default function header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex items-center px-4 sm:px-6 sm:border-b border-white/10 text-base 2xl:text-lg font-normal text-zinc-100 top-0 h-[4.5rem] w-full rounded-none sm:h-[3.25rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <span className="font-semibold text-white">Marcos </span>
          <span>Lucas</span>
        </div>
      </motion.div>
    </header>
  );
}
