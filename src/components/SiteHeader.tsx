"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOGO, NAV_LINKS, SITE_DOMAIN, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <img src={LOGO} alt="" width={44} height={44} />
          <span className="text-sm font-medium tracking-wide text-body">
            <span className="font-display text-ink">{SITE_NAME}</span>
            <span className="mx-2 text-accent/40" aria-hidden="true">
              ·
            </span>
            <span className="hidden sm:inline">{SITE_DOMAIN}</span>
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-1 text-sm sm:gap-3"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-2 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  active
                    ? "font-medium text-ink"
                    : "text-body hover:text-ink"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
