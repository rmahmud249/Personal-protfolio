import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/content/site";
import { PageHeader, Reveal, Tag } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/certifications")({
  head: () => seo("Training & Certifications", "Courses, workshops and certifications I've completed."),
  component: Certs,
});

function Certs() {
  return (
    <>
      <PageHeader eyebrow="Credentials" title="Training & Certifications" text="Courses, workshops and trainings I've completed along the way." />
      <section className="container-x grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Award className="h-6 w-6" /></div>
              <h2 className="mt-5 font-display text-xl text-foreground">{c.title}</h2>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{c.date}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{c.skills.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-primary">View credential <ExternalLink className="h-3.5 w-3.5" /></a>}
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
