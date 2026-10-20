"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowLeft } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { organizationsData } from "@/lib/data";

export default function EcosystemPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-black text-zinc-100 selection:bg-white/20">
      {/* Top architectural bar */}
      <header className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
        >
          <GoArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Início</span>
        </Link>

        <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-zinc-500">
          <span>Ecossistema</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span className="font-mono text-zinc-400">
            0{organizationsData.length}
          </span>
        </div>
      </header>

      {/* Full-viewport architectural grid */}
      <ul className="group/grid grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {organizationsData.map((item, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");

          const content = (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-full flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-9 lg:py-12 xl:px-12 xl:py-14"
            >
              {/* Ambient hover spotlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.065),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top metadata row */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs tracking-widest text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300">
                    {indexLabel}
                  </span>
                  <span className="h-3 w-px bg-white/10" />
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                    {item.category}
                  </span>
                </div>

                {item.url ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <MdArrowOutward className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                ) : null}
              </div>

              {/* Center emblem + title + meaning */}
              <div className="relative z-10 my-7 lg:my-auto lg:py-10">
                <div className="flex items-center gap-4 lg:block">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16 lg:mb-8 lg:h-20 lg:w-20 xl:h-24 xl:w-24">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <Image
                      src={item.logo}
                      alt={`Logo ${item.name}`}
                      width={96}
                      height={96}
                      className="relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {item.name}
                    </h2>
                    {item.domain ? (
                      <p className="mt-0.5 font-mono text-[0.7rem] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400 lg:hidden">
                        {item.domain}
                      </p>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 border-l border-white/15 pl-3.5 text-xs font-light italic leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:border-white/35 group-hover:text-zinc-400 sm:text-[0.8rem]">
                  {item.meaning}
                </p>
              </div>

              {/* Bottom description + domain */}
              <div className="relative z-10">
                <p className="text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 xl:text-[0.94rem] xl:leading-relaxed">
                  {item.description}
                </p>

                {item.domain ? (
                  <p className="mt-6 hidden truncate border-t border-white/[0.08] pt-4 font-mono text-[0.72rem] text-zinc-500 transition-colors duration-300 group-hover:border-white/15 group-hover:text-zinc-300 lg:block">
                    {item.domain}
                  </p>
                ) : null}
              </div>
            </motion.div>
          );

          return (
            <li
              key={item.name}
              className="group relative border-b border-white/[0.08] transition-opacity duration-500 last:border-b-0 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/[0.08] md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:border-white/[0.08] lg:last:border-r-0 lg:group-hover/grid:opacity-50 lg:hover:!opacity-100"
            >
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                >
                  {content}
                </a>
              ) : (
                <div className="h-full">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
