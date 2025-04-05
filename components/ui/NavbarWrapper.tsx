"use client";

import { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./Navbar";
import { motion } from "framer-motion";

export default function NavbarWrapper() {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  // Animate on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowNavbar(true), 100); // slight delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={showNavbar ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", damping: 14, stiffness: 120 }}
      className="fixed mt-5 left-0 w-full z-50 flex justify-center"
    >
      <Menu setActive={setActive}>
        <MenuItem item="Home" active={active} setActive={setActive}>
          <HoveredLink href="/">Go to Home</HoveredLink>
        </MenuItem>

        <MenuItem item="Projects" active={active} setActive={setActive}>
          <ProductItem
            title="Portfolio"
            description="My latest projects and showcases"
            href="/projects"
            src="/portfolio-preview.jpg"
          />
        </MenuItem>

        <MenuItem item="About" active={active} setActive={setActive}>
          <HoveredLink href="#about">Who am I?</HoveredLink>
        </MenuItem>

        <MenuItem item="Contact" active={active} setActive={setActive}>
          <HoveredLink href="/contact">Let's talk!</HoveredLink>
        </MenuItem>
      </Menu>
    </motion.div>
  );
}
