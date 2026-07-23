"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaRocket, FaHandshake, FaCoffee } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const waNumber = "6289507931092";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const text = `Halo Hendi! Saya ${name}.%0A%0A${message}`;
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const quickConnects = [
    {
      id: "project",
      title: "Start a Project",
      desc: "Punya ide brilian? Mari diskusikan dan bangun project bersama.",
      icon: FaRocket,
      message: "Halo Hendi! Saya tertarik untuk bekerja sama dalam sebuah project. Bisakah kita berdiskusi lebih lanjut?",
    },
    {
      id: "collab",
      title: "Collaborate & Connect",
      desc: "Terbuka untuk kolaborasi atau bertukar pikiran.",
      icon: FaHandshake,
      message: "Halo Hendi! Saya ingin terhubung untuk networking dan mungkin berkolaborasi di masa depan.",
    },
    {
      id: "casual",
      title: "Just Saying Hi",
      desc: "Ingin bertanya sesuatu atau sekadar menyapa santai?",
      icon: FaCoffee,
      message: "Halo Hendi! Cuma mau menyapa, salam kenal ya!",
    },
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="contact">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Connect.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Reach out directly via WhatsApp for a faster response, or connect with me on my social platforms.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          
          {/* LEFT COLUMN: WhatsApp Form & Socials */}
          <div className="flex flex-col gap-8">
            {/* Direct Form */}
            <motion.div variants={itemVariants} className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 relative z-10">
                <div>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within/input:text-primary transition-colors">
                      <FaEnvelope className="text-sm" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl pl-11 pr-4 py-4 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="relative group/input">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message..."
                      rows={4}
                      className="w-full bg-[#1e293b]/50 border border-slate-700/50 rounded-2xl px-4 py-4 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1e293b] hover:bg-[#2dd4bf]/20 border border-slate-700 hover:border-[#2dd4bf]/50 text-white font-medium py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <FaWhatsapp className="text-[#2dd4bf] text-lg transform group-hover/btn:scale-110 transition-transform" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Connect With Me */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-slate-400 mb-4 ml-2">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/in/hendi-firmansah/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#0f172a]/80 hover:bg-[#1e293b] border border-slate-800 rounded-2xl p-4 transition-all group">
                  <FaLinkedin className="text-slate-400 group-hover:text-[#0a66c2] text-xl transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">LinkedIn</span>
                    <span className="text-slate-500 text-xs">@hendi-firmansah</span>
                  </div>
                </a>
                <a href="https://github.com/Hendi-Firmansah333" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#0f172a]/80 hover:bg-[#1e293b] border border-slate-800 rounded-2xl p-4 transition-all group">
                  <FaGithub className="text-slate-400 group-hover:text-white text-xl transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">GitHub</span>
                    <span className="text-slate-500 text-xs">@Hendi-Firmansah333</span>
                  </div>
                </a>
                <a href="https://www.instagram.com/hendi_frmnsh/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#0f172a]/80 hover:bg-[#1e293b] border border-slate-800 rounded-2xl p-4 transition-all group">
                  <FaInstagram className="text-slate-400 group-hover:text-[#e1306c] text-xl transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Instagram</span>
                    <span className="text-slate-500 text-xs">@hendi_frmnsh</span>
                  </div>
                </a>
                <a href="mailto:hendifirmansah@gmail.com" className="flex items-center gap-3 bg-[#0f172a]/80 hover:bg-[#1e293b] border border-slate-800 rounded-2xl p-4 transition-all group">
                  <FaEnvelope className="text-slate-400 group-hover:text-primary text-xl transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">Email</span>
                    <span className="text-slate-500 text-xs">hendifirmansah...</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Quick Connect Intents (Guestbook Style) */}
          <div className="flex flex-col gap-6">
            <motion.h3 variants={itemVariants} className="text-sm font-semibold text-slate-400 ml-2 hidden lg:block">
              Quick Connect Options
            </motion.h3>
            
            <div className="flex flex-col gap-4">
              {quickConnects.map((item, index) => (
                <motion.a
                  variants={itemVariants}
                  key={item.id}
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-[#0f172a]/80 hover:bg-[#1e293b]/90 border border-slate-800 hover:border-slate-700 rounded-3xl p-5 transition-all group relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon Avatar */}
                  <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-primary/50 transition-colors">
                    <item.icon className="text-slate-400 group-hover:text-primary text-lg transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <span className="text-xs text-slate-500 font-medium px-2 py-1 rounded-full bg-slate-800/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        Via WhatsApp
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative modern card at the bottom */}
            <motion.div variants={itemVariants} className="mt-4 p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-3xl flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Available for work</h4>
                <p className="text-slate-400 text-xs">Let's build something great together.</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
