"use client";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import ThemeSwitch from "./themeSwitch";

export default function header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex justify-between items-center px-[1rem] sm:border-b dark:sm:border-[#a097cd] sm:border-black sm:text-xl 2xl:text-2xl top-0 h-[4.5rem] w-full rounded-none sm:h-[3.25rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="order-2">
          <span className="font-bold">Marcos </span>
          <span>Lucas</span>
        </div>
        <div className="order-3 sm:order-1 flex items-center sm:w-[5rem]">
          <ThemeSwitch />
        </div>
        <div className="order-4 sm:hover:scale-105 justify-end hidden sm:flex  sm:w-[5rem]">
          <a href="/marcos-cv.pdf" target="_blank">
            <MdOutlineFileDownload />
          </a>
        </div>
      </motion.div>
    </header>
  );
}
