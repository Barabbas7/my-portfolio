"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ScrollReveal from "../ui/ScrollReveal";

const socials = [
  {
    icon: "→",
    label: "github.com/Barabbas7",
    href: "https://github.com/Barabbas7",
  },
  { icon: "→", label: "linkedin.com/in/danielkebede", href: "#" },
  { icon: "→", label: "daniel@email.com", href: "mailto:daniel@email.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputStyle = {
    background: "var(--color-navy-mid)",
    border: "1px solid rgba(77,179,255,0.12)",
    borderRadius: "8px",
    padding: "12px 14px",
    fontSize: "13px",
    color: "var(--color-near-white)",
    fontFamily: "var(--font-inter)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="Contact"
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
            Let's talk
          </p>
          <h2
            className="font-display font-semibold text-4xl mb-12"
            style={{
              color: "var(--color-near-white)",
              letterSpacing: "-0.02em",
            }}
          >
            Contact
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left — tagline + socials */}
            <div>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--color-chrome)" }}
              >
                I'm open to internships, collaborations, and interesting
                problems. If you have one, reach out.
              </p>

              <div className="flex flex-col gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 font-mono text-xs transition-opacity duration-150 hover:opacity-70"
                    style={{
                      color: "var(--color-ice)",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(77,179,255,0.08)",
                        border: "1px solid rgba(77,179,255,0.12)",
                        color: "var(--color-cyan)",
                      }}
                    >
                      {s.icon}
                    </div>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            {sent ? (
              <div
                className="rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center"
                style={{
                  background: "var(--color-navy-mid)",
                  border: "1px solid rgba(77,179,255,0.12)",
                  minHeight: "240px",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: "rgba(77,179,255,0.1)",
                    color: "var(--color-cyan)",
                  }}
                >
                  ✓
                </div>
                <p
                  className="font-display font-medium text-base"
                  style={{ color: "var(--color-near-white)" }}
                >
                  Message sent
                </p>
                <p className="text-xs" style={{ color: "var(--color-chrome)" }}>
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  style={inputStyle}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  style={{ ...inputStyle, height: "100px", resize: "none" }}
                  name="message"
                  placeholder="Your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="relative w-full py-3 rounded-lg font-display font-semibold text-sm overflow-hidden group"
                  style={{
                    background: "var(--color-cyan)",
                    color: "var(--color-navy-deep)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    }}
                  />
                  <span className="relative z-10">Send message</span>
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
