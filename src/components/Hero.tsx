"use client";

import { profile } from "@/data/mock";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Code2, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [hoveredCoin, setHoveredCoin] = useState<string | null>(null);
  const [activeCoin, setActiveCoin] = useState<string>('btc');

  const coins = ['btc', 'pol', 'eth', 'usdc', 'avax', 'cosmos'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCoin((prev) => {
        const currentIndex = coins.indexOf(prev);
        const nextIndex = (currentIndex + 1) % coins.length;
        return coins[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shouldBlur = (coinId: string) => {
    if (hoveredCoin) {
      return hoveredCoin !== coinId;
    }
    return activeCoin !== coinId;
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: false }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
        animate={{
          opacity: 0.15,
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Crypto Coins - Temporarily disabled */}
      {/* 
      <motion.div
        className="hidden xl:block absolute top-28 left-20 w-28 h-28 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        onHoverStart={() => setHoveredCoin('btc')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('btc') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('btc') ? 0.5 : 1,
        }}
      >
        <Image src="/btc.png" alt="Bitcoin" width={112} height={112} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-16 w-24 h-24 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        onHoverStart={() => setHoveredCoin('pol')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('pol') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('pol') ? 0.5 : 1,
        }}
      >
        <Image src="/pol.png" alt="Polygon" width={96} height={96} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute bottom-28 left-20 w-24 h-24 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        onHoverStart={() => setHoveredCoin('cosmos')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('cosmos') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('cosmos') ? 0.5 : 1,
        }}
      >
        <Image src="/cosmos.png" alt="Cosmos" width={96} height={96} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-28 right-20 w-32 h-32 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        onHoverStart={() => setHoveredCoin('eth')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('eth') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('eth') ? 0.5 : 1,
        }}
      >
        <Image src="/eth.png" alt="Ethereum" width={128} height={128} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute top-1/2 -translate-y-1/2 right-16 w-24 h-24 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        onHoverStart={() => setHoveredCoin('usdc')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('usdc') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('usdc') ? 0.5 : 1,
        }}
      >
        <Image src="/usdc.png" alt="USDC" width={96} height={96} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="hidden xl:block absolute bottom-28 right-20 w-28 h-28 cursor-pointer transition-all duration-300"
        animate={{ y: [0, -19, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        onHoverStart={() => setHoveredCoin('avax')}
        onHoverEnd={() => setHoveredCoin(null)}
        style={{
          filter: shouldBlur('avax') ? 'blur(4px)' : 'blur(0px)',
          opacity: shouldBlur('avax') ? 0.5 : 1,
        }}
      >
        <Image src="/avax.png" alt="Avalanche" width={112} height={112} className="drop-shadow-lg" />
      </motion.div>
      */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl">
            
            {/* Badge with glass effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass-surface backdrop-blur-xl border border-glass-surface-border text-primary text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Web3 Developer & Blockchain Enthusiast
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-[1.1]"
            >
              <span className="block mb-2">Hi, I'm Jules</span>
              <span className="text-gradient">Building the Future</span>
              <br />
              <span className="text-gradient inline-flex items-center gap-3 align-middle">
                of Finance
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Image src="/btc.png" alt="Bitcoin" width={72} height={72} className="drop-shadow-lg object-contain" />
                </motion.div>
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-2xl"
            >
              3rd year student at <span className="text-primary font-semibold">Epitech</span>, specializing in fullstack development and blockchain technology. I create decentralized applications that bridge traditional finance with Web3.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
            >
              <a 
                href="#projects"
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-main text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-glass-surface backdrop-blur-xl border-2 border-glass-surface-border hover:border-primary/50 hover:bg-glass-surface transition-all font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links with glass */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a 
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-surface-border hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <Github className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              </a>
              <a 
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-surface-border hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              </a>
              <a 
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-glass-surface backdrop-blur-xl border border-glass-surface-border hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-0"
          >
            {/* Main image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20">
              <Image 
                src="/photojules.jpg" 
                alt="Jules - Web3 Developer" 
                fill
                className="object-cover object-[50%_60%]"
                priority
                style={{
                  maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Floating badge with glass effect */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="-mt-4 px-6 py-3 rounded-full bg-glass-surface backdrop-blur-xl border border-glass-surface-border shadow-xl flex items-center gap-2"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold">Available for work</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
