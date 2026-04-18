import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiSupabase,
  SiGooglegemini,
  SiFormspree,
  SiNetlify,
  SiN8N,
  SiGooglesheets,
  SiAnthropic,
} from 'react-icons/si';

import { VscJson } from "react-icons/vsc";

const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
  redux: { icon: SiRedux, name: 'Redux', color: '#764ABC' },
  vite: { icon: SiVite, name: 'Vite', color: '#646CFF' },
  supabase: { icon: SiSupabase, name: 'Supabase', color: '#3ecf8e' },
  gemini: { icon: SiGooglegemini, name: 'Google Gemini AI', color: '#8f63f4' },
  formspree: { icon: SiFormspree, name: 'Formspree', color: '#e03c31' },
  netlify: { icon: SiNetlify, name: 'Netlify', color: '#00ad9f' },
  n8n: { icon: SiN8N, name: "n8n", color: '#ff6584' },
  json: { icon: VscJson, name: "JSON" },
  sheets: { icon: SiGooglesheets, name: "Google Sheets", color: '#34a853' },
  claude: { icon: SiAnthropic, name: "Claude", color: '#d97757' },
};

const projects = [
  {
    title: 'AquaWatt',
    description: 'Track the water and electricity in each and every room. It is a Full-stack and Iot based real time product.',
    image: '/assets/aqi.png',
    link: 'https://aquawatt-hub.web.app/',
    github: 'https://github.com/dineshit27/aquawatt-org',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite, // Added Vite icon next to React
      techStacks.tailwind,
      techStacks.framer, // Added Framer Motion icon next to Tailwind CSS
      techStacks.supabase,
      techStacks.stripe, // Added Stripe icon next to Supabase
      techStacks.formspree, // Added Formspree icon before Firebase
      techStacks.firebase,
    ],
  },
  {
    title: 'NeuroScan AI',
    description: 'AI powered Human Brain Tumor Detector. It is a Full Stack and AI based real time product.',
    image: '/assets/neu.png',
    link: 'https://neuroscan-aio.web.app/',
    github: 'https://github.com/dineshit27/NeuroScan-AI',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite, // Added Vite icon next to React
      techStacks.tailwind,
      techStacks.framer, // Added Framer Motion icon next to Tailwind CSS
      techStacks.supabase,
      techStacks.stripe, // Added Stripe icon next to Supabase
      techStacks.formspree, // Added Formspree icon before Firebase
      techStacks.firebase,
      techStacks.gemini, // Added Google Gemini icon at last
    ],
  },
  {
    title: 'MR Builders Portfolio',
    description: ' My first freelance project, delivering a luxury, responsive, and professional web presence.',
    image: '/assets/_con.png',
    link: 'https://mr-builder-world.web.app/',
    github: 'https://github.com/dineshit27/MR-Builder-Business-Site',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite,
      techStacks.tailwind,
      techStacks.redux,
      techStacks.formspree, // Added Formspree icon
      techStacks.netlify, // Added Netlify icon
    ],
  },
  {
    title: 'MaxGroo Hub Site',
    description: 'It showcases my role in designing and developing a modern, responsive, and user-focused digital platform.',
    image: '/assets/mgv.png',
    link: 'https://maxgroo-hub.web.app/',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite, // Added Vite icon next to React
      techStacks.tailwind,
      techStacks.framer,
      techStacks.firebase,
    ],
  },
  {
    title: 'Data Analyst AI Agent',
    description: 'Built a smart Data Analyst AI Agent using n8n that automates data collection, analysis, and actionable insights.',
    image: '/assets/n8n.png',
    github: 'https://github.com/dineshit27',
    techStack: [
      techStacks.n8n,
      techStacks.json,
      techStacks.gemini,
      techStacks.sheets,
      techStacks.claude,
    ],
  },
];

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Every project, a product. Every product, a solution with a story">Projects</SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}
