import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  as?: "section" | "div" | "article";
}

export function Section({
  id,
  className = "",
  children,
  ariaLabel,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-16 md:py-24 ${className}`}
      aria-label={ariaLabel}
    >
      <div className="container">{children}</div>
    </Component>
  );
}
