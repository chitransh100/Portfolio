"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  // { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "5" },
  { label: "Technologies Mastered", value: "10+" },
  { label: "Code Commits", value: "100+" },
];

export default function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div ref={ref} className="relative z-10 max-w-6xl w-full mx-auto mt-16 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center text-white dark:text-white"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mr-2">{stat.value}</h2>
            <p className="text-sm md:text-base text-gray-400 text-left">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
