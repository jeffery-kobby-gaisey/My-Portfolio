import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/content";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 border-t border-slate-200 bg-white py-12">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 font-mono text-xs font-bold text-brand-700">
                {profile.initials}
              </span>
              <span className="font-mono text-sm font-semibold tracking-wide text-slate-900">
                jeffery<span className="text-brand-600">.</span>dev
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              {profile.name} — Cybersecurity specialist & full-stack developer,
              based in {profile.location}. Building secure systems, modern
              web apps, and CTF-grade tooling.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Navigate
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-1.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => smoothScrollTo(l.id)}
                    className="text-slate-600 transition-colors hover:text-brand-700"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-brand-700"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-600 transition-colors hover:text-brand-700"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-slate-500">
            © {year} {profile.name}. Built with React, TypeScript & ☕ in Accra.
          </p>
          <button
            type="button"
            onClick={() => smoothScrollTo("home")}
            className="btn-secondary h-9 px-3 text-xs"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
