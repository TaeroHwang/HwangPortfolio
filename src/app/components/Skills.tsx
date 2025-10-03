type Skill = { name: string; desc: string };
const skills: Skill[] = [
  { name: "TypeScript", desc: "정적 타입으로 안정성과 가독성 향상. 대규모 리팩터링에 강함." },
  { name: "React", desc: "컴포넌트 중심 설계와 훅 기반 상태 관리, 생태계 활용." },
  { name: "Next.js", desc: "App Router, 서버 컴포넌트, 이미지 최적화와 SEO 대응." },
  { name: "Tailwind CSS", desc: "유틸리티 퍼스트로 일관된 디자인 시스템과 빠른 개발." },
  { name: "Node.js", desc: "경량 API, 서버 액션, 빌드 도구 설정 및 자동화." },
];

import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">스킬</h2>
      </Reveal>
      <Reveal delay={120}>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {skills.map((s, idx) => (
            <li key={s.name} className="group relative p-3 rounded-lg bg-foreground/[0.06] border border-foreground/15 text-sm overflow-hidden">
              <button
                className="flex items-center w-full text-left outline-none"
                aria-describedby={`skill-tip-${idx}`}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]" />{s.name}
              </button>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity" role="tooltip" id={`skill-tip-${idx}`}>
                <div className="absolute left-0 right-0 bottom-0 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="m-3 p-3 rounded-md border border-foreground/15 bg-background/80 backdrop-blur">
                    <p className="text-xs text-foreground/80">{s.desc}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}


