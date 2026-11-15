import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { posts } from "@/content/site";
import { PageHeader, Reveal } from "@/components/site/ui";
import { PostCard } from "@/components/site/Cards";
import { seo } from "@/lib/seo";

const categories = ["All", "Programming", "Web Development", "Databases", "Cybersecurity", "Experiences", "Research"];

export const Route = createFileRoute("/blog/")({
  validateSearch: (s: Record<string, unknown>): { category?: string } =>
    typeof s["category"] === "string" && categories.includes(s["category"]) ? { category: s["category"] } : {},
  head: () => seo("Knowledge Hub", "Programming tutorials, web development guides, database and cybersecurity notes, and research insights."),
  component: Blog,
});

function Blog() {
  const { category = "All" } = Route.useSearch();
  const [q, setQ] = useState("");
  const list = posts
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader eyebrow="Learning Hub" title="Knowledge Hub" text="A living repository of tutorials, system architecture notes and developer insights." />
      <section className="container-x py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link key={c} to="/blog" search={c === "All" ? {} : { category: c }}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${category === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
                {c}
              </Link>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…"
              className="w-full rounded-full border border-input bg-card py-2.5 pl-9 pr-4 text-sm text-foreground outline-none focus:border-primary" />
          </label>
        </div>
        {list.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p, i) => <Reveal key={p.slug} delay={i * 60}><PostCard post={p} /></Reveal>)}</div>
        ) : (
          <p className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">No articles here yet — check back soon.</p>
        )}
      </section>
    </>
  );
}
