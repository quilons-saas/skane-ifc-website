import { LOGO, SITE_DOMAIN, SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <img src={LOGO} alt="" width={44} height={44} />
          <p className="text-sm text-body">
            © {new Date().getFullYear()} {SITE_FULL_NAME} ·{" "}
            <span className="text-ink/70">{SITE_DOMAIN}</span>
          </p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-body">
          {SITE_NAME} — a QUILONS AI community initiative for international
          founders in Skåne.
        </p>
      </div>
    </footer>
  );
}
