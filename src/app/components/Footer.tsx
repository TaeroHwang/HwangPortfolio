import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-16">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">Taero</h3>
            <p className="text-sm text-foreground/70">
              사용자 중심의 웹 경험을 만드는 프론트엔드 개발자
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-foreground/70 hover:text-[color:var(--accent)]">홈</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-[color:var(--accent)]">소개</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-[color:var(--accent)]">프로젝트</a></li>
              <li><a href="#skills" className="text-foreground/70 hover:text-[color:var(--accent)]">스킬</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-[color:var(--accent)]">연락</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">소셜</h3>
            <div className="flex gap-3 text-xl">
              <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-[color:var(--accent)]">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-[color:var(--accent)]">
                <LinkedInIcon />
              </a>
              <a href="mailto:you@example.com" className="text-foreground/70 hover:text-[color:var(--accent)]">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-foreground/10 text-center text-sm text-foreground/70">
          © {new Date().getFullYear()} Taero. All rights reserved.
        </div>
      </div>
    </footer>
  );
}