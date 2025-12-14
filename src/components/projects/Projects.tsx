import React, { useState } from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";
import { useTranslations } from "next-intl";
import { ShowMoreButton } from "./ShowMoreButton";

interface ProjectDetails {
  title: string;
  description: string;
  tech: string[];
  details: string[];
}

export const Projects = () => {
  const t = useTranslations("projects");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_PROJECTS_COUNT = 2;

  const getProjectDetails = (
    key: "financeAI" | "retroGameList" | "spaceInvaders" | "agras" | "mcdsimulator" | "BRASFI" | "fuxico"
  ): ProjectDetails => {
    const details = [];
    let i = 0;
    while (t.has(`${key}.detail${i}`)) {
      details.push(t(`${key}.detail${i}`));
      i++;
    }

    const tech = [];
    i = 0;
    while (t.has(`${key}.tech${i}`)) {
      tech.push(t(`${key}.tech${i}`));
      i++;
    }

    return {
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      tech,
      details,
    };
  };

  const financeAIDetails = getProjectDetails("financeAI");
  const retroGameListDetails = getProjectDetails("retroGameList");
  const spaceInvadersDetails = getProjectDetails("spaceInvaders");
  const agrasDetails = getProjectDetails("agras");
  const mcdsimulatorDetails = getProjectDetails("mcdsimulator");
  const brasfiDetails = getProjectDetails("BRASFI");
  const fuxicoDetails = getProjectDetails("fuxico");

  const createModalContent = (details: string[]) => (
    <>
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </>
  );

  const projects = [
    {
      ...financeAIDetails,
      imgSrc: "/financeai.jpg",
      code: "https://github.com/andgabx/FinanceApp",
      projectLink: "https://gabefinanceai.vercel.app/",
      modalContent: createModalContent(financeAIDetails.details),
    },
    {
      ...retroGameListDetails,
      imgSrc: "/myretrogamelist.jpg",
      code: "https://github.com/andgabx/MyRetroGameList",
      projectLink: "https://myretrogamelist.azurewebsites.net/",
      modalContent: createModalContent(retroGameListDetails.details),
    },
    {
      ...spaceInvadersDetails,
      imgSrc: "/spaceinvaders.jpg",
      code: "https://github.com/andgabx/spaceinvaders",
      projectLink: "https://github.com/andgabx/spaceinvaders",
      modalContent: createModalContent(spaceInvadersDetails.details),
    },
    {
      ...mcdsimulatorDetails,
      imgSrc: "/donalds.png",
      code: "https://github.com/andgabx/donald-simulator",
      projectLink: "https://gabemcdsimulator.vercel.app/fsw-donalds/",
      modalContent: createModalContent(mcdsimulatorDetails.details),
    },
    {
      ...agrasDetails,
      imgSrc: "/agras.jpg",
      code: "https://github.com/andgabx/agras",
      projectLink: "https://github.com/andgabx/agras",
      modalContent: createModalContent(agrasDetails.details),
    },
    {
      ...brasfiDetails,
      imgSrc: "/brasfi.png",
      code: "https://github.com/filipe-ms/Perenne-Backend",
      projectLink: "https://perenne-gray.vercel.app/",
      modalContent: createModalContent(brasfiDetails.details),
    },
    {
      ...fuxicoDetails,
      imgSrc: "/fuxico.png",
      code: "https://github.com/andgabx/Fuxico-MVP",
      projectLink: "https://fuxico.vercel.app/",
      modalContent: createModalContent(fuxicoDetails.details),
    },
  ];

  const displayedProjects = showAll 
    ? projects 
    : projects.slice(0, INITIAL_PROJECTS_COUNT);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("title")} dir="r" />
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {displayedProjects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
      {projects.length > INITIAL_PROJECTS_COUNT && (
        <ShowMoreButton 
          onClick={() => setShowAll(!showAll)} 
          showAll={showAll}
        />
      )}
    </section>
  );
};

export default Projects;
