import type { Metadata } from "next";
import Link from "next/link";
import { BulletList } from "@/components/BulletList";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meetings",
  description: `Small-group founder meetings for international entrepreneurs in Skåne — ${SITE_NAME}.`,
};

export default function MeetingsPage() {
  return (
    <PageShell
      label="Meetings"
      title="Founder meetings"
      intro="Regular, small-group conversations for people building businesses and lives in Skåne—practical, informal, and human."
    >
      <div className="max-w-measure space-y-8 text-lg text-prose">
        <p>
          {SITE_NAME} ({SITE_FULL_NAME}) is starting with quiet, useful meetings—not
          big stages or polished pitches. The focus is on founders helping founders
          understand what it actually takes to build here.
        </p>
        <p>
          Meeting details—dates, locations, and how to join—will be announced
          gradually as the community takes shape.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <ContentCard title="What meetings are for">
          <BulletList
            items={[
              "Practical founder discussions—real questions, real context",
              "Informal peer support between people on similar journeys",
              "Trust-building in a new country and business culture",
              "Connection for international founders across Skåne",
              "Small groups where conversation matters more than slides",
            ]}
          />
        </ContentCard>
        <ContentCard title="What to expect">
          <p>
            Useful, human, and grounded. No obligation to perform or pitch. Room
            for honest exchange about what is working, what is hard, and what you
            are learning.
          </p>
          <p>
            Local bridge-builders may join when it helps—always in service of
            practical clarity, not sales.
          </p>
        </ContentCard>
      </div>

      <p className="mt-12 text-prose">
        Want to hear when the first meetings open?{" "}
        <Link
          href="/contact"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          Get in touch
        </Link>
        .
      </p>
    </PageShell>
  );
}
