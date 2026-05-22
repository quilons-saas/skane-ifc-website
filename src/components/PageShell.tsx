import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";

type PageShellProps = {
  title: string;
  label?: string;
  intro?: string;
  children: React.ReactNode;
};

export function PageShell({ title, label, intro, children }: PageShellProps) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <section className="relative border-b border-line bg-hero-warm">
          <div
            className="hero-noise pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            {label ? <p className="section-label">{label}</p> : null}
            <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-measure text-xl leading-relaxed text-body">
                {intro}
              </p>
            ) : null}
          </div>
        </section>
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
