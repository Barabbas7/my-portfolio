"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Container from "@/components/ui/Container";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "C++", level: 60 },
      { name: "Dart", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "FastAPI", level: 65 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Node.js", level: 50 },
    ],
  },
  {
    title: "Tools and platforms",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Docker", level: 72 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase & Firestore", level: 80 },
      { name: "Git, Github & GitLab", level: 90 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex items-center justify-between gap-4">
      <span className="text-sm" style={{ color: "var(--color-chrome)" }}>
        {name}
      </span>
      <div
        className="h-0.5 rounded-full overflow-hidden"
        style={{
          width: "80px",
          background: "rgba(77,179,255,0.1)",
          flexShrink: 0,
        }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-steel), var(--color-cyan))",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${level}%` } : { width: "0%" }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="Skills"
      className="py-24"
      style={{
        background: "#0d1e35",
        borderTop: "1px solid rgba(77,179,255,0.06)",
      }}
    >
      <Container>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.title} delay={groupIndex * 0.1}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "var(--color-navy-mid)",
                  border: "1px solid rgba(77,179,255,0.08)",
                }}
              >
                <p
                  className="font-display text-xs font-medium tracking-wide mb-4"
                  style={{ color: "var(--color-cyan)" }}
                >
                  {group.title}
                </p>
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={groupIndex * 0.1 + skillIndex * 0.08}
                    />
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
