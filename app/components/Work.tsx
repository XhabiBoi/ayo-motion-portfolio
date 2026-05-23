"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  client: string;
  tags: string[];
  gradient: string;
  /** Optional video preview (loops on hover). Drop files into public/work/. */
  video?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Analytics Launch Film",
    client: "Lumen SaaS",
    tags: ["Launch", "Product"],
    gradient: "from-[#7B2FFF] to-[#00D4FF]",
  },
  {
    title: "Onboarding Sizzle",
    client: "Drift Apps",
    tags: ["Motion", "UI"],
    gradient: "from-[#FF2F8A] to-[#7B2FFF]",
  },
  {
    title: "Brand Reveal",
    client: "Nova Studios",
    tags: ["Identity", "Title"],
    gradient: "from-[#00D4FF] to-[#42E9F5]",
  },
  {
    title: "Payments Explainer",
    client: "Ledger Pro",
    tags: ["Explainer", "Animation"],
    gradient: "from-[#FFB800] to-[#FF2F8A]",
  },
  {
    title: "AI Product Trailer",
    client: "Synthesis",
    tags: ["AI", "Trailer"],
    gradient: "from-[#22DD88] to-[#00D4FF]",
  },
  {
    title: "Conference Loop",
    client: "Frame 2026",
    tags: ["Event", "Loop"],
    gradient: "from-[#7B2FFF] to-[#FF2F8A]",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="// selected work"
          title="Shipped motion."
          description="A snapshot of recent launch films, product explainers, and brand reveals. Hover a card to peek."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] aspect-[4/5] block"
            >
              {/* Visual */}
              {p.video ? (
                <video
                  src={p.video}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                >
                  {/* placeholder geometric motif */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/30 font-black text-[140px] select-none">
                      {p.client[0]}
                    </div>
                  </div>
                </div>
              )}

              {/* Gradient fade for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Tags */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[10px] font-mono tracking-widest uppercase text-white/80 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title block */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xs font-mono text-[#00D4FF] uppercase tracking-[0.3em]">
                  {p.client}
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">
                  {p.title} →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
