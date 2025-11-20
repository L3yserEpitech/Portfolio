"use client";

import { skills } from "@/data/mock";
import { motion } from "framer-motion";
import Image from "next/image";

const skillIcons: Record<string, string> = {
  "Solidity": "https://cdn.simpleicons.org/solidity/FFFFFF",
  "Move (SUI)": "https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg?1696525455",
  "Rust (Beginner)": "https://cdn.simpleicons.org/rust/FFFFFF",
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Go": "https://cdn.simpleicons.org/go/00ADD8",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  "GORM": "https://cdn.simpleicons.org/go/00ADD8",
  "Prisma": "https://cdn.simpleicons.org/prisma/FFFFFF",
  "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "NestJS": "https://cdn.simpleicons.org/nestjs/E0234E",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-5xl font-heading font-bold text-center mb-20 pt-[60px] md:mt-0"
        >
          Technical <span className="text-gradient">Arsenal</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skills.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-card-bg backdrop-blur-xl border border-glass-border rounded-2xl p-8 h-full">
                <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.1 + itemIdx * 0.05 }}
                      className="flex flex-col items-center gap-3 group/item"
                    >
                      <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-glass-surface border border-glass-surface-border group-hover/item:border-primary/50 group-hover/item:bg-primary/10 transition-all duration-300 group-hover/item:-translate-y-1 group-hover/item:shadow-lg group-hover/item:shadow-primary/20">
                        <div className="relative w-8 h-8">
                          {skillIcons[item] ? (
                            <Image 
                              src={skillIcons[item]} 
                              alt={item} 
                              fill 
                              className="object-contain drop-shadow-lg"
                              unoptimized
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-500 rounded-full" />
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted group-hover/item:text-white transition-colors text-center">
                        {item.replace(" (Beginner)", "").replace(" (SUI)", "")}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
