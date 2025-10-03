import { ExternalLinkIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold">연락</h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-4 text-foreground/80">아래 채널로 편하게 연락 주세요.</p>
      </Reveal>
      <Reveal delay={180}>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]" href="mailto:you@example.com">
              <MailIcon /> you@example.com
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]" href="https://github.com/yourname" target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub <ExternalLinkIcon className="opacity-60" />
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-2 hover:text-[color:var(--accent)]" href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn <ExternalLinkIcon className="opacity-60" />
            </a>
          </li>
        </ul>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-8">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}


