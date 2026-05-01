import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  background?: string;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmerColor, background, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        style={
          {
            ...style,
            "--shimmer-color": shimmerColor ?? "hsl(173, 80%, 30%)",
            "--shimmer-bg": background ?? "rgb(15, 23, 42)",
          } as React.CSSProperties
        }
        className={cn(
          "shimmer-button relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-medium text-white outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
      >
        <span className="shimmer-button__halo absolute inset-0" aria-hidden />
        <span className="shimmer-button__inner relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
ShimmerButton.displayName = "ShimmerButton";
