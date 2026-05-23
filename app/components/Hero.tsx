"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/ayo-intro.mp4"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-[0.4em] text-[#00D4FF] mb-6 uppercase"
        >
          // motion graphics creator
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-glow leading-none"
        >
          Launch videos
          <br />
          <span className="bg-gradient-to-r from-[#7B2FFF] to-[#00D4FF] bg-clip-text text-transparent">
            for SaaS & apps.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Frame-perfect motion design — written in code, not dragged from
          templates. Every keyframe, every pixel, built to ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D4FF] text-black font-semibold glow-cyan hover:scale-105 transition-transform"
          >
            Let&apos;s build something great →
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/90 hover:border-white hover:bg-white/5 transition-colors"
          >
            See the work
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          y: { delay: 1.6, duration: 1.8, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.3em] text-white/40"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
