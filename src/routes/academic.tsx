import { createFileRoute } from "@tanstack/react-router";
import { education, achievements } from "@/content/site";
import { PageHeader, Reveal, Tag } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/academic")({
  head: () => seo("Academic Journey", "Education, coursework and academic achievements."),
  component: Academic,
});

function Academic() {
  return (
    <>
      <PageHeader eyebrow="Education" title="Academic Journey" text="The milestones, coursework and achievements that shaped how I think about computing." />
      <section className="container-x max-w-4xl py-16">
        <ol className="relative border-l border-border pl-8">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <li className="relative pb-12">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-gradient-brand" />
                <p className="font-mono text-xs text-primary">{e.period}</p>
                <h2 className="mt-1 font-display text-2xl text-foreground">{e.title}</h2>
                <p className="text-muted-foreground">{e.org}</p>
                <p className="mt-3 text-foreground/80">{e.text}</p>
                {e.tags && <div className="mt-3 flex flex-wrap gap-1.5">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
              </li>
            </Reveal>
          ))}
        </ol>
        <h2 className="mt-8 font-display text-3xl text-foreground">Achievements</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {achievements.map((a) => <li key={a} className="rounded-2xl border border-border bg-card p-5 text-sm text-foreground">{a}</li>)}
        </ul>
      </section>
    </>
  );
}
