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

const description =
  "AY LABS LTD is an IT engineering partner that designs, builds, and runs production software, AI systems, and cloud infrastructure for teams that ship serious software.";

// Absolute base for OG/canonical URLs.
// - Local dev: localhost
// - Vercel: the deployment's production URL (set automatically)
// - Custom domain later: set NEXT_PUBLIC_SITE_URL in the Vercel project
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AY LABS LTD | Software, AI & Cloud Engineering",
  description,
  keywords: [
    "software engineering",
    "AI development",
    "cloud infrastructure",
    "DevOps",
    "custom software company",
    "IT engineering partner",
  ],
  openGraph: {
    title: "AY LABS LTD | Software, AI & Cloud Engineering",
    description,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AY LABS LTD | Software, AI & Cloud Engineering",
    description,
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
