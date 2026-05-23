"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Brief",
    blurb: "We talk goals, audience, deliverables, and ship date. You leave with a one-pager.",
    days: "1–2 days",
  },
  {
    n: "02",
    title: "Storyboard",
    blurb: "Frames + a written shot list. Approve before any pixel moves. No surprises.",
    days: "3–5 days",
  },
  {
    n: "03",
    title: "Animate",
    blurb: "Every scene built in code with Remotion + React. Real previews, real iterations.",
    days: "1–2 weeks",
  },
  {
    n: "04",
    title: "Deliver",
    blurb: "MP4 masters, cutdowns for every channel, source files, motion kit handover.",
    days: "1–2 days",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// process"
          title="How it ships."
          description="A four-step rhythm I've run on every project. Typical end-to-end: 3 weeks."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 border border-white/10 bg-white/[0.02]"
            >
              <div className="text-6xl font-black text-white/10 leading-none">
                {s.n}
              </div>
              <div className="mt-4 text-xs font-mono text-[#00D4FF] tracking-[0.3em] uppercase">
                {s.days}
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.blurb}</p>
              {/* Connector arrow on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-[#00D4FF]/60 text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
