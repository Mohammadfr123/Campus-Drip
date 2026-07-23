import { SITE_NAME, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl font-bold uppercase tracking-tight">
            {SITE_NAME}
          </p>
          <p className="text-sm text-muted">{SITE_TAGLINE}</p>
          <div className="flex gap-6 text-sm text-muted">
            <a href={SOCIAL_LINKS.instagram} className="hover:text-accent-teal">
              Instagram
            </a>
            <a href={SOCIAL_LINKS.tiktok} className="hover:text-accent-teal">
              TikTok
            </a>
            <a href={SOCIAL_LINKS.twitter} className="hover:text-accent-teal">
              Twitter
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">
            © {new Date().getFullYear()} Campus Drip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
