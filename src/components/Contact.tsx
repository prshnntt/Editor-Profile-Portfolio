"use client";

import { motion } from "framer-motion";

const links = [
  { name: "Email", href: "mailto:contact@prashantpeeramal.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "Behance", href: "https://behance.net" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center justify-center">
        
        {/* Content wrapper with strict 20px gap */}
        <div className="flex flex-col items-center justify-center text-center gap-[20px] max-w-3xl">
          {/* Subtitle */}
          <span className="text-subtitle-lux text-brand-accent">
            Get In Touch
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-section text-brand-text uppercase leading-tight"
          >
            Let&apos;s Create Something Cinematic.
          </motion.h2>
        </div>

        {/* Simple Social & Email Links - exactly 48px from content */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-[32px] mt-[48px]">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative py-1 text-xs tracking-widest uppercase font-semibold text-brand-text hover:text-brand-accent transition-colors duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
