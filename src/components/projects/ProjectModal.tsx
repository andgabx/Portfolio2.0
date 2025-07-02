import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const t = useTranslations("projects");

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-primary-dark/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4 text-white">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-primary-light shadow-lg cursor-auto"
      >
        <Image
          className="w-full h-64 object-cover object-top"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          width={1000}
          height={1000}
        />
        <div className="p-8">
          <h4 className="text-3xl text-white font-bold mb-2">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm text-white mb-6">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-white">
            {modalContent}
          </div>

          <div className="mt-8">
            <p className="font-bold mb-4 text-xl text-white">
              {t("projectLinks")}
            </p>
            <div className="flex items-center gap-6 text-md">
              <Link
                target="_blank"
                rel="nofollow"
                className="text-slate-200 hover:text-white transition-colors flex items-center gap-2"
                href={code}
              >
                <AiFillGithub className="text-xl" /> {t("sourceCode")}
              </Link>
              <Link
                target="_blank"
                rel="nofollow"
                className="text-slate-200 hover:text-white transition-colors flex items-center gap-2"
                href={projectLink}
              >
                <AiOutlineExport className="text-xl" /> {t("liveProject")}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById("root")!);
};
