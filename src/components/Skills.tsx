interface SkillsProps {
  hideHeader?: boolean;
}

export default function Skills({ hideHeader = false }: SkillsProps) {
  return (
    <section className={`${hideHeader ? 'py-4' : 'py-24'} relative z-10`} id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400">My coding stack and tools.</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,91,236,0.2)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-orange-500">html</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">HTML / CSS / JS</span>
                <span className="text-white">90%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,91,236,0.2)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-500">css</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Styling</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Tailwind CSS</span>
                <span className="text-white">85%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,91,236,0.2)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-red-500">dns</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Laravel / PHP</span>
                <span className="text-white">80%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(19,91,236,0.2)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-yellow-500">code</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Others</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Python / Dart</span>
                <span className="text-white">70%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full w-[70%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
