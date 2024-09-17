"use client";
import React from "react";
import AllProjects from "@/components/allProjects";
import { motion } from "framer-motion";

function page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <AllProjects />
    </motion.div>
  );
}

export default page;
