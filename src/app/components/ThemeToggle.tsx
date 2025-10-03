"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    applyTheme(initial);
    setTheme(initial);
  }, []);

  function applyTheme(next: Theme) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }

  const label = theme === "light" ? "Dark" : "Light";

  return (
    <button
      onClick={toggle}
      className="px-3 py-1.5 rounded-md border border-foreground/20 text-sm"
      aria-label="Toggle theme"
      type="button"
    >
      {label}
    </button>
  );
}


