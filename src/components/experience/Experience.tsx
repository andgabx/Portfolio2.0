import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Cais",
    position: "Full Stack Developer",
    time: "August 2024 - December 2024",
    location: "Carpina, Pernambuco",
    description:
      "We were commissioned by Cais, a small group of farmers, to create a web application for managing their farm, which we named Rizoma. The app allowed users to organize, monitor, and edit information related to fields, soils, cultivated plants, and activities carried out in the rural environment. With constant feedback from our client and excellent communication from both our development and design teams, we achieved complete success in our solution.",
    tech: ["HTML", "Tailwind", "JavaScript", "Django", "Git"],
  },
];
