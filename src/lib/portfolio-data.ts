export type Skill = {
  name: string;
};

export type Project = {
  title: string;
  category: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

export const profile = {
  name: "Sheetla Verma",
  role: "Full Stack Developer",
  tagline:
    "I build modern, reliable web products with thoughtful UI and clean backend architecture.",
  location: "India",
  email: "sheetlaverma.dev@gmail.com",
  github: "https://github.com/sheetlaverma",
  linkedin: "https://www.linkedin.com/in/sheetla-verma",
  about: [
    "I focus on full-stack development with strong fundamentals in frontend engineering and API design.",
    "I enjoy creating interfaces that are fast, accessible, and visually expressive while keeping code quality high.",
  ],
};

export const skills: Skill[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Git" },
  { name: "Figma" },
];

export const projects: Project[] = [
  {
    title: "Sheetla Portfolio",
    category: "Personal Branding Website",
    stack: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma/Sheetla-portfolio",
  },
  {
    title: "TaskFlow Dashboard",
    category: "Productivity Web App",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "Campus Connect",
    category: "Community Platform",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
];
