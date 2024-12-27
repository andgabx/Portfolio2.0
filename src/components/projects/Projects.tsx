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
          Users can seamlessly register their transactions, whether it's an
          expense, income, or investment. Every entry can be categorized into
          user-defined groups, allowing for a clear breakdown of financial
          activities. If a mistake is made or a transaction is no longer
          relevant, the removal feature ensures the data stays clean and
          accurate.
        </p>
        <p>
          The project also focuses on data visualization, allowing users to
          track their spending patterns, identify saving opportunities, and gain
          insights into their financial health through charts and summaries.
        </p>
        <p>
          Every functionality of Finance AI was built with one goal in mind:
          empowering users to make informed financial decisions in an easy,
          efficient, and secure way.
        </p>
      </>
    ),
  },
  {
    title: "My RetroGameList",
    imgSrc: "myretrogamelist.jpg",
    code: "https://github.com/andgabx/MyRetroGameList",
    projectLink: "https://myretrogamelist.azurewebsites.net/",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind", "Anime.js", "Azure"],
    description:
      "A platform dedicated to retro gaming enthusiasts, allowing users to explore games, create personalized lists, interact in forums, and share reviews.",
    modalContent: (
      <>
        <p>
          This website is a unique platform designed for retro gaming
          enthusiasts to connect, explore, and interact. Users can browse a
          curated collection of retro games and create personalized lists, such
          as "Favorites", "Already Played", and "Want to Play", to track their
          gaming preferences. Each game has its own dedicated page, featuring
          details, user reviews, and ratings, providing an engaging way to
          rediscover retro classics.
        </p>
        <p>
          It also features a forum system, where users can participate in
          discussions, ask questions, and share their gaming experiences. Each
          game has its own forum, making it easy for players to connect and
          exchange insights specific to that title. Additionally, the website
          integrates interactive features such as modals for feedback on actions
          like adding or removing games from lists.
        </p>
        <p>
          Designed with user experience in mind, the platform employs reusable
          components, a consistent visual design, and well-structured
          functionalities to ensure ease of use. This project serves as both a
          nostalgic space for retro gamers and a modern tool for community
          interaction and engagement.
        </p>
      </>
    ),
  },
  {
    title: "Space Invaders",
    imgSrc: "spaceinvaders.jpg",
    code: "https://github.com/andgabx/spaceinvaders",
    projectLink: "{https://github.com/andgabx/spaceinvaders}",
    tech: ["Raylib", "C"],
    description: "A roguelike version of the classic game Space Invaders.",
    modalContent: (
      <>
        <p>
          We developed a roguelike version of the classic Space Invaders, where
          players face waves of enemies, level up, and gain upgrades until
          reaching the final boss.
        </p>
        <p>
          The game introduces a selection of different ships, each with unique
          abilities, ensuring that every gameplay experience feels fresh and
          distinct. This twist combines the nostalgic charm of the original
          Space Invaders with modern roguelike elements such as procedural
          progression, randomized challenges, and strategic decision-making.
        </p>
        <p>
          The result is an engaging experience that balances retro aesthetics
          with innovative mechanics, making it a must-play for both fans of the
          original and newcomers to the genre!
        </p>
      </>
    ),
  },
];
