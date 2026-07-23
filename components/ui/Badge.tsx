import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "violet" | "amber";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide",
        {
          "bg-surface-elevated text-muted": variant === "default",
          "bg-accent-teal/15 text-accent-teal": variant === "teal",
          "bg-accent-violet/15 text-accent-violet": variant === "violet",
          "bg-accent-amber/15 text-accent-amber": variant === "amber",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
