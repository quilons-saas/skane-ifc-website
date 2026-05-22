import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} — ${SITE_FULL_NAME}, a QUILONS AI community initiative in Skåne.`,
};

export default function AboutPage() {
  return (
    <PageShell
      label="About"
      title={`About ${SITE_NAME}`}
      intro={`${SITE_NAME} stands for ${SITE_FULL_NAME}—a practical community for people building businesses, networks, and lives in Skåne.`}
    >
      <div className="max-w-measure space-y-6 text-lg text-prose">
        <p className="font-medium text-ink">
          {SITE_NAME} is a QUILONS AI community initiative. It exists for expats,
          international entrepreneurs, and local bridge-builders who want the
          international founder ecosystem in southern Sweden to work better.
        </p>
        <p>
          This is not just a networking group. It is a place for practical
          conversation—about trust, culture, registration and tax realities,
          hiring, customers, advisors, and the everyday work of building a
          company while building a life in a new country.
        </p>
        <p>
          Swedish founders, accountants, lawyers, investors, incubators, and
          others are welcome when they want to help international founders find
          their footing—not as a sales audience, but as part of a stronger
          local ecosystem.
        </p>
        <p>
          We are early and intentional. The aim is simple: less loneliness, more
          connection, and knowledge that comes from people who are actually
          building here.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <h2 className="font-display text-xl font-medium text-ink">
            What we are building
          </h2>
          <ul className="mt-4 space-y-3 text-prose">
            <li>
              <Link href="/meetings" className="text-accent hover:underline">
                Founder meetings
              </Link>{" "}
              — small, regular, human
            </li>
            <li>
              <Link href="/events" className="text-accent hover:underline">
                Events & sessions
              </Link>{" "}
              — stories and practical knowledge
            </li>
            <li>Guides and interviews — step by step, with real people</li>
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <h2 className="font-display text-xl font-medium text-ink">
            Stewardship
          </h2>
          <p className="mt-4 text-prose">
            {SITE_NAME} is created and stewarded by QUILONS AI. Community first:
            usefulness, trust, and relationships come before anything commercial.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
