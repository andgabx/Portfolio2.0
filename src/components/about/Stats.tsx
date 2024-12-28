import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { useTranslations } from "next-intl";

export const Stats = () => {
  const t = useTranslations("about");

  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-primary text-2xl" />
            <span className="font-bold ml-2">{t("mainTech")}</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>TypeScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>Express</Chip>
            <Chip>Postgres</Chip>
            <Chip>GitHub</Chip>
            <Chip>Prisma</Chip>
            <Chip>Clerk</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-primary text-2xl" />
            <span className="font-bold ml-2">{t("otherTech")}</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>C</Chip>
            <Chip>C#</Chip>
            <Chip>Python</Chip>
            <Chip>Java</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
