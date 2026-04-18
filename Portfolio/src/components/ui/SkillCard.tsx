import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon?: LucideIcon | IconType; // optional component icon
  imageSrc?: string; // optional image icon source
  color?: string;
  url?: string;
  index?: number; // for stagger animation
}

export function SkillCard({ name, icon: Icon, imageSrc, color, url, index = 0 }: SkillCardProps) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"      
      className="group relative flex flex-col items-center p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
        before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-transparent before:to-[var(--glow-color,rgba(255,255,255,0))] before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-50"
      style={{ "--glow-color": color } as React.CSSProperties}
    >
      {/* Icon with Background */}
      <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${color ?? '#000'}1A` }}>
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-[50px] h-[50px] object-contain" />
        ) : (
          Icon && (
            // If a specific color is not provided, inherit theme-aware text color
            <Icon
              size={50}
              {...(color ? { color } : {})}
              className={(color ? "" : "text-gray-900 dark:text-gray-100 ") + "group-hover:brightness-100"}
            />
          )
        )}
      </div>

      {/* Skill Name */}
      <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100 text-center">{name}</span>
    </motion.a>
  );
}