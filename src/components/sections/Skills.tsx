import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "C++", level: 60 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Django", level: 65 },
    ],
  },
  {
    title: "Tools and platforms",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 72 },
      { name: "PostgreSQL", level: 78 },
      { name: "Linux", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-24"
      style={{
        background: "#0d1e35",
        borderTop: "1px solid rgba(77,179,255,0.06)",
      }}
    >
      <Container>
        {/* Header */}
        <ScrollReveal>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-amber)" }}
          >
            What I work with
          </p>
          <h2
            className="font-display font-semibold text-4xl mb-12"
            style={{
              color: "var(--color-near-white)",
              letterSpacing: "-0.02em",
            }}
          >
            Skills
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.1}>
              <div
                key={group.title}
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-navy-mid)",
                  border: "1px solid rgba(77,179,255,0.08)",
                }}
              >
                {/* Group title */}
                <p
                  className="font-display text-xs font-medium tracking-wide mb-4"
                  style={{ color: "var(--color-cyan)" }}
                >
                  {group.title}
                </p>

                {/* Skills */}
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-chrome)" }}
                      >
                        {skill.name}
                      </span>
                      <div
                        className="h-0.5 rounded-full overflow-hidden"
                        style={{
                          width: "80px",
                          background: "rgba(77,179,255,0.1)",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            background:
                              "linear-gradient(90deg, var(--color-steel), var(--color-cyan))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
