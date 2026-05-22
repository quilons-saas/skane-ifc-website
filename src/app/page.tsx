import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkipLink } from "@/components/SkipLink";
import {
  LOGO,
  MAIL_GENERAL,
  MAIL_INTEREST,
  SITE_DOMAIN,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />

      <main id="main">
        <section
          className="relative overflow-hidden border-b border-line bg-hero-warm"
          aria-labelledby="hero-heading"
        >
          <div
            className="hero-noise pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-center lg:gap-10 lg:py-24">
            <div>
              <div className="mb-8 flex justify-center lg:hidden">
                <img src={LOGO} alt={SITE_NAME} width={176} height={176} />
              </div>
              <p className="section-label">
                {SITE_NAME} · {SITE_DOMAIN}
              </p>
              <h1
                id="hero-heading"
                className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
              >
                {SITE_FULL_NAME}
              </h1>
              <p className="mt-6 max-w-measure text-xl leading-relaxed text-body sm:text-2xl sm:leading-snug">
                A community for expats and international entrepreneurs building
                businesses, networks, and lives in Skåne.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-body">
                A QUILONS AI community initiative
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={MAIL_INTEREST}
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-semibold text-ink shadow-[0_4px_24px_rgba(201,169,98,0.25)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Join the interest list
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-center text-base font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <aside
              className="relative hidden lg:block"
              aria-label={SITE_NAME}
            >
              <div className="rounded-2xl border border-line bg-white p-8 shadow-[0_8px_32px_rgba(26,36,56,0.08)]">
                <img src={LOGO} alt={SITE_NAME} width={280} height={280} />
                <ul className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-body">
                  {[
                    "Expat founders",
                    "Local bridge-builders",
                    "Stories & practical knowledge",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(201,169,98,0.5)]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-body">
                  <Link href="/meetings" className="text-accent hover:underline">
                    Meetings
                  </Link>
                  {" · "}
                  <Link href="/events" className="text-accent hover:underline">
                    Events
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="mission"
          className="relative border-b border-line bg-section-warm"
          aria-labelledby="mission-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="section-label">Mission</p>
            <h2 id="mission-heading" className="section-heading">
              Why we exist
            </h2>
            <div className="mt-8 max-w-measure space-y-6 text-lg text-prose">
              <p>
                Starting a business in a new country is not only about
                registration forms and tax rules. It is about understanding trust,
                culture, networks, local expectations, and how people actually do
                business.
              </p>
              <p className="font-medium text-ink">
                {SITE_NAME} exists to make that journey less lonely and more
                connected.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-b border-line"
          aria-labelledby="audience-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="section-label">Community</p>
            <h2 id="audience-heading" className="section-heading">
              Who this is for
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-prose">
              {SITE_NAME} is intentionally broad: founders who are new here,
              people who have been here for years, and locals who want the
              ecosystem to work better for everyone.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              <li className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
                <h3 className="font-display text-xl font-medium text-ink">
                  Expat founders
                </h3>
                <p className="mt-3 text-prose">
                  If you are building a company—or seriously thinking about it—while
                  navigating life in Skåne, this is a place to meet peers, ask
                  practical questions, and share what you are learning along the way.
                </p>
              </li>
              <li className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
                <h3 className="font-display text-xl font-medium text-ink">
                  Local bridge-builders
                </h3>
                <p className="mt-3 text-prose">
                  Swedish founders, advisors, accountants, lawyers, investors,
                  incubators, and ecosystem partners who want to welcome international
                  founders and help them find their footing.
                </p>
              </li>
              <li className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
                <h3 className="font-display text-xl font-medium text-ink">
                  Stories and practical knowledge
                </h3>
                <p className="mt-3 text-prose">
                  If you care about founder stories, honest guidance, and community
                  around building a life and a business in southern Sweden, you will
                  find something here.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="relative border-b border-line bg-section-warm"
          aria-labelledby="activities-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="section-label">What&apos;s ahead</p>
            <h2 id="activities-heading" className="section-heading">
              What we are building
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-prose">
              We are early, intentional, and focused on usefulness over hype. Here is
              the direction—step by step, with real people involved.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  text: "Founder meetings — practical peer conversations",
                  href: "/meetings",
                },
                {
                  text: "Events & sessions — stories and workshops",
                  href: "/events",
                },
                "Practical guides on topics that come up again and again",
                "Introductions and pathways into the local ecosystem",
                "Open discussions about building a life and a business in Sweden",
              ].map((item) => {
                const label = typeof item === "string" ? item : item.text;
                const href = typeof item === "string" ? undefined : item.href;
                return (
                  <li
                    key={label}
                    className="flex gap-3 rounded-lg border border-line bg-white px-4 py-4 text-prose"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {href ? (
                      <Link
                        href={href}
                        className="leading-relaxed text-ink hover:text-accent"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="leading-relaxed">{label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-line" aria-labelledby="stewardship-heading">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="section-label">Stewardship</p>
            <h2 id="stewardship-heading" className="section-heading">
              Stewarded by QUILONS AI
            </h2>
            <div className="mt-8 max-w-measure space-y-6 text-lg text-prose">
              <p className="font-medium text-ink">
                {SITE_FULL_NAME} is created and stewarded by QUILONS AI as a
                community initiative to support international founders in Skåne.
              </p>
              <p>
                The aim is simple: a stronger, better-connected international founder
                ecosystem—grounded in real conversations and practical help.
              </p>
              <p>
                QUILONS AI is visible here because someone needs to hold the
                thread—but this is not a sales funnel. The center of gravity is the
                community: usefulness, trust, and relationships come first.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-gradient-to-b from-ink-muted/80 to-paper"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="rounded-2xl border border-line bg-white p-8 shadow-[0_8px_32px_rgba(26,36,56,0.08)] sm:p-10">
              <p className="section-label">Contact</p>
              <h2 id="contact-heading" className="section-heading border-0 pl-0">
                Get in touch
              </h2>
              <p className="mt-4 max-w-measure text-lg text-prose">
                Interested in joining, being interviewed, collaborating, or supporting
                {SITE_NAME}? Send a short note—we read every message.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAIL_GENERAL}
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Contact us
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Contact page
                </Link>
              </div>
              <p className="mt-6 text-sm text-body">
                <a
                  href={MAIL_GENERAL}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  hello@skaneifc.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
