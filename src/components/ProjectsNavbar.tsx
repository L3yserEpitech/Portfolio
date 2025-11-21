"use client";

import { useState, useEffect } from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface ProjectsNavbarProps {
  projects: Array<{ id: number; title: string }>;
}

export default function ProjectsNavbar({ projects }: ProjectsNavbarProps) {
  const [activeProject, setActiveProject] = useState(0); // 0 = Catalog, 1+ = Projects

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
  };

  return (
    <nav className="fixed top-20 left-0 right-0 z-40 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6 rounded-2xl bg-glass-surface/80 backdrop-blur-xl border border-glass-surface-border shadow-lg">
          {/* Left side - Catalog + Project references */}
          <div className="flex items-center gap-3">
            {/* Catalog button */}
            <button
              onClick={() => scrollToProject(0)}
              className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                activeProject === 0
                  ? "bg-primary/20 text-primary"
                  : "text-muted hover:text-foreground hover:bg-glass-surface"
              }`}
            >
              <span className="text-sm font-semibold">Catalog</span>
              
              {/* Active indicator */}
              {activeProject === 0 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
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
                {/* Project number */}
                <span className="text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                {/* Active indicator */}
                {activeProject === index + 1 && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}

                {/* Tooltip with project title */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {project.title}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Theme toggle & Home */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Home button */}
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-main text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
