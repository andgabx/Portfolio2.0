import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";
import EncryptButton from "./EncryptButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-primary backdrop-blur-md">
      <MyLinks />
      <EncryptButton onClick={() => window.open("/resumeandersongabriel.pdf")} />
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
      href="https://wa.me/5581999758852"
      target="_blank"
      rel="nofollow"
    >
      <SiWhatsapp />
    </Link>
 
  </div>
);
