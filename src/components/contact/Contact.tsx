import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-primary-light px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center text-white font-bold">
            {t("title")}
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-white leading-relaxed">
            {t("description")}{" "}
            <Link
              href="https://www.linkedin.com/in/andgabx"
              target="_blank"
              className="text-white hover:underline"
            >
              {t("linkedin")}
            </Link>
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href={`mailto:${t("email")}`}>
            <div className="flex items-center justify-center text-white gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-background transition-colors">
              <AiFillMail />
              <span>{t("email")}</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
