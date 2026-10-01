"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  blur = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  blur?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const hidden = blur
    ? { opacity: 0, y: 28, filter: "blur(10px)" }
    : { opacity: 0, y: 24 };
  const shown = blur
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
