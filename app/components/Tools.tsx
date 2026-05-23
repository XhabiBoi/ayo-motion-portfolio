"use client";

import { motion } from "framer-motion";

const TOOLS = [
  { name: "REACT", color: "#61DAFB" },
  { name: "TYPESCRIPT", color: "#3178C6" },
  { name: "REMOTION", color: "#42E9F5" },
  { name: "GLSL", color: "#7B2FFF" },
  { name: "FFMPEG", color: "#5CB85C" },
  { name: "WEBGL", color: "#990000" },
  { name: "FIGMA", color: "#F24E1E" },
  { name: "BLENDER", color: "#F5792A" },
];

export function Tools() {
  return (
    <section className="relative py-20 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-xs font-mono tracking-[0.4em] text-white/40 uppercase">
            // stack
          </div>
          <p className="mt-3 text-white/70">
            Every frame written, not dragged. Powered by:
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TOOLS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="px-5 py-3 rounded-lg border bg-white/[0.02] font-mono text-sm tracking-[0.2em] font-bold"
              style={{
                borderColor: t.color,
                color: t.color,
                boxShadow: `0 0 16px ${t.color}33`,
              }}
            >
              {t.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
