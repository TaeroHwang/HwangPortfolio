"use client";

import { useEffect, useState } from "react";

export default function EffectsToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("effects-enabled");
    const mobileDefaultOff = typeof window !== 'undefined' && window.innerWidth < 640;
    const initial = stored == null ? !mobileDefaultOff : stored === "true";
    setEnabled(initial);
    document.documentElement.dataset.effects = initial ? "on" : "off";
  }, []);

  function toggle() {
    const next = !enabled;
    setEnabled(next);
    document.documentElement.dataset.effects = next ? "on" : "off";
    localStorage.setItem("effects-enabled", String(next));
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1.5 rounded-md border border-foreground/20 text-sm"
      aria-pressed={enabled}
      type="button"
    >
      {enabled ? "효과 켜짐" : "효과 꺼짐"}
    </button>
  );
}


