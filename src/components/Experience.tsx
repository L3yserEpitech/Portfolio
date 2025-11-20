"use client";

import { experience } from "@/data/mock";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-16"
        >
          Professional <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative border-l border-primary/20 pl-8 space-y-12">
          {experience.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
              
              <div className="glass-panel p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary w-fit">
                    {job.period}
                  </span>
                </div>
                <div className="text-primary font-medium mb-2">{job.company}</div>
                <p className="text-muted text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
