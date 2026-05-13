import { motion } from "framer-motion";
import { Flag, Trophy } from "lucide-react";
import { achievements } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";

const STAT_TILES = [
  { label: "Global Finish", value: 5, prefix: "Top ", suffix: "" },
  { label: "brCTF v3", value: 4, prefix: "#", suffix: "" },
  { label: "Boxes Pwned", value: 80, prefix: "", suffix: "+" },
  { label: "Active Streak (days)", value: 120, prefix: "", suffix: "+" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cybersecurity"
          title="CTF & |achievements|."
          description="Competitive results, community work and continuous practice — the receipts behind the security-first claims."
        />

        {/* dashboard tiles */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {STAT_TILES.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface relative overflow-hidden p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  metric
                </span>
                <Trophy className="h-4 w-4 text-brand-600" />
              </div>
              <div className="mt-2 font-display text-3xl font-bold text-slate-900">
                {s.prefix}
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-slate-600">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* timeline */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 md:left-1/2"
          />

          <ol className="space-y-8">
            {achievements.map((a, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={a.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                >
                  <span className="absolute left-2.5 top-3 inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-brand-600 bg-white md:left-1/2 md:-translate-x-1/2" />

                  <div
                    className={`md:col-start-${isRight ? 2 : 1} ${
                      isRight ? "md:pl-10" : "md:pr-10 md:text-right"
                    }`}
                  >
                    <div className="surface p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-700">
                          {a.year}
                        </span>
                        <span className="chip border-brand-200 bg-brand-50 text-brand-700">
                          <Flag className="h-3 w-3" />
                          {a.metric}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">
                        {a.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-brand-700">
                        {a.subtitle}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
