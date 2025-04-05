"use client";
import { motion } from "framer-motion";

export default function AnimatedBorder() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full z-0"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#00ff99"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          strokeDasharray: "24 10 0 0",
        }}
        animate={{
          strokeDasharray: [
            "15 128 25 25",
            "16 25 92 72",
            "4 250 22 22",
          ],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.svg>
  );
}
