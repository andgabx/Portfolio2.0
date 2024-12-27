import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Finance AI",
    imgSrc: "financeai.jpg",
    code: "https://github.com/andgabx/FinanceApp",
    projectLink: "https://gabefinanceai.vercel.app/",
    tech: ["NextJS", "React", "Tailwind", "Prisma", "Clerk", "Neon Postgres"],
    description:
      "A transaction manager for your personal finances with an AI assistant to help you manage your finances.",
    modalContent: (
      <>
        <p>
        Users can seamlessly register their transactions, whether it's an expense, income, or investment. Every entry can be categorized into user-defined groups, allowing for a clear breakdown of financial activities. If a mistake is made or a transaction is no longer relevant, the removal feature ensures the data stays clean and accurate.
        </p>
        <p>
        The project also focuses on data visualization, allowing users to track their spending patterns, identify saving opportunities, and gain insights into their financial health through charts and summaries.
        </p>
        <p>
        Every functionality of Finance AI was built with one goal in mind: empowering users to make informed financial decisions in an easy, efficient, and secure way.
        </p>

      </>
    ),
  },
  
];
