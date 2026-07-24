import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hendi Firmansah | Frontend Developer Portfolio",
  description: "A Frontend Developer focused on creating pixel-perfect, accessible, and cinematic web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${notoSans.variable} h-full antialiased dark scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-display bg-[#050505] text-slate-900 dark:text-white selection:bg-primary selection:text-white relative">
        {/* Global Static Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* Page Content */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
