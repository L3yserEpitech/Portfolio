"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.06]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, rgb(100, 149, 237) 1px, transparent 0)`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Gradient Orb 1 - Primary (Top Left) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px] dark:mix-blend-screen mix-blend-multiply"
      />
      
      {/* Gradient Orb 2 - Secondary (Top Right) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -30, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/15 blur-[120px] dark:mix-blend-screen mix-blend-multiply"
      />

      {/* Gradient Orb 3 - Accent (Bottom) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[60vw] rounded-full bg-accent/10 blur-[120px] dark:mix-blend-screen mix-blend-multiply"
      />

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
