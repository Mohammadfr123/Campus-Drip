import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-accent text-background hover:shadow-glow": variant === "primary",
            "bg-surface-elevated text-foreground hover:bg-surface-elevated/80":
              variant === "secondary",
            "text-muted hover:text-foreground": variant === "ghost",
            "border border-border text-foreground hover:border-accent-teal hover:text-accent-teal":
              variant === "outline",
          },
          {
            "px-4 py-2 text-xs": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-3.5 text-sm": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
