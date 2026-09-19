"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiLaravel, SiReact, SiTailwindcss } from "react-icons/si";

interface WorksProps {
  hideHeader?: boolean;
}

const projects = [
  {
    id: "innovation4force",
    title: "🚀 Innovation 4 Force Competition",
    description: "Innovation 4 Force is a modern full-stack web platform designed to manage competition registrations, event timelines, guidebooks, judges, sponsors, and an interactive centralized administration dashboard.",
    image: "/img/projects/i4force.jpeg",
    techStacks: [
      { category: "BACKEND", name: "LARAVEL 11 / PHP 8.3+", bg: "bg-[#FF2D20]", text: "text-white", icon: SiLaravel },
      { category: "FRONTEND", name: "REACT 19 + VITE", bg: "bg-[#61DAFB]", text: "text-slate-900", icon: SiReact },
      { category: "STYLING", name: "TAILWIND CSS 4", bg: "bg-[#06B6D4]", text: "text-white", icon: SiTailwindcss }
    ],
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 flex flex-col border border-white/5">
      <div className="aspect-video w-full overflow-hidden bg-slate-900 relative">
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
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <hr className="border-white/10 mb-4" />
        
        {/* Horizontal Scrolling Tech Badges */}
        <div className="flex flex-nowrap overflow-x-auto gap-2 mb-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.techStacks.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="flex shrink-0 text-[9px] font-bold tracking-wider uppercase rounded-sm overflow-hidden border border-white/10 shadow-sm">
                <div className="bg-slate-700/80 text-slate-200 px-2 py-1 flex items-center gap-1.5">
                  <Icon className="text-[10px]" />
                  {tech.category}
                </div>
                <div className={`${tech.bg} ${tech.text} px-2 py-1 flex items-center`}>
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Description with Expand/Collapse Toggle */}
        <div className="flex-grow mb-5">
          <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-primary hover:text-white transition-colors"
          >
            {isExpanded ? (
              <>Show Less <FaChevronUp className="text-[10px]" /></>
            ) : (
              <>Read More <FaChevronDown className="text-[10px]" /></>
            )}
          </button>
        </div>

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
  );
}
