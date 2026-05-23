"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "dannyjayr776@gmail.com";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // no-op
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden border-t border-white/5"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,0,0,0) 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-[0.4em] text-[#00D4FF] uppercase"
        >
          // start a project
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-6xl md:text-8xl font-black tracking-tighter text-glow leading-none"
        >
          Let&apos;s build
          <br />
          <span className="bg-gradient-to-r from-[#7B2FFF] to-[#00D4FF] bg-clip-text text-transparent">
            something great →
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg text-white/60 max-w-xl mx-auto"
        >
          Briefs, decks, half-formed ideas — all welcome. Reply within 24h on
          weekdays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={`mailto:${email}?subject=Project%20with%20Ayo`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D4FF] text-black font-semibold glow-cyan hover:scale-105 transition-transform"
          >
            {email} →
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white/80 hover:border-white hover:bg-white/5 transition-colors text-sm"
          >
            {copied ? "✓ copied" : "Copy email"}
          </button>
        </motion.div>

        {/* Socials — placeholder removed; add real handles later */}
      </div>
    </section>
  );
}
