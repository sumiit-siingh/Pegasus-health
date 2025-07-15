"use client";
import React from "react";
import { motion } from "framer-motion"; // Corrected package name

export function ColourfulText({ text }: { text: string }) {
  // Updated colors to match the brand palette
  const colors = [
    "#00B2FF", // Blue
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 1,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-bold tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
