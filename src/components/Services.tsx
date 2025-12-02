"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Blockchain & Web3",
    description: "Architecting the decentralized future. From secure Smart Contracts in Solidity & Move to complex DeFi protocols and NFT ecosystems. I build trustless infrastructure.",
    keywords: ["Solidity", "Move (SUI)", "Rust (Beginner)", "Cairo (Beginner)", "Passion for ecosystem"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Fullstack Engineering",
    description: "Building robust and scalable web applications. Mastering the entire stack from high-performance backends with Go/Node.js to responsive frontends with React/Next.js.",
    keywords: ["React/Next.js", "Node.js/NestJS", "PostgreSQL", "Microservices", "Cloud Native"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Mobile Development",
    description: "Crafting seamless mobile experiences. Native-like performance with cross-platform technologies for iOS and Android. Bringing your ideas to every pocket.",
    keywords: ["React Native", "iOS & Android", "Mobile UI/UX", "Performance", "Offline First"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    gradient: "from-orange-400 to-red-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-5xl font-heading font-bold text-center mb-24 pt-[60px] md:mt-0"
        >
          What I <span className="text-gradient">Do</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`} />
              
              <div className="relative h-full bg-card-bg backdrop-blur-xl border border-glass-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3 mt-auto">
                  {service.keywords.map((keyword, kIdx) => (
                    <motion.li 
                      key={keyword}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + (kIdx * 0.1) }}
                      className="flex items-center gap-3 text-sm text-muted group-hover:text-foreground transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {keyword}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
