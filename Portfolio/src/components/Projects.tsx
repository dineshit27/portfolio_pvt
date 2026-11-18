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
  SiPython,
  SiFastapi,
  SiGreensock,
  SiMqtt,
  SiZapier,
  SiPaypal,
  SiRender,
  SiPostman,
} from 'react-icons/si';

import { VscJson } from "react-icons/vsc";

const GsapIcon = ({ className, color }: { className?: string, color?: string }) => (
  <img 
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3NTc3Nzc3OC83Nzc3NzA1Kzc3Kzc3NTc3NzcyMjI3NzU1NTI4Nzc2Nzc1Nf/AABEIABwAHAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAFBgcIAv/EADEQAAECBAQEBAQHAAAAAAAAAAECAwQFERIABhMhFDFBUQcVYaEWInGBMjM0QnKisf/EABoBAAMAAwEAAAAAAAAAAAAAAAMEBQECBgD/xAAnEQABAwMDAwQDAAAAAAAAAAABAAIDBBESBRMhMUFRFCKh0XHB8P/aAAwDAQACEQMRAD8AQsk5Rh5rCGYTIrLJUUtNINLqcyT9f8wjU1JYcWrn9W1Z9O/Zh69yi858Nm3lwy5KtTQW6lDyHDcEJP7x127YHFWnnNaUOryOBE/Pj6TXD+E+XHYHQIig9b+p1fmr3p+H2wD10t7pqKtmc656KM5ilD0hncXK4lQW5DOW3gUChSoP3BBxWjeJGBw7quxwc0OCdvDGbrcaVKVw7q0tqK0OoTVKQeiu29aYQrYuc7rmtbohuCcOHPb6R/OOcHstvQbMPBOqKnErcccSUoWgHdCT1Pr09a4FT0wlBJK9ptC2Vpc4qgszdLch818vmFNO/heHOvyrS3v98K7fvxuP0nY4sTjdZrzLOHZ/PYyavIDaoly4IBrakABIr1oAN8XYoxGwNHZV2NwaGqn+FCIdWXQWaausrWpzu6e1MTK2+7yuX1ZrzV+7pYW/vynePblaUQHm+lTjGuG1KfnV+WnrzwszPnH+8ItIx/OPj4TONsBTizH4j8J8cTjgLNHX3s5X0F/9rsX6a+y3JVYb7YuhMonExkz5flkW5DrUKKt3CvqDscEfGyQWcLr0sMcos8XXc5ns0njqHJrGuRBbFEBVAlPeiRsMYjiZGLNFlmOJkQswWRP49zVwHBedROjbbXa+n86Xe+NPTQ3yxWNmO97JbwdFX//Z" 
    alt="GSAP" 
    className={className} 
    style={{ filter: color ? 'none' : undefined }}
  />
);

const ClaudeIcon = ({ className }: { className?: string }) => (
  <img 
    src="/assets/claude.png" 
    alt="Claude" 
    className={className} 
    loading="lazy"
  />
);

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
  claude: { icon: ClaudeIcon as any, name: "Claude", color: '#d97757' },
  python: { icon: SiPython, name: "Python", color: '#3776AB' },
  fastapi: { icon: SiFastapi, name: "FastAPI", color: '#05998B' },
  gsap: { icon: GsapIcon as any, name: "GSAP", color: '#88CE02' },
  mqtt: { icon: SiMqtt, name: "MQTT", color: '#660066' },
  zapier: { icon: SiZapier, name: "Zapier", color: '#ff4f00' },
  paypal: { icon: SiPaypal, name: "PayPal", color: '#003087' },
  render: { icon: SiRender, name: "Render", color: '#46e3b7' },
  postman: { icon: SiPostman, name: "Postman", color: '#ff6c37' },
};

const projects = [
  {
    title: 'AquaWatt',
    description: 'Track the water and electricity in each and every room. It is a Full-stack and Iot based real time product.',
    image: '/assets/aqi.png?v=2',
    link: 'https://aquawatt-hub.web.app/',
    github: 'https://github.com/dineshit27/aquawatt-org',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite, // Added Vite icon next to React
      techStacks.tailwind,
      techStacks.framer, // Added Framer Motion icon next to Tailwind CSS
      techStacks.supabase,
      techStacks.gsap,
      techStacks.mqtt,
      techStacks.stripe, // Added Stripe icon next to Supabase
      techStacks.formspree, // Added Formspree icon before Firebase
      techStacks.firebase,
    ],
  },
  {
    title: 'Procura AI',
    description: 'Platform for small businesses featuring AI purchasing recommendations, policy-based spending, payment checkout.',
    image: '/assets/probanner.png',
    link: 'https://procura-io.onrender.com/',
    github: 'https://github.com/dineshit27/procura-ai',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.vite,
      techStacks.tailwind,
      techStacks.supabase,
      techStacks.gemini,
      techStacks.zapier,
      techStacks.paypal,
      techStacks.render,
      techStacks.postman,
    ],
  },
  {
    title: 'NeuroScan AI',
    description: 'AI powered Human Brain Tumor Detector. It is a Full Stack and AI based real time product.',
    image: '/assets/neu.png?v=2',
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
    title: 'LibraVault',
    description: 'Next-gen library management ecosystem bridging advanced tech with a high-performance digital experience.',
    image: '/assets/libravault.png?v=2',
    link: 'https://libra-vault-xo.web.app/',
    github: 'https://github.com/dineshit27',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.gsap,
      techStacks.supabase,
      techStacks.python,
      techStacks.fastapi,
    ],
  },
  {
    title: 'Data Analyst AI Agent',
    description: 'Built a smart Data Analyst AI Agent using n8n that automates data collection, analysis, and actionable insights.',
    image: '/assets/n8n.png?v=2',
    github: 'https://github.com/dineshit27',
    techStack: [
      techStacks.n8n,
      techStacks.json,
      techStacks.gemini,
      techStacks.sheets,
      techStacks.claude,
    ],
  },
  {
    title: 'MaxGroo Hub Site',
    description: 'It showcases my role in designing and developing a modern, responsive, and user-focused digital platform.',
    image: '/assets/mgv.png?v=2',
    link: 'https://maxgroo-hub.web.app/',
    techStack: [
      techStacks.typescript,
      techStacks.react,
      techStacks.gsap,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.firebase,
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
