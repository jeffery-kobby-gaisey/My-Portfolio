import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { certifications, education } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          title="Academic |foundation|."
          description="Formal coursework in cybersecurity and computer science, paired with continuous self-driven certifications."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="surface p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-slate-900">
                          {e.degree}
                        </h3>
                        <p className="text-sm text-brand-700">{e.school}</p>
                      </div>
                      <div className="text-right font-mono text-[12px] uppercase tracking-[0.14em] text-slate-500">
                        <div>{e.period}</div>
                        <div className="mt-0.5 text-slate-400">{e.location}</div>
                      </div>
                    </div>

                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      Relevant Coursework
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {e.coursework.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="surface p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-slate-900">
                Certifications & Training
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {c.name}
                    </div>
                    <div className="text-xs text-slate-500">{c.issuer}</div>
                  </div>
                  <span className="font-mono text-[11px] text-brand-700">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
