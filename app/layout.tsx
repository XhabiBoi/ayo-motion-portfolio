import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYO — Motion Graphics Creator",
  description:
    "Launch videos, product motion, and brand systems for SaaS and apps. Built with code, not templates.",
  metadataBase: new URL("https://ayo.motion"),
  openGraph: {
    title: "AYO — Motion Graphics Creator",
    description: "Built with code. Not templates.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white flex flex-col selection:bg-[#00D4FF] selection:text-black">
        {children}
      </body>
    </html>
  );
}
