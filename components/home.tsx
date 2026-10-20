"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import Menu from "@/components/menu";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home mx-auto max-w-[90rem] sm:flex custom-height-body">
      <motion.div
        className="border-r border-white/10 hidden shrink-0 sm:flex sm:w-60 sm:flex-col sm:items-end sm:justify-end lg:w-64"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <About />
        <Menu />
      </motion.div>
      <motion.div
        className="scrollbar-subtle min-w-0 flex-grow overflow-y-auto overflow-x-hidden sm:px-12 sm:pb-12 2lg:p-15"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="sm:hidden" id="Sobre">
          <About />
        </div>
        <Projects />
        <Experiences />
      </motion.div>
    </main>
  );
}
