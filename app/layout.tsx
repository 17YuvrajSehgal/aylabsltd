import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../public/fonts/geist-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-latin-ext.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../public/fonts/geist-mono-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/geist-mono-latin-ext.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYLabs | AI & Software Development Studio",
  description:
    "AYLabs builds AI systems, web platforms, and mobile applications that win markets. Dedicated product squads for startups and enterprise teams.",
  keywords: [
    "AI development",
    "software engineering",
    "mobile app development",
    "LLM integration",
    "product studio",
  ],
  openGraph: {
    title: "AYLabs | AI & Software Development Studio",
    description:
      "AYLabs builds AI systems, web platforms, and mobile applications that win markets.",
    type: "website",
    url: "https://aylabs.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYLabs | AI & Software Development Studio",
    description:
      "AYLabs builds AI systems, web platforms, and mobile applications that win markets.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
