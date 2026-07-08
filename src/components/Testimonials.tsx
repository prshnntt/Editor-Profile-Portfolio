"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center">
          <span className="text-subtitle-lux text-brand-accent mb-3">
            Endorsements
          </span>
          <h2 className="text-section uppercase text-brand-text">
            What They Say
          </h2>
        </div>

        {/* Premium Testimonial Card with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative glass-panel p-8 md:p-14 flex flex-col text-left justify-center shadow-2xl overflow-hidden"
        >
          {/* Decorative Corner Accents */}
          <span className="absolute top-0 left-0 w-3 h-[1px] bg-brand-accent" />
          <span className="absolute top-0 left-0 w-[1px] h-3 bg-brand-accent" />
          <span className="absolute bottom-0 right-0 w-3 h-[1px] bg-brand-accent" />
          <span className="absolute bottom-0 right-0 w-[1px] h-3 bg-brand-accent" />
          
          <Quote size={60} className="absolute top-4 left-4 text-white/[0.01] pointer-events-none" />

          {/* Quote Body with exact text gap spacing */}
          <div className="flex flex-col gap-[20px] relative z-10">
            <blockquote className="text-body-lux italic text-brand-text font-light leading-relaxed tracking-wide">
              &ldquo;Prashant has an intuitive sense of timing that simply cannot be taught. He took our raw footage for the Porsche campaign and sculpted it into a breathless visual symphony. His work is efficient, elegant, and exceptionally premium.&rdquo;
            </blockquote>

            {/* Quote Author */}
            <div className="flex items-center gap-4">
              <span className="w-6 h-[1px] bg-brand-accent" />
              <div className="flex flex-col">
                <cite className="not-italic text-xs font-semibold tracking-widest uppercase text-brand-text">
                  Marcello Vance
                </cite>
                <span className="text-[10px] text-brand-text-sec mt-1 tracking-widest uppercase font-medium">
                  Creative Director &mdash; <span className="text-brand-accent/90">Vance Agency (Porsche Spot)</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-bottom" />
    </section>
  );
}
