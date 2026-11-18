import { Github, Linkedin, Twitter } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

function SkillRackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-left: filled blue square */}
      <rect x="1" y="1" width="10" height="10" rx="1" fill="#4A9BD9" />
      {/* Top-right: outlined square with checkmark */}
      <rect x="13" y="1" width="10" height="10" rx="1" fill="none" stroke="#3A7BAD" strokeWidth="1.5" />
      <path d="M15.5 6.5L17.5 8.5L21 4.5" stroke="#2D2D2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom-left: outlined square with code brackets */}
      <rect x="1" y="13" width="10" height="10" rx="1" fill="none" stroke="#3A7BAD" strokeWidth="1.5" />
      <path d="M5 16L3 18L5 20" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16L10 18L8 20" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom-right: filled blue square */}
      <rect x="13" y="13" width="10" height="10" rx="1" fill="#4A9BD9" />
    </svg>
  );
}

const links = [
  {
    href: 'https://github.com/dineshit27',
    icon: <Github className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/m-dinesh-d30/',
    icon: <Linkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/mr_dinesh_io',
    icon: <Twitter className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'X',
  },

  {
    href: 'https://www.skillrack.com/faces/resume.xhtml?id=444147&key=Skillrackresume430',
    icon: <SkillRackIcon className="w-6 h-6" />,
    label: 'SkillRack',
  },
  {
    href: 'https://leetcode.com/u/Dinesh_coder30/',
    icon: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />,
    label: 'LeetCode',
  },
];

export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface SocialLinksProps {
  extraLinks?: SocialLink[];
}

export function SocialLinks({ extraLinks = [] }: SocialLinksProps) {
  const allLinks = [...links, ...extraLinks];
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {allLinks.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}