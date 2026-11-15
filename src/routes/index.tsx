import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, Code2, Database, Cpu, Shield, FlaskConical, Users, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { profile, techStack, projects, expertise, posts, education, learningNow } from "@/content/site";
import { Reveal, SectionHeading, TechIcon, Eyebrow } from "@/components/site/ui";
import { ProjectCard, PostCard } from "@/components/site/Cards";
import { socialIcons } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Portfolio & Knowledge Hub", "Production web projects, research and a living Knowledge Hub of tutorials, system architecture notes and developer insights."),
  component: Home,
});

const expertiseIcons = { code: Code2, database: Database, cpu: Cpu, shield: Shield, flask: FlaskConical, users: Users } as const;

const btn = "inline-flex justify-center items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all";

function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-glow blur-3xl" aria-hidden />
        <div className="container-x relative grid items-center gap-14 py-14 md:py-28 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Open to internships & collaborations
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Hello, I'm <span className="text-gradient italic">{profile.name}</span>
            </h1>
            <p className="mt-5 font-mono text-sm text-muted-foreground md:text-base">{profile.role}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{profile.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/projects" className={`${btn} bg-primary text-primary-foreground hover:shadow-elegant hover:-translate-y-0.5`}>
                Explore My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={profile.resumeUrl} download className={`${btn} border border-border bg-card text-foreground hover:bg-secondary`}>
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <Link to="/contact" className={`${btn} text-foreground hover:text-primary`}>
                <Mail className="h-4 w-4" /> Get in Touch
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <a href="#featured-projects" className="hover:text-primary">↓ Featured projects</a>
              <a href="#technical-writing" className="hover:text-primary">↓ Technical writing</a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl border border-border bg-card/60 backdrop-blur animate-float" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden">
              {profile.photoUrl ? (
                <img src={profile.photoUrl} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-brand">
                  <div className="text-center text-primary-foreground">
                    <p className="font-display text-8xl">{profile.initials}</p>
                    <p className="mt-2 font-mono text-xs opacity-80">[Add your photo in site.ts]</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-8">
          {techStack.flatMap((g) => g.items).map((t) => (
            <span key={t.slug} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <TechIcon slug={t.slug} name={t.name} /> {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="featured-projects" className="container-x scroll-mt-20 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading className="mb-0" eyebrow="Selected work" title={<>Featured <em className="text-gradient">projects</em></>} text="Production projects, each with a case study covering the problem, approach and results." />
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">All projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <Reveal key={p.slug} delay={i * 100}><ProjectCard project={p} /></Reveal>)}
        </div>
      </section>

      {/* KNOWLEDGE HUB */}
      <section id="technical-writing" className="relative scroll-mt-20 overflow-hidden border-y border-border bg-secondary/40 py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <Eyebrow>Technical writing</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">Writing that <em className="text-gradient">teaches</em>.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">A living repository of tutorials, system architecture notes and developer insights.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Programming", "Web Development", "Databases", "Cybersecurity", "Research"].map((c) => (
                  <Link key={c} to="/blog" search={{ category: c }} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground hover:border-primary hover:text-primary">{c}</Link>
                ))}
              </div>
              <Link to="/blog" className={`${btn} mt-8 bg-foreground text-background hover:-translate-y-0.5`}>
                <BookOpen className="h-4 w-4" /> Visit the Knowledge Hub
              </Link>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.slice(0, 4).map((p, i) => <Reveal key={p.slug} delay={i * 80}><PostCard post={p} /></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + EXPERTISE */}
      <section className="container-x grid gap-16 py-24 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground">An engineering mindset, applied.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{profile.about[0]}</p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Read more about me <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {expertise.map((e, i) => {
            const Icon = expertiseIcons[e.icon as keyof typeof expertiseIcons];
            return (
              <Reveal key={e.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-elegant">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 font-medium text-foreground">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* LEARNING + EDUCATION */}
      <section className="container-x grid gap-6 pb-24 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-card p-8">
          <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /><Eyebrow>Currently</Eyebrow></div>
          <h3 className="mt-3 font-display text-3xl text-foreground">Research & learning</h3>
          <ul className="mt-6 space-y-5">
            {learningNow.map((l) => (
              <li key={l.title} className="border-l-2 border-primary/40 pl-4">
                <p className="font-medium text-foreground">{l.title}</p>
                <p className="text-sm text-muted-foreground">{l.text}</p>
              </li>
            ))}
          </ul>
          <Link to="/research" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Research & publications <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal delay={100} className="rounded-3xl border border-border bg-card p-8">
          <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" /><Eyebrow>Education</Eyebrow></div>
          <h3 className="mt-3 font-display text-3xl text-foreground">Academic highlights</h3>
          <ul className="mt-6 space-y-5">
            {education.map((e) => (
              <li key={e.title} className="flex justify-between gap-4">
                <div><p className="font-medium text-foreground">{e.title}</p><p className="text-sm text-muted-foreground">{e.org}</p></div>
                <p className="shrink-0 font-mono text-xs text-muted-foreground">{e.period}</p>
              </li>
            ))}
          </ul>
          <Link to="/academic" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Academic journey <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      {/* CONTACT CTA */}
      <section className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-primary-foreground md:p-16">
          <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-4xl font-medium md:text-5xl">Let's build something together.</h2>
              <p className="mt-3 max-w-lg opacity-90">Internships, research collaborations or just a chat about tech — my inbox is open.</p>
            </div>
            <Link to="/contact" className={`${btn} bg-background text-foreground hover:-translate-y-0.5`}>Get in Touch <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
