"use client";

import { motion } from "framer-motion";

const technologies = [
  "Ethereum", "Solidity", "React", "Next.js", "TypeScript", 
  "Node.js", "Hardhat", "Ethers.js", "IPFS", "Graph Protocol",
  "Tailwind CSS", "Docker", "PostgreSQL", "Framer Motion"
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 bg-background/50 backdrop-blur-sm border-y border-glass-border">
      <div className="flex relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: [0, -1035], // Approximate width of content
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl font-heading font-bold text-muted/50 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
