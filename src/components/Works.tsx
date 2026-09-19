import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface WorksProps {
  hideHeader?: boolean;
}

const projects = [
  {
    id: "innovation4force",
    title: "Innovation 4 Force",
    description: "An international IT competition website featuring global tech synergy, designed with modern UI/UX principles for showcasing Web Application development challenges.",
    image: "/img/projects/i4force.jpeg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      web: "https://i4force.web.id/",
      github: "https://github.com/Hendi-Firmansah333/Web_Innovation4force"
    }
  }
];

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
              <p className="text-slate-400 max-w-md">Recent projects demonstrating my frontend expertise.</p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 flex flex-col border border-white/5">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.web && (
                    <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-primary hover:text-white text-slate-200 rounded-full transition-colors backdrop-blur-md border border-white/10 shadow-lg" title="Visit Website">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 hover:bg-slate-700 hover:text-white text-slate-200 rounded-full transition-colors backdrop-blur-md border border-white/10 shadow-lg" title="Source Code">
                      <FaGithub className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary/10 text-cyan-400 border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  {project.links.web && (
                    <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 hover:text-primary transition-colors flex items-center gap-1.5 font-semibold">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-semibold">
                      <FaGithub /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
