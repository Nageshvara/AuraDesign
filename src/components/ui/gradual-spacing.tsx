"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  highlightColor?: string; // Add prop for highlight color
  letterSpacing?: string;  // Add prop for letter spacing
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  highlightColor = "text-red-500", // Default color for third word
  letterSpacing = "1px", // Default letter spacing
}: GradualSpacingProps) {
  const words = text.split(" "); // Split the text into words

  return (
    <div className="flex justify-center space-x-2" style={{ fontFamily: "Stardom, sans-serif" }}>
      <AnimatePresence>
        {words.map((word, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn(
              "drop-shadow-sm",
              className,
              i === 2 ? highlightColor : "",
              { "tracking-wider": true } // Add tracking-wider for wider letter spacing
            )}
            style={{ letterSpacing }} // Apply letter spacing
          >
            {word}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
