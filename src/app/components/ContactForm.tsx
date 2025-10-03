"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("email") || !data.get("name") || !data.get("message")) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setStatus("success");
      setMessage("메시지가 전송되었습니다. 감사합니다!");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "전송 중 문제가 발생했습니다.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm">이름</label>
        <input id="name" name="name" required className="px-3 py-2 rounded-md border border-foreground/15 bg-background/80" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm">이메일</label>
        <input id="email" name="email" type="email" required className="px-3 py-2 rounded-md border border-foreground/15 bg-background/80" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm">메시지</label>
        <textarea id="message" name="message" rows={5} required className="px-3 py-2 rounded-md border border-foreground/15 bg-background/80" />
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-2 px-4 py-2 rounded-md bg-[color:var(--accent)] text-white disabled:opacity-60">
        {status === "sending" ? "전송 중..." : "보내기"}
      </button>
      {message ? <p className="text-sm text-foreground/80">{message}</p> : null}
    </form>
  );
}


