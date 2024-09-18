"use client";
import Image from "next/image";
import React from "react";
import { social } from "@/lib/data";
import { motion } from "framer-motion";

function about() {
  return (
    <section className="flex flex-col justify-center row-auto socials-center w-screen sm:w-auto text-center custom-height">
      <motion.div
        className="flex mt-[-6rem] justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
        }}
      >
        <Image
          src="/avatar2.png"
          alt="Marcos Lucas"
          width="180"
          height="180"
          quality="100"
          priority={true}
        />
      </motion.div>
      <motion.div
        className="font-extralight px-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oi, meu nome é <span className="font-bold">Marcos</span>, um engenheiro
        de software front-end focado na construção de belas interfaces e
        experiências
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ul className="flex justify-center py-2 gap-3 sm:gap-1 text-2xl">
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
