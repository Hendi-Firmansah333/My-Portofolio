"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiThreedotjs, SiVite } from "react-icons/si";

// Dynamic import for the 3D Canvas to avoid SSR issues
const Lanyard3D = dynamic(() => import("@/components/3d/LanyardCard"), { ssr: false });
const CursorGrid = dynamic(() => import("@/components/animations/CursorGrid"), { ssr: false });
const SpecularButton = dynamic(() => import("@/components/animations/SpecularButton"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[#050505]">
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

      {/* Lanyard 3D Interactive Centerpiece (Absolute Full Height Right Side) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute top-0 right-0 h-screen w-full lg:w-[45%] opacity-40 lg:opacity-100 z-0 lg:z-20 pointer-events-none lg:pointer-events-auto translate-x-[30%] sm:translate-x-[20%] lg:translate-x-0 scale-[0.55] sm:scale-75 lg:scale-100 origin-top-right lg:origin-center"
      >
        <Lanyard3D />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 pointer-events-none">
        
        {/* Sisi Kiri: Tipografi & Copywriting (High-Tech Style) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-5 lg:gap-6 w-full lg:w-[60%] pointer-events-auto mt-28 sm:mt-24 md:mt-12 lg:mt-20 relative z-10 p-5 sm:p-8 lg:p-0 bg-[#0f172a]/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-3xl lg:rounded-none border border-white/10 lg:border-transparent shadow-2xl lg:shadow-none"
        >

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white leading-[1.05] tracking-tighter drop-shadow-sm">
            Fullstack <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-text-shimmer bg-[length:200%_auto]">
              Developer.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-light mt-2">
            Crafting immersive digital experiences through interactive <strong className="text-slate-200">UI</strong>, <strong className="text-slate-200">WebGL</strong>, and modern frontend architectures. Bringing concepts to life with elegant code and seamless performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/#work" passHref>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-cyan-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(19,91,236,0.5)] hover:shadow-[0_0_30px_rgba(19,91,236,0.8)] transition-shadow flex items-center justify-center gap-2"
              >
                Explore Works
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.button>
            </Link>
            
            <Link href="/#contact" passHref>
              <SpecularButton
                className="w-full sm:w-auto px-8 h-[56px] text-white rounded-full font-medium"
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
            </Link>
          </div>

          {/* Tech Stack Marquee (Running Logos) */}
          <div className="mt-4 overflow-hidden w-full max-w-md relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
              className="flex gap-8 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
              {/* First Set */}
              <SiReact className="text-3xl text-slate-500 hover:text-[#61DAFB] transition-colors cursor-pointer" />
              <SiNextdotjs className="text-3xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiTypescript className="text-3xl text-slate-500 hover:text-[#3178C6] transition-colors cursor-pointer" />
              <SiTailwindcss className="text-3xl text-slate-500 hover:text-[#06B6D4] transition-colors cursor-pointer" />
              <SiNodedotjs className="text-3xl text-slate-500 hover:text-[#339933] transition-colors cursor-pointer" />
              <SiThreedotjs className="text-3xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiVite className="text-3xl text-slate-500 hover:text-[#646CFF] transition-colors cursor-pointer" />
              
              {/* Duplicated for infinite scroll */}
              <SiReact className="text-3xl text-slate-500 hover:text-[#61DAFB] transition-colors cursor-pointer" />
              <SiNextdotjs className="text-3xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiTypescript className="text-3xl text-slate-500 hover:text-[#3178C6] transition-colors cursor-pointer" />
              <SiTailwindcss className="text-3xl text-slate-500 hover:text-[#06B6D4] transition-colors cursor-pointer" />
              <SiNodedotjs className="text-3xl text-slate-500 hover:text-[#339933] transition-colors cursor-pointer" />
              <SiThreedotjs className="text-3xl text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <SiVite className="text-3xl text-slate-500 hover:text-[#646CFF] transition-colors cursor-pointer" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
