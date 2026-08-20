"use client";

import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

const Reveal = ({
  children,
  className,
  delay = 0,
  mode = "scroll",
}: {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  delay?: number;
  mode?: "mount" | "scroll";
}) => {
  if (mode === "mount") {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
