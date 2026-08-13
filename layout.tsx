import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FINORA — Enterprise Financial Intelligence",
    template: "%s — FINORA",
  },
  description:
    "FINORA transforms complex financial data into intelligent insights, forecasts, and actions for modern enterprises.",
  keywords: [
    "financial intelligence",
    "enterprise finance",
    "business analytics",
    "financial forecasting",
    "AI insights",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
