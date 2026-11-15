import { createFileRoute } from "@tanstack/react-router";
import { techStack, skills, softSkills } from "@/content/site";
import { PageHeader, Reveal, TechIcon, Tag } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/skills")({
  head: () => seo("Skills & Technologies", "Languages, frameworks, databases and tools I use to build software."),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Toolbox" title="Skills & Technologies" text="The languages, frameworks and tools I reach for — and how comfortable I am with each." />
      <section className="container-x grid gap-6 py-16 md:grid-cols-2">
        {techStack.map((g, i) => (
          <Reveal key={g.group} delay={i * 80} className="rounded-3xl border border-border bg-card p-7">
            <h2 className="font-display text-2xl text-foreground">{g.group}</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {g.items.map((t) => (
                <div key={t.slug} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40">
                  <TechIcon slug={t.slug} name={t.name} /> {t.name}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
      <section className="container-x grid gap-12 pb-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl text-foreground">Proficiency</h2>
          <div className="mt-6 space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm"><span className="text-foreground">{s.name}</span><span className="font-mono text-muted-foreground">{s.level}%</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
                  <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl text-foreground">Soft skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">{softSkills.map((s) => <Tag key={s} className="px-4 py-2 text-sm">{s}</Tag>)}</div>
        </Reveal>
      </section>
    </>
  );
}
