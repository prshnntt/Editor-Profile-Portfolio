import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashant Peeramal | Cinematic Video Editor & Director",
  description:
    "Portfolio of Prashant Peeramal, a premium cinematic video editor crafting emotional, narrative, and commercial visual stories. Inspired by luxury and editorial aesthetics.",
  keywords: [
    "Prashant Peeramal",
    "Cinematic Video Editor",
    "Video Editor Portfolio",
    "Commercial Video Editor",
    "A24 Edit Style",
    "Color Grading",
    "Director Portfolio",
    "Porsche Commercial Editor",
    "Luxury Portfolio",
  ],
  authors: [{ name: "Prashant Peeramal" }],
  openGraph: {
    title: "Prashant Peeramal | Cinematic Video Editor",
    description: "Crafting emotional visual stories through purposeful and luxury video editing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-body bg-brand-bg text-brand-text">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
