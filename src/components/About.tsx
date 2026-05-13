import { motion } from "framer-motion";
import { aboutHighlights } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="A developer with a |security-first mindset|."
          description="I sit at the intersection of building and breaking — designing modern web applications while continuously stress-testing them like an attacker would."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="surface p-7 sm:p-8"
          >
            <p className="text-balance text-base leading-relaxed text-slate-700 sm:text-[17px]">
              I'm a cybersecurity undergraduate at{" "}
              <span className="font-semibold text-slate-900">
                Ghana Communication Technology University
              </span>{" "}
              with hands-on experience building production web applications,
              point-of-sale systems and security tooling. I'm a{" "}
              <span className="font-semibold text-slate-900">
                Top-5 finisher in international Capture-the-Flag competitions
              </span>{" "}
              with deep practice in penetration testing, secure software
              development, Linux administration, React-based front-ends and
              PHP/MySQL back-ends.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[17px]">
              I care about systems that{" "}
              <span className="text-slate-900">don't break under pressure</span>{" "}
              — authentication that holds, inputs that are validated, sessions
              that can't be hijacked, and dashboards that tell the truth. I
              ship fast, document clearly, and treat every project as a chance
              to push the engineering bar higher.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Based in Accra, Ghana",
                "Available globally (remote / hybrid)",
                "B.Sc. Cyber Security · GCTU",
                "Top-5 global CTF finisher",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[13px] text-slate-600"
                >
                  <span className="text-brand-600">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {aboutHighlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <GlowCard className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {h.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {h.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
