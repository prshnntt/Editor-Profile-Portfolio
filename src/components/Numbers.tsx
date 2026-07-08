"use client";

import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  target: number;
  duration: number;
  suffix?: string;
}

function Counter({ target, duration, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const end = target;
    const totalFrames = Math.min(Math.floor(duration * 60), 120);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(end * (progress * (2 - progress)));
      setCount(currentCount);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-cinematic text-[54px] md:text-[64px] font-extrabold tracking-tight text-brand-text leading-none select-none">
      {count}
      <span className="text-brand-accent">{suffix}</span>
    </span>
  );
}

const stats = [
  { target: 100, suffix: "+", label: "Projects" },
  { target: 25, suffix: "M+", label: "Views" },
  { target: 5, suffix: "+", label: "Years" },
  { target: 50, suffix: "+", label: "Clients" },
];

export default function Numbers() {
  return (
    <section className="py-[140px] bg-brand-bg px-6 md:px-12 relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] text-center">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              {/* Counter */}
              <Counter target={stat.target} duration={1.0} suffix={stat.suffix} />
              
              {/* Minimal Label - exact 20px gap */}
              <h4 className="text-subtitle-lux text-brand-text-sec mt-[20px] font-semibold">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-bottom" />
    </section>
  );
}
