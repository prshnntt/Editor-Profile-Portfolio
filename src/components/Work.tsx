"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rhythm of Speed",
    category: "Commercial Ads",
    year: "2025",
    client: "Porsche",
    thumbnail: "/images/work_1.png",
    specs: { ratio: "2.39:1", camera: "RED V-Raptor" },
  },
  {
    title: "Echoes of Silence",
    category: "Music Videos",
    year: "2025",
    client: "Lana Del Rey",
    thumbnail: "/images/work_2.png",
    specs: { ratio: "1.85:1", camera: "ARRI Alexa Mini" },
  },
  {
    title: "Nordic Solitude",
    category: "Travel Films",
    year: "2024",
    client: "National Geographic",
    thumbnail: "/images/work_3.png",
    specs: { ratio: "2.39:1", camera: "Sony FX9" },
  },
  {
    title: "Chronicles of Precision",
    category: "Brand Storytelling",
    year: "2025",
    client: "Rolex",
    thumbnail: "/images/work_4.png",
    specs: { ratio: "16:9", camera: "ARRI Alexa 35" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function Work() {
  return (
    <section id="work" className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-subtitle-lux text-brand-accent mb-3">
            Selected Projects
          </span>
          <h2 className="text-section uppercase text-brand-text">
            Selected Work
          </h2>
        </div>

        {/* 2-Column Grid with strict 32px (gap-8) gap, staggered layout on medium screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px] pb-[60px]"
        >
          {projects.map((project, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className={`flex flex-col group cursor-pointer ${
                idx % 2 === 1 ? "md:translate-y-[60px]" : ""
              }`}
            >
              {/* Cinematic Thumbnail Box - widescreen cinematic aspect-ratio */}
              <div className="relative aspect-[16/9] w-full bg-[#121212] border border-brand-border overflow-hidden">
                
                {/* Specs Overlay - elegant and subtle */}
                <div className="absolute top-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[9px] tracking-widest uppercase bg-[#090909]/90 text-brand-text px-2.5 py-1 border border-white/5 font-semibold">
                    {project.specs.camera}
                  </span>
                  <span className="text-[9px] tracking-widest uppercase bg-[#090909]/90 text-brand-text px-2.5 py-1 border border-white/5 font-semibold">
                    {project.specs.ratio}
                  </span>
                </div>

                {/* Poster Image with Zoom on hover */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} - Edited by Prashant`}
                    fill
                    className="object-cover transition-transform duration-800 ease-out scale-100 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.85]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-brand-accent/5 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Elegant Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-11 h-11 rounded-full border border-white/10 bg-[#090909]/80 backdrop-blur-sm flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-500 z-20">
                  <ArrowUpRight size={16} className="text-brand-text" />
                </div>
              </div>

              {/* Text Area - exactly 20px (mt-[20px]) Gap from thumbnail */}
              <div className="flex justify-between items-start mt-[20px]">
                <div className="flex flex-col text-left">
                  <h3 className="font-cinematic text-lg md:text-xl font-bold tracking-wide text-brand-text group-hover:text-brand-accent transition-colors duration-300 leading-snug uppercase">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-semibold text-brand-accent tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="w-1.5 h-[1px] bg-brand-border" />
                    <span className="text-[10px] font-medium text-brand-text-sec tracking-widest uppercase">
                      {project.client}
                    </span>
                  </div>
                </div>
                
                <span className="font-cinematic text-sm text-brand-text-sec/60 font-semibold tracking-wider pt-0.5">
                  &apos;{project.year.slice(2)}
                </span>
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
