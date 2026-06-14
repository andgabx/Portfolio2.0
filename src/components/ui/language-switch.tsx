import { FiChevronDown, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

const LANGUAGES = [
  { code: "pt", label: "PT-BR", flag: "🇧🇷" },
  { code: "en", label: "ENG", flag: "🇺🇸" },
  { code: "es", label: "ESP", flag: "🇪🇸" },
  { code: "de", label: "DEU", flag: "🇩🇪" },
];

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const currentLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  const handleSelect = (code: string) => {
    setOpen(false);
    router.push({ pathname, query }, asPath, { locale: code });
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-copy bg-background hover:bg-primary-content transition-colors"
      >
        <FiGlobe className="text-sm" />
        <span className="font-medium text-sm">{currentLang.label}</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-1 p-2 rounded-lg bg-background shadow-xl absolute top-[120%] left-[50%] w-36 overflow-hidden z-50"
      >
        {LANGUAGES.map((lang) => (
          <Option
            key={lang.code}
            lang={lang}
            isActive={locale === lang.code}
            onSelect={handleSelect}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
}

const Option = ({
  lang,
  isActive,
  onSelect,
}: {
  lang: { code: string; label: string; flag: string };
  isActive: boolean;
  onSelect: (code: string) => void;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => onSelect(lang.code)}
      className={`flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer
        ${
          isActive
            ? "bg-primary text-primary-content"
            : "text-copy hover:bg-primary hover:text-primary-content"
        }`}
    >
      <motion.span variants={actionIconVariants} className="text-base leading-none">
        {lang.flag}
      </motion.span>
      <span>{lang.label}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      duration: 0.075,
      when: "beforeChildren",
      staggerChildren: 0.025,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.075,
      when: "afterChildren",
      staggerChildren: 0.025,
    },
  },
};

const iconVariants = {
  open: { rotate: 180, transition: { duration: 0.075 } },
  closed: { rotate: 0, transition: { duration: 0.075 } },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.075,
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.075,
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0, transition: { duration: 0.075 } },
  closed: { scale: 0, y: -7, transition: { duration: 0.075 } },
};
