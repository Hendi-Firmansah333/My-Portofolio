"use client";

import { useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

export default function KegiatanCertificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const certificates = [
    {
      title: "Gemini Certified Educator : Google For Education",
      date: "12 Oktober 2025",
      image: "/img/Kegiatan/educator.png"
    },
    {
      title: "Export Insights And SEO For Market Expansion",
      date: "12 Februari 2025",
      image: "/img/Kegiatan/export.png"
    },
    {
      title: "Membuat Sistem Task Manager Team Dengan Laravel",
      date: "30 Mei 2025",
      image: "/img/Kegiatan/task-manager.png"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      <ImageModal isOpen={modalOpen} imageSrc={selectedImage} onClose={() => setModalOpen(false)} />

      <nav className="p-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/#certificate" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </Link>
        </div>
      </nav>

      <main className="flex-grow px-6 py-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Events</h1>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Dokumentasi sertifikat dari berbagai seminar, workshop, dan kepanitiaan yang telah saya ikuti.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all bg-white/5 group">
                <div
                  className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-4 bg-slate-800 shadow-lg border border-white/5 cursor-pointer"
                  onClick={() => openModal(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
                <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> {cert.date}
                </p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => openModal(cert.image)}
                    className="inline-flex items-center gap-1 text-emerald-400 text-sm font-bold hover:gap-2 transition-all focus:outline-none w-fit"
                  >
                    Lihat Detail <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        © {new Date().getFullYear()} Hendi Firmansah
      </footer>
    </div>
  );
}
