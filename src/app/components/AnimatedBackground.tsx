"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    function resize() {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const baseCount = window.innerWidth < 640 ? 28 : window.innerWidth < 1024 ? 44 : 60;
    const count = reduceMotion ? Math.floor(baseCount * 0.4) : baseCount;
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * (reduceMotion ? 0.15 : 0.4),
      vy: (Math.random() - 0.5) * (reduceMotion ? 0.15 : 0.4),
      r: 1 + Math.random() * 2,
    }));

    function step() {
      if (document.documentElement.dataset.effects === 'off') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rafRef.current = reduceMotion ? (window.setTimeout(step, 200) as unknown as number) : requestAnimationFrame(step);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // gradient glow
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0, getComputedStyle(document.documentElement).getPropertyValue("--accent").trim());
      g.addColorStop(1, getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim());

      // draw connections
      ctx.lineWidth = 1;
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -50) p.x = window.innerWidth + 50;
        if (p.x > window.innerWidth + 50) p.x = -50;
        if (p.y < -50) p.y = window.innerHeight + 50;
        if (p.y > window.innerHeight + 50) p.y = -50;

        // mouse gentle attraction
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 120 - dist) / 120;
        p.vx -= (dx / dist) * 0.02 * force;
        p.vy -= (dy / dist) * 0.02 * force;

        // draw particle using theme foreground color with alpha
        ctx.fillStyle = rgba(cssVar("--color-foreground"), 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const d = Math.hypot(ddx, ddy);
          if (d < 120) {
            const a = (1 - d / 120) * 0.35;
            ctx.strokeStyle = rgba(cssVar("--color-foreground"), a);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      // gradient overlay for mood
      const grad = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        20,
        mouse.current.x,
        mouse.current.y,
        Math.max(window.innerWidth, window.innerHeight)
      );
      grad.addColorStop(0, rgba(cssVar("--accent"), 0.08));
      grad.addColorStop(1, rgba(cssVar("--accent-2"), 0));
      ctx.fillStyle = grad;
      // scroll intensity: stronger near top, fades as you scroll down
      const scrollY = window.scrollY;
      const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const t = 1 - Math.min(1, scrollY / (docH * 0.6));
      ctx.globalAlpha = 0.6 * (0.6 + 0.4 * t);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      rafRef.current = reduceMotion ? (window.setTimeout(step, 50) as unknown as number) : requestAnimationFrame(step);
    }
    rafRef.current = reduceMotion ? (window.setTimeout(step, 50) as unknown as number) : requestAnimationFrame(step);

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      if (rafRef.current) {
        reduceMotion ? window.clearTimeout(rafRef.current as unknown as number) : cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}

function cssVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function rgba(input: string, alpha: number) {
  const v = input.trim();
  if (v.startsWith("rgba")) return v;
  if (v.startsWith("rgb")) return v.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  const h = v.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


