"use client";
import React from "react";
import { social } from "@/lib/data";
import { motion } from "framer-motion";

function about() {
  return (
    <section className="flex flex-col justify-center row-auto socials-center w-full max-w-full text-center custom-height sm:h-auto sm:py-8">
      <motion.div
        className="flex mt-[-6rem] sm:mt-0 justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        <video
          width="180"
          height="180"
          autoPlay
          loop
          muted
          playsInline
          className="h-[140px] w-[140px] sm:h-[120px] sm:w-[120px]"
        >
          <source src="/avatar.webm" type="video/webm" />
          <source src="/avatar.mov" type="video/quicktime" />
        </video>
      </motion.div>
      <motion.div
        className="font-normal text-sm sm:text-xs leading-relaxed px-6 sm:px-4 text-zinc-400"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oi, meu nome é <span className="font-semibold text-zinc-100">Marcos</span>, um engenheiro
        de software front-end focado na construção de belas interfaces e
        experiências
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ul className="flex justify-center py-2 gap-3 sm:gap-1 text-xl sm:text-lg text-zinc-300">
          {social.map((social, index) => (
            <li key={index} className="hover:scale-125 transition">
              <a href={social.hash} target="_blank">
                {" "}
                {social.icon}{" "}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default about;
