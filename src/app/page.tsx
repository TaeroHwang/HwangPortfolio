import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <main className="px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
        <Footer />
        <ScrollToTop />
      <footer className="border-t border-foreground/10 mt-16">
        <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-foreground/70">
          © {new Date().getFullYear()} Taero. All rights reserved.
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}