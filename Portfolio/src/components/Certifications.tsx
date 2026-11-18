import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
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

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
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

const certifications = [
  {
    title: "AI Essentials Specialization",
    issuer: "Google",
    date: "Jun 2026",
    image: "assets/googleaii.jpg",
    link: "https://www.coursera.org/account/accomplishments/specialization/H1RNAD2C2PED",
  },

  {
    title: "Full Stack Developer Specialization",
    issuer: "Meta",
    date: "Oct 2026",
    image: "assets/metafs.jpeg",
    link:"https://www.coursera.org/account/accomplishments/specialization/XX021L83RE4Z",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "AWS",
    date: "Oct 2026",
    image: "assets/awscloud.jpeg",
    link:"https://www.coursera.org/account/accomplishments/verify/285QUXGZN0J0",
  },
  {
    title: "Foundation Course on AI Readliness",
    issuer: "Ministry of Information and Broadcasting",
    date: "Jul 2026",
    image: "assets/aired.jpg",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9",
    image: "assets/github.jpg",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    date: "Mar 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9",
    image: "assets/graphicdesign.jpg",
  },
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Jan 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9",
    image: "assets/genai.jpg",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP Foundation",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/7CVTB2GB5XPT",
    image: "assets/dsa.jpg",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Feb 2026",
    link: "https://verify.skilljar.com/c/5aa2qoxmvnhh",
    image: "assets/claude.jpeg",
  },
  {
    title: "From Excel to Power BI",
    issuer: "Coursera with Knowledge Accelerators",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/7CVTB2GB5XPT",
    image: "assets/excelpowerbi.jpg",
  },
  {
    title: "Learn to code with AI",
    issuer: "Coursera with Scrimba",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892",
    image: "assets/codeai.jpg",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    date: "May 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892",
    image: "assets/tcsion.jpg",
  },
];

export function Certifications() {
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

  return (<SectionBackground>
    <section id="certifications">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios 📑">Certifications</SectionTitle>
        <div className="relative pb-24">
          <Slider {...settings} className="max-w-6xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.title} className="px-4">
                <CertificationCard {...cert} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  </SectionBackground>
  );
}
