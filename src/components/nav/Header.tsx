import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import EncryptButton from "./EncryptButton";
import LanguageSwitch from "../ui/language-switch";
import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { TooltipContent } from "../ui/tooltip";

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -70 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[72px] pl-8 pr-6 flex items-center justify-between sticky top-0 z-20 bg-primary backdrop-blur-md"
        >
            <MyLinks />
            <div className="flex items-center gap-4">
                <LanguageSwitch />
                <EncryptButton
                    onClick={() => window.open("/ENGresumeandersongabriel.pdf")}
                />
            </div>
        </motion.header>
    );
};

export const MyLinks = () => (
    <div className="flex items-center text-xl gap-6">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Link
                        className="text-zinc-300 hover:text-white transition-colors"
                        href="https://www.linkedin.com/in/andgabx"
                        target="_blank"
                        rel="nofollow"
                    >
                        <SiLinkedin />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>LinkedIn</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <Link
                        className="text-zinc-300 hover:text-white transition-colors"
                        href="https://www.github.com/andgabx"
                        target="_blank"
                        rel="nofollow"
                    >
                        <SiGithub />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>GitHub</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <Link
                        className="text-zinc-300 hover:text-white transition-colors"
                        href="https://wa.me/5581999758852"
                        target="_blank"
                        rel="nofollow"
                    >
                        <SiWhatsapp />
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>WhatsApp</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
);
