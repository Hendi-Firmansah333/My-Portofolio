import { IconType } from "react-icons";
import { SiLaravel, SiReact, SiTailwindcss, SiVite, SiFramer, SiNodedotjs, SiExpress, SiPython, SiStreamlit, SiMysql, SiNestjs, SiNextdotjs, SiFlutter } from "react-icons/si";

export interface TechStack {
  category: string;
  name: string;
  bg: string;
  text: string;
  icon?: IconType;
  iconColor?: string;
  rightIcon?: IconType;
  rightIconColor?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStacks: TechStack[];
  links: {
    web: string;
    github: string;
  };
}

export const projects: Project[] = [
  {
    id: "innovation4force",
    title: "Innovation 4 Force",
    description: "Innovation 4 Force is a modern full-stack web platform designed to manage competition registrations, event timelines, guidebooks, judges, sponsors, and an interactive centralized administration dashboard.",
    image: "/img/projects/i4force.jpeg",
    techStacks: [
      { category: "BACKEND", name: "LARAVEL 11 / PHP 8.3+", bg: "bg-[#FF2D20]", text: "text-white", icon: SiLaravel },
      { category: "FRONTEND", name: "REACT 19 + VITE", bg: "bg-[#61DAFB]", text: "text-slate-900", icon: SiReact, iconColor: "text-cyan-400" },
      { category: "STYLING", name: "TAILWIND CSS 4", bg: "bg-[#06B6D4]", text: "text-white", icon: SiTailwindcss, iconColor: "text-cyan-400" }
    ],
    links: {
      web: "https://i4force.web.id/",
      github: "https://github.com/Hendi-Firmansah333/Web_Innovation4force"
    }
  },
  {
    id: "gridcutpro",
    title: "GridCut Studio Pro",
    description: "Professional serverless image cropping platform. Generate Instagram grids, seamless carousels, and super HD panoramas directly in your browser in seconds.",
    image: "/img/projects/gridcut.jpeg",
    techStacks: [
      { category: "REACT", name: "VITE", bg: "bg-[#A855F7]", text: "text-white", icon: SiReact, iconColor: "text-cyan-400", rightIcon: SiVite, rightIconColor: "text-yellow-300" },
      { category: "STYLING", name: "GLASSMORPHISM UI", bg: "bg-[#00E5FF]", text: "text-slate-900" },
      { category: "LICENSE", name: "MIT", bg: "bg-[#4ADE80]", text: "text-slate-900" }
    ],
    links: {
      web: "https://www.gridcut-pro.web.id/",
      github: "https://github.com/Hendi-Firmansah333/GridCut-Studio-Pro"
    }
  },
  {
    id: "jokilaporan",
    title: "Joki Laporan",
    description: "A professional assignment assistance platform offering high-quality help with reports, papers, proposals, and presentations for students quickly and neatly.",
    image: "/img/projects/jokilaporan.jpeg",
    techStacks: [
      { category: "FRONTEND", name: "REACT + VITE", bg: "bg-[#A855F7]", text: "text-white", icon: SiReact, iconColor: "text-cyan-400", rightIcon: SiVite, rightIconColor: "text-yellow-300" },
      { category: "STYLING", name: "TAILWIND CSS 3", bg: "bg-[#06B6D4]", text: "text-white", icon: SiTailwindcss },
      { category: "ANIMATION", name: "FRAMER MOTION", bg: "bg-[#0055FF]", text: "text-white", icon: SiFramer }
    ],
    links: {
      web: "https://www.jokilaporan.web.id/",
      github: "https://github.com/Hendi-Firmansah333/Joki-Laporan-SMK"
    }
  },
  {
    id: "struklyai",
    title: "Strukly AI",
    description: "AI-powered financial recording platform for MSMEs. Features Vision AI automation for extracting receipt data and a Python analytics dashboard.",
    image: "/img/projects/strukly.jpeg",
    techStacks: [
      { category: "FRONTEND", name: "REACT + VITE", bg: "bg-[#A855F7]", text: "text-white", icon: SiReact, iconColor: "text-cyan-400", rightIcon: SiVite, rightIconColor: "text-yellow-300" },
      { category: "BACKEND", name: "NODE.JS + EXPRESS", bg: "bg-[#22C55E]", text: "text-white", icon: SiNodedotjs, rightIcon: SiExpress },
      { category: "ANALYTICS", name: "PYTHON + STREAMLIT", bg: "bg-[#EF4444]", text: "text-white", icon: SiPython, rightIcon: SiStreamlit }
    ],
    links: {
      web: "https://struklyai.vercel.app/",
      github: "https://github.com/Alaika10/strukly_AI_UMKM"
    }
  },
  {
    id: "astech",
    title: "Web ASTECH",
    description: "Campus organization management platform for ASTECH. Designed to manage divisions, achievements, and student aspirations efficiently.",
    image: "/img/projects/astech.jpeg",
    techStacks: [
      { category: "FRONTEND", name: "REACT + TAILWIND", bg: "bg-[#A855F7]", text: "text-white", icon: SiReact, iconColor: "text-cyan-400", rightIcon: SiTailwindcss },
      { category: "BACKEND", name: "EXPRESS.JS", bg: "bg-[#22C55E]", text: "text-white", icon: SiExpress },
      { category: "DATABASE", name: "MYSQL", bg: "bg-[#4479A1]", text: "text-white", icon: SiMysql }
    ],
    links: {
      web: "https://astech-profile-zg3i.vercel.app/",
      github: "https://github.com/RidhoNuril/web_profile_astech"
    }
  },
  {
    id: "prima",
    title: "PRIMA (Humas App)",
    description: "Public relations management application for Politeknik Negeri Lampung. Features live GPS monitoring for PR members, an interactive admin dashboard, and a mobile application.",
    image: "/img/projects/prima.jpeg",
    techStacks: [
      { category: "FRONTEND", name: "NEXT.JS", bg: "bg-[#000000]", text: "text-white", icon: SiNextdotjs },
      { category: "BACKEND", name: "NEST.JS", bg: "bg-[#E0234E]", text: "text-white", icon: SiNestjs },
      { category: "MOBILE", name: "FLUTTER", bg: "bg-[#02569B]", text: "text-white", icon: SiFlutter }
    ],
    links: {
      web: "#",
      github: "https://github.com/Hendi-Firmansah333/Project-Humas-App"
    }
  }
];

