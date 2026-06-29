"use client";

const projects = [
  {
    number: "01",
    featured: true,
    title: "Project Alpha",
    description:
      "A full-stack application that solves a real-world problem. Built with care for performance and user experience from the ground up.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    number: "02",
    featured: false,
    title: "Project Beta",
    description:
      "A backend system handling high-throughput data with efficient API design and caching strategies.",
    tags: ["Node.js", "Redis", "REST API"],
    link: "#",
  },
  {
    number: "03",
    featured: false,
    title: "Project Gamma",
    description:
      "A mobile-first web app with real-time features built for reliability and offline capability.",
    tags: ["React", "Firebase", "PWA"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="px-10 py-24"
      style={{ borderTop: "1px solid rgba(77,179,255,0.06)" }}
    >
      {/* Header */}
      <p
        className="font-mono text-xs tracking-widest uppercase mb-3"
        style={{ color: "var(--color-amber)" }}
      >
        Selected work
      </p>
      <h2
        className="font-display font-semibold text-4xl mb-12"
        style={{ color: "var(--color-near-white)", letterSpacing: "-0.02em" }}
      >
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.number}
            className={`relative rounded-xl p-6 transition-all duration-200 ${
              project.featured
                ? "md:col-span-2 grid md:grid-cols-2 gap-6 items-center"
                : ""
            }`}
            style={{
              background: "var(--color-navy-mid)",
              border: "1px solid rgba(77,179,255,0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(77,179,255,0.35)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(77,179,255,0.1)")
            }
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(77,179,255,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Number */}
              <p
                className="font-mono text-xs tracking-widest mb-3 opacity-70"
                style={{ color: "var(--color-cyan)" }}
              >
                {project.number} {project.featured && "— Featured"}
              </p>

              {/* Title */}
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "var(--color-near-white)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--color-chrome)" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: "rgba(77,179,255,0.08)",
                      border: "1px solid rgba(77,179,255,0.15)",
                      color: "var(--color-ice)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-xs font-display transition-opacity duration-150 hover:opacity-70"
                style={{ color: "var(--color-cyan)", textDecoration: "none" }}
              >
                View project →
              </a>
            </div>

            {/* Featured preview box */}
            {project.featured && (
              <div
                className="rounded-lg h-36 flex items-center justify-center"
                style={{
                  background: "var(--color-navy-deep)",
                  border: "1px solid rgba(77,179,255,0.08)",
                }}
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "rgba(77,179,255,0.3)" }}
                >
                  [ live preview ]
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
