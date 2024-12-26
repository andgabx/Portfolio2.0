import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-primary backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/resumeandersongabriel.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-xl gap-6">
    <Link
      className="text-zinc-300 hover:text-white transition-colors"
      href="https://www.linkedin.com/in/andgabx"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-white transition-colors"
      href="https://www.github.com/andgabx"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-white transition-colors"
      href="https://www.x.com"
      target="_blank"
      rel="nofollow"
    >
      <SiX />
    </Link>
    <Link
      className="text-zinc-300 hover:text-white transition-colors"
      href="https://www.codepen.io"
      target="_blank"
      rel="nofollow"
    >
      <SiCodepen />
    </Link>
  </div>
);