export const experienceCategories = ["All", "Work", "Organisasi", "Program", "Pendidikan"];

export const experiences = [
  {
    id: 1,
    category: "Program",
    period: "2025 — 2026",
    title: "Google Student Ambassador",
    subtitle: "Team Google",
    description: "Acted as a pioneer ambassador for Google technologies, serving as an influencer at Politeknik Negeri Lampung to educate peers on Google tech and organize tech events.",
    icon: "smart_toy",
    color: "text-primary",
    border: "border-l-primary/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/googleindonesia/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@google" }
    ]
  },
  {
    id: 8,
    category: "Program",
    period: "2026 (6 Bulan)",
    title: "Fullstack Developer",
    subtitle: "DBS Foundation x Dicoding Indonesia",
    description: "Intensive bootcamp program focusing on web technologies, specifically comprehensive end-to-end application development as a Fullstack Developer.",
    icon: "code",
    color: "text-red-500",
    border: "border-l-red-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/dbsfoundationid/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@dicoding" }
    ]
  },
  {
    id: 9,
    category: "Program",
    period: "2025 (6 Bulan)",
    title: "AI Code Generation",
    subtitle: "IBM Skills Build Bootcamp",
    description: "Learned programming paradigms focused on code generation and code optimization utilizing artificial intelligence technologies.",
    icon: "memory",
    color: "text-blue-500",
    border: "border-l-blue-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/ibm/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@ibm" }
    ]
  },
  {
    id: 10,
    category: "Program",
    period: "2025 (6 Bulan)",
    title: "IoT, AI & Complex Coding",
    subtitle: "SIC7 DIBIMBING",
    description: "Intensive bootcamp covering Internet of Things (IoT), artificial intelligence technologies, and problem-solving through complex programming.",
    icon: "router",
    color: "text-emerald-500",
    border: "border-l-emerald-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/dibimbing/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@dibimbing" }
    ]
  },
  {
    id: 11,
    category: "Program",
    period: "2026 (4 Hari)",
    title: "AI Productivity",
    subtitle: "HACKTIV8 Maju Bareng AI",
    description: "Covered AI productivity and AI API integration for developers. Involved hands-on practice in AI development and building a chatbot project.",
    icon: "smart_toy",
    color: "text-purple-500",
    border: "border-l-purple-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/hacktiv8id/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@hacktiv8id" }
    ]
  },
  {
    id: 2,
    category: "Pendidikan",
    period: "2023 — Present",
    title: "Politeknik Negeri Lampung",
    subtitle: "Mahasiswa Aktif",
    description: "Currently pursuing a degree with a strong focus on software engineering, frontend development, and modern web technologies.",
    icon: "school",
    color: "text-blue-400",
    border: "border-l-blue-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/polinela.official/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@polinela.official" }
    ]
  },
  {
    id: 3,
    category: "Organisasi",
    period: "2024 — Present",
    title: "Kadep Minat Bakat",
    subtitle: "HMJTI Politeknik Negeri Lampung",
    description: "Organization covering the Information Technology department at Politeknik Negeri Lampung. Responsible for leading the department in developing students' potential and talents.",
    icon: "groups",
    color: "text-orange-400",
    border: "border-l-orange-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/hmjtipolinela/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@hmjti.polinela" }
    ]
  },
  {
    id: 7,
    category: "Organisasi",
    period: "2024 — Present",
    title: "Wakadiv Minat Bakat",
    subtitle: "ASTECH Politeknik Negeri Lampung",
    description: "Student association for TRPL study program development at Politeknik Negeri Lampung. Focused on innovation and collaboration regarding students' talents and interests.",
    icon: "local_fire_department",
    color: "text-blue-400",
    border: "border-l-blue-400/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/astech.polinela/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@astech.polinela" }
    ]
  },
  {
    id: 6,
    category: "Work",
    period: "2026 — Present",
    title: "Instruktur",
    subtitle: "LKP Global Komputer Pringsewu",
    description: "Mentoring and guiding students in computer fundamentals, software applications, and IT skills as a dedicated instructor.",
    icon: "laptop_mac",
    color: "text-amber-400",
    border: "border-l-amber-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/lkpglobal/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@lkpglobal.kompute" }
    ]
  },
  {
    id: 4,
    category: "Work",
    period: "2024 (3 Months)",
    title: "Digital Marketing",
    subtitle: "Kurnia Properti",
    description: "Executed digital marketing strategies focusing on property and land lots (Kavling). Managed social media presence and optimized campaigns to drive sales and brand awareness.",
    icon: "campaign",
    color: "text-purple-400",
    border: "border-l-purple-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/kurniaproperti.id/" },
      { platform: "tiktok", url: "https://www.tiktok.com/@kurniaproperti.id" }
    ]
  },
  {
    id: 5,
    category: "Work",
    period: "2023 (3 Months)",
    title: "Graphic Designer Intern",
    subtitle: "PT Kuy Merchandise",
    description: "Completed an internship program focused on creative design. Created visual assets for merchandise products and gained hands-on experience in the professional graphic design industry.",
    icon: "palette",
    color: "text-pink-400",
    border: "border-l-pink-500/50",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/kuy2.id/" },
      { platform: "tiktok", url: "#" }
    ]
  }
];
