import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Github } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";

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
          <SectionTitle subtitle="Code that lives, breathes, and contributes - open source and beyond 👾">GitHub Contributions</SectionTitle>

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
                className="relative block overflow-hidden p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
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
              className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
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
