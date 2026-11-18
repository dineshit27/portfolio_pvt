import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";
import { ScrollTimeline, type TimelineEvent } from "./ui/ScrollTimeline";
import { ShineBorder } from "./ui/shine-border";

const experiences = [
  {
    title: "Design & Development Lead",
    company: "MaxGroo Hub",
    period: "Dec 2025 - Present",
    description: `Directing cross-functional teams to deliver high-quality digital solutions that align with business objectives and user needs. 
    Implementing best practices in UI/UX design and modern web development to drive innovation and enhance user experience.`,
    skills: ["Design", "Tech Trainer", "UI/UX", "Development", "Project Management"],
    logo: "assets/mgll.png",
  },
  {
    title: "Frontend Developer Intern",
    company: "Makos Infotech pvt ltd",
    period: "Jun 2025 - Jul 2025",
    description: `Developed and maintained dynamic web applications using the Frontend frameworks for seamless user experience. 
    Designed and developed a real-time interactive website that significantly increased user engagement by 40%.`,
    skills: ["HTML", "React.js", "JavaScript", "Schema", "Bootstrap", "Git & GitHub", "Lovabe.dev", "Bolt.new"],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQFZMtyC1bQflw/company-logo_200_200/company-logo_200_200/0/1677161370273/makosinfotech_logo?e=2147483647&v=beta&t=7A9TMge7KN13skk7dbPAiDlhAGNqshvaOYKh7bR5RpE",
  },
  {
    title: "Web Design and Development Intern",
    company: "TechnoHacks Edutech Solution",
    period: "Apr 2025 - May 2025",
    description: `Led a dedicated team of 4 developers in designing and built responsive E-commerce platform. 
    Successfully launched a responsive modern personal portfolio webste, hotel room booking website .`,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Firebase", "Supabase", "Vercel", "Git & GitHub"],
    logo: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/e1545dc0-91e5-4601-8c61-0f7f61b65657/Png.png",
  },
  {
    title: "Freelance Designer",
    company: "Remote work",
    period: "Dec 2024 - Present",
    description: `Delivered 20+ client projects (logos, UI/UX, mockups, social media graphics) with 75% client satisfaction.
    Improved engagement. Managed end-to-end design workflows, from concept to final deliverables, under tight deadlines.`,
    skills: ["Creative Solutions", "Tech Solutions", "Design & Develop", "Automation", "Teamwork"],
    logo: "https://i.pinimg.com/736x/e0/48/cd/e048cdfca9410fb9ac672e964d6b4c2b.jpg",
  },
];

export function Experience() {
  const experienceEvents: TimelineEvent[] = [
    ...experiences.map((exp, index) => ({
      id: `${exp.company}-${index}`,
      year: exp.period,
      title: exp.title,
      subtitle: exp.company,
      description: exp.description,
    })),
    {
      id: "experience-open-opportunities",
      year: "Now",
      title: "Open to opportunities",
      subtitle: "Career",
      description: "Open to new opportunities and exciting challenges!!",
    },
  ];

  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases - applying knowledge where it matters most 👨🏻">Experience</SectionTitle>
          <div className="max-w-5xl mx-auto">
            <ScrollTimeline
              events={experienceEvents}
              hideHeader
              linePosition="left"
              cardAlignment="left"
              animationOrder="simultaneous"
              revealAnimation="none"
              connectorStyle="line"
              cardVariant="default"
              cardEffect="none"
              progressLineWidth={2}
              className="pb-4"
              renderEventContent={(_, index, isActive) => (
                index < experiences.length ? (
                  <div className={isActive ? "" : "opacity-90"}>
                    <ExperienceCard {...experiences[index]} />
                  </div>
                ) : (
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-md">
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                    <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <span role="img" aria-label="Rocket">🚀</span>
                      Open to new opportunities and exciting challenges!!
                    </span>
                  </div>
                )
              )}
            />
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
