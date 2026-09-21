"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiLaravel, SiReact, SiTailwindcss, SiVite, SiFramer, SiNodedotjs, SiExpress, SiPython, SiStreamlit, SiMysql, SiNestjs, SiNextdotjs, SiFlutter } from "react-icons/si";

import { IconType } from "react-icons";
import { Project, TechStack, projects } from "@/data/portfolioData";

interface WorksProps {
  hideHeader?: boolean;
}

export default function Works({ hideHeader = false }: WorksProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const showSliderControls = projects.length > 3;

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

        <div className="relative">
          <div 
            ref={scrollRef}
            className={`flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-4 scrollbar-hide ${!showSliderControls ? 'flex-wrap lg:flex-nowrap' : ''}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-21.33px)] h-auto flex flex-col"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Slider Navigation (Only shows if > 3 projects) */}
          {showSliderControls && (
            <div className="flex justify-center items-center gap-6 mt-8">
              <button 
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-primary text-slate-300 hover:text-white border border-white/10 hover:border-primary transition-all duration-300 backdrop-blur-md shadow-lg"
                aria-label="Previous project"
              >
                <FaChevronLeft className="text-lg -ml-1" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-primary text-slate-300 hover:text-white border border-white/10 hover:border-primary transition-all duration-300 backdrop-blur-md shadow-lg"
                aria-label="Next project"
              >
                <FaChevronRight className="text-lg -mr-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-2 flex flex-col border border-white/5">
      <div className="aspect-video w-full overflow-hidden bg-slate-900 relative">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors truncate">
          {project.title}
        </h3>
        
        <hr className="border-white/10 mb-4" />
        
        {/* Horizontal Scrolling Tech Badges */}
        <div className="flex flex-nowrap overflow-x-auto gap-2 mb-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {project.techStacks.map((tech, idx) => {
            const LeftIcon = tech.icon;
            const RightIcon = tech.rightIcon;
            return (
              <div key={idx} className="flex shrink-0 text-[9px] font-bold tracking-wider uppercase rounded-sm overflow-hidden border border-white/10 shadow-sm">
                <div className="bg-slate-700/80 text-slate-200 px-2 py-1 flex items-center gap-1.5">
                  {LeftIcon && <LeftIcon className={`text-[10px] ${tech.iconColor || ''}`} />}
                  {tech.category}
                </div>
                <div className={`${tech.bg} ${tech.text} px-2 py-1 flex items-center gap-1.5`}>
                  {RightIcon && <RightIcon className={`text-[10px] ${tech.rightIconColor || ''}`} />}
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
