import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight, Github, ExternalLink, Target, Compass, Trophy } from "lucide-react";
import { projects, caseStudyDefaults } from "@/content/site";
import { Eyebrow, Reveal, Tag } from "@/components/site/ui";
import { ProjectCard } from "@/components/site/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(`${loaderData.project.title} — Case Study`, loaderData.project.overview)
      : { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl text-foreground">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary">← Back to projects</Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const cs = { ...caseStudyDefaults, ...Object.fromEntries(Object.entries(p).filter(([, v]) => v !== undefined)) } as typeof caseStudyDefaults & typeof p;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length]!;
  const prev = projects[(idx - 1 + projects.length) % projects.length]!;
  const others = projects.filter((x) => x.slug !== p.slug && x.slug !== next.slug && x.category === p.category).slice(0, 3);
  return (
    <article>
      <header className="relative overflow-hidden border-b border-border"
        style={{ background: `radial-gradient(circle at 80% 0%, oklch(0.7 0.14 ${p.hue} / 0.25), transparent 60%)` }}>
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container-x relative py-16 md:py-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
              <li aria-current="page" className="text-foreground">{p.title}</li>
            </ol>
          </nav>
          <Reveal>
            <p className="mt-8"><Tag>{p.category}</Tag></p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl">{p.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.overview}</p>
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div><dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Role</dt><dd className="mt-1 text-foreground">{cs.role}</dd></div>
              <div><dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Timeline</dt><dd className="mt-1 text-foreground">{cs.duration}</dd></div>
              <div className="col-span-2 sm:col-span-1"><dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Stack</dt><dd className="mt-1 flex flex-wrap gap-1">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"><Github className="h-4 w-4" /> View code</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground"><ExternalLink className="h-4 w-4" /> Live demo</a>}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="container-x grid gap-16 py-20 lg:grid-cols-[200px_1fr]">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 font-mono text-sm">
            <li><a href="#problem" className="text-muted-foreground hover:text-primary">01 · Problem</a></li>
            <li><a href="#approach" className="text-muted-foreground hover:text-primary">02 · Approach</a></li>
            <li><a href="#results" className="text-muted-foreground hover:text-primary">03 · Results</a></li>
          </ul>
        </nav>
        <div className="max-w-3xl space-y-20">
          <Reveal><section id="problem" className="scroll-mt-24">
            <div className="flex items-center gap-3"><Target className="h-5 w-5 text-primary" /><Eyebrow>01 · The problem</Eyebrow></div>
            <p className="mt-5 font-display text-2xl leading-relaxed text-foreground md:text-3xl">{cs.problem}</p>
          </section></Reveal>
          <Reveal><section id="approach" className="scroll-mt-24">
            <div className="flex items-center gap-3"><Compass className="h-5 w-5 text-primary" /><Eyebrow>02 · The approach</Eyebrow></div>
            <ol className="mt-6 space-y-4">
              {cs.approach.map((a, i) => (
                <li key={i} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                  <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-foreground/90">{a}</p>
                </li>
              ))}
            </ol>
          </section></Reveal>
          <Reveal><section id="results" className="scroll-mt-24">
            <div className="flex items-center gap-3"><Trophy className="h-5 w-5 text-primary" /><Eyebrow>03 · The results</Eyebrow></div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {cs.results.map((r, i) => (
                <div key={i} className="rounded-2xl border border-border bg-gradient-to-br from-accent to-card p-5 text-sm text-foreground">{r}</div>
              ))}
            </div>
          </section></Reveal>
        </div>
      </div>

      <section className="container-x border-t border-border pt-16">
        <Link to="/projects/$slug" params={{ slug: next.slug }}
          className="group flex flex-col gap-4 rounded-3xl bg-gradient-brand p-8 text-primary-foreground transition-all hover:shadow-elegant md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-80">Next project</p>
            <p className="mt-2 font-display text-3xl md:text-5xl">{next.title}</p>
            <p className="mt-2 max-w-xl text-sm opacity-90">{next.overview}</p>
          </div>
          <ArrowRight className="h-10 w-10 shrink-0 transition-transform group-hover:translate-x-2" />
        </Link>
        <div className="mt-6 flex flex-wrap justify-between gap-4 text-sm">
          <Link to="/projects/$slug" params={{ slug: prev.slug }} className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> {prev.title}</Link>
          <div className="flex gap-4">
            <Link to="/projects" className="text-muted-foreground hover:text-foreground">All projects</Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground">Back to home</Link>
          </div>
        </div>
        {others.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-3xl text-foreground">Related {p.category.toLowerCase()} projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">{others.map((o) => <ProjectCard key={o.slug} project={o} />)}</div>
          </>
        )}
      </section>
    </article>
  );
}
