import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/content/site";
import { PageHeader, Reveal } from "@/components/site/ui";
import { ProjectCard } from "@/components/site/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => seo("Projects", "Web apps, tools, academic and research projects — with code, live demos and case studies."),
  component: Projects,
});

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function Projects() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Projects" text="A selection of things I've designed, built and shipped. Open any project for the full case study." />
      <section className="container-x py-16">
        <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <Reveal key={p.slug} delay={i * 60}><ProjectCard project={p} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
