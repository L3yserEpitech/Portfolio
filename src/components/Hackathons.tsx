"use client";

import { hackathons } from "@/data/mock";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Trophy } from "lucide-react";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-heading font-bold text-center md:text-left pt-[60px] md:mt-0"
          >
            Hackathons & <span className="text-gradient">Events</span>
          </motion.h2>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            href="#" 
            className="text-primary font-medium hover:underline flex items-center gap-2 text-lg"
          >
            View All Events
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-card-bg backdrop-blur-xl border border-glass-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Banner */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent opacity-90" />
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 text-yellow-500 text-xs font-bold flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {event.award}
                </div>
              </div>

              <div className="p-6 pt-2 relative z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors mt-2">{event.name}</h3>
                
                <div className="flex flex-col gap-2 mb-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
