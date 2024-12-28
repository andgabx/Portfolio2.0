import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useTranslations } from "next-intl";

export const Experience = () => {
  const t = useTranslations("experience");
  const items = t.raw("items") as Array<{
    title: string;
    position: string;
    time: string;
    location: string;
    description: string;
    tech: string[];
  }>;

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("title")} dir="l" />
      {items.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};
