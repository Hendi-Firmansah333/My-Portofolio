export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
            <span className="material-symbols-outlined text-primary text-xl">code</span>
          </div>
          <span className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Hendi Firmansah.
          </span>
        </div>
      </div>
    </footer>
  );
}
