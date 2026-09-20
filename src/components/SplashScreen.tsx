"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while splash screen is active
    document.body.style.overflow = "hidden";

    // Simulate progress counting from 0 to 100
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 150);

    // End splash screen after 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Restore scrolling after exit animation completes
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000); 
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const typingCharacter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const welcomeText = "Welcome to my portfolio";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f1c]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Welcome Text Typing Animation */}
            <motion.div
              variants={typingContainer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-cyan-400 text-sm md:text-base font-mono mb-4 tracking-widest uppercase flex"
            >
              {welcomeText.split("").map((char, index) => (
                <motion.span key={index} variants={typingCharacter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Logo */}
            <motion.div 
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-8 flex items-center gap-3"
            >
              <div className="bg-primary/20 p-3 rounded-xl border border-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">code</span>
              </div>
              <span className="font-extrabold text-4xl tracking-tight text-white">
                Hendi<span className="text-primary">.dev</span>
              </span>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div 
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-64 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center text-sm font-mono text-cyan-400">
                <span>SYSTEM INIT</span>
                <span>{progress}%</span>
              </div>
              
              {/* Progress Line */}
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-cyan-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.15 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
