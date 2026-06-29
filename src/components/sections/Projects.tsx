"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

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
      className="py-24"
      style={{ borderTop: "1px solid rgba(77,179,255,0.06)" }}
    >
      <Container>
        <ScrollReveal>
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-amber)" }}
          >
            Selected work
          </p>
          <h2
            className="font-display font-semibold text-4xl mb-12"
            style={{
              color: "var(--color-near-white)",
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.number}
              delay={index * 0.1}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <motion.div
                className={`relative rounded-xl p-6 h-full cursor-pointer ${
                  project.featured
                    ? "grid md:grid-cols-2 gap-6 items-center"
                    : ""
                }`}
                style={{
                  background: "var(--color-navy-mid)",
                  border: "1px solid rgba(77,179,255,0.1)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(77,179,255,0.4)",
                  transition: { duration: 0.2 },
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.background = `
      radial-gradient(200px circle at ${x}px ${y}px,
      rgba(77,179,255,0.06),
      transparent 60%),
      var(--color-navy-mid)
    `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-navy-mid)";
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(77,179,255,0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <p
                    className="font-mono text-xs tracking-widest mb-3 opacity-70"
                    style={{ color: "var(--color-cyan)" }}
                  >
                    {project.number} {project.featured && "— Featured"}
                  </p>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "var(--color-near-white)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-chrome)" }}
                  >
                    {project.description}
                  </p>
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
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs font-display transition-opacity duration-150 hover:opacity-70"
                    style={{
                      color: "var(--color-cyan)",
                      textDecoration: "none",
                    }}
                  >
                    View project →
                  </a>
                </div>
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
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
