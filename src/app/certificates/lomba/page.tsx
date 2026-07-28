"use client";

import { useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

export default function LombaCertificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const certificates: any[] = [];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sertifikat Lomba</h1>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Penghargaan dan prestasi dari berbagai kompetisi dan perlombaan IT.
          </p>

          {certificates.length === 0 ? (
            <div className="text-center text-slate-500 py-12">
              Belum ada sertifikat yang ditambahkan.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all bg-white/5 group">
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
                      className="inline-flex items-center gap-1 text-orange-400 text-sm font-bold hover:gap-2 transition-all focus:outline-none w-fit"
                    >
                      Lihat Detail <span className="material-symbols-outlined text-[16px]">visibility</span>
                    </button>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-orange-400 text-sm font-bold hover:gap-2 transition-all focus:outline-none w-fit mt-1"
                      >
                        Verifikasi <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        © {new Date().getFullYear()} Hendi Firmansah
      </footer>
    </div>
  );
}
