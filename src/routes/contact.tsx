import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/content/site";
import { PageHeader } from "@/components/site/ui";
import { socialIcons } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Get in touch about internships, research collaborations or projects."),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(f.get("subject") || "Hello"));
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk." text="Internships, research collaborations, projects or just a question — I'd love to hear from you." />
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40">
            <Mail className="h-5 w-5 text-primary" /><div><p className="text-xs text-muted-foreground">Email</p><p className="text-foreground">{profile.email}</p></div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
            <MapPin className="h-5 w-5 text-primary" /><div><p className="text-xs text-muted-foreground">Location</p><p className="text-foreground">{profile.location}</p></div>
          </div>
          <div className="flex gap-2">
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary"><Icon className="h-4 w-4" /></a>;
            })}
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5 text-sm text-foreground">Name<input name="name" required maxLength={100} className={field} /></label>
            <label className="space-y-1.5 text-sm text-foreground">Email<input name="email" type="email" required maxLength={255} className={field} /></label>
          </div>
          <label className="block space-y-1.5 text-sm text-foreground">Subject<input name="subject" maxLength={150} className={field} /></label>
          <label className="block space-y-1.5 text-sm text-foreground">Message<textarea name="message" required rows={6} maxLength={2000} className={field} /></label>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-elegant">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && <p role="status" className="text-sm text-muted-foreground">Your email app should open with the message ready to send.</p>}
        </form>
      </section>
    </>
  );
}
