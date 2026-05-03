"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  style,
  className,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}