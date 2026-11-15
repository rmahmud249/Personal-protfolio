import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ExternalLink } from "lucide-react";
import { publications, researchInterests, learningNow } from "@/content/site";
import { PageHeader, Reveal, Tag } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/research")({
  head: () => seo("Research & Publications", "Research interests, papers in progress and publications."),
  component: Research,
});

function Research() {
  return (
    <>
      <PageHeader eyebrow="Research" title="Research & Publications" text="Questions I'm exploring, papers I'm working on, and what I'm currently reading." />
      <section className="container-x py-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Research interests</h2>
        <div className="mt-4 flex flex-wrap gap-2">{researchInterests.map((r) => <Tag key={r} className="px-4 py-2 text-sm">{r}</Tag>)}</div>

        <h2 className="mt-16 font-display text-3xl text-foreground">Publications</h2>
        <div className="mt-6 space-y-4">
          {publications.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-elegant md:flex-row md:items-start">
                <FileText className="h-6 w-6 shrink-0 text-primary" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2"><Tag className="border-primary/20 bg-primary/10 text-primary">{p.status}</Tag><span className="font-mono text-xs text-muted-foreground">{p.venue} · {p.year}</span></div>
                  <h3 className="mt-2 font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-primary">Read paper <ExternalLink className="h-3.5 w-3.5" /></a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-16 font-display text-3xl text-foreground">Ongoing learning</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningNow.map((l) => <div key={l.title} className="rounded-2xl border border-border bg-card p-5"><p className="font-medium text-foreground">{l.title}</p><p className="mt-1 text-sm text-muted-foreground">{l.text}</p></div>)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Research notes are also published in the <Link to="/blog" search={{ category: "Research" }} className="text-primary">Knowledge Hub</Link>.</p>
      </section>
    </>
  );
}
