"use client";

import { profile } from "@/data/mock";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-40 left-20 w-72 h-72 bg-primary/30 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] -z-10" 
      />

      <div className="container mx-auto px-6 text-center z-10 max-w-5xl">
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-main p-[2px] animate-pulse">
            <div className="w-full h-full rounded-full bg-background overflow-hidden relative">
              <Image 
                src="https://placehold.co/400x400/1e1e1e/FFF?text=Jules" 
                alt="Profile" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.1]"
        >
          Building the <br />
          <span className="text-gradient inline-block">Decentralized Future</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build decentralized applications and financial tools. Passionate about the intersection of finance and technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#projects"
            className="group px-8 py-4 rounded-xl bg-gradient-main text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-all font-semibold flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a 
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:border-primary/40 transition-all hover:-translate-y-1 text-muted hover:text-primary"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:border-primary/40 transition-all hover:-translate-y-1 text-muted hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:border-primary/40 transition-all hover:-translate-y-1 text-muted hover:text-primary"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
