import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts, profile } from "@/content/site";
import { Tag } from "@/components/site/ui";
import { formatDate } from "@/components/site/Cards";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) =>
    loaderData ? seo(loaderData.post.title, loaderData.post.excerpt) : { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl text-foreground">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary">← Back to the Knowledge Hub</Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-x max-w-3xl py-16">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Knowledge Hub</Link>
      <div className="mt-8 flex items-center gap-3"><Tag className="border-primary/20 bg-primary/10 text-primary">{post.category}</Tag><span className="font-mono text-xs text-muted-foreground">{formatDate(post.date)} · {post.readTime} read</span></div>
      <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">{post.title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">By {profile.name}</p>
      <div className="mt-10 space-y-5 border-t border-border pt-10 text-lg leading-relaxed text-foreground/85">
        {post.body.map((b, i) =>
          b.startsWith("## ") ? <h2 key={i} className="pt-4 font-display text-2xl text-foreground">{b.slice(3)}</h2>
          : b.startsWith("```") ? <pre key={i} className="overflow-x-auto rounded-xl border border-border bg-secondary p-5 font-mono text-sm text-foreground"><code>{b.replace(/^```\n?|```$/g, "")}</code></pre>
          : <p key={i}>{b}</p>,
        )}
      </div>
    </article>
  );
}
