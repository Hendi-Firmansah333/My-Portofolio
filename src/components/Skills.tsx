import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiFigma,
  SiLaravel, SiPhp, SiMysql, SiPostgresql, SiMongodb, SiNodedotjs, SiDocker, SiGit
} from "react-icons/si";

interface SkillsProps {
  hideHeader?: boolean;
}

const row1 = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const row2 = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function Skills({ hideHeader = false }: SkillsProps) {
  return (
    <section className={`${hideHeader ? 'py-4' : 'py-24'} relative z-10 overflow-hidden`} id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400">My coding stack and tools.</p>
          </div>
        )}

        <div className="flex flex-col gap-6 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          
          {/* Row 1 - Moving Left */}
          <div className="flex items-center">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[...row1, ...row1].map((tech, idx) => (
                <div 
                  key={`row1-${idx}`} 
                  className="flex flex-col items-center justify-center min-w-[100px] h-[100px] sm:min-w-[130px] sm:h-[130px] md:min-w-[150px] md:h-[150px] bg-slate-900/40 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: tech.color }} />
                  <tech.icon 
                    className="text-4xl sm:text-5xl mb-2 sm:mb-3 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
                    style={{ color: tech.color }} 
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="flex items-center">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            >
              {[...row2, ...row2].map((tech, idx) => (
                <div 
                  key={`row2-${idx}`} 
                  className="flex flex-col items-center justify-center min-w-[100px] h-[100px] sm:min-w-[130px] sm:h-[130px] md:min-w-[150px] md:h-[150px] bg-slate-900/40 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: tech.color }} />
                  <tech.icon 
                    className="text-4xl sm:text-5xl mb-2 sm:mb-3 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" 
                    style={{ color: tech.color }} 
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
