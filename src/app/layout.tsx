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
  description:
    "Data Analyst portfolio of Sheetla Verma focused on revenue analytics, customer behaviour, and forecasting.",
  metadataBase: new URL("https://sheetla-portfolio.vercel.app"),
  openGraph: {
    title: "Sheetla Verma | Portfolio",
    description:
      "Data Analyst portfolio highlighting business impact across telecom, FMCG, e-commerce, and healthcare.",
    type: "website",
    url: "https://sheetla-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheetla Verma | Portfolio",
    description:
      "Data Analyst portfolio highlighting business impact across telecom, FMCG, e-commerce, and healthcare.",
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
