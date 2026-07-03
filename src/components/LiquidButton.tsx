import * as React from "react";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { MagneticCTA } from "@/components/MagneticCTA";
import { cn } from "@/lib/utils";

type LiquidButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  showArrow?: boolean;
  reducedMotion?: boolean;
  download?: boolean | string;
};

export function LiquidButton({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  onClick,
  showArrow = true,
  reducedMotion = false,
  download,
}: LiquidButtonProps) {
  const anchorClick = onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined;
  const buttonClick = onClick as React.MouseEventHandler<HTMLButtonElement> | undefined;
  const classes = cn(
    buttonVariants({
      variant: variant === "primary" ? "default" : "secondary",
      size: "lg",
    }),
    "glass-fallback",
    "relative isolate cursor-pointer overflow-hidden",
    className,
  );

  const content = (
    <>
      {variant === "primary" ? (
        <span className="liquid-btn liquid-lens" aria-hidden="true" />
      ) : null}
      <span className="relative z-10">{children}</span>
      {showArrow ? <ArrowRight className="relative z-10 rtl:rotate-180" /> : null}
    </>
  );

  return (
    <MagneticCTA disabled={reducedMotion}>
      {href ? (
        <a href={href} className={classes} onClick={anchorClick} download={download}>
          {content}
        </a>
      ) : (
        <button type={type} className={classes} onClick={buttonClick}>
          {content}
        </button>
      )}
    </MagneticCTA>
  );
}
