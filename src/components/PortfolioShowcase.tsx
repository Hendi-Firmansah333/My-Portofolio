"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Works from "./Works";
import Certificates from "./Certificates";
import Skills from "./Skills";

type Tab = "projects" | "certificates" | "skills";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  const tabs: { id: Tab; label: string }[] = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "skills", label: "Tech Stack" },
  ];

  return (
    <section className="py-24 relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Portfolio Showcase
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </motion.div>

        {/* Tabs Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-1 sm:gap-2 p-1.5 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-colors z-10 ${
                  activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="showcase-active-tab"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="min-h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeTab === "projects" && <Works hideHeader={true} />}
              {activeTab === "certificates" && <Certificates hideHeader={true} />}
              {activeTab === "skills" && <Skills hideHeader={true} />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
