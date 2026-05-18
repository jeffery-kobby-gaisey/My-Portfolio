import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { heroStats, profile, socials } from "@/data/content";
import { smoothScrollTo } from "@/lib/utils";
import TypingText from "./ui/TypingText";
import AnimatedCounter from "./ui/AnimatedCounter";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Available for internships & contracts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.04]"
            >
              Building{" "}
              <span className="text-brand-600">secure systems</span> & modern{" "}
              <span className="relative inline-block">
                web apps
                <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-brand-500" />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-balance text-base text-slate-600 sm:text-lg"
            >
              I'm{" "}
              <span className="font-semibold text-slate-900">{profile.name}</span>{" "}
              — a cybersecurity undergraduate, full-stack engineer and Top-5
              global CTF finisher shipping production software from{" "}
              <span className="inline-flex items-center gap-1 font-medium text-slate-900">
                <MapPin className="h-4 w-4 text-brand-600" />
                {profile.location}
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => smoothScrollTo("projects")}
                className="btn-primary"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href={profile.resumeUrl} download className="btn-secondary">
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <button
                type="button"
                onClick={() => smoothScrollTo("contact")}
                className="btn-ghost"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Find me
              </span>
              <span className="hairline w-10" />
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="btn-icon h-9 w-9"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Profile photo + Terminal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Profile photo */}
            <div className="relative mt-2 inline-flex pb-3">
              <div className="h-44 w-44 rounded-full bg-gradient-to-br from-brand-400 via-cyan-400 to-brand-600 p-[3px] shadow-xl shadow-brand-200/60">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src="/images/profile.jpg"
                    alt="Jeffery Kobby Gaisey"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Available badge */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                  </span>
                  <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-slate-700">
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div className="surface w-full overflow-hidden p-0">
              <div className="terminal m-0 rounded-2xl border-0 p-5">
                {/* terminal header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400/80" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    ~/whoami
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-slate-950 p-4 font-mono text-[13px] leading-relaxed">
                  <div className="text-slate-400">
                    <span className="text-brand-400">jeffery@accra</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-cyan-300">~</span>
                    <span className="text-slate-500">$ </span>
                    <span className="text-slate-200">whoami</span>
                  </div>
                  <div className="mt-1 text-slate-100">{profile.name}</div>

                  <div className="mt-3 text-slate-400">
                    <span className="text-brand-400">jeffery@accra</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-cyan-300">~</span>
                    <span className="text-slate-500">$ </span>
                    <span className="text-slate-200">cat role.txt</span>
                  </div>
                  <div className="mt-1 min-h-[1.6em] text-brand-300">
                    <TypingText words={profile.roles} />
                  </div>

                  <div className="mt-3 text-slate-400">
                    <span className="text-brand-400">jeffery@accra</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-cyan-300">~</span>
                    <span className="text-slate-500">$ </span>
                    <span className="text-slate-200">cat mission.txt</span>
                  </div>
                  <div className="mt-1 text-slate-200">{profile.headline}</div>
                </div>

                {/* Mini stat row */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-slate-950 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-400">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-400" />
                      Posture
                    </div>
                    <div className="mt-1 font-mono text-sm font-semibold text-white">
                      Security-first
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-950 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-400">
                      <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                      Focus
                    </div>
                    <div className="mt-1 font-mono text-sm font-semibold text-white">
                      Web · CTF · POS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 -top-4 hidden rotate-3 sm:block"
            >
              <div className="surface flex items-center gap-2 px-3 py-2">
                <span className="flex h-2 w-2 rounded-full bg-brand-500" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-700">
                  Top 5 · HTB Uni CTF 2025
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -bottom-4 -left-4 hidden -rotate-3 sm:block"
            >
              <div className="surface flex items-center gap-2 px-3 py-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-700">
                  React · TS · PHP · Python
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="surface relative overflow-hidden p-5 transition-colors hover:border-brand-300"
            >
              <div className="font-display text-3xl font-bold text-slate-900">
                {s.prefix}
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
