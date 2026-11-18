import { LayoutDashboard, Lightbulb, Code2, Megaphone, Smartphone } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { useEffect, useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ShineBorder } from "./ui/shine-border";

type ServiceCardData = {
  id: number;
  imageUrl: string;
  title: string;
  tags: string[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
};

const services: ServiceCardData[] = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Graphic Design",
    color: "bg-pink-500",
    imageUrl: "/assets/gd.jpg",
    tags: ["Logo Design", "Poster Design","Print Design", "Packaging Design", "Brand Identity Design", "E-Book Creation", "Social Media Graphics"],
  },
  {
    id: 2,
    icon: Code2,
    title: "Web Development",
    color: "bg-blue-500",
    imageUrl: "/assets/web dev.jpg",
    tags: ["Web Design & Development", "Business Website", "E-commerce Website", "Website Rework","Backend Integration", "3D Animation Website"],
  },
  {
    id: 3,
    icon: Smartphone,
    title: "App Development",
    color: "bg-orange-500",
    imageUrl: "/assets/ads.jpg",
    tags: ["Android App", "iOS App", "React Native", "Web Application","Expo", "API Integration", "App Store Deployment"],
  },
  {
    id: 4,
    icon: LayoutDashboard,
    title: "UI/UX Design",
    color: "bg-green-500",
    imageUrl: "/assets/uiux.jpg",
    tags: ["Wireframing", "Prototyping", "UI Design", "User Research", "Redesign Services", "Landing Page Design", "Dashboard UI"],
  },
  {
    id: 5,
    icon: Megaphone,
    title: "Digital Marketing",
    color: "bg-indigo-500",
    imageUrl: "/assets/dms.jpg",
    tags: ["SEO", "Unstop Event Promotion", "Meta Ads","Social Media Marketing", "Content Strategy", "Email Marketing", "Google Analytics"],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(services.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoplayDelay = 3200;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex: number) => {
    const newSafeIndex = (newIndex + services.length) % services.length;
    setActiveIndex(newSafeIndex);

    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }

    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;

    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };

  return (
    <>
      <section id="services">
        <div className="container mx-auto px-6 mt-16">
          <SectionTitle subtitle="What I Offering to my clients ❤️">Freelance Services</SectionTitle>
        </div>

        <section className="w-full flex flex-col items-center justify-center overflow-hidden">
          <div
            className="w-full max-w-6xl mx-auto p-0 sm:p-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative flex w-full flex-col p-0 md:p-1">
              <div className="relative w-full h-[500px] sm:h-[540px] md:h-[580px] flex items-center justify-center overflow-hidden">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={onDragEnd}
                >
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      card={service}
                      index={index}
                      activeIndex={activeIndex}
                      totalCards={services.length}
                      isMobile={isMobile}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-5 mb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      activeIndex === index
                        ? "w-6 bg-blue-500 dark:bg-blue-400"
                        : "w-2 bg-gray-300 hover:bg-gray-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

function ServiceCard({
  card,
  index,
  activeIndex,
  totalCards,
  isMobile,
}: {
  card: ServiceCardData;
  index: number;
  activeIndex: number;
  totalCards: number;
  isMobile: boolean;
}) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }

  const isVisible = Math.abs(offset) <= 2;
  const Icon = card.icon;
  const isCenter = offset === 0;
  // Restore only grayscale (black and white) effect for background cards
  const grayscaleAmount = isCenter ? 0 : 100;
  const animate = {
    x: isMobile ? `${offset * 52}%` : `${offset * 44}%`,
    scale: isCenter ? 1 : Math.abs(offset) === 1 ? 0.86 : 0.78,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    filter: `grayscale(${grayscaleAmount}%)`,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  };

  return (
    <motion.div
      className="absolute w-[75%] sm:w-[56%] md:w-[42%] lg:w-[36%]"
      animate={animate}
      initial={false}
    >
      <div className="relative w-full rounded-3xl shadow-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex flex-col">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <div className="relative overflow-hidden p-4 pb-2">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-auto object-cover rounded-xl pointer-events-none bg-gray-50 dark:bg-slate-800/60"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x340/1e1e1e/ffffff?text=Service";
            }}
          />
        </div>

        <div className="px-4 pt-3 pb-4 sm:px-5 sm:pt-4 sm:pb-4 flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-3 shrink-0">
            <div className={`p-2.5 ${card.color} rounded-lg shrink-0`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 leading-tight">{card.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2 w-full content-start">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 px-2.5 py-1 text-[11px] min-w-0 max-w-full break-words"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}