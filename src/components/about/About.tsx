import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";
import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={t("title")} dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-primary">
              <span className="bg-primary text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                E
              </span>
              {t("firstParagraph")}
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-primary">
              {t("secondParagraph")}
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
