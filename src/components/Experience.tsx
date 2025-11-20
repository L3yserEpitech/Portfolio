"use client";

import { experience } from "@/data/mock";
import { motion } from "framer-motion";
import { Briefcase, Clock } from "lucide-react";

export default function Experience() {
  // Separate current and past jobs
  const currentJobs = experience.filter((job) => job.period.includes("Present"));
  const pastJobs = experience.filter((job) => !job.period.includes("Present"));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl font-heading font-bold text-center mb-20 pt-[60px] md:mt-0"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Current Roles Section */}
          {currentJobs.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={cardVariants}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Briefcase className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary">Current Roles</h3>
                <motion.div 
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                  animate={{ 
                    borderColor: ["rgba(59,130,246,0.2)", "rgba(59,130,246,0.4)", "rgba(59,130,246,0.2)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-xs text-primary font-bold">Active</span>
                </motion.div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {currentJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="group relative h-full"
                  >
                    {/* Animated glow effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative glass-panel p-6 h-full border-glass-border hover:border-primary/40 transition-all duration-300 flex flex-col">
                      {/* Period badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                        {job.period}
                      </div>
                      
                      <motion.h4 
                        className="text-xl font-bold mb-3 pr-20 pt-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.15 + idx * 0.1 }}
                      >
                        {job.role}
                      </motion.h4>
                      
                      <motion.div 
                        className="text-primary font-semibold mb-4 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <Briefcase className="w-4 h-4" />
                        {job.company}
                      </motion.div>
                      
                      <motion.p 
                        className="text-muted text-sm leading-relaxed flex-grow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.15 + idx * 0.1 }}
                      >
                        {job.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Previous Experience Section */}
          {pastJobs.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={cardVariants}
                className="flex items-center gap-3 mb-8"
              >
                <motion.div
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-6 h-6 text-muted" />
                </motion.div>
                <h3 className="text-2xl font-bold text-muted">Previous Experience</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-muted/20 to-transparent" />
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 gap-6 mb-12"
                variants={containerVariants}
              >
                {pastJobs.map((job, idx) => (
                  <motion.div
                    key={job.id}
                    variants={cardVariants}
                    whileHover={{ 
                      x: 4,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="glass-panel p-6 border-foreground/5 hover:border-muted/20 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <motion.h4 
                          className="text-xl font-bold mb-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.1 }}
                        >
                          {job.role}
                        </motion.h4>
                        <motion.div 
                          className="text-muted font-medium mb-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.15 }}
                        >
                          {job.company}
                        </motion.div>
                        <motion.p 
                          className="text-muted text-sm leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.15 }}
                        >
                          {job.description}
                        </motion.p>
                      </div>
                      <span className="inline-block px-4 py-2 rounded-full bg-foreground/5 text-muted text-sm font-semibold whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Horizontal Timeline Bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline container */}
                <div className="relative h-20 flex items-center">
                  {/* Base line */}
                  <div className="absolute inset-0 flex items-start pt-4">
                    <div className="w-full h-1 bg-foreground/20 rounded-full" />
                  </div>

                  {/* Timeline points for each past job */}
                  <div className="relative w-full flex justify-between items-center px-4">
                    {pastJobs.map((job, idx) => (
                      <motion.div
                        key={job.id}
                        initial={{ scale: 0, y: 20 }}
                        whileInView={{ scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ 
                          delay: 0.5 + idx * 0.2, 
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.3,
                          y: -5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        className="flex flex-col items-center cursor-pointer"
                      >
                        {/* Dot */}
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-muted border-4 border-background shadow-lg mb-2"
                          whileHover={{ 
                            boxShadow: "0 0 20px rgba(156, 163, 175, 0.6)",
                            borderColor: "rgba(156, 163, 175, 0.8)"
                          }}
                        />
                        
                        {/* Year label */}
                        <motion.div 
                          className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10"
                          whileHover={{ 
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            scale: 1.05
                          }}
                        >
                          <span className="text-xs font-semibold text-muted whitespace-nowrap">
                            {job.period}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                    
                    {/* Arrow pointing to "now" */}
                    <motion.div
                      initial={{ scale: 0, y: 20 }}
                      whileInView={{ scale: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ 
                        delay: 0.5 + pastJobs.length * 0.2, 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.3,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 mb-2 relative"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(59,130,246,0.5)",
                            "0 0 30px rgba(59,130,246,0.8)",
                            "0 0 20px rgba(59,130,246,0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-75" />
                      </motion.div>
                      <motion.div 
                        className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30"
                        whileHover={{ 
                          backgroundColor: "rgba(59, 130, 246, 0.3)",
                          scale: 1.05
                        }}
                      >
                        <span className="text-xs font-bold text-primary">Now</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
