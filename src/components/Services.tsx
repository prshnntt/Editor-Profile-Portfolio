"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Commercial Editing",
    desc: "High-impact visual narratives engineered for luxury brands and commercial spots.",
  },
  {
    num: "02",
    title: "Travel Films",
    desc: "Atmospheric wanderlust documentaries utilizing rhythmic pacing and ambient soundscapes.",
  },
  {
    num: "03",
    title: "Color Grading",
    desc: "Precision look development, skin tone matching, and cinematic grade mappings in DaVinci Resolve.",
  },
  {
    num: "04",
    title: "Motion Graphics",
    desc: "Sophisticated kinetic typography, minimal title treatments, and elegant overlay designs.",
  },
  {
    num: "05",
    title: "Social Media Content",
    desc: "Retention-optimized editing designed to captivate digital audiences within the first split second.",
  },
  {
    num: "06",
    title: "Documentary Editing",
    desc: "Pacing and narrative structuring that transforms real stories into compelling visual poetry.",
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-subtitle-lux text-brand-accent mb-3">
            Services &amp; Expertise
          </span>
          <h2 className="text-section uppercase text-brand-text">
            Editorial Services
          </h2>
        </div>

        {/* Elegant Service Rows list */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col border-t border-brand-border"
        >
          {services.map((service, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-[32px] border-b border-brand-border transition-all duration-500 hover:pl-4 ease-out cursor-default relative overflow-hidden"
            >
              {/* Subtle hover background accent glow */}
              <div className="absolute inset-0 bg-brand-accent/[0.01] -z-10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              {/* Service Number & Title (with strict 20px gap) */}
              <div className="flex items-center gap-[20px] text-left mb-4 md:mb-0">
                <span className="font-cinematic text-lg font-bold text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500">
                  {service.num}
                </span>
                <h3 className="font-cinematic text-[20px] md:text-[24px] font-bold tracking-widest text-brand-text group-hover:text-white transition-colors duration-500 uppercase">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <div className="md:max-w-xl text-left flex items-center justify-between gap-8 w-full md:w-auto">
                <p className="text-sm md:text-[15px] text-brand-text-sec group-hover:text-brand-text transition-colors duration-500 leading-relaxed font-light">
                  {service.desc}
                </p>
                <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-500 hidden md:block">
                  <ArrowUpRight size={16} className="text-brand-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-bottom" />
    </section>
  );
}
