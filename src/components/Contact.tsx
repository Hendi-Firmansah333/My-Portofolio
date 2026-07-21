export default function Contact() {
  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Let's work together</h2>
            <p className="text-slate-400 text-lg">
              Have a project in mind? Let's turn your ideas into reality.
            </p>
          </div>
          <form className="space-y-6 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-600"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-600"
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-600"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
              type="button"
            >
              Send Message <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
