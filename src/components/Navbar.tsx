"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      {/* Floating Pill Container with Glassmorphism */}
      <div className="bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group ml-2">
            <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-sm">code</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white">
              Hendi<span className="text-primary">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2 mr-1 border-r border-white/10 pr-3">
              <a href="https://www.instagram.com/hendi_frmnsh/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-full text-slate-400 hover:text-pink-500 hover:bg-white/10 hover:border-pink-500/30 transition-all shadow-sm">
                <FaInstagram className="text-[15px]" />
              </a>
              <a href="https://www.linkedin.com/in/hendi-firmansah/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-full text-slate-400 hover:text-[#0a66c2] hover:bg-white/10 hover:border-[#0a66c2]/30 transition-all shadow-sm">
                <FaLinkedin className="text-[15px]" />
              </a>
              <a href="https://github.com/Hendi-Firmansah333" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 backdrop-blur-md border border-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-sm">
                <FaGithub className="text-[15px]" />
              </a>
            </div>

            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block bg-gradient-to-r from-primary to-cyan-600 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(19,91,236,0.4)] transition-all transform hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 bg-white/5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-2xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden shadow-2xl overflow-hidden mt-2"
          >
            <div className="flex flex-col px-4 py-4 gap-2 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  onClick={() => setIsOpen(false)} 
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors" 
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
