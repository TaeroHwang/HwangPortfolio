"use client";

import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import EffectsToggle from "./EffectsToggle";

type SectionId = "home" | "about" | "projects" | "skills" | "contact";

export default function Header() {
  const [active, setActive] = useState<SectionId>("home");
  const [elevated, setElevated] = useState(false);

  const sections = useMemo<SectionId[]>(() => ["home", "about", "projects", "skills", "contact"], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) {
          const id = visible[0].target.getAttribute("id") as SectionId | null;
          if (id) setActive(id);
          // update palette based on active section
          if (id) {
            const palette = id === "projects" ? "cyan" : id === "skills" ? "violet" : id === "contact" ? "rose" : id === "about" ? "amber" : "indigo";
            document.documentElement.dataset.palette = palette;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <header className={`sticky top-0 z-10 backdrop-blur-md bg-background/70 ${elevated ? "shadow-sm border-b border-foreground/10" : "border-b border-transparent"}`}>
      <nav className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold">Taero</a>
        <div className="flex gap-4 items-center text-sm">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={"hover:underline " + (active === id ? "font-medium underline" : "")}
            >
              {toKrLabel(id)}
            </a>
          ))}
          <ThemeToggle />
          <EffectsToggle />
        </div>
      </nav>
    </header>
  );
}

function toKrLabel(id: SectionId) {
  switch (id) {
    case "home":
      return "홈";
    case "about":
      return "소개";
    case "projects":
      return "프로젝트";
    case "skills":
      return "스킬";
    case "contact":
      return "연락";
  }
}


