"use client";

import { cn } from "@/lib/utils";

interface SwatchProps {
  colorHex: string;
  colorName: string;
  isSelected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function Swatch({
  colorHex,
  colorName,
  isSelected = false,
  onClick,
  size = "md",
}: SwatchProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      aria-label={`Color: ${colorName}`}
      onClick={onClick}
      className={cn(
        "rounded-full border-2 transition-all focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        {
          "h-6 w-6": size === "sm",
          "h-8 w-8": size === "md",
          "h-10 w-10": size === "lg",
          "border-accent-teal shadow-glow scale-110": isSelected,
          "border-border hover:border-accent-violet hover:scale-105": !isSelected,
        }
      )}
      style={{ backgroundColor: colorHex }}
    />
  );
}
