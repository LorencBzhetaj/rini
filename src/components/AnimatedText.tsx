"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function AnimatedText({ text, style, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} style={{ ...style, position: "relative" }} className={className}>
      {words.map((word, wi) => {
        const start = wi / words.length;
        const end = (wi + 1) / words.length;
        return (
          <Word
            key={wi}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block", marginRight: "0.3em" }}>
      {/* Invisible placeholder */}
      <span style={{ opacity: 0.15 }}>{word}</span>
      {/* Animated overlay */}
      <motion.span
        style={{
          opacity,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}