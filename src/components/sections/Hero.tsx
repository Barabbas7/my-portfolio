"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24"
      id="home"
    >
      {/* Background glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(77,179,255,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,146,30,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Animated content */}
      <motion.div
        className="flex flex-col items-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-xs tracking-widest uppercase mb-5"
          style={{ color: "var(--color-cyan)" }}
        >
          Software Engineer · AASTU · Addis Ababa
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display font-semibold leading-none tracking-tight"
          style={{
            fontSize: "clamp(64px, 12vw, 96px)",
            color: "var(--color-near-white)",
            letterSpacing: "-0.03em",
          }}
        >
          Daniel
          <br />
          <span style={{ color: "var(--color-cyan)" }}>Kebede</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-10 h-0.5 rounded-full my-6"
          style={{
            background:
              "linear-gradient(90deg, var(--color-amber), var(--color-cyan))",
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-base max-w-sm leading-relaxed mb-10"
          style={{ color: "var(--color-chrome)" }}
        >
          Building systems that think, scale, and endure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex gap-3"
        >
          <a
            href="#work"
            className="relative px-6 py-3 rounded-lg text-sm font-display font-semibold overflow-hidden group"
            style={{
              background: "var(--color-cyan)",
              color: "var(--color-navy-deep)",
            }}
          >
            {/* Shimmer layer */}
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
              }}
            />
            <span className="relative z-10">View my work</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-sm font-display transition-colors duration-200"
            style={{
              border: "1px solid var(--color-steel)",
              color: "var(--color-chrome)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--color-cyan)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--color-steel)")
            }
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono text-xs tracking-widest opacity-60"
          style={{ color: "var(--color-cyan)" }}
        >
          scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(180deg, var(--color-cyan), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
