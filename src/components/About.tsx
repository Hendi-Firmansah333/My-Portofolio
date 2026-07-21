import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px]"></div>
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="lg:w-1/3 relative group">
              <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden border border-white/10 bg-slate-800">
                <Image
                  alt="Hendi Firmansah"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  src="/img/person.png"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                About Me
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm Hendi Firmansah, a passionate <strong>Frontend Developer</strong> based
                  in Indonesia. I specialize in building responsive web applications with a focus on
                  clean design and interactivity.
                </p>
                <p>
                  My expertise lies in the <strong>Laravel</strong> ecosystem, combined with modern
                  frontend technologies like <strong>Tailwind CSS</strong> and JavaScript. I also have
                  a growing interest in AI integration and mobile development with Dart.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-white">5+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">3+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">
                    Years Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
