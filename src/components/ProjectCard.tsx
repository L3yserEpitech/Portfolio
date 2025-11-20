"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-card-bg overflow-hidden hover:-translate-y-2 transition-all duration-500"
    >
      {/* Gradient Glow Effect behind card */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      
      {/* Main Card Content */}
      <div className="relative h-full bg-card-bg rounded-3xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Improved Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/60 to-transparent opacity-100" />
          
          {/* Tags floating on image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-black/60 dark:bg-black/50 backdrop-blur-md text-white border border-white/20 dark:border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Floating Action Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={project.link}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              View Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 pt-2 relative z-10">
          <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors mt-2">
            {project.title}
          </h3>
          
          <p className="text-muted text-sm line-clamp-2 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Arrow Link at bottom */}
          <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
            Read Case Study <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
