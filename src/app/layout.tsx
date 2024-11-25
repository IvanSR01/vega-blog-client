import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import AppProvider from "@/providers/AppProvider";
import { Suspense } from "react";
import FullScreenLoader from "@/components/full-screen-loader/FullScreenLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vega Blog - Insights and Stories",
  description: "Welcome to Vega Blog! Dive into articles on technology, programming, and personal growth. Stay inspired and informed.",
  keywords: ["Vega Blog", "technology", "programming", "personal growth", "articles", "insights"],
  authors: [{ name: "Ivan Nelson", url: "https://your-personal-site.com" }],
  openGraph: {
    title: "Vega Blog - Insights and Stories",
    description: "Explore engaging articles on technology, programming, and personal development. Your daily dose of inspiration and knowledge.",
    url: "https://your-blog-url.com",
    siteName: "Vega Blog",
    images: [
      {
        url: "https://your-blog-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vega Blog - Insights and Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<FullScreenLoader />}>
          <AppProvider>{children}</AppProvider>
        </Suspense>
      </body>
    </html>
  );
}
