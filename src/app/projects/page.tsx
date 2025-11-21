"use client";

import { projects } from "@/data/mock";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import ProjectCard from "@/components/ProjectCard";
import { useSearchParams } from "next/navigation";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const projectId = searchParams.get("id");
    if (projectId) {
      const index = projects.findIndex((p) => p.id === Number(projectId));
      if (index !== -1) {
        // Delay to ensure DOM is ready and layout is stable
        setTimeout(() => {
          const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
          if (scrollContainer) {
            scrollContainer.scrollTo({
              top: (index + 1) * window.innerHeight,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  }, [searchParams]);
  
  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeGallery === null) return;
      
      const project = projects.find(p => p.id === activeGallery);
      if (!project) return;

      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage(project.gallery.length);
      if (e.key === "ArrowLeft") prevImage(project.gallery.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  const openGallery = (projectId: number) => {
    setActiveGallery(projectId);
    setGalleryIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setGalleryIndex(0);
  };

  const nextImage = (galleryLength: number) => {
    setGalleryIndex((prev) => (prev + 1) % galleryLength);
  };

  const prevImage = (galleryLength: number) => {
    setGalleryIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Projects Navbar */}
      <ProjectsNavbar projects={projects} />
      
      {/* Catalog Section - First Step */}
      <section className="min-h-screen snap-start flex flex-col justify-start relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-6 pt-40 md:pt-[30vh] pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Projects <span className="text-gradient">Catalog</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Explore all my projects in blockchain, DeFi, and Web3 development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                animateOnMount={true}
                onClick={() => {
                  const scrollContainer = document.querySelector('.h-screen.overflow-y-scroll');
                  if (scrollContainer) {
                    scrollContainer.scrollTo({
                      top: (idx + 1) * window.innerHeight,
                      behavior: "smooth",
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
            <div className="relative w-6 h-9 border-2 border-current rounded-full p-1">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-2 bg-current rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {projects.map((project, index) => (
        <section
          key={project.id}
          className="h-screen snap-start flex items-center justify-center relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative mt-32 lg:mt-0"
              >
                {/* Main image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-glass-surface-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Gallery thumbnails */}
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => openGallery(project.id)}
                      className="relative aspect-video rounded-lg overflow-hidden border border-glass-surface-border hover:border-primary/50 transition-all group cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} gallery ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >

                {/* Category & Year */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-glass-surface border border-glass-surface-border text-primary text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted">{project.year}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient">
                  {project.title}
                </h1>

                {/* Full description */}
                <p className="text-lg text-muted leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-glass-surface border border-glass-surface-border text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-6 py-3 rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-surface-border hover:border-primary/50 transition-all flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                  {project.links.website && project.links.website !== "#" && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-6 py-3 rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-surface-border hover:border-primary/50 transition-all flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Website</span>
                    </a>
                  )}
                  {project.links.demo && project.links.demo !== "#" && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-6 py-3 rounded-xl bg-gradient-main text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Project number indicator */}
                <div className="pt-6 text-sm text-muted">
                  Project {index + 1} of {projects.length}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          {index < projects.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div className="flex flex-col items-center gap-2 text-muted">
                <span className="text-xs font-medium uppercase tracking-wider">Next Project</span>
                <div className="relative w-6 h-9 border-2 border-current rounded-full p-1">
                  <motion.div
                    animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-2 bg-current rounded-full mx-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </section>
      ))}

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeGallery !== null && (() => {
          const project = projects.find(p => p.id === activeGallery);
          if (!project || !project.gallery.length) return null;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
              onClick={closeGallery}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 }}
                onClick={closeGallery}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all z-10 group"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Navigation buttons */}
              {project.gallery.length > 1 && (
                <>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.15 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(project.gallery.length);
                    }}
                    className="absolute left-4 md:left-8 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all z-10 group"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.15 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(project.gallery.length);
                    }}
                    className="absolute right-4 md:right-8 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all z-10 group"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </>
              )}

              {/* Image container */}
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait" custom={galleryIndex}>
                  <motion.div
                    key={galleryIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                  >
                    <Image
                      src={project.gallery[galleryIndex]}
                      alt={`${project.title} - Image ${galleryIndex + 1}`}
                      fill
                      className="object-contain rounded-lg"
                      quality={100}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-medium"
              >
                {galleryIndex + 1} / {project.gallery.length}
              </motion.div>

              {/* Project title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 md:top-10 left-6 md:left-10 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm md:text-base font-semibold"
              >
                {project.title}
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
