import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollbar from "@/components/ui/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Kebede | Software Engineer",
  description:
    "5th year software engineering student at AASTU. Building systems that think, scale, and endure.",
  openGraph: {
    title: "Daniel Kebede | Software Engineer",
    description: "5th year software engineering student at AASTU.",
    url: "https://daniel-kebede.vercel.app",
    siteName: "Daniel Kebede",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollbar>{children}</SmoothScrollbar>
      </body>
    </html>
  );
}
