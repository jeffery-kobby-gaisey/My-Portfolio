import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've |shipped|."
          description="Roles where I've owned outcomes — from web ownership to social strategy and basic security hygiene."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-slate-200"
          />

          <ol className="space-y-8">
            {experience.map((e, i) => (
              <motion.li
                key={e.role}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-12"
              >
                <span className="absolute left-2 top-3 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-600 bg-white">
                  <Briefcase className="h-2.5 w-2.5 text-brand-700" />
                </span>

                <div className="surface p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900">
                        {e.role}
                      </h3>
                      <p className="text-sm font-medium text-brand-700">
                        {e.company}
                      </p>
                    </div>
                    <div className="text-right font-mono text-[12px] uppercase tracking-[0.14em] text-slate-500">
                      <div>{e.period}</div>
                      <div className="mt-0.5 flex items-center justify-end gap-1 text-slate-400">
                        <MapPin className="h-3 w-3" /> {e.location}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
