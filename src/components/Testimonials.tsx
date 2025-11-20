"use client";

import { testimonials } from "@/data/mock";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-heading font-bold text-center mb-16"
        >
          Client <span className="text-gradient">Stories</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-8 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/20">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
