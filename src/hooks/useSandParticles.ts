import { RefObject, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  alpha: number;
};

export function useSandParticles(
  canvasRef: RefObject<HTMLCanvasElement>,
  reducedMotion: boolean,
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    let active = true;
    let visible = true;
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.length = 0;
      const count = Math.min(70, Math.max(26, Math.floor(width / 18)));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.7 + 0.25,
          speed: Math.random() * 0.18 + 0.04,
          drift: Math.random() * 0.22 + 0.06,
          alpha: Math.random() * 0.18 + 0.05,
        });
      }
    };

    const draw = () => {
      if (!active) return;
      if (!visible || document.hidden || window.__qiraWebGLPaused) {
        animationId = window.requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.x += particle.drift;
        particle.y -= particle.speed;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        ctx.beginPath();
        ctx.fillStyle = `rgba(241, 158, 56, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = window.requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.02 },
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    animationId = window.requestAnimationFrame(draw);

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [canvasRef, reducedMotion]);
}
