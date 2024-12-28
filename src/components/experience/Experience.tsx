import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("experience");

  const getExperienceTech = (index: number) => {
    const tech = [];
    let i = 0;
    while (t.has(`items.${index}.tech${i}`)) {
      tech.push(t(`items.${index}.tech${i}`));
      i++;
    }
    return tech;
  };

  const getExperienceItems = () => {
    const items = [];
    let i = 0;
    while (t.has(`items.${i}.title`)) {
      items.push({
        title: t(`items.${i}.title`),
        position: t(`items.${i}.position`),
        time: t(`items.${i}.time`),
        location: t(`items.${i}.location`),
        description: t(`items.${i}.description`),
        tech: getExperienceTech(i),
      });
      i++;
    }
    return items;
  };

  const experienceItems = getExperienceItems();

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("title")} dir="l" />
      {experienceItems.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};
