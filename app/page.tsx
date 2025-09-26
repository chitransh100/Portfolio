"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import { FaGithub, FaDownload, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedBorder from "@/components/ui/AnimatedBorder";
import Aboutme from "@/components/ui/Aboutme";
import Skills from "@/components/ui/Skills";
import { FeaturedProjects } from "@/components/ui/FeaturedProject";
import ContactMe from "@/components/ui/ContactMe";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { FlipWords } from "@/components/ui/flip-words";
import StatsSection from "@/components/ui/StatsSection";
import { TracingBeam } from "@/components/ui/tracer-beam";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden dark:bg-black px-4 bg-transparent">
      <Navbar />
      <TracingBeam>
        {/* Spotlights */}
        <Spotlight className="absolute top-[-20%] left-[-10%] scale-150 opacity-40" fill="white" />
        <Spotlight className="absolute top-[30%] left-[70%] scale-125 opacity-30" fill="purple" />
        <Spotlight className="absolute top-[60%] left-[20%] scale-100 opacity-20" fill="green" />

        {/* Hero Section */}
        <section id="home" className="h-auto min-h-screen flex flex-col justify-center py-16 md:py-24 w-full relative z-10">
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12 mx-auto px-4">

            {/* Left Side */}
            <div className="max-w-xl w-full text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-semibold text-black dark:text-white mb-2"
              >
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold">
                  Chitransh
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-200 mb-4"
              >
                I’m a{" "}
                <FlipWords
                  words={[
                    "Full Stack Developer",
                    "AI/ML Enthusiast",
                    "AI Explorer",
                    "Tech Learner for Life",
                  ]}
                  className="inline text-xl md:text-2xl text-neutral-700 dark:text-neutral-200"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-400"
              >
                Passionate about crafting modern UIs and building intelligent systems with cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
              >
                <Link href="https://drive.google.com/file/d/14_43aT-mzNqemYh1IYom0ADudWzld_gC/view?usp=drive_link" download>
                  <button className="flex items-center justify-center gap-2 w-48 rounded-lg bg-black px-6 py-2 font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300">
                    <FaDownload /> Resume
                  </button>
                </Link>

                <div className="flex gap-3 mt-4 md:mt-0">
                  <a href="https://github.com/chitransh100" target="_blank" className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/chitranshkumar2003/" target="_blank" className="p-3 rounded-full bg-blue-600 text-white hover:scale-105 transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/chitransh_2003/" target="_blank" className="p-3 rounded-full bg-pink-500 text-white hover:scale-105 transition-all">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Side (Image) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <AnimatedBorder />
                <div className="relative w-full h-full overflow-hidden rounded-full border border-slate-800 bg-slate-900/[0.8] backdrop-blur-xl">
                  <Image
                    src="/my_image.jpg"
                    alt="Chitransh Kumar"
                    fill
                    className="rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <StatsSection />
        </section>

        {/* Projects Section (Top Priority) */}
        <FeaturedProjects />

        {/* About Me Section */}
        <Aboutme />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <ContactMe />

        {/* Footer */}
        <Footer />

      </TracingBeam>
    </main>
  );
}
