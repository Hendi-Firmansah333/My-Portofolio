import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hendi-firmansah.vercel.app"), // Placeholder, update to your real domain later
  title: {
    default: "Hendi Firmansah | Frontend Developer & UI/UX Enthusiast",
    template: "%s | Hendi Firmansah",
  },
  description: "Portfolio of Hendi Firmansah, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies. View my projects, experience, and certificates.",
  keywords: ["Hendi Firmansah", "Frontend Developer", "Web Developer", "React Developer", "Next.js Developer", "Politeknik Negeri Lampung", "UI/UX", "Portfolio", "Google Student Ambassador"],
  authors: [{ name: "Hendi Firmansah", url: "https://github.com/Hendi-Firmansah333" }],
  creator: "Hendi Firmansah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hendi-firmansah.vercel.app",
    title: "Hendi Firmansah | Frontend Developer",
    description: "Explore the portfolio of Hendi Firmansah, a Frontend Developer crafting modern and accessible web experiences.",
    siteName: "Hendi Firmansah Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hendi Firmansah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hendi Firmansah | Frontend Developer",
    description: "Frontend Developer focusing on building pixel-perfect and highly performant web applications.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${manrope.variable} ${notoSans.variable} antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-display bg-[#050505] text-slate-900 dark:text-white selection:bg-primary selection:text-white relative">
        {/* Global Static Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* Page Content */}
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
