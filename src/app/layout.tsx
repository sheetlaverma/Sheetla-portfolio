import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
