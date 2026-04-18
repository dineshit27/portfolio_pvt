import React from "react";

interface CompanyLogoProps {
  name: string;
  imageSrc?: string;
}

function getInitials(name: string) {
  const parts = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  const initials = parts.map(p => p[0]?.toUpperCase() || "").join("");
  return initials || name.slice(0, 2).toUpperCase();
}

export function CompanyLogo({ name, imageSrc }: CompanyLogoProps) {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-gray-200 dark:border-gray-700">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white dark:bg-gray-800">
          <span className="text-gray-800 dark:text-white text-lg sm:text-xl font-bold">
            {getInitials(name)}
          </span>
        </div>
      )}
    </div>
  );
}
