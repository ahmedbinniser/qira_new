import { useRef } from "react";
import { useSandParticles } from "@/hooks/useSandParticles";

type SandParticleCanvasProps = {
  reducedMotion: boolean;
  className?: string;
};

export function SandParticleCanvas({ reducedMotion, className }: SandParticleCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  useSandParticles(ref, reducedMotion);

  if (reducedMotion) return null;

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
