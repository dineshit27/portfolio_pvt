import { useState, useEffect, useRef, useCallback } from 'react';
import { Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface GitHubStarsButtonProps {
  username: string;
  repo: string;
  formatted?: boolean;
  inView?: boolean;
  inViewMargin?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return String(n);
}

export function GitHubStarsButton({
  username,
  repo,
  formatted = false,
  inView: animateInView = false,
  inViewMargin = '0px',
}: GitHubStarsButtonProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(btnRef, { once: true });
  const pidRef = useRef(0);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((r) => r.json())
      .then((d) => setStars(typeof d.stargazers_count === 'number' ? d.stargazers_count : 0))
      .catch(() => setStars(0));
  }, [username, repo]);

  const spawnParticles = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const colors = ['#fbbf24', '#f59e0b', '#fde68a', '#fcd34d', '#fff', '#fb923c'];
    const newP: Particle[] = Array.from({ length: 16 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 35 + Math.random() * 55;
      return {
        id: pidRef.current++,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
    setParticles((prev) => [...prev, ...newP]);
    const ids = new Set(newP.map((p) => p.id));
    setTimeout(() => setParticles((prev) => prev.filter((p) => !ids.has(p.id))), 850);
  }, []);

  const display =
    stars === null ? '…' : formatted ? formatCount(stars) : stars.toLocaleString();

  return (
    <motion.button
      ref={btnRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={spawnParticles}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-yellow-400/60 bg-yellow-50/90 dark:bg-yellow-500/10 dark:border-yellow-500/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold shadow-sm select-none cursor-pointer overflow-visible"
    >
      {/* Glow halo */}
      <motion.span
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ boxShadow: '0 0 16px 5px rgba(251,191,36,0.4)' }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
          animate={{ x: p.x + p.vx, y: p.y + p.vy, opacity: 0, scale: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute rounded-full pointer-events-none z-20"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: 0,
            left: 0,
          }}
        />
      ))}

      {/* Star icon */}
      <motion.span
        animate={isHovered ? { rotate: [0, -20, 20, -10, 0] } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 relative z-10"
      >
        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      </motion.span>

      {/* Count */}
      <motion.span
        key={display}
        initial={animateInView && isInView ? { opacity: 0, y: 6 } : undefined}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        {display}
      </motion.span>
    </motion.button>
  );
}
