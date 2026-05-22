import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import {
  MAIL_CONTACT,
  MAIL_GENERAL,
  MAIL_INTEREST,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact or join the interest list for ${SITE_NAME}.`,
};

export default function ContactPage() {
  return (
    <PageShell
      label="Contact"
      title="Contact & join"
      intro="Interested in meetings, events, collaborating, or staying in the loop? Reach out—we read every message."
    >
      <div className="max-w-measure space-y-8">
        <div className="rounded-2xl border border-line bg-white p-8 shadow-[0_8px_32px_rgba(26,36,56,0.08)] sm:p-10">
          <h2 className="font-display text-2xl font-medium text-ink">
            Join the interest list
          </h2>
          <p className="mt-4 text-lg text-prose">
            Tell us you are interested in {SITE_NAME}. A simple email is enough
            for now—we will follow up as meetings and events take shape.
          </p>
          <a
            href={MAIL_INTEREST}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Email to join
          </a>
        </div>

        <div className="rounded-2xl border border-line bg-ink-muted/60 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-medium text-ink">
            Interest form
          </h2>
          <p className="mt-4 text-lg text-prose">
            A lightweight sign-up form is coming soon. Until then, please use
            email—we would rather keep it simple than add complexity we do not
            need yet.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <h2 className="font-display text-xl font-medium text-ink">
            Other enquiries
          </h2>
          <p className="mt-3 text-prose">
            Collaborations, interviews, speaking, or supporting the initiative:
          </p>
          <a
            href={MAIL_CONTACT}
            className="mt-4 inline-flex items-center justify-center rounded-lg border border-line bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Contact us
          </a>
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
    </PageShell>
  );
}
