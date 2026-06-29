"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const links = ["work", "about", "skills", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-semibold"
              style={{
                border: "1.5px solid var(--color-cyan)",
                color: "var(--color-cyan)",
              }}
            >
              DK
            </div>
            <span
              className="font-display font-medium text-sm"
              style={{ color: "var(--color-near-white)" }}
            >
              Daniel Kebede
            </span>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="font-mono text-xs tracking-wide transition-colors duration-150"
                  style={{
                    color: "var(--color-chrome)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-cyan)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-chrome)")
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="hidden md:block text-xs font-display px-4 py-2 rounded-lg transition-colors duration-150"
            style={{
              border: "1px solid var(--color-cyan)",
              color: "var(--color-cyan)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Resume ↗
          </button>
        </div>
      </Container>
    </header>
  );
}
