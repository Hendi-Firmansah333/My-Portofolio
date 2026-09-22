"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiThreedotjs, SiVite } from "react-icons/si";
import { useLenis } from "lenis/react";

// Dynamic import for the 3D Canvas to avoid SSR issues
const Lanyard3D = dynamic(() => import("@/components/3d/LanyardCard"), { ssr: false });
const CursorGrid = dynamic(() => import("@/components/animations/CursorGrid"), { ssr: false });
const SpecularButton = dynamic(() => import("@/components/animations/SpecularButton"), { ssr: false });

const TypingText = ({ fullText }: { fullText: string }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => setText(fullText.slice(0, text.length + 1)), 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(fullText.slice(0, text.length - 1)), 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return <>{text}</>;
};

export default function Hero() {
  const lenis = useLenis();

  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#050505] pt-8 lg:pt-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      {/* Interactive Cursor Grid Background */}
      <div className="absolute inset-0 z-0">
        <CursorGrid 
          color="#22d3ee"
          gridOpacity={0.05}
          maxOpacity={0.6}
          radius={120}
        />
      </div>

      {/* Lanyard 3D Interactive Centerpiece */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative lg:absolute lg:top-0 lg:right-0 w-full h-[55vh] lg:h-screen lg:w-[45%] opacity-100 z-10 lg:z-20 pointer-events-auto flex items-center justify-center scale-100 sm:scale-105 lg:scale-100 lg:origin-center mt-2 lg:mt-0"
      >
        <Lanyard3D />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 pointer-events-none">
        
        {/* Sisi Kiri: Tipografi & Copywriting (High-Tech Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 lg:gap-5 w-full lg:w-[60%] pointer-events-auto relative z-50 lg:mt-16"
        >

          <h1 className="text-[2rem] leading-tight sm:text-5xl lg:text-[4rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white tracking-tighter drop-shadow-sm">
            Frontend <br className="hidden lg:block" />
            <span className="text-4xl sm:text-6xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-text-shimmer bg-[length:200%_auto]">
              <TypingText fullText="Developer." />
            </span>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              className="inline-block text-cyan-400 ml-1 text-4xl sm:text-6xl lg:text-[5.5rem]"
              style={{ WebkitTextFillColor: '#22d3ee' }}
            >
              |
            </motion.span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mt-1 lg:-mt-2 mx-auto lg:mx-0 px-2 lg:px-0 relative z-50">
            A passionate <strong className="text-slate-200">Frontend Developer</strong> dedicated to crafting immersive digital experiences. I specialize in building interactive <strong className="text-slate-200">UI</strong> and modern web applications.
          </p>

          <div className="flex flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4 w-full relative z-50">
            <Link href="/#portfolio" passHref>
              <motion.button 
                onClick={(e: React.MouseEvent) => {
                  if (lenis) {
                    e.preventDefault();
                    lenis.scrollTo("#portfolio");
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-auto px-5 sm:px-8 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-primary to-cyan-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(19,91,236,0.5)] hover:shadow-[0_0_30px_rgba(19,91,236,0.8)] transition-shadow flex items-center justify-center gap-2 text-sm lg:text-base cursor-pointer"
              >
                Explore Works
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.button>
            </Link>
            
            <Link href="/#contact" passHref>
              <div 
                className="w-auto cursor-pointer"
                onClick={(e: React.MouseEvent) => {
                  if (lenis) {
                    e.preventDefault();
                    lenis.scrollTo("#contact");
                  }
                }}
              >
                <SpecularButton
                  className="w-auto px-5 sm:px-8 h-[48px] lg:h-[56px] text-white rounded-full font-medium text-sm lg:text-base"
                  radius={28}
                  baseColor="#1e293b"
                  lineColor="#22d3ee"
                  intensity={1.2}
                  speed={0.5}
                  textColor="#ffffff"
                  shineSize={15}
                >
                  Contact Me
                </SpecularButton>
              </div>
            </Link>
          </div>

          {/* Tech Stack Marquee (Running Logos) */}
          <div className="mt-6 overflow-hidden w-full max-w-xs sm:max-w-md relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mx-auto lg:mx-0">
            <motion.div 
              className="flex gap-6 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
              {/* First Set */}
              <SiReact className="text-xl lg:text-2xl text-slate-500 hover:text-[#61DAFB] transition-colors cursor-pointer" />
              <SiNextdotjs className="text-xl lg:text-2xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiTypescript className="text-xl lg:text-2xl text-slate-500 hover:text-[#3178C6] transition-colors cursor-pointer" />
              <SiTailwindcss className="text-xl lg:text-2xl text-slate-500 hover:text-[#06B6D4] transition-colors cursor-pointer" />
              <SiNodedotjs className="text-xl lg:text-2xl text-slate-500 hover:text-[#339933] transition-colors cursor-pointer" />
              <SiThreedotjs className="text-xl lg:text-2xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiVite className="text-xl lg:text-2xl text-slate-500 hover:text-[#646CFF] transition-colors cursor-pointer" />
              
              {/* Duplicated for infinite scroll */}
              <SiReact className="text-xl lg:text-2xl text-slate-500 hover:text-[#61DAFB] transition-colors cursor-pointer" />
              <SiNextdotjs className="text-xl lg:text-2xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiTypescript className="text-xl lg:text-2xl text-slate-500 hover:text-[#3178C6] transition-colors cursor-pointer" />
              <SiTailwindcss className="text-xl lg:text-2xl text-slate-500 hover:text-[#06B6D4] transition-colors cursor-pointer" />
              <SiNodedotjs className="text-xl lg:text-2xl text-slate-500 hover:text-[#339933] transition-colors cursor-pointer" />
              <SiThreedotjs className="text-xl lg:text-2xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiVite className="text-xl lg:text-2xl text-slate-500 hover:text-[#646CFF] transition-colors cursor-pointer" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
