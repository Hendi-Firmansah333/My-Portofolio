"use client";

import { useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/ImageModal";

export default function DicodingCertificates() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const certificates = [
    {
      title: "Akselerasi Karir Dan Prokduktivitas Dengan Gemini",
      date: "19 Oktober 2025",
      image: "/img/DICODING/akselerasi-karir.png",
      link: "https://www.dicoding.com/certificates/MEPJ2QQVWP3V"
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      date: "13 Januari 2025",
      image: "/img/DICODING/dasar-javascript.png",
      link: "https://www.dicoding.com/certificates/2VX3K2O1NXYQ"
    },
    {
      title: "Belajar Membuat Front-End Web Untuk Pemula",
      date: "22 Januari 2025",
      image: "/img/DICODING/front-end.png",
      link: "https://www.dicoding.com/certificates/07Z63R3RWZQR"
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      date: "20 Desember 2024",
      image: "/img/DICODING/pemweb.png",
      link: "https://www.dicoding.com/certificates/2VX34Q513ZYQ"
    },
    {
      title: "Prompt Engineering Untuk Software Developer",
      date: "20 Oktober 2025",
      image: "/img/DICODING/promt.png",
      link: "https://www.dicoding.com/certificates/MEPJ2QO1LP3V"
    },
    {
      title: "Belajar Dasar AI",
      date: "06 Oktober 2025",
      image: "/img/DICODING/dasar-ai.png",
      link: "https://www.dicoding.com/certificates/ERZR211J2PYV"
    },
    {
      title: "Belajar Fundamental Back-End dengan JavaScript",
      date: "25 Maret 2026",
      image: "/img/DICODING/dicoding-backend.png",
      link: "https://www.dicoding.com/certificates/MEPJOJ9NWZ3V"
    },
    {
      title: "Belajar Fundamental Aplikasi Web dengan React",
      date: "2026",
      image: "/img/DICODING/dicoding-react.png",
      link: "https://www.dicoding.com/certificates/N9ZON4E6RXG5"
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      date: "10 Februari 2026",
      image: "/img/DICODING/dicoding-aws.png",
      link: "https://www.dicoding.com/certificates/EYX4Q1R46PDL"
    },
    {
      title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
      date: "10 Februari 2026",
      image: "/img/DICODING/azure-genai.png",
      link: "https://www.dicoding.com/certificates/NVP7NYGWOZR0"
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      date: "09 Februari 2026",
      image: "/img/DICODING/dasar-pemrograman.png",
      link: "https://www.dicoding.com/certificates/EYX4KD5M6PDL"
    },
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      date: "25 Februari 2026",
      image: "/img/DICODING/web-react.png",
      link: "https://www.dicoding.com/certificates/JMZVOGKJ3XN9"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0f172a]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dicoding Certificates</h1>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Daftar sertifikasi kompetensi yang telah saya selesaikan di platform Dicoding Academy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all bg-white/5 group">
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
                    className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:gap-2 transition-all focus:outline-none w-fit"
                  >
                    Lihat Detail <span className="material-symbols-outlined text-[16px]">visibility</span>
                  </button>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-400 text-xs hover:text-white transition-colors w-fit"
                  >
                    Verifikasi Dicoding <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant More Certificates Indicator */}
          <div className="mt-24 pb-8 flex flex-col items-center justify-center text-center relative group cursor-default">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[100px] rounded-full w-full max-w-md h-40 pointer-events-none transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-110"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-primary/50 group-hover:w-20 md:group-hover:w-32 transition-all duration-700 ease-out"></div>
                <div className="p-3 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(19,91,236,0.3)] transition-all duration-500 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100 duration-1000"></div>
                  <span className="material-symbols-outlined text-primary/80 group-hover:text-primary relative z-10 transition-colors">auto_awesome</span>
                </div>
                <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-primary/50 group-hover:w-20 md:group-hover:w-32 transition-all duration-700 ease-out"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide group-hover:tracking-wider transition-all duration-500">
                Dan Masih Banyak Lagi...
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                Sertifikat di atas hanyalah sebagian dari perjalanan belajar saya. Masih terdapat berbagai sertifikasi dan kelas lainnya yang telah saya selesaikan untuk terus meningkatkan keterampilan saya di bidang teknologi.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 relative z-10">
        © {new Date().getFullYear()} Hendi Firmansah
      </footer>
    </div>
  );
}
