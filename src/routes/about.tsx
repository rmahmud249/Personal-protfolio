import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, GraduationCap, Mail, Download } from "lucide-react";
import { profile, achievements } from "@/content/site";
import { PageHeader, Reveal, Eyebrow } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Me", "Who I am, what I build, and the values that guide my work as a developer and CSE student."),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About me" title="Curious by nature, engineer by practice." text={profile.intro} />
      <section className="container-x grid gap-16 py-20 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          {profile.about.map((p, i) => <Reveal key={i} delay={i * 80}><p>{p}</p></Reveal>)}
          <Reveal>
            <h2 className="mt-12 font-display text-3xl text-foreground">What I value</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {profile.values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-medium text-foreground">{v.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="mt-12 font-display text-3xl text-foreground">Highlights</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </Reveal>
        </div>
        <aside className="h-fit rounded-3xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <Eyebrow>Quick facts</Eyebrow>
          <ul className="mt-5 space-y-4 text-sm text-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary" />{profile.location}</li>
            <li className="flex gap-3"><GraduationCap className="h-4 w-4 text-primary" />{profile.university}</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary" /><a href={`mailto:${profile.email}`} className="hover:text-primary">{profile.email}</a></li>
          </ul>
          <div className="mt-6 grid gap-2">
            <a href={profile.resumeUrl} download className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"><Download className="h-4 w-4" /> Download Resume</a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-sm text-foreground hover:bg-secondary">Get in Touch</Link>
          </div>
        </aside>
      </section>
    </>
  );
}
