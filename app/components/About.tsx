"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { n: "247+", label: "Shipped projects" },
  { n: "30M+", label: "Frames rendered" },
  { n: "60", label: "FPS, every time" },
  { n: "100%", label: "Code, no templates" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="// about"
            title={
              <>
                Code-first
                <br />
                <span className="bg-gradient-to-r from-[#7B2FFF] to-[#00D4FF] bg-clip-text text-transparent">
                  motion design.
                </span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-5 text-white/70 text-lg leading-relaxed"
          >
            <p>
              I&apos;m Ayo — a motion graphics creator who treats video like
              software. Every project ships from a git repo, every keyframe is a
              function, every render is reproducible.
            </p>
            <p>
              That means faster iterations, cleaner deliverables, and motion
              systems your team can actually reuse — not throwaway After Effects
              files you&apos;ll never open again.
            </p>
            <p>
              Working remote from anywhere, currently shipping for SaaS, fintech,
              and AI teams in EU/US timezones.
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 border border-white/10 bg-white/[0.02] hover:border-[#00D4FF]/40 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-glow-cyan leading-none">
                {s.n}
              </div>
              <div className="mt-3 font-mono text-xs tracking-[0.3em] uppercase text-white/50">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
