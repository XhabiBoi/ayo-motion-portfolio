"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const SERVICES = [
  {
    icon: "▶",
    title: "Launch Videos",
    blurb:
      "60–90 second hero films for product launches, feature drops, and seed announcements. Direction, design, animation, and final delivery.",
    bullets: ["Storyboard + script", "Voiceover sync", "Music & SFX", "Master + cutdowns"],
  },
  {
    icon: "◆",
    title: "Product Demos",
    blurb:
      "Show, don't tell. Pixel-perfect UI animation that walks users through what your product actually does in 30 seconds.",
    bullets: ["Real UI captures", "Motion overlays", "Captioned for mute", "Social-ready aspects"],
  },
  {
    icon: "✦",
    title: "Motion Identity",
    blurb:
      "Logo reveals, transitions, lower thirds, and a kit of reusable motion components that keeps your brand alive across every video.",
    bullets: ["Logo animation", "Lower thirds", "Brand transitions", "Component library"],
  },
  {
    icon: "{ }",
    title: "Custom Remotion Builds",
    blurb:
      "Programmatic video at scale. Data-driven slate generators, personalized renders, automated social cuts — built with React.",
    bullets: ["React + Remotion", "Data-driven scenes", "Render pipelines", "Open-source friendly"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// services"
          title="What I make."
          description="Four offers, each priced and scoped clearly. Mix and match for a full motion system."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative rounded-2xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00D4FF]/40 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-xl border border-[#00D4FF]/40 text-[#00D4FF] flex items-center justify-center text-2xl font-bold glow-cyan">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{s.blurb}</p>
                </div>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-white/70 font-mono text-xs tracking-wider"
                  >
                    <span className="text-[#00D4FF]">→</span> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
