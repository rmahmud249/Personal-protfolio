import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/site";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Learning Hub" },
  { to: "/academic", label: "Academic" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail } as const;

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"}`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand font-mono text-sm font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden font-display text-lg font-medium text-foreground sm:block">{profile.name}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground xl:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container-x grid gap-1 pb-6 xl:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-lg px-3 py-2.5 text-base text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-foreground">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{profile.shortRole}. Building, learning and sharing knowledge.</p>
          <div className="mt-6 flex gap-2">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-foreground/80 hover:text-primary">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Say hello</p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-1 text-foreground hover:text-primary">
            {profile.email} <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#top" className="hover:text-foreground">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
