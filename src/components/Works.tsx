interface WorksProps {
  hideHeader?: boolean;
}

export default function Works({ hideHeader = false }: WorksProps) {
  return (
    <section className={`${hideHeader ? 'py-4' : 'py-24'} relative z-10`} id="work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary block"></span>
                Selected Works
              </h2>
              <p className="text-slate-400 max-w-md">Recent projects demonstrating my skills.</p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video w-full overflow-hidden bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-slate-600">
                restaurant_menu
              </span>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/20">
                  E-Commerce
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Laravel
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Kelanting Food
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-2">
                A food e-commerce website with branding, product catalog, and footer design.
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-video w-full overflow-hidden bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-slate-600">
                smart_toy
              </span>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/20">
                  AI Event
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Gemini AI Workshop
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-2">
                Event organization and digital materials for an AI productivity workshop at
                Polinela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
