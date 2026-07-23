import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-card",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent-teal/30 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
