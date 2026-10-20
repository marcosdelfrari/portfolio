"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { organizationsData } from "@/lib/data";

export default function EcosystemPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center px-6 py-14 sm:px-10 sm:py-16">
      <Link
        href="/"
        className="absolute left-6 top-6 text-xs font-normal text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline sm:left-10 sm:top-8"
      >
        Início
      </Link>

      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="grid grid-cols-1 gap-14 sm:gap-16 lg:grid-cols-3 lg:gap-10">
          {organizationsData.map((item) => (
            <li
              key={item.name}
              className="flex flex-col items-center text-center lg:px-2"
            >
              <div className="relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={item.logo}
                  alt={`Logo ${item.name}`}
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <p className="mt-5 max-w-[16rem] text-[0.7rem] font-light italic leading-relaxed text-zinc-500 sm:text-xs">
                {item.meaning}
              </p>

              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-zinc-100 hover:underline"
                >
                  {item.name}
                  <MdArrowOutward />
                </a>
              ) : (
                <h2 className="mt-4 text-sm font-semibold text-zinc-100">
                  {item.name}
                </h2>
              )}

              <p className="mt-3 max-w-[15rem] text-xs font-normal leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </main>
  );
}
