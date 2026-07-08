"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  target: number;
  suffix?: string;
}

function StatCounter({ target, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const end = target;
    const totalFrames = 60;
    let frame = 0;
    
    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.floor(end * (progress * (2 - progress)));
      setCount(current);
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-space font-bold text-3xl sm:text-4xl text-white">
      {count}{suffix}
    </span>
  );
}

const statsData = [
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 50, suffix: "+", label: "Projects" },
  { target: 10, suffix: "M+", label: "Views Generated" },
];

export default function Hero() {
  const handleWatchShowreel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#reel");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg px-6 md:px-12 py-24 lg:py-0 hero-grid"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[32px] items-center">
        
        {/* LEFT COLUMN: Typography Content */}
        <div className="lg:col-span-7 flex flex-col text-left justify-center">
          {/* Subtitle Label */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[12px] md:text-[14px] font-bold tracking-[0.3em] text-brand-accent uppercase font-space"
          >
            CINEMATIC VIDEO EDITOR
          </motion.span>

          {/* Heading Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] sm:text-[52px] md:text-[68px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight uppercase font-space mt-4 mb-6"
          >
            FILM &amp; VIDEO <br className="hidden sm:inline" />
            <span className="text-brand-accent">EDITOR</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[15px] sm:text-[16px] text-brand-text-sec leading-relaxed max-w-xl font-light font-space mb-8"
          >
            I create cinematic edits, travel films, commercial videos and YouTube content that keep viewers emotionally engaged.
          </motion.p>

          {/* Buttons: Watch Showreel & Contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={handleWatchShowreel}
              className="px-6 py-3.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 font-space cursor-pointer shadow-lg hover:shadow-brand-accent/20"
            >
              Watch Showreel
            </button>
            <button
              onClick={handleScrollToContact}
              className="px-6 py-3.5 border border-brand-accent hover:bg-brand-accent text-white text-[11px] font-bold tracking-widest uppercase transition-all duration-300 font-space cursor-pointer"
            >
              Let&apos;s Work Together
            </button>
          </motion.div>

          {/* Software Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"].map((software) => (
              <span
                key={software}
                className="border border-brand-border bg-white/[0.01] px-3.5 py-1.5 text-[9px] tracking-widest uppercase font-semibold text-brand-text-sec font-space"
              >
                {software}
              </span>
            ))}
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-t border-brand-border pt-8"
          >
            {statsData.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <StatCounter target={stat.target} suffix={stat.suffix} />
                <span className="text-[9px] tracking-widest uppercase text-brand-text-sec mt-2.5 font-semibold font-space">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Cinematic B&W Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Soft Dark Red Glow Behind Portrait (No blue) */}
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-brand-accent-sec/20 blur-[80px] pointer-events-none -z-10" />

          {/* Portrait Container - ~80% height of parent view */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[3/4] max-w-[360px] md:max-w-[380px] border border-brand-border p-2 bg-[#141414]/30 backdrop-blur-sm overflow-hidden"
          >
            {/* Minimal Leica Framing Corners */}
            <span className="absolute top-0 left-0 w-2.5 h-[1px] bg-brand-accent" />
            <span className="absolute top-0 left-0 w-[1px] h-2.5 bg-brand-accent" />
            <span className="absolute bottom-0 right-0 w-2.5 h-[1px] bg-brand-accent" />
            <span className="absolute bottom-0 right-0 w-[1px] h-2.5 bg-brand-accent" />

            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/hero_portrait.png"
                alt="Prashant Portrait - Cinematic Video Editor"
                fill
                className="object-cover filter grayscale contrast-[1.10] brightness-[0.8] hover:scale-[1.02] transition-transform duration-[1500ms] ease-out"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />

              {/* Faint Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent pointer-events-none" />

              {/* Smooth Bottom Gradient Fade */}
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
