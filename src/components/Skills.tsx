import { motion } from "framer-motion";
import { skillCategories } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";
import Carousel from "./ui/Carousel";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="The full |toolchain|."
          description="A consolidated stack for shipping secure, well-engineered software — from front-end polish to penetration-testing depth."
        />

        <Carousel
          ariaLabel="Skill categories"
          itemsPerView={{ base: 1, sm: 2, lg: 3 }}
        >
          {skillCategories.map((cat) => (
            <GlowCard key={cat.title} className="h-full">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {cat.title}
                </h3>
              </div>

              <ul className="mt-5 space-y-3.5">
                {cat.skills.map((s, idx) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-[13px]">
                      <span className="text-slate-700">{s.name}</span>
                      <span className="font-mono text-[11px] text-slate-500">
                        {s.level}%
                      </span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 1.1,
                          delay: 0.1 + idx * 0.04,
                          ease: "easeOut",
                        }}
                        className="absolute inset-y-0 left-0 rounded-full bg-brand-500"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
