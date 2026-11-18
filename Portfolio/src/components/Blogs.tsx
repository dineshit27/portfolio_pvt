import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ExternalLink } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
  views?: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Top 50 AI Tools for Students, Founders & Professionals',
    excerpt: 'Explore the most powerful AI tools that can skyrocket your productivity, streamline workflows, and unlock new creative possibilities.',
    category: 'Development',
    date: 'Jun 08, 2026',
    readTime: '8 min',
    image: '/assets/aiblog.png',
    link: 'https://nexgenblogz.blogspot.com/',
    tags: ['AI', 'Productivity', 'Innovation'],
    featured: true,
    views: '50',
  },
  {
    id: 2,
    title: 'Free Certificates that boost your Resume',
    excerpt: 'Discover the best free certificates that can help you enhance your resume and get your dream job.',
    category: 'Design',
    date: 'Jun 08, 2026',
    readTime: '4 min',
    image: '/assets/aicertificate.png',
    link: 'https://nexgenblogz.blogspot.com/',
    tags: ['Certificates', 'Resume', 'Jobs'],
    featured: true,
    views: '30',
  },
  {
    id: 3,
    title: 'GitHub: The Ultimate Platform for Developers',
    excerpt: 'Master version control, streamline team collaboration, and leverage the power of the world\'s largest open-source community to build better software.',
    category: 'Development',
    date: 'Apr 27, 2025',
    readTime: '6 min',
    image: 'https://i.pinimg.com/736x/26/af/ea/26afeaeef461434569b168fc095069c1.jpg',
    link: 'https://www.linkedin.com/pulse/github-ultimate-platform-developers-teams-dinesh-m-zgpdc/?trackingId=HBatwfaTQwyCEHMpyQjvCQ%3D%3D',
    tags: ['GitHub', 'Developers', 'Open Source'],
    views: '56',
  },
];

export function Blogs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionBackground>
      <section id="blogs">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Insights, tutorials, and stories from the tech world 📝">
            Blogs & Articles
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-md hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white text-xs font-semibold backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: hoveredCard === article.id ? 1 : 0, x: hoveredCard === article.id ? 0 : -10 }}
                      className="absolute bottom-5 right-5 p-2 rounded-full bg-blue-600 text-white shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://nexgenblogz.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group"
            >
              Explore More Articles
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
