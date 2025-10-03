import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">소개</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-[200px_1fr] items-start">
        <Reveal delay={100}>
          <img src="/avatar.svg" alt="Profile" className="rounded-xl border border-foreground/10 bg-foreground/[.03]" />
        </Reveal>
        <div>
          <Reveal delay={140}>
            <p className="text-foreground/80 leading-relaxed">
              사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 복잡한 문제를 단순한 인터페이스로 풀어내고,
              빠른 피드백과 일관된 디자인 시스템을 통해 제품 가치를 높이는 데 집중합니다.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              최근에는 Next.js App Router를 활용한 서버/클라이언트 경계 설계, 접근성 있는 컴포넌트, 그리고 퍼포먼스 최적화에 관심이 많습니다.
              팀과의 협업에서는 문서화와 자동화 도구를 적극 활용해 개발 효율을 높입니다.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-foreground/70">
              <li className="px-3 py-2 rounded-md bg-foreground/[.04] border border-foreground/10">관심사: UX, 접근성, 성능, 디자인 시스템</li>
              <li className="px-3 py-2 rounded-md bg-foreground/[.04] border border-foreground/10">도구: TypeScript, React, Next.js, Tailwind</li>
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal delay={320}>
        <h3 className="mt-10 text-xl font-semibold">경험</h3>
      </Reveal>
      <div className="mt-4 grid gap-4">
        <Reveal delay={360}>
          <div className="grid sm:grid-cols-[140px_1fr] gap-3 items-start">
            <div className="text-sm text-foreground/70">2024 - 현재</div>
            <div className="p-4 rounded-md border border-foreground/10 bg-foreground/[.03]">
              <div className="font-medium">프론트엔드 개발자</div>
              <div className="text-sm text-foreground/70 mt-1">Next.js 기반 제품 개발, 디자인 시스템 도입, 성능 최적화</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <div className="grid sm:grid-cols-[140px_1fr] gap-3 items-start">
            <div className="text-sm text-foreground/70">2022 - 2024</div>
            <div className="p-4 rounded-md border border-foreground/10 bg-foreground/[.03]">
              <div className="font-medium">웹 UI 엔지니어</div>
              <div className="text-sm text-foreground/70 mt-1">접근성 표준 준수 컴포넌트 제작, 테스트 자동화 구축</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


