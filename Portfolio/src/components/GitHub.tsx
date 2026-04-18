import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Github } from "lucide-react";

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/dineshit27")
      .then((response) => response.json())
      .then((data: UserProfile) => setUser(data));

    const specificRepos = [
      {
        name: "Makos Infotech-Internship",
        description: "Welcome to Tech Hub430, a modern and intuitive e-commerce platform tailored for tech enthusiasts. This responsive website merges sleek design with interactive UI elements, creating a premium online shopping experience for gadgets and technology products.",
        stars: 6,
        forks: 0,
        language: "CSS",
        html_url: "https://github.com/dineshit27/Makos-Infotech-Ecommerce-Website-Tech-hub430",
      },
      {
        name: "Linux Cheatsheet",
        description: "Welcome to the Linux Cheatsheet repository! This cheatsheet contains essential Linux commands categorized for easy reference.",
        stars: 8,
        forks: 1,
        language: "shell",
        html_url: "https://github.com/dineshit27/linux-cheatsheet",
      },
      {
        name: "Become a full stack dev",
        description: "The list below isn't meant to be exclusive, it's more so a collection of links that have helped me out along the way (and can hopefully help you). As you'll see, I've focused on JavaScript, React, and Node.js. There is also a wealth of information on interview prep and applying to jobs.",
        stars: 9,
        forks: 1,
        language: "Markdown",
        html_url: "https://github.com/dineshit27/Become-full-stack-dev",
      },
    ];
    setRepos(specificRepos);
  }, []);

  return (
    <SectionBackground>
      <section id="github">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Code that lives, breathes, and contributes — open source and beyond 👾">GitHub Contributions</SectionTitle>

          {/* ── Stat Cards ── */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              {
                src: 'https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=dineshit27&theme=github_dark',
                alt: 'GitHub Profile Details',
                label: 'Profile Overview',
              },
              {
                src: 'https://streak-stats.demolab.com/?user=dineshit27&theme=dark&hide_border=true&background=0D1117&stroke=30363d&ring=58a6ff&fire=ff6b6b&currStreakNum=c9d1d9&sideNums=c9d1d9&currStreakLabel=58a6ff&sideLabels=8b949e&dates=8b949e',
                alt: 'GitHub Streak Stats',
                label: 'Contribution Streak',
              },
            ].map((card, i) => (
              <motion.div
                key={card.alt}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ scale: 1.012, y: -4 }}
                className="group relative min-w-0 w-full overflow-hidden rounded-2xl border border-gray-700/50 bg-[#0d1117] shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_32px_rgba(88,166,255,0.18)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto block rounded-2xl"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = 'none';
                    const parent = el.parentElement;
                    if (parent) {
                      parent.style.minHeight = '160px';
                      parent.innerHTML += `<div style="display:flex;align-items:center;justify-content:center;width:100%;min-height:160px;color:#8b949e;font-size:0.875rem;">${card.label} unavailable</div>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Top Repositories */}
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="block p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500">
                  <span>{repo.language}</span>
                  <div className="flex space-x-4">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub Profile Widget */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg"
            >
              {/* Avatar & Name */}
              <div className="flex items-center space-x-4">
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                  src={user.avatar_url}
                  alt="GitHub Avatar"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
                </div>
              </div>

              {/* Bio & Stats */}
              <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
                {user.bio}
              </p>

              {/* Followers, Repos, Profile Link */}
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                <span className="flex items-center gap-1 text-sm">👥 {user.followers} Followers</span>
                <span className="flex items-center gap-1 text-sm">📦 {user.public_repos} Repos</span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all mt-3 md:mt-0"
                >
                  <Github className="w-5 h-5" /> View Profile
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
