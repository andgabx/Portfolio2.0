import React from "react";
import { useTranslations } from "next-intl";

interface ShowMoreButtonProps {
    onClick: () => void;
    showAll: boolean;
}

export const ShowMoreButton = ({ onClick, showAll }: ShowMoreButtonProps) => {
    const t = useTranslations("projects");

    return (
        <div className="flex justify-center mt-12">
            <button
                onClick={onClick}
                className="relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-primary px-6 py-3 font-medium text-sm text-primary transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-primary before:transition-transform before:duration-1000 before:content-[''] hover:text-white hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95"
            >
                {showAll ? t("showLess") : t("showAll")}
            </button>
        </div>
    );
};
