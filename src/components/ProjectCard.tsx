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
      className="group relative rounded-3xl bg-card-bg backdrop-blur-xl border border-glass-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        
        {/* Floating Action Button on Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.link}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 flex items-center gap-2 shadow-lg"
          >
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 relative">
        {/* Gradient Border Top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="mb-4">
          <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-glass-surface text-muted border border-glass-surface-border group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-muted text-sm line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
