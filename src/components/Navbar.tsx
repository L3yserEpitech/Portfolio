"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills", "services", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-glass-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-gradient">
            Jules.
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors relative ${
                  activeSection === link.href.substring(1) ? "text-primary" : "hover:text-primary text-muted"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              Connect Wallet
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-muted hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-main origin-left"
          style={{ scaleX }}
        />

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-glass-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.href.substring(1) ? "text-primary" : "text-muted hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors"
              >
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
