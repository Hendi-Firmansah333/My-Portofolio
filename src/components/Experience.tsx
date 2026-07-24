"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative z-10" id="experience">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative timeline-line ml-4 md:ml-0"
        >
          <div className="space-y-16">
            <motion.div variants={itemVariants} className="relative pl-12 md:pl-0">
              <div className="md:flex items-start">
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <span className="text-sm font-bold text-primary tracking-widest uppercase">
                    2025 — Present
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">Google Student Ambassador</h3>
                  <p className="text-slate-500">Google Team</p>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center shadow-xl shadow-primary/20 group hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      smart_toy
                    </span>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-16">
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      2025 — Present
                    </span>
                    <h3 className="text-lg font-bold text-white">Google Student Ambassador</h3>
                    <p className="text-slate-500 text-sm">Google Team</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary/50">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Selected as part of the Google Team. Gained in-depth experience and expertise
                      in <strong>Gemini AI</strong> technologies, community leadership, and bridging
                      the gap between students and Google technologies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative pl-12 md:pl-0">
              <div className="md:flex items-start">
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">
                    2024 (3 Months)
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">Digital Marketing</h3>
                  <p className="text-slate-500">Kurnia Properti</p>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-purple-400 text-[20px]">
                      campaign
                    </span>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-16">
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                      2024 (3 Months)
                    </span>
                    <h3 className="text-lg font-bold text-white">Digital Marketing</h3>
                    <p className="text-slate-500 text-sm">Kurnia Properti</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-purple-500/50">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Executed digital marketing strategies focusing on property and land lots
                      (Kavling). Managed social media presence and optimized campaigns to drive sales
                      and brand awareness.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative pl-12 md:pl-0">
              <div className="md:flex items-start">
                <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                  <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">
                    2023 (3 Months)
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">Graphic Designer Intern</h3>
                  <p className="text-slate-500">PT Kuy Merchandise</p>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-pink-400 text-[20px]">
                      palette
                    </span>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-16">
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">
                      2023 (3 Months)
                    </span>
                    <h3 className="text-lg font-bold text-white">Graphic Designer Intern</h3>
                    <p className="text-slate-500 text-sm">PT Kuy Merchandise</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-pink-500/50">
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Completed an internship program focused on creative design. Created visual
                      assets for merchandise products and gained hands-on experience in the
                      professional graphic design industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
