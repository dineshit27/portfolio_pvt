import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

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
    href: 'https://wa.me/918122129450',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
  {
    href: 'https://www.skillrack.com/faces/resume.xhtml?id=444147&key=Skillrackresume430',
    icon: <SiCodeforces className="w-6 h-6 text-[#1F8ACB]" />,
    label: 'SkillRack',
  },
  {
    href: 'https://leetcode.com/u/Dinesh_coder30/',
    icon: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />,
    label: 'LeetCode',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
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