"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, X, Volume2, VolumeX, RotateCcw, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-cinematic-foggy-pine-forest-and-mountain-lake-43184-large.mp4";

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setProgress(0);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Video auto play prevented:", err));
      }
    }, 400);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsOpen(false);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newProgress = parseFloat(e.target.value);
    const duration = videoRef.current.duration;
    if (duration) {
      videoRef.current.currentTime = (newProgress / 100) * duration;
      setProgress(newProgress);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section id="reel" className="py-[140px] bg-brand-bg relative overflow-hidden border-t border-brand-border">
      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-top" />

      {/* Full-width widescreen video frame container */}
      <div className="w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={handleOpen}
          className="relative w-full aspect-[21/9] min-h-[350px] md:min-h-[480px] lg:min-h-[580px] bg-[#121212] border-y border-brand-border overflow-hidden group cursor-pointer shadow-2xl"
        >
          {/* Background Image Cover */}
          <div className="relative w-full h-full">
            <Image
              src="/images/reel_placeholder.png"
              alt="Cinematic edit showreel thumbnail"
              fill
              className="object-cover transition-transform duration-[1000ms] scale-100 group-hover:scale-[1.03] filter brightness-[0.55] group-hover:brightness-[0.65]"
              sizes="100vw"
              priority
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-brand-accent/5 mix-blend-color group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-transparent to-[#090909]/40" />
          </div>

          {/* Reel Play Text Overlay (Minimal text in bottom left) */}
          <div className="absolute bottom-10 left-6 md:left-16 z-10 text-left">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent mb-3 font-semibold">
              Showreel / 02:40
            </p>
            <h3 className="font-cinematic text-2xl md:text-3xl font-extrabold tracking-widest text-brand-text leading-none uppercase">
              THE SCOPE OF EDITING
            </h3>
          </div>

          {/* Elegant Play Button in Center */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative flex items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute w-24 h-24 border border-brand-accent/25 rounded-full scale-100 group-hover:scale-115 group-hover:border-brand-accent/50 transition-all duration-700 pointer-events-none" />
              <div className="absolute w-16 h-16 border border-brand-accent/35 rounded-full scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

              <div className="w-14 h-14 rounded-full bg-[#090909]/95 border border-brand-border group-hover:border-brand-accent group-hover:bg-brand-accent flex items-center justify-center transition-all duration-500 shadow-2xl">
                <Play size={14} className="fill-brand-text text-brand-text ml-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Immersive Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#090909]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0" onClick={handleClose} />

            {/* Video Container Card */}
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#121212] border border-brand-border z-10 aspect-video flex flex-col justify-end"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-[-44px] right-0 flex items-center gap-2 text-brand-text-sec hover:text-brand-text font-semibold uppercase tracking-widest text-[10px] transition-colors py-2 cursor-pointer"
              >
                <span>Close</span>
                <X size={14} />
              </button>

              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={videoUrl}
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={handlePlayPause}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Custom Timeline Controls Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent p-4 flex flex-col gap-3 pointer-events-auto">
                
                {/* Timeline Scrubber */}
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleScrub}
                    className="w-full h-1 bg-white/10 appearance-none cursor-pointer rounded accent-brand-accent hover:h-1.5 transition-all outline-none"
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={handlePlayPause}
                      className="text-brand-text hover:text-brand-accent text-[10px] font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button
                      onClick={restartVideo}
                      className="text-brand-text-sec hover:text-brand-text flex items-center gap-1 transition-colors cursor-pointer"
                      title="Replay"
                    >
                      <RotateCcw size={12} />
                    </button>
                    <button
                      onClick={toggleMute}
                      className="text-brand-text-sec hover:text-brand-text flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      <span className="text-[10px] uppercase font-semibold tracking-widest">
                        {isMuted ? "Unmute" : "Muted"}
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-brand-text-sec text-[10px] tracking-widest uppercase font-semibold">
                    <span>Cinematic Player v1.0</span>
                    <Maximize2 size={12} />
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Divider connection line (Film Axis) */}
      <div className="film-axis film-axis-bottom" />
    </section>
  );
}
