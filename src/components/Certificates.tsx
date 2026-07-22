import Link from "next/link";

interface CertificatesProps {
  hideHeader?: boolean;
}

export default function Certificates({ hideHeader = false }: CertificatesProps) {
  return (
    <section className={`${hideHeader ? "py-4" : "py-24"} relative z-10`} id="certificate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Certificates & Awards
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/certificates/dicoding"
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 block"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">
                  terminal
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>

            <h3 className="font-bold text-2xl text-white mb-2">Dicoding Academy</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Kompetensi pemrograman web dan pengembangan aplikasi dari Dicoding Indonesia.
            </p>
            <div className="text-xs font-bold text-primary tracking-wider uppercase">
              View Collection
            </div>
          </Link>

          <Link
            href="/certificates/bootcamp"
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 block"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
                <span className="material-symbols-outlined text-purple-400 text-4xl">
                  rocket_launch
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-purple-400 transition-colors">
                arrow_forward
              </span>
            </div>

            <h3 className="font-bold text-2xl text-white mb-2">Bootcamp</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Sertifikasi intensif dari berbagai program pelatihan dan bootcamp teknologi.
            </p>
            <div className="text-xs font-bold text-purple-400 tracking-wider uppercase">
              View Collection
            </div>
          </Link>

          <Link
            href="/certificates/kegiatan"
            className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 block"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                <span className="material-symbols-outlined text-emerald-400 text-4xl">
                  diversity_3
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-emerald-400 transition-colors">
                arrow_forward
              </span>
            </div>

            <h3 className="font-bold text-2xl text-white mb-2">Kegiatan & Event</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Partisipasi dalam seminar, workshop, webinar, dan kegiatan komunitas IT.
            </p>
            <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              View Collection
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
