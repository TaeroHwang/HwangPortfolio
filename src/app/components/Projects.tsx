import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">프로젝트</h2>
      </Reveal>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <li className="group rounded-xl overflow-hidden border border-transparent bg-foreground/[0.02]">
              <div className="relative aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-[color:var(--accent)/10] to-[color:var(--accent-2)/10]">
                {p.image ? (
                  <Link href={`/projects/${p.slug}`}>
                    <Image src={p.image} alt={p.title} width={640} height={360} className="object-contain h-full w-full p-6 transition-transform duration-300 group-hover:scale-[1.03]" />
                  </Link>
                ) : null}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="p-5 border-t border-foreground/10">
                <h3 className="font-medium text-lg group-hover:text-[color:var(--accent)] transition-colors">
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-foreground/80">{p.description}</p>
                {p.tags && p.tags.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/70">
                    {p.tags.map((t) => (
                      <li key={t} className="px-2 py-0.5 rounded-full border border-foreground/15 bg-background/50">{t}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-4 flex gap-4 text-sm">
                  {p.link ? (
                    <a className="underline underline-offset-4" href={p.link} target="_blank" rel="noreferrer">Live</a>
                  ) : null}
                  {p.repo ? (
                    <a className="underline underline-offset-4" href={p.repo} target="_blank" rel="noreferrer">Code</a>
                  ) : null}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}


