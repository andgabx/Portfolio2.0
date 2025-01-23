import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const CYCLES_PER_LETTER = 3;
const SHUFFLE_TIME = 30;

const CHARS =
  "!@#$%^&*():{};|,.<>/? abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface EncryptButtonProps {
  onClick: () => void;
}

const EncryptButton = ({ onClick }: EncryptButtonProps) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const router = useRouter();
  const { locale } = router;
  const t = useTranslations("common");

  const TARGET_TEXT = t("resume");
  const [text, setText] = useState(TARGET_TEXT);

  const handleDownload = () => {
    const resumeFile =
      locale === "en"
        ? "ENGresumeandersongabriel.pdf"
        : "resumeandersongabriel.pdf";
    window.open(`/${resumeFile}`, "_blank");
  };

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onClick={handleDownload}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-primary bg-background px-2 py-1 md:px-4 md:py-2 font-mono font-medium uppercase text-primary transition-colors hover:text-primary-dark"
    >
      <div className="relative z-10 flex items-center gap-2">
        <Download />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-primary-dark/0 from-40% via-primary-dark/100 to-primary-dark/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptButton;
