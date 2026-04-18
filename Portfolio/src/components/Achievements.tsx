import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-1/2 transform -translate-x-12 -bottom-16 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors z-10"
      aria-label="Previous"
    >
      <ChevronLeft size={32} />
    </button>
  );
};

const CustomNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-1/2 transform translate-x-12 -bottom-16 text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors z-10"
      aria-label="Next"
    >
      <ChevronRight size={32} />
    </button>
  );
};

const achievements: AchievementItem[] = [
  {
    title: "Winner - Idea Forge",
    issuer: "Sri Sairam Engineering College",
    date: "Oct 2025",
    link: "https://media.licdn.com/dms/image/v2/D562DAQEf81JThuVz8w/profile-treasury-image-shrink_800_800/B56ZaO2ydUGUAg-/0/1746153450532?e=1755540000&v=beta&t=jGwwUEGOsKNuAFJuX3XZknQqTAmLA3IiGog-xqK6gNM",
    image: "assets/secevent.jpg",
  },
  {
    title: "Winner - Innovtex Hackathon 2025",
    issuer: "Rajalakshmi Institute of Technology",
    date: "Aug 2025",
    link: "https://media.licdn.com/dms/image/v2/D562DAQEf81JThuVz8w/profile-treasury-image-shrink_800_800/B56ZaO2ydUGUAg-/0/1746153450532?e=1755540000&v=beta&t=jGwwUEGOsKNuAFJuX3XZknQqTAmLA3IiGog-xqK6gNM",
    image: "assets/hackathon.jpeg",
  },
  {
    title: "1st Runner up - Nakshatra'24 Paper Presentation",
    issuer: "S. A. Engineering College",
    date: "Oct 2024",
    link: "#",
    image: "assets/2nd event.jpg",
  },
  {
    title: "2nd Runner up - ELITEZ'24 Idea Pitching",
    issuer: "Adhi College of Engineering and Technology",
    date: "Sept 2024",
    link: "#",
    image: "assets/3rd.jpg",
  },
  {
    title: "Winner - AURORA'24 Paper Presentation",
    issuer: "Saveetha Engineering College",
    date: "Jul 2024",
    link: "#",
    image: "assets/4th.jpg",
  },
  {
    title: "Winner - SAURUS'24 Idea Pitching",
    issuer: "Sri Sairam Engineering College",
    date: "Apr 2024",
    link: "#",
    image: "assets/5th.jpg",
  },
  {
    title: "1st Runner up - Mech Flarez'24 Paper Presentation",
    issuer: "Jeppiaar Engineering College",
    date: "Mar 2024",
    link: "#",
    image: "assets/6th.jpg",
  },
];

function AchievementFlipCard({ achievement, index }: { achievement: AchievementItem; index: number }) {
  const defaultProofLink = "https://www.linkedin.com/in/m-dinesh-d30/details/honors/";
  const hasProof = achievement.link && achievement.link !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative h-[22rem] [perspective:1400px]"
    >
      <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-blue-200/50 bg-white shadow-xl [backface-visibility:hidden] dark:border-blue-400/20 dark:bg-slate-900/90">
          <img
            src={achievement.image}
            alt={`${achievement.title} event snapshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-5 text-white">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200">Achievement</p>
            <h3 className="mt-1 text-lg font-semibold leading-snug">{achievement.title}</h3>
          </div>
        </div>

        <div className="absolute inset-0 flex rounded-2xl border border-blue-300/60 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 p-6 text-white shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-blue-300/20 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-950">
          <div className="flex h-full w-full flex-col">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
              <Award size={14} />
              Recognized
            </div>

            <h3 className="text-xl font-bold leading-tight">{achievement.title}</h3>
            <p className="mt-2 text-sm text-blue-100">{achievement.issuer}</p>
            <p className="mt-1 text-sm text-sky-100/90">{achievement.date}</p>

            <div className="mt-auto pt-6">
              <a
                href={hasProof ? achievement.link : defaultProofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                View proof
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Achievements() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="achievements">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <SectionTitle subtitle="Recognitions and awards for outstanding performance and innovation 📸">Achievements</SectionTitle>
          <div className="w-full relative pb-24">
            <Slider {...settings} className="max-w-6xl mx-auto">
              {achievements.map((ach, index) => (
                <div key={ach.title} className="px-2 sm:px-4">
                  <AchievementFlipCard achievement={ach} index={index} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
