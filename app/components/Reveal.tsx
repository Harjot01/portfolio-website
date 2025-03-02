"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    setItemIndex((prev) => prev + 1);
  }, []);

  const duration = Math.max(0.1 - itemIndex * 0.05, 0.3); // Decreases but stays smooth

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }} // Starts lower & hidden
      animate={{ opacity: 1, y: 0 }} // Moves up smoothly
      transition={{
        duration, // Slightly long for smoothness
        ease: "easeInOut", // Natural easing
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
