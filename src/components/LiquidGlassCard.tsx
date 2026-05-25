import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LiquidGlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, interactive = false, children, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "glass-card relative isolate overflow-hidden border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] shadow-glass",
        interactive && "glass-card-interactive",
        className,
      )}
      {...props}
    >
      <span className="liquid-card liquid-lens" aria-hidden="true" />
      {children}
    </Card>
  ),
);

LiquidGlassCard.displayName = "LiquidGlassCard";
