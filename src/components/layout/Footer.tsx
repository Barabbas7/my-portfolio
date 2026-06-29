import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(77,179,255,0.06)" }}>
      <Container>
        <div className="flex items-center justify-between py-6">
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(200,221,239,0.4)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5"
              style={{ background: "var(--color-amber)" }}
            />
            Daniel Kebede · 2026
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(200,221,239,0.4)" }}
          >
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </Container>
    </footer>
  );
}
