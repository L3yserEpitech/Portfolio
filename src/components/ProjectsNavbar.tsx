"use client";

import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsNavbarProps {
  projects: Array<{ id: number; title: string }>;
}

export default function ProjectsNavbar({ projects }: ProjectsNavbarProps) {
  const [activeProject, setActiveProject] = useState(0); // 0 = Catalog, 1+ = Projects
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isCatalog = activeProject === 0;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll container
      const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
      if (!scrollContainer) return;
      
      const scrollPosition = scrollContainer.scrollTop;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.round(scrollPosition / windowHeight);
      setActiveProject(currentIndex); // 0 = Catalog, 1+ = Project index
    };

    const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [projects.length]);

  const scrollToProject = (index: number) => {
    const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      animate={{
        top: isMobile ? 20 : (isCatalog ? 0 : 80),
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          paddingLeft: isCatalog ? 0 : 24,
          paddingRight: isCatalog ? 0 : 24,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className={isCatalog ? "" : "container mx-auto"}
        >
          <motion.div
            animate={{
              borderRadius: isCatalog ? "0px" : "16px",
              borderWidth: isCatalog ? "0px 0px 1px 0px" : "1px",
              boxShadow: isCatalog
                ? "0 0 0 0 rgba(0, 0, 0, 0)"
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="backdrop-blur-xl bg-background/70 border-glass-border"
          >
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Mobile Logo */}
            <div className="md:hidden">
              <Link href="/" className="text-2xl font-heading font-bold text-gradient">
                Jules.
              </Link>
            </div>

            {/* Desktop Left side - Logo or Catalog + Numbers */}
            <motion.div
              animate={{
                opacity: 1,
              }}
              className="hidden md:flex items-center gap-3"
            >
              <AnimatePresence mode="wait">
                {isCatalog ? (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href="/" className="text-2xl font-heading font-bold text-gradient">
                      Jules.
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="nav-items"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    {/* Catalog button */}
                    <button
                      onClick={() => scrollToProject(0)}
                      className="group relative px-4 py-2 rounded-lg transition-all duration-300 text-muted hover:text-foreground hover:bg-glass-surface"
                    >
                      <span className="text-sm font-semibold">Catalog</span>
                    </button>

                    {/* Divider */}
                    <div className="w-px h-6 bg-glass-surface-border" />

                    {/* Project numbers */}
                    {projects.map((project, index) => (
                      <button
                        key={project.id}
                        onClick={() => scrollToProject(index + 1)}
                        className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                          activeProject === index + 1
                            ? "bg-primary/20 text-primary"
                            : "text-muted hover:text-foreground hover:bg-glass-surface"
                        }`}
                      >
                        <span className="text-sm font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        
                        {activeProject === index + 1 && (
                          <motion.div
                            layoutId="activeProjectIndicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Tooltip with project title */}
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {project.title}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Desktop Center - Navigation links (visible only in catalog mode) */}
            <AnimatePresence mode="wait">
              {isCatalog && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex items-center gap-6"
                >
                  <button
                    onClick={() => scrollToProject(0)}
                    className="text-sm font-medium text-primary transition-colors"
                  >
                    Catalog
                  </button>
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => scrollToProject(index + 1)}
                      className="text-sm font-medium text-muted hover:text-primary transition-colors"
                    >
                      {project.title}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side - Theme + Home + Mobile Toggle */}
            <motion.div
              className="flex items-center gap-3"
            >
              <ThemeToggle />
              <Link
                href="/"
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-main text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-muted hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-glass-border overflow-hidden bg-background/95 backdrop-blur-xl"
              >
                <div className="p-6 flex flex-col gap-4">
                  <button 
                    onClick={() => scrollToProject(0)} 
                    className={`text-left font-medium py-2 ${activeProject === 0 ? "text-primary" : "text-foreground"}`}
                  >
                    Catalog
                  </button>
                  {projects.map((project, index) => (
                    <button
                      key={project.id}
                      onClick={() => scrollToProject(index + 1)}
                      className={`text-left py-2 ${activeProject === index + 1 ? "text-primary font-medium" : "text-muted hover:text-foreground"}`}
                    >
                      {project.title}
                    </button>
                  ))}
                  <div className="h-px bg-glass-surface-border my-2" />
                  <Link 
                    href="/" 
                    className="text-left font-medium py-2 text-primary flex items-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
