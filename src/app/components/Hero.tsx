import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-[color:var(--accent)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-2)] opacity-80" />
          <div className="absolute inset-0 grid place-items-center text-background font-bold">T</div>
        </div>
        <div>
          <Reveal>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">안녕하세요, 태로입니다</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-3 text-base sm:text-lg text-foreground/80">
              React와 Next.js로 사용자 중심의 웹을 만듭니다. 감성적인 인터랙션과 깔끔한 UI를 좋아합니다.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-5 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-[color:var(--accent)] text-white text-sm sm:text-base">프로젝트 보기</a>
              <a href="#contact" className="px-4 py-2 rounded-md border border-foreground/30 text-sm sm:text-base">연락하기</a>
            </div>
          </Reveal>
        </div>
      </div>
      <Reveal delay={220}>
        <div className="mt-6 flex gap-4 text-2xl text-foreground/80">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)]"><GitHubIcon /></a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="hover:text-[color:var(--accent)]"><LinkedInIcon /></a>
          <a href="mailto:you@example.com" className="hover:text-[color:var(--accent)]"><MailIcon /></a>
        </div>
      </Reveal>
    </section>
  );
}
