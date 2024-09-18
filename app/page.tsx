"use client";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import ListProjects from "@/components/listProjects";
import Menu from "@/components/menu";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home mx-auto max-w-[90rem] sm:flex custom-height-body">
      <motion.div
        className="border-r dark:border-[#a097cd] border-black hidden sm:w-[50rem] lg:w-[40rem] 2xl:w-[20rem] sm:items-end sm:justify-end sm:flex sm:flex-col"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <About />
        <Menu />
      </motion.div>
      <motion.div
        className="flex-grow overflow-y-auto overflow-x-hidden sm-px-[4rem] sm:pb-[3rem] 2xl:py-[5rem]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="sm:hidden " id="Sobre">
          <About />
        </div>
        <Projects />
        <Experiences />
      </motion.div>
    </main>
  );
}
