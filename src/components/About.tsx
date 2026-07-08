"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-center">
          
          {/* Left Column - Professional Portrait */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Shadow glow */}
            <div className="absolute top-[30%] left-[30%] w-[250px] h-[250px] bg-brand-accent/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] max-w-[380px] border border-brand-border p-2 bg-brand-bg-card overflow-hidden group"
            >
              {/* Corner Accents */}
              <span className="absolute top-0 right-0 w-3 h-[1px] bg-brand-accent" />
              <span className="absolute top-0 right-0 w-[1px] h-3 bg-brand-accent" />
              <span className="absolute bottom-0 left-0 w-3 h-[1px] bg-brand-accent" />
              <span className="absolute bottom-0 left-0 w-[1px] h-3 bg-brand-accent" />

              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/about_portrait.png"
                  alt="Prashant Portrait - Cinematic Editor"
                  fill
                  className="object-cover transition-transform duration-800 group-hover:scale-103 filter brightness-[0.75] group-hover:brightness-[0.85]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Short Introduction with Large Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col gap-[20px] text-left">
              <span className="text-subtitle-lux text-brand-accent">
                Behind the Cuts
              </span>
              <h2 className="text-section uppercase text-brand-text">
                About Prashant
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-body-lux text-brand-text font-light leading-relaxed space-y-[20px]"
              >
                <p>
                  Prashant is an award-winning cinematic editor and visual storyteller who crafts films that resonate. Drawing inspiration from the precision of luxury design, modern architecture, and the emotional depth of independent cinema, he sculpts pacing, soundscapes, and color to forge deep connections between screen and soul.
                </p>
                <p className="text-brand-text-sec font-light">
                  Over the past five years, he has partnered with global brands like Porsche and Rolex, translating raw footage into high-impact visual poetry that commands attention and stays with the audience long after the screen goes dark.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-bottom" />
    </section>
  );
}
