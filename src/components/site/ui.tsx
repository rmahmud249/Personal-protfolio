import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("transition-all duration-700 ease-out", shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0", className)}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="mr-2 inline-block h-px w-6 translate-y-[-3px] bg-primary align-middle" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, text, className }: { eyebrow: string; title: ReactNode; text?: string; className?: string }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{text}</p>}
    </Reveal>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-glow blur-3xl" aria-hidden />
      <div className="container-x relative py-20 md:py-28">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium tracking-tight text-foreground md:text-7xl">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-secondary-foreground", className)}>
      {children}
    </span>
  );
}

export function TechIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      aria-hidden
      loading="lazy"
      width={20}
      height={20}
      className="h-5 w-5 dark:brightness-125"
      title={name}
    />
  );
}
