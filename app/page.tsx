"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { FaGithub, FaDownload, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedBorder from "@/components/ui/AnimatedBorder";
import Aboutme from "@/components/ui/Aboutme";
import Skills from "@/components/ui/Skills";
import { FeaturedProjects } from "@/components/ui/FeaturedProject";
import ContactMe from "@/components/ui/ContactMe";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-black px-4">

      <section id="home" className="h-screen flex items-center justify-center "> 
          {/* Spotlights */}
      <Spotlight className="top-[-20%] left-[-10%] scale-150 opacity-40" fill="white" />
      <Spotlight className="top-[30%] left-[70%] scale-125 opacity-30" fill="purple" />
      <Spotlight className="top-[60%] left-[20%] scale-100 opacity-20" fill="green" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-12 text-center md:text-left">
        
        {/* Left Section */}
        <div className="max-w-xl w-full">
          <TextGenerateEffect
            words="Hello I'm"
            className="text-4xl md:text-7xl font-bold text-black dark:text-white"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <TextGenerateEffect
              words="Chitransh"
              className="text-5xl md:text-9xl font-bold text-green-500 dark:text-green-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            Passionate about crafting modern UIs and building intelligent systems with cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
            className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
          >
            <button className="flex items-center justify-center gap-2 w-48 rounded-lg bg-black px-6 py-2 font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300">
              <FaDownload /> Download CV
            </button>

            <div className="flex gap-3 mt-4 md:mt-0">
              <a href="https://github.com/your-profile" target="_blank" className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" className="p-3 rounded-full bg-blue-600 text-white hover:scale-105 transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" className="p-3 rounded-full bg-pink-500 text-white hover:scale-105 transition-all">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <AnimatedBorder />
            <div className="relative w-full h-full overflow-hidden rounded-full border border-slate-800 bg-slate-900/[0.8] backdrop-blur-xl">
              <Image
                src="/my_image.jpg"
                alt="Chitransh Kumar"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      </section>
      
      <Aboutme/>
      <Skills/>
      <FeaturedProjects />
      <ContactMe />
      <Footer/>

    </main>
  );
}
