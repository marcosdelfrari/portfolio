"use client";
import React from "react";
import { motion } from "framer-motion";

function footer() {
  return (
    <motion.footer
      className="flex items-center justify-center border-black border-t h-[4rem] font-extralight text-center  text-[0.7rem]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      Desenhado e criado por Marcos Lucas - 2024
    </motion.footer>
  );
}

export default footer;
