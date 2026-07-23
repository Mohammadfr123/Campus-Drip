import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Campus Drip | ALC Mauritius",
    template: "%s | Campus Drip",
  },
  description:
    "The official streetwear marketplace for ALC students in Beau Plan, Mauritius. Browse, customize, and drip in campus style.",
  keywords: [
    "Campus Drip",
    "ALC Mauritius",
    "streetwear",
    "campus fashion",
    "Beau Plan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="grain-overlay min-h-screen">{children}</body>
    </html>
  );
}
