import { PropsWithChildren, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMagneticCTA } from "@/hooks/useMagneticCTA";

type MagneticCTAProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
}>;

export function MagneticCTA({ className, disabled, children }: MagneticCTAProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useMagneticCTA(ref, disabled);

  return (
    <span ref={ref} className={cn("magnetic-cta inline-flex", className)}>
      {children}
    </span>
  );
}
