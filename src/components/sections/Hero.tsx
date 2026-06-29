"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
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

      {/* Eyebrow */}
      <p
        className="font-mono text-xs tracking-widest uppercase mb-5 relative z-10"
        style={{ color: "var(--color-cyan)" }}
      >
        Software Engineer · AASTU · Addis Ababa
      </p>

      {/* Name */}
      <h1
        className="font-display font-semibold leading-none tracking-tight relative z-10"
        style={{
          fontSize: "clamp(64px, 12vw, 96px)",
          color: "var(--color-near-white)",
          letterSpacing: "-0.03em",
        }}
      >
        Daniel
        <br />
        <span style={{ color: "var(--color-cyan)" }}>Kebede</span>
      </h1>

      {/* Divider */}
      <div
        className="w-10 h-0.5 rounded-full my-6 relative z-10"
        style={{
          background:
            "linear-gradient(90deg, var(--color-amber), var(--color-cyan))",
        }}
      />

      {/* Tagline */}
      <p
        className="text-base max-w-sm leading-relaxed mb-10 relative z-10"
        style={{ color: "var(--color-chrome)" }}
      >
        Building systems that think, scale, and endure.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 relative z-10">
        <a
          href="#work"
          className="px-6 py-3 rounded-lg text-sm font-display font-semibold transition-opacity duration-200 hover:opacity-90"
          style={{
            background: "var(--color-cyan)",
            color: "var(--color-navy-deep)",
          }}
        >
          View my work
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
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
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
      </div>
    </section>
  );
}
