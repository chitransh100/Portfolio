"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md bg-black/80"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="text-purple-400 text-2xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div> */}

          {/* Mobile Hamburger */}
          {/* <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiOutlineX size={28} />
              ) : (
                <HiOutlineMenuAlt3 size={28} />
              )}
            </button>
          </div> */}
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-black z-50 flex flex-col items-start justify-start p-8 shadow-lg"
          >
            <div className="mb-8">
              <button onClick={() => setIsOpen(false)} className="text-white">
                <HiOutlineX size={28} />
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl mb-6 hover:text-purple-400 transition-all"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}
