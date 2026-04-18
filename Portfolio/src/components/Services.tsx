import { LayoutDashboard, Lightbulb, Code2, Megaphone, Smartphone } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { useEffect, useRef, useState } from "react";
import { motion, type PanInfo } from "framer-motion";

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
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoplayDelay = 3200;

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
          <section className="w-full flex-col items-center justify-center overflow-hidden mt-8">
            <div
              className="w-full max-w-6xl mx-auto p-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative flex w-full flex-col p-2 md:p-4">
                <div className="relative w-full h-[420px] md:h-[560px] flex items-center justify-center overflow-hidden">
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
                      />
                    ))}
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-5">
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
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  card,
  index,
  activeIndex,
  totalCards,
}: {
  card: ServiceCardData;
  index: number;
  activeIndex: number;
  totalCards: number;
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
  const blurAmount = isCenter ? 0 : Math.min(Math.abs(offset) * 2.2, 4.4);
  const slideOpacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.68 : 0.32;
  const grayscaleAmount = isCenter ? 0 : 100;

  const animate = {
    x: `${offset * 44}%`,
    scale: isCenter ? 1 : Math.abs(offset) === 1 ? 0.86 : 0.78,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? slideOpacity : 0,
    filter: `blur(${blurAmount}px) grayscale(${grayscaleAmount}%)`,
    transition: { type: "spring" as const, stiffness: 260, damping: 30 },
  };

  return (
    <motion.div
      className="absolute w-[74%] sm:w-[56%] md:w-[42%] lg:w-[36%] h-[98%]"
      animate={animate}
      initial={false}
    >
      <div className="relative w-full h-full rounded-3xl shadow-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex flex-col">
        <div className="relative h-[68%] overflow-hidden p-4 pb-0 shrink-0">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-contain rounded-xl pointer-events-none bg-gray-50 dark:bg-slate-800/60"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/500x500/1e1e1e/ffffff?text=Service";
            }}
          />
        </div>

        <div className="p-4 sm:p-5 flex-1 min-h-0 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 ${card.color} rounded-lg`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 leading-tight">{card.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {card.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 px-2.5 py-1 text-[11px]"
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