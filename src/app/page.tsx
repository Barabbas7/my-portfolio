export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Eyebrow */}
      <p
        className="text-xs font-mono tracking-widest uppercase mb-4"
        style={{ color: "var(--color-cyan)" }}
      >
        Software Engineer · AASTU · Addis Ababa
      </p>

      {/* Name */}
      <h1
        className="text-6xl font-display font-semibold leading-tight tracking-tight text-center mb-2"
        style={{ color: "var(--color-near-white)" }}
      >
        Daniel Kebede
      </h1>

      {/* Amber divider line */}
      <div
        className="w-10 h-0.5 my-6 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-amber), var(--color-cyan))",
        }}
      />

      {/* Tagline */}
      <p
        className="text-lg text-center max-w-md leading-relaxed"
        style={{ color: "var(--color-chrome)" }}
      >
        Building systems that think, scale, and endure.
      </p>
    </main>
  );
}
