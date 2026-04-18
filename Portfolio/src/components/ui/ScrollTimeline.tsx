import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";

export interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ScrollTimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  animationOrder?: "sequential" | "staggered" | "simultaneous";
  cardAlignment?: "alternating" | "left" | "right";
  lineColor?: string;
  activeColor?: string;
  progressIndicator?: boolean;
  cardVariant?: "default" | "elevated" | "outlined" | "filled";
  cardEffect?: "none" | "glow" | "shadow" | "bounce";
  parallaxIntensity?: number;
  progressLineWidth?: number;
  progressLineCap?: "round" | "square";
  dateFormat?: "text" | "badge";
  className?: string;
  revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
  connectorStyle?: "dots" | "line" | "dashed";
  perspective?: boolean;
  darkMode?: boolean;
  smoothScroll?: boolean;
  hideHeader?: boolean;
  linePosition?: "left" | "center";
  contentClassName?: string;
  renderEventContent?: (event: TimelineEvent, index: number, isActive: boolean) => React.ReactNode;
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description:
      "Description of the achievement or milestone reached during this time period.",
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about this significant milestone and its impact.",
  },
  {
    year: "2021",
    title: "Key Event",
    subtitle: "Organization Name",
    description: "Information about this key event in the timeline.",
  },
];

