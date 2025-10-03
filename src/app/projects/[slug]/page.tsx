import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "프로젝트" };
  const title = `${project.title} | Taero`;
  const description = project.description;
  const image = project.image || "/og.svg";
  const url = `/projects/${project.slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="section">프로젝트를 찾을 수 없습니다.</div>;
  return (
    <div className="section">
      <Link href="/#projects" className="text-sm underline underline-offset-4">← 목록으로</Link>
      <h1 className="mt-3 text-3xl sm:text-4xl font-bold">{project.title}</h1>
      <p className="mt-3 text-foreground/80">{project.description}</p>
      {project.image ? (
        <div className="mt-6">
          <Image src={project.image} alt={project.title} width={960} height={540} className="rounded-lg border border-foreground/10" />
        </div>
      ) : null}
      <div className="mt-6 flex gap-4 text-sm">
        {project.link ? (
          <a className="underline underline-offset-4" href={project.link} target="_blank" rel="noreferrer">Live</a>
        ) : null}
        {project.repo ? (
          <a className="underline underline-offset-4" href={project.repo} target="_blank" rel="noreferrer">Code</a>
        ) : null}
      </div>
    </div>
  );
}


