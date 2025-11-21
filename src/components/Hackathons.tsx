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
              className="group relative rounded-3xl bg-card-bg overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Gradient Glow Effect behind card */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              
              {/* Main Card Content */}
              <div className="relative h-full bg-card-bg rounded-3xl overflow-hidden">
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Award Badge */}
                  {event.award && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 text-yellow-500 text-xs font-bold flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {event.award}
                    </div>
                  )}

                  {/* Floating Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href="#"
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
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

                  <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-6">
                    {event.description}
                  </p>

                  {/* Arrow Link at bottom */}
                  <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                    Read More <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
