"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Code2 } from "lucide-react";

const links = ["Projects", "Skills", "About", "Contact"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid rgba(77,179,255,0.08)",
        background: "rgba(11,22,40,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Daniel Kebede logo"
              width={36}
              height={36}
              className="rounded-full"
              style={{ border: "1.5px solid var(--color-cyan)" }}
            />
            <div className="flex flex-col">
              <span
                className="font-display font-semibold text-base leading-tight"
                style={{ color: "var(--color-near-white)" }}
              >
                DANIEL KEBEDE
              </span>
              <span
                className="flex items-center gap-1.5 font-mono text-[10px] leading-tight"
                style={{ color: "var(--color-cyan)" }}
              >
                Christian Developer{" "}
                {/* <Code2 size={11} style={{ color: "var(--color-cyan)" }} /> */}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="relative font-mono text-xs tracking-wide pb-1 transition-colors duration-150"
                  style={{
                    color:
                      hovered === link
                        ? "var(--color-cyan)"
                        : "var(--color-chrome)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {link}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px"
                    style={{ background: "var(--color-cyan)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: hovered === link ? "100%" : "0%" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-display px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors duration-150 whitespace-nowrap"
            style={{
              border: "1px solid var(--color-cyan)",
              color: "var(--color-cyan)",
              background: "transparent",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Resume ↗
          </a>
        </div>
      </Container>
    </header>
  );
}
