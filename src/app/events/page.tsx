import type { Metadata } from "next";
import Link from "next/link";
import { BulletList } from "@/components/BulletList";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Talks, founder sessions, and workshops for international founders in Skåne — ${SITE_NAME}.`,
};

export default function EventsPage() {
  return (
    <PageShell
      label="Events"
      title="Events & sessions"
      intro="Talks, founder stories, and workshops for people building in southern Sweden—coming together over time."
    >
      <div className="max-w-measure space-y-8 text-lg text-prose">
        <p>
          Beyond regular meetings, {SITE_NAME} will host public events when there
          is something worth sharing: founder stories, practical guidance, and
          honest conversation about business and life in Sweden.
        </p>
        <p className="rounded-lg border border-line bg-ink-muted/60 px-4 py-4 font-medium text-ink">
          Upcoming events are coming soon. We will publish details here as they
          are confirmed.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <ContentCard title="Planned themes">
          <BulletList
            items={[
              "Founder stories from people building in Skåne",
              "Business setup and everyday operations in Sweden",
              "Local networks, incubators, and ecosystem pathways",
              "Practical knowledge sharing—short, useful, specific",
              "Sessions with room for questions, not just presentations",
            ]}
          />
        </ContentCard>
        <ContentCard title="Why events matter">
          <p>
            Meetings build trust in small groups. Events widen the circle—more
            voices, more perspectives, still focused on usefulness over hype.
          </p>
          <p>
            If you have a story to share or a topic the community needs, we would
            like to hear from you.
          </p>
        </ContentCard>
      </div>

      <p className="mt-12 text-prose">
        <Link
          href="/contact"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          Contact us
        </Link>{" "}
        about speaking, collaborating, or hosting a session.
      </p>
    </PageShell>
  );
}
