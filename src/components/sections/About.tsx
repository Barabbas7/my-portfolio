import Container from "../ui/Container";

const stats = [
  { number: "5+", label: "Years coding" },
  { number: "10+", label: "Projects" },
  { number: "8+", label: "Languages" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-10 py-24"
      style={{ borderTop: "1px solid rgba(77,179,255,0.06)" }}
    >
      <Container>
        {/* Header */}
        <p
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--color-amber)" }}
        >
          Who I am
        </p>
        <h2
          className="font-display font-semibold text-4xl mb-12"
          style={{ color: "var(--color-near-white)", letterSpacing: "-0.02em" }}
        >
          About
        </h2>

        {/* Inner grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — avatar + stats */}
          <div className="flex flex-col items-center gap-4">
            {/* Avatar */}
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center font-display font-semibold text-4xl"
              style={{
                background: "var(--color-navy-mid)",
                border: "2px solid rgba(77,179,255,0.2)",
                color: "var(--color-cyan)",
              }}
            >
              DK
            </div>

            <p
              className="font-display font-semibold text-base"
              style={{ color: "var(--color-near-white)" }}
            >
              Daniel Kebede
            </p>
            <p
              className="font-mono text-xs tracking-wide"
              style={{ color: "var(--color-cyan)" }}
            >
              5th year · AASTU
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="font-display font-semibold text-2xl"
                    style={{ color: "var(--color-cyan)" }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-chrome)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div>
            {/* Amber accent line */}
            <div
              className="w-8 h-0.5 rounded-full mb-5"
              style={{ background: "var(--color-amber)" }}
            />

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-chrome)" }}
            >
              I'm a{" "}
              <span
                style={{ color: "var(--color-near-white)", fontWeight: 500 }}
              >
                5th year software engineering student at AASTU
              </span>{" "}
              in Addis Ababa, Ethiopia. I build things for the web — from fast,
              scalable backends to polished, interactive frontends.
            </p>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-chrome)" }}
            >
              My interest in engineering goes beyond writing code. I care about{" "}
              <span
                style={{ color: "var(--color-near-white)", fontWeight: 500 }}
              >
                systems thinking
              </span>{" "}
              — understanding how pieces connect, where things break, and how to
              build for the long run.
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-chrome)" }}
            >
              When I'm not coding, I'm thinking about the next problem worth
              solving.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
