"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { projects } from "@/data/mock";
import { motion } from "framer-motion";

import ScrollToTop from "@/components/ScrollToTop";

import TechMarquee from "@/components/TechMarquee";

import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground selection:bg-primary/30 relative">
      <Background />
      <Navbar />
      <ScrollToTop />
      
      <Hero />
      
      <TechMarquee />

      <Stats />

      <section id="projects" className="py-32 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-heading font-bold mb-4">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-muted max-w-lg">
                A selection of my recent work in DeFi, NFTs, and Fullstack Development.
              </p>
            </motion.div>
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              href="#" 
              className="text-primary font-medium hover:underline flex items-center gap-2 text-lg"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      
      <Services />

      <Experience />

      <Testimonials />

      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-6">
              Ready to <span className="text-gradient">Collaborate?</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
