"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const categories = ["All", "Work", "Organisasi", "Program", "Pendidikan"];

const experiences = [
  {
    id: 1,
    category: "Program",
    period: "2025 — 2026",
    title: "Google Student Ambassador",
    subtitle: "Team Google",
    description: "Berperan sebagai pelopor ambasador teknologi Google dan menjadi influencer bagi kampus Politeknik Negeri Lampung untuk mengedukasi teknologi Google serta mengadakan event.",
    icon: "smart_toy",
    color: "text-primary",
    border: "border-l-primary/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/googleindonesia/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@google" }
    ]
  },
  {
    id: 8,
    category: "Program",
    period: "2026 (6 Bulan)",
    title: "Fullstack Developer",
    subtitle: "DBS Foundation x Dicoding Indonesia",
    description: "Program bootcamp intensif yang berfokus pada teknologi web, khususnya pengembangan aplikasi secara menyeluruh (Fullstack Developer).",
    icon: "code",
    color: "text-red-500",
    border: "border-l-red-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/dbsfoundationid/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@dicoding" }
    ]
  },
  {
    id: 9,
    category: "Program",
    period: "2025 (6 Bulan)",
    title: "AI Code Generation",
    subtitle: "IBM Skills Build Bootcamp",
    description: "Mempelajari pemrograman yang berfokus pada generasi kode (code generation) dan optimalisasi memanfaatkan teknologi kecerdasan buatan.",
    icon: "memory",
    color: "text-blue-500",
    border: "border-l-blue-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/ibm/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@ibm" }
    ]
  },
  {
    id: 10,
    category: "Program",
    period: "2025 (6 Bulan)",
    title: "IoT, AI & Complex Coding",
    subtitle: "SIC7 DIBIMBING",
    description: "Program bootcamp intensif mempelajari Internet of Things (IoT), teknologi AI, dan penyelesaian masalah melalui pemrograman kompleks.",
    icon: "router",
    color: "text-emerald-500",
    border: "border-l-emerald-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/dibimbing/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@dibimbing" }
    ]
  },
  {
    id: 11,
    category: "Program",
    period: "2026 (4 Hari)",
    title: "AI Productivity",
    subtitle: "HACKTIV8 Maju Bareng AI",
    description: "Membahas AI Productivity dan integrasi API AI untuk developer. Praktik langsung (hands-on) pengembangan AI dan pembuatan proyek chatbot.",
    icon: "smart_toy",
    color: "text-purple-500",
    border: "border-l-purple-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/hacktiv8id/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@hacktiv8id" }
    ]
  },
  {
    id: 2,
    category: "Pendidikan",
    period: "2023 — Present",
    title: "Politeknik Negeri Lampung",
    subtitle: "Mahasiswa Aktif",
    description: "Currently pursuing a degree with a strong focus on software engineering, frontend development, and modern web technologies.",
    icon: "school",
    color: "text-blue-400",
    border: "border-l-blue-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/polinela.official/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@polinela.official" }
    ]
  },
  {
    id: 3,
    category: "Organisasi",
    period: "2024 — Present",
    title: "Kadep Minat Bakat",
    subtitle: "HMJTI Politeknik Negeri Lampung",
    description: "Organisasi yang menaungi program studi dari jurusan Teknologi Informasi Politeknik Negeri Lampung. Bertanggung jawab memimpin departemen dalam mengembangkan potensi dan bakat mahasiswa.",
    icon: "groups",
    color: "text-orange-400",
    border: "border-l-orange-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/hmjtipolinela/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@hmjti.polinela" }
    ]
  },
  {
    id: 7,
    category: "Organisasi",
    period: "2024 — Present",
    title: "Wakadiv Minat Bakat",
    subtitle: "ASTECH Politeknik Negeri Lampung",
    description: "Organisasi hima prodi yang bergerak untuk pengembangan program studi TRPL Politeknik Negeri Lampung. Berfokus pada inovasi dan kolaborasi minat bakat mahasiswa.",
    icon: "local_fire_department",
    color: "text-blue-400",
    border: "border-l-blue-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/astech.polinela/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@astech.polinela" }
    ]
  },
  {
    id: 6,
    category: "Work",
    period: "2026 — Present",
    title: "Instruktur",
    subtitle: "LKP Global Komputer Pringsewu",
    description: "Mentoring and guiding students in computer fundamentals, software applications, and IT skills as a dedicated instructor.",
    icon: "laptop_mac",
    color: "text-amber-400",
    border: "border-l-amber-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/lkpglobal/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@lkpglobal.kompute" }
    ]
  },
  {
    id: 4,
    category: "Work",
    period: "2024 (3 Months)",
    title: "Digital Marketing",
    subtitle: "Kurnia Properti",
    description: "Executed digital marketing strategies focusing on property and land lots (Kavling). Managed social media presence and optimized campaigns to drive sales and brand awareness.",
    icon: "campaign",
    color: "text-purple-400",
    border: "border-l-purple-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/kurniaproperti.id/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@kurniaproperti.id" }
    ]
  },
  {
    id: 5,
    category: "Work",
    period: "2023 (3 Months)",
    title: "Graphic Designer Intern",
    subtitle: "PT Kuy Merchandise",
    description: "Completed an internship program focused on creative design. Created visual assets for merchandise products and gained hands-on experience in the professional graphic design industry.",
    icon: "palette",
    color: "text-pink-400",
    border: "border-l-pink-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/kuy2.id/" },
      { platform: "tiktok", url: "#" }
    ]
  }
];

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiences = experiences.filter(
    exp => activeCategory === "All" || exp.category === activeCategory
  );

  return (
    <section className="py-24 relative z-10 scroll-mt-16" id="experience">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Experience
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "glass-card text-slate-400 hover:text-white hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="relative timeline-line ml-4 md:ml-0">
          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredExperiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  <div className="md:flex items-start">
                    {/* Desktop Left Side */}
                    <div className="md:w-1/2 md:pr-16 md:text-right hidden md:block">
                      <span className={`text-sm font-bold ${exp.color} tracking-widest uppercase`}>
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                      <p className="text-slate-500">{exp.subtitle}</p>
                      <div className="mt-3 flex items-center justify-end gap-2">
                        {exp.socials?.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/30 text-slate-400 hover:text-white transition-colors group"
                            title={social.platform === "instagram" ? "Instagram" : "TikTok"}
                          >
                            {social.platform === "instagram" ? <FaInstagram className="text-sm group-hover:text-pink-500 transition-colors" /> : <FaTiktok className="text-sm group-hover:text-white transition-colors" />}
                          </a>
                        ))}
                        <span className="inline-block px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/30 text-xs font-semibold text-slate-300">
                          {exp.category}
                        </span>
                      </div>
                    </div>

                    {/* Timeline Center Icon */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                      <div className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform ${exp.category === activeCategory || activeCategory === 'All' ? 'shadow-lg' : ''}`}>
                        <span className={`material-symbols-outlined ${exp.color} text-[20px]`}>
                          {exp.icon}
                        </span>
                      </div>
                    </div>

                    {/* Mobile & Desktop Right Side */}
                    <div className="md:w-1/2 md:pl-16">
                      <div className="md:hidden mb-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${exp.color} tracking-widest uppercase`}>
                            {exp.period}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {exp.socials?.map((social, idx) => (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                              >
                                {social.platform === "instagram" ? <FaInstagram className="text-[10px]" /> : <FaTiktok className="text-[10px]" />}
                              </a>
                            ))}
                            <span className="px-2 py-0.5 rounded-full border border-slate-700/50 bg-slate-800/30 text-[10px] font-semibold text-slate-300">
                              {exp.category}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mt-1">{exp.title}</h3>
                        <p className="text-slate-500 text-sm">{exp.subtitle}</p>
                      </div>
                      <div className={`glass-card p-6 rounded-2xl border-l-4 ${exp.border}`}>
                        <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: exp.description }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredExperiences.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-12 text-slate-500"
              >
                No experiences found for this category.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
