import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';
import { ScrollTimeline, type TimelineEvent } from './ui/ScrollTimeline';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Sri Sairam Institution of Technology, Chennai',
    period: '2023 - 2027',
    score: '78%',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0slFCxtSvrL4phitUZ5EA_pD7P6UHEuxPQ&s',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'St.Mary Matriculation Higher Secondary School',
    period: '2022 - 2023',
    score: '74%',
    logo: 'https://stmarysch21.com/wp-content/uploads/2023/08/stmarys-logo.png',
  },
  {
    degree: 'Secondary (X)',
    institution: "New Prince Matriculation Higher Secondary School",
    period: '2020 - 2021',
    score: '100%',
    logo: 'assets/group.png',
  },
];

export function Education() {
  const educationEvents: TimelineEvent[] = education.map((edu) => ({
    id: edu.degree,
    year: edu.period,
    title: edu.degree,
    subtitle: edu.institution,
    description: `Score: ${edu.score}`,
  }));

  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation 🏤">Education</SectionTitle>
          <div className="max-w-5xl mx-auto">
            <ScrollTimeline
              events={educationEvents}
              hideHeader
              linePosition="left"
              cardAlignment="left"
              animationOrder="simultaneous"
              revealAnimation="none"
              connectorStyle="line"
              cardVariant="default"
              cardEffect="none"
              progressLineWidth={2}
              className="pb-2"
              renderEventContent={(_, index) => (
                <EducationCard
                  index={index}
                  {...education[index]}
                  isLast={index === education.length - 1}
                  showConnector={false}
                />
              )}
            />
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
