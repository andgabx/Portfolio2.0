import React from "react";

export const Chip = ({ children }: { children: string }) => {
  return (
    <span className="text-xs px-2 py-1 rounded text-white bg-primary-light">
      {children}
    </span>
  );
};
