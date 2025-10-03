export type Project = {
  title: string;
  description: string;
  slug: string;
  link?: string;
  repo?: string;
  image?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio Site",
    description: "This website built with Next.js App Router and Tailwind CSS.",
    slug: "portfolio-site",
    link: "https://example.com",
    repo: "https://github.com/yourname/portfolio",
    image: "/window.svg",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "UI Components",
    description: "A small component library with accessible primitives.",
    slug: "ui-components",
    repo: "https://github.com/yourname/ui-components",
    image: "/file.svg",
    tags: ["React", "Storybook"],
  },
];


