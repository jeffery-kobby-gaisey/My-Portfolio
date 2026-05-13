import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ShieldCheck, Sparkles } from "lucide-react";
import { projects } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";
import Carousel from "./ui/Carousel";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Full-Stack", "Cybersecurity", "Web"] as const;
type Filter = (typeof FILTERS)[number];

function ProjectPreview({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`p-${initials}`}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="200" fill={`url(#p-${initials})`} />
        <polyline
          points="0,140 40,120 80,128 120,90 160,100 200,70 240,82 280,55 320,68 360,40 400,50"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        <polyline
          points="0,160 40,150 80,155 120,135 160,145 200,118 240,128 280,108 320,118 360,92 400,102"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.5"
          opacity="0.65"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="font-mono text-4xl font-bold tracking-widest text-white">
          {initials}
        </div>
      </div>
      <div className="absolute left-3 top-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-brand-400/80" />
      </div>
      <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
        live
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected |work|."
          description="Production software, security tooling and case studies — each shipped, tested and built to hold up under real-world use."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-all",
                filter === f
                  ? "border-brand-500 bg-brand-600 text-white shadow-soft"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <Carousel
          key={filter}
          ariaLabel="Projects"
          itemsPerView={{ base: 1, md: 2 }}
        >
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.25)]"
            >
              <ProjectPreview title={p.title} />

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="chip border-brand-200 bg-brand-50 text-brand-700">
                      {p.category === "Cybersecurity" ? (
                        <ShieldCheck className="h-3 w-3" />
                      ) : (
                        <Sparkles className="h-3 w-3" />
                      )}
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-600">{p.tagline}</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-1.5 text-[13px] text-slate-600 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand-600">▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-slate-500"
                  >
                    #{s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary h-9 px-3 text-xs"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary h-9 px-3 text-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
