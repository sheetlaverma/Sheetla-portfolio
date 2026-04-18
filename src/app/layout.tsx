import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Sheetla Verma | Portfolio",
  description: "Portfolio of Sheetla Verma - developer and designer.",
  metadataBase: new URL("https://sheetla-portfolio.vercel.app"),
  openGraph: {
    title: "Sheetla Verma | Portfolio",
    description: "Frontend + backend portfolio built with Next.js and deployed on Vercel.",
    type: "website",
    url: "https://sheetla-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheetla Verma | Portfolio",
    description: "Frontend + backend portfolio built with Next.js and deployed on Vercel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
