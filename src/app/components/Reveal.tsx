"use client";

import { useEffect, useRef } from "react";

type Props = React.PropsWithChildren<{ delay?: number; y?: number; once?: boolean }>;

export default function Reveal({ children, delay = 0, y = 12, once = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const initial = `opacity:0; transform: translateY(${y}px);`;
    el.setAttribute("style", initial);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.animate(
              [
                { opacity: 0, transform: `translateY(${y}px)` },
                { opacity: 1, transform: "translateY(0px)" },
              ],
              { duration: 600, delay, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" }
            );
            if (once) io.unobserve(el);
          } else if (!once) {
            el.animate(
              [
                { opacity: 1, transform: "translateY(0px)" },
                { opacity: 0, transform: `translateY(${y}px)` },
              ],
              { duration: 300, easing: "ease", fill: "forwards" }
            );
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, y, once]);

  return <div ref={ref}>{children}</div>;
}


