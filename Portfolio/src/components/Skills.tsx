import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { LogoLoop, LogoItem } from "./ui/LogoLoop";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiGit, SiGithub, SiVercel, SiBootstrap, SiMysql, SiMongodb, SiCanva, SiFigma, SiTailwindcss, SiSupabase, SiArduino, SiN8N, SiGoogleanalytics, SiMeta, SiNotion } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { BiBrain } from "react-icons/bi";
import { Heart, FlaskConical } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type SkillItem = {
  name: string;
  icon?: IconType | LucideIcon;
  imageSrc?: string;
  color?: string;
  url: string;
};

type SkillCategory = {
  name: "Tech Stack" | "Tools";
  items: SkillItem[];
};

// Categorized skills structure (simplified into two groups)
const skillCategories: SkillCategory[] = [
  {
    name: "Tech Stack",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
      { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
      { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
      { name: "React Redux", icon: SiRedux, color: "#764abc", url: "https://react-redux.js.org/" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3", url: "https://getbootstrap.com/" },
      { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1", url: "https://www.mysql.com/" },
      { name: "MongoDB", icon: SiMongodb, color: "#13aa52", url: "https://www.mongodb.com/" },
      { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", url: "https://supabase.com/" },
      { name: "Vercel", icon: SiVercel, url: "https://vercel.com/" },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "n8n", icon: SiN8N, color: "#F05A2A", url: "https://n8n.io/" },
      { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, url: "https://github.com/" },
      { name: "Lovable.dev", icon: Heart, color: "#ff6b9d", url: "https://lovable.dev/" },
      { name: "Stitch AI", icon: FlaskConical, color: "#ec4899", url: "https://stitch.tech/" },
      { name: "MS Excel", icon: FaMicrosoft, color: "#217346", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
      { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
      { name: "Cursor IDE", icon: BiBrain, color: "#00d4aa", url: "https://cursor.sh/" },
      { name: "Arduino IDE", icon: SiArduino, color: "#00979D", url: "https://www.arduino.cc/en/software" },
      { name: "Canva", icon: SiCanva, color: "#00c4cc", url: "https://www.canva.com/" },
      { name: "Affinity", imageSrc: "/assets/affinity.svg", color: "#1B72BE", url: "https://affinity.serif.com/en-us/designer/" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e", url: "https://www.figma.com/" },
      { name: "Analytics", icon: SiGoogleanalytics, color: "#e37400", url: "https://analytics.google.com/" },
      { name: "Meta Ads", icon: SiMeta, color: "#0668E1", url: "https://www.facebook.com/business/ads" },
      { name: "Notion AI", icon: SiNotion, url: "https://www.notion.so/" },
    ],
  },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("Tech Stack");

  const filterOptions = [
    { label: "Tech Stack", value: "Tech Stack" },
    { label: "Tools", value: "Tools" },
  ];

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.name === activeFilter) ?? skillCategories[0],
    [activeFilter]
  );

  const skillRows = useMemo(() => {
    const midpoint = Math.ceil(activeCategory.items.length / 2);
    return [activeCategory.items.slice(0, midpoint), activeCategory.items.slice(midpoint)].filter((row) => row.length > 0);
  }, [activeCategory]);

  const logosByRow = useMemo(
    () =>
      skillRows.map((row) =>
        row.map((skill): LogoItem => {
          const Icon = skill.icon;
          return {
            href: skill.url,
            title: skill.name,
            ariaLabel: `${skill.name} documentation`,
            node: (
              <span className="inline-flex items-center gap-2.5 px-1 py-1 text-[17px] font-semibold text-gray-800 transition-colors duration-300 dark:text-gray-100">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${skill.color ?? "#3b82f6"}1A` }}
                >
                  {skill.imageSrc ? (
                    <img src={skill.imageSrc} alt={skill.name} className="h-6 w-6 object-contain" loading="lazy" />
                  ) : Icon ? (
                    <Icon size={22} color={skill.color} className={!skill.color ? "text-blue-600 dark:text-blue-300" : undefined} />
                  ) : null}
                </span>
                <span className="whitespace-nowrap">{skill.name}</span>
              </span>
            ),
          };
        })
      ),
    [skillRows]
  );

  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale 📈">Skills</SectionTitle>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${activeFilter === option.value
                    ? "border-blue-500 bg-blue-500 text-white shadow-lg"
                    : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500 dark:border-gray-700 dark:text-gray-300"
                  }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative -mx-6 md:-mx-8"
            >
              <div className="space-y-3">
                {logosByRow.map((logos, index) => (
                  <LogoLoop
                    key={`${activeCategory.name}-${index}`}
                    logos={logos}
                    speed={index % 2 === 0 ? 86 : 72}
                    direction={index % 2 === 0 ? "left" : "right"}
                    gap={24}
                    logoHeight={44}
                    pauseOnHover
                    fadeOut
                    scaleOnHover
                    ariaLabel={`${activeCategory.name} skill carousel row ${index + 1}`}
                    className="py-1"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </SectionBackground>
  );
}