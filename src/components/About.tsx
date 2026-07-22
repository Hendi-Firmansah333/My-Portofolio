"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiReact, SiLaravel, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker } from "react-icons/si";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 items-center relative z-10"
        >
          {/* Left Side: Floating Image Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/5 w-full relative group perspective-1000"
          >
            {/* Glowing Animated Border Container */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative aspect-[4/5] w-full max-w-[380px] mx-auto rounded-3xl p-1 overflow-hidden shadow-[0_0_40px_rgba(19,91,236,0.2)]"
            >
              {/* Rotating Gradient Background for Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-cyan-400 to-purple-600 opacity-50 group-hover:opacity-100 animate-[spin_8s_linear_infinite]" />
              
              {/* Actual Image Container */}
              <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  alt="Hendi Firmansah"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  src="/img/person.png"
                  width={400}
                  height={500}
                />
                
                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-4 top-10 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
                >
                  <SiReact className="text-3xl text-cyan-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -left-4 bottom-20 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl"
                >
                  <SiLaravel className="text-3xl text-red-500" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Text and Bento Stats */}
          <div className="lg:w-3/5 w-full flex flex-col gap-8">
            
            {/* Title with Character Reveal effect (simulated by word stagger or simple fade) */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                About Me.
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-400 rounded-full" />
            </motion.div>

            {/* Staggered Paragraphs */}
            <motion.div variants={containerVariants} className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <motion.p variants={textVariants}>
                Hello! I'm <strong className="text-white font-bold">Hendi Firmansah</strong>, a passionate <strong className="text-cyan-400 font-bold">Fullstack Developer</strong> based in Indonesia. I specialize in architecting robust backend systems and crafting immersive, high-end frontend experiences.
              </motion.p>
              <motion.p variants={textVariants}>
                My technical foundation is built deep within the <strong className="text-red-400 font-bold">Laravel</strong> and <strong className="text-green-400 font-bold">Node.js</strong> ecosystems for scalable backends, seamlessly integrated with modern frontend powerhouses like <strong className="text-cyan-400 font-bold">React</strong>, <strong className="text-white font-bold">Next.js</strong>, and Tailwind CSS.
              </motion.p>
            </motion.div>

            {/* Animated Police Line / Tech Stack Ticker */}
            <motion.div variants={itemVariants} className="mt-8 relative w-full overflow-hidden rounded-xl h-24 flex items-center justify-center">
              <div className="absolute w-[120%] bg-primary text-white border-y-4 border-cyan-300 py-3 transform -rotate-3 shadow-[0_0_30px_rgba(19,91,236,0.4)]">
                
                {/* Diagonal stripes overlay (like police tape) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, #000 15px, #000 30px)' }}></div>
                
                <motion.div 
                  className="flex gap-8 items-center w-max relative z-10"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                  {/* First Set */}
                  <div className="flex items-center gap-6 font-black tracking-widest uppercase text-sm sm:text-base drop-shadow-md">
                    <SiReact className="text-2xl text-cyan-300" /> REACT <span className="text-cyan-300 opacity-50">•</span>
                    <SiLaravel className="text-2xl text-red-400" /> LARAVEL <span className="text-cyan-300 opacity-50">•</span>
                    <SiNextdotjs className="text-2xl text-black" /> NEXT.JS <span className="text-cyan-300 opacity-50">•</span>
                    <SiTailwindcss className="text-2xl text-cyan-300" /> TAILWIND CSS <span className="text-cyan-300 opacity-50">•</span>
                    <SiMongodb className="text-2xl text-green-400" /> MONGODB <span className="text-cyan-300 opacity-50">•</span>
                    <SiPostgresql className="text-2xl text-blue-300" /> POSTGRESQL <span className="text-cyan-300 opacity-50">•</span>
                    <SiDocker className="text-2xl text-blue-400" /> DOCKER <span className="text-cyan-300 opacity-50">•</span>
                  </div>
                  {/* Duplicate Set for Infinite Loop */}
                  <div className="flex items-center gap-6 font-black tracking-widest uppercase text-sm sm:text-base drop-shadow-md">
                    <SiReact className="text-2xl text-cyan-300" /> REACT <span className="text-cyan-300 opacity-50">•</span>
                    <SiLaravel className="text-2xl text-red-400" /> LARAVEL <span className="text-cyan-300 opacity-50">•</span>
                    <SiNextdotjs className="text-2xl text-black" /> NEXT.JS <span className="text-cyan-300 opacity-50">•</span>
                    <SiTailwindcss className="text-2xl text-cyan-300" /> TAILWIND CSS <span className="text-cyan-300 opacity-50">•</span>
                    <SiMongodb className="text-2xl text-green-400" /> MONGODB <span className="text-cyan-300 opacity-50">•</span>
                    <SiPostgresql className="text-2xl text-blue-300" /> POSTGRESQL <span className="text-cyan-300 opacity-50">•</span>
                    <SiDocker className="text-2xl text-blue-400" /> DOCKER <span className="text-cyan-300 opacity-50">•</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