export const ScrollTimeline = ({
  events = DEFAULT_EVENTS,
  title = "Timeline",
  subtitle = "Scroll to explore the journey",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "bg-blue-200/70 dark:bg-blue-900/80",
  activeColor = "border-blue-500 dark:border-blue-400 bg-blue-500 dark:bg-blue-400",
  progressIndicator = true,
  cardVariant = "default",
  cardEffect = "none",
  parallaxIntensity = 0.2,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "fade",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = false,
  smoothScroll = true,
  hideHeader = false,
  linePosition = "center",
  contentClassName = "",
  renderEventContent,
}: ScrollTimelineProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 85%", "end 20%"],
  });

  const springConfig = smoothScroll
    ? {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      }
    : {
        stiffness: 1000,
        damping: 120,
        restDelta: 0.001,
      };

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const yOffset = useTransform(
    smoothProgress,
    [0, 1],
    [parallaxIntensity * 100, -parallaxIntensity * 100]
  );

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      const clamped = Math.min(Math.max(newIndex, 0), events.length - 1);
      if (clamped !== activeIndex) {
        setActiveIndex(clamped);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, events.length, activeIndex]);

  const getCardVariants = (index: number) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.2
        : index * 0.3;

    const initialStates = {
      fade: { opacity: 0, y: 20 },
      slide: {
        x:
          cardAlignment === "left"
            ? -100
            : cardAlignment === "right"
            ? 100
            : index % 2 === 0
            ? -100
            : 100,
        opacity: 0,
      },
      scale: { scale: 0.8, opacity: 0 },
      flip: { rotateY: 90, opacity: 0 },
      none: { opacity: 1 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.7,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
        },
      },
      viewport: { once: false, margin: "-100px" },
    };
  };

  const getConnectorClasses = () => {
    const horizontalPosition = linePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-3 -translate-x-1/2";
    const baseClasses = cn("absolute transform", horizontalPosition, lineColor);

    switch (connectorStyle) {
      case "dots":
        return cn(baseClasses, "w-1 rounded-full");
      case "dashed":
        return cn(
          baseClasses,
          "[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]"
        );
      case "line":
      default:
        return baseClasses;
    }
  };

  const getCardClasses = (index: number) => {
    const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
    const variantClasses = {
      default: "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm",
      elevated: "bg-white dark:bg-gray-900 border border-gray-300/80 dark:border-gray-700/80 shadow-md",
      outlined: "bg-white/70 dark:bg-gray-900/70 backdrop-blur border-2 border-blue-300/40 dark:border-blue-500/40",
      filled: "bg-blue-100/40 dark:bg-blue-900/20 border border-blue-300/40 dark:border-blue-500/40",
    };
    const effectClasses = {
      none: "",
      glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]",
      shadow: "hover:shadow-lg hover:-translate-y-1",
      bounce: "hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
    };
    const alignmentClassesDesktop =
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "lg:mr-[calc(50%+20px)]"
          : "lg:ml-[calc(50%+20px)]"
        : cardAlignment === "left"
        ? "lg:mr-auto lg:ml-0"
        : "lg:ml-auto lg:mr-0";
    const perspectiveClass = perspective
      ? "transform transition-transform hover:[transform:perspective(1000px)_rotateX(1deg)_rotateY(1deg)]"
      : "";

    return cn(
      baseClasses,
      variantClasses[cardVariant],
      effectClasses[cardEffect],
      perspectiveClass,
      alignmentClassesDesktop,
      linePosition === "center" ? "w-full lg:w-[calc(50%-40px)]" : "w-full",
      contentClassName
    );
  };

  const markerPositionClass = linePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-3 -translate-x-1/2";

  return (
    <div
      ref={scrollRef}
      className={cn(
        "relative w-full overflow-hidden",
        darkMode ? "bg-background text-foreground" : "",
        className
      )}
    >
      {!hideHeader && (
        <div className="text-center py-8 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
      )}

      <div className="relative mx-auto px-2 md:px-4">
        <div className="relative mx-auto">
          <div
            className={cn(getConnectorClasses(), "h-full absolute top-0 z-10")}
            style={{ width: progressLineWidth }}
          />

          {progressIndicator && (
            <>
              <motion.div
                className={cn(
                  "absolute top-0 z-10",
                  linePosition === "center" ? "left-1/2 -translate-x-1/2" : "left-3 -translate-x-1/2"
                )}
                style={{
                  height: progressHeight,
                  width: progressLineWidth,
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background: "linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)",
                  boxShadow:
                    "0 0 15px rgba(99,102,241,0.5), 0 0 25px rgba(168,85,247,0.3)",
                }}
              />

              <motion.div
                className={cn("absolute z-20 -translate-y-1/2", markerPositionClass)}
                style={{
                  top: progressHeight,
                }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.65) 0%, rgba(99,102,241,0.35) 42%, rgba(34,211,238,0) 72%)",
                    boxShadow:
                      "0 0 8px 2px rgba(168, 85, 247, 0.35), 0 0 14px 4px rgba(99, 102, 241, 0.2)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="relative z-20 space-y-10">
            {events.map((event, index) => (
              <div
                key={event.id || `${event.title}-${index}`}
                className={cn(
                  "relative flex items-center py-2",
                  "flex-col lg:flex-row",
                  linePosition === "left"
                    ? "pl-10"
                    : cardAlignment === "alternating"
                    ? index % 2 === 0
                      ? "lg:justify-start"
                      : "lg:flex-row-reverse lg:justify-start"
                    : cardAlignment === "left"
                    ? "lg:justify-start"
                    : "lg:flex-row-reverse lg:justify-start"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 z-30",
                    markerPositionClass
                  )}
                >
                  <motion.div
                    className={cn(
                      "w-6 h-6 rounded-full border-4 bg-background",
                      index <= activeIndex ? activeColor : "border-gray-400 dark:border-gray-600"
                    )}
                    animate={
                      index <= activeIndex
                        ? {
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 0px rgba(59,130,246,0)",
                              "0 0 12px rgba(59,130,246,0.6)",
                              "0 0 0px rgba(59,130,246,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <motion.div
                  className={cn(getCardClasses(index), linePosition === "center" ? "mt-10 lg:mt-0" : "mt-6")}
                  variants={getCardVariants(index)}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: false, margin: "-100px" }}
                  style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                >
                  {renderEventContent ? (
                    renderEventContent(event, index, index <= activeIndex)
                  ) : (
                    <div className="p-6">
                      {dateFormat === "badge" ? (
                        <div className="flex items-center mb-2">
                          {event.icon || <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />}
                          <span className="text-sm font-bold" style={{ color: event.color }}>
                            {event.year}
                          </span>
                        </div>
                      ) : (
                        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{event.year}</p>
                      )}
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      {event.subtitle && <p className="text-muted-foreground font-medium mb-2">{event.subtitle}</p>}
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
