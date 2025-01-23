import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SideBarLink } from "./SideBarLink";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const SideBar = () => {
  const [selected, setSelected] = useState("");
  const t = useTranslations("nav");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="no-scrollbar bg-primary-dark fixed top-0 left-0 bottom-0 w-[70px] flex flex-col items-center overflow-y-auto text-white z-50"
      >
        <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
          <Link href="/">
            AG<span className="text-white">.</span>
          </Link>
        </span>
        <SideBarLink
          selected={selected}
          setSelected={setSelected}
          value="about"
          href="#about"
        >
          {t("about")}
        </SideBarLink>
        <SideBarLink
          selected={selected}
          setSelected={setSelected}
          value="projects"
          href="#projects"
        >
          {t("projects")}
        </SideBarLink>
        <SideBarLink
          selected={selected}
          setSelected={setSelected}
          value="experience"
          href="#experience"
        >
          {t("experience")}
        </SideBarLink>
        <SideBarLink
          selected={selected}
          setSelected={setSelected}
          value="contact"
          href="#contact"
        >
          {t("contact")}
        </SideBarLink>
      </motion.nav>
      <div className="min-h-screen pl-[70px]">
        {/* Este div vazio cria o espaço necessário */}
      </div>
    </>
  );
};
