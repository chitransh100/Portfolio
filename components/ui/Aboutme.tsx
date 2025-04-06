"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./BackgroundGradient";

export default function Aboutme() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 px-4 md:px-12 text-white overflow-hidden max-w-5xl mx-auto z-10 text-center"
    >
      <p className="text-sm uppercase tracking-widest text-purple-400 mb-2">
        About Me
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Pre-final Year Computer Science Student with a Passion for Building Impactful Tech
      </h2>
      <div className="w-24 h-1 mx-auto mb-8 rounded bg-purple-500" />

      <p className="text-lg leading-relaxed text-gray-300">
        Hello! I&#39;m Chitransh Kumar, a pre-final year Computer Science student at IIIT-Vadodara-ICD with hands-on experience in full-stack development, machine learning, and real-time systems. I&#39;m passionate about creating tech that makes life easier — whether that&#39;s through intuitive web apps, AI-powered platforms, or smart backend systems.
      </p>

      <p className="text-lg leading-relaxed text-gray-300 mt-4">
      I&#39;ve worked on several projects ranging from movie streaming platforms to developer networking sites, and I&#39;m constantly exploring new technologies like GenAI and cloud infrastructure. I enjoy diving deep into systems, solving real-world problems, and building things that actually work and scale.
      </p>

      {/* Cards Section */}
      {/* Cards Section */}
<div className="grid grid-cols md:grid-cols-2 gap-6 mt-12 z-10 relative">
  {/* Card 1 - Web Dev */}
  <BackgroundGradient className="rounded-2xl overflow-hidden">
    <div className="bg-[#14142b] p-6 rounded-2xl shadow-lg border border-purple-600 text-center">
      <div className="text-3xl mb-4">🛠️</div>
      <h3 className="text-xl font-semibold">Web Development</h3>
      <p className="text-sm text-purple-400 mt-1">Full-Stack | Learning by Building</p>
      <p className="text-gray-400 mt-2 text-sm">
        Comfortable with React, Tailwind, Firebase and building personal projects to strengthen skills.
      </p>
    </div>
  </BackgroundGradient>

  {/* Card 2 - Research Work */}
  <BackgroundGradient className="rounded-2xl">
    <div className="bg-[#14142b] p-6 rounded-2xl shadow-lg border border-purple-600 text-center">
      <div className="text-3xl mb-4">📊</div>
      <h3 className="text-xl font-semibold">Research: Weather Forecasting</h3>
      <p className="text-sm text-purple-400 mt-1">Ongoing | 2025</p>
      <p className="text-gray-400 mt-2 text-sm">
        Working on a comparative study of ANN, RNN, LSTM, and TCN for weather prediction and anomaly detection.
      </p>
    </div>
  </BackgroundGradient>

  {/* Card 3 - Exploring ML & GenAI
  <BackgroundGradient className="rounded-2xl">
    <div className="bg-[#14142b] p-6 rounded-2xl shadow-lg border border-purple-600 text-center w-full">
      <div className="text-3xl mb-4">🤖</div>
      <h3 className="text-xl font-semibold">Learning ML & GenAI</h3>
      <p className="text-sm text-purple-400 mt-1">Curious Explorer</p>
      <p className="text-gray-400 mt-2 text-sm">
        Exploring core ML concepts, training models, and understanding real-world applications in AI and Generative AI.
      </p>
    </div>
  </BackgroundGradient> */}
</div>

    </motion.section>
  );
}
