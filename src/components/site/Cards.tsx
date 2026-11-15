import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ExternalLink, Calendar, Clock } from "lucide-react";
import type { Post, Project } from "@/content/site";
import { Tag } from "./ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          background: `radial-gradient(circle at 25% 20%, oklch(0.75 0.13 ${project.hue} / 0.55), transparent 55%), radial-gradient(circle at 80% 90%, oklch(0.55 0.15 ${project.hue + 40} / 0.5), transparent 55%), var(--secondary)`,
        }}
      >
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div className="absolute inset-x-6 bottom-0 h-3/4 translate-y-4 rounded-t-xl border border-border bg-card/90 p-3 shadow-lg transition-transform duration-500 group-hover:translate-y-1">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          </div>
          <p className="mt-4 font-display text-lg text-foreground">{project.title}</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-muted" />
            <div className="h-1.5 w-1/2 rounded bg-muted" />
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[11px] text-foreground backdrop-blur">{project.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-foreground">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="hover:text-primary">{project.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4 text-sm">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-1.5 font-medium text-primary">
            Case study <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary">
            <Github className="h-4 w-4" /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary">
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function formatDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
    >
      <div className="flex items-center justify-between">
        <Tag className="border-primary/20 bg-primary/10 text-primary">{post.category}</Tag>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <h3 className="mt-5 font-display text-xl leading-snug text-foreground">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 flex gap-4 font-mono text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{formatDate(post.date)}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
      </div>
    </Link>
  );
}
