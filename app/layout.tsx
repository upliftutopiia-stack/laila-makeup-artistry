import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Laila Makeup Artistry | Sydney Makeup Artist",
  description:
    "Bridal and event makeup artistry by Laila Makeup Artistry in Sydney.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}