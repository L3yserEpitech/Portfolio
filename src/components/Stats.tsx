"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "20+" },
  { label: "Smart Contracts", value: "50+" },
  { label: "Commits Pushed", value: "1.5k+" },
];

export default function Stats() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
