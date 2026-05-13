import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials, achievements } from "@/data/content";

type Line = { who: "user" | "system"; text: string };

const BANNER = [
  "jefferyOS v1.0  ·  type 'help' for a list of commands.",
  "tip: try   whoami   ·   skills   ·   ctf   ·   socials   ·   contact",
];

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "Available commands:",
    "  whoami    — print user identity",
    "  skills    — list core skills",
    "  projects  — list selected projects",
    "  ctf       — show CTF achievements",
    "  socials   — show external profiles",
    "  contact   — print contact details",
    "  clear     — clear the terminal",
  ],
  whoami: () => [
    `${profile.name} — ${profile.roles.join(" · ")}`,
    `Location: ${profile.location}`,
  ],
  skills: () => [
    "frontend: React.js, TypeScript, Tailwind CSS",
    "backend:  PHP, Node.js, Express, Python",
    "data:     MySQL, MongoDB",
    "security: pentesting, ethical hacking, cryptography, network sec",
    "os:       Linux (Kali, Ubuntu), Windows Server",
  ],
  projects: () => [
    "1. School Canteen POS System  — PHP, MySQL, JS",
    "2. Retail POS System          — PHP, MySQL, JS",
    "3. Encryption / Decryption    — Python",
    "4. E-Commerce Website         — PHP, MySQL, JS",
    "5. Bella Africa Business Site — HTML, CSS, JS, PHP",
    "6. Personal Portfolio (this)  — React, TS, Tailwind",
  ],
  ctf: () =>
    achievements.map((a) => `• ${a.year}  ${a.title} — ${a.subtitle}`),
  socials: () =>
    socials.map(
      (s) => `• ${s.label.padEnd(11, " ")} ${s.username}  →  ${s.href}`
    ),
  contact: () => [
    `email: ${profile.email}`,
    `phone: ${profile.phone}`,
    `loc:   ${profile.location}`,
  ],
  clear: () => ["__clear__"],
  ls: () => ["about.md  skills.json  projects/  ctf-writeups/  contact.txt"],
  sudo: () => ["jeffery is not in the sudoers file. This incident will be reported."],
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(
    BANNER.map((t) => ({ who: "system", text: t }))
  );
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const next: Line[] = [...lines, { who: "user", text: raw }];

    const handler = COMMANDS[cmd] ?? COMMANDS[cmd.split(" ")[0]];
    if (!handler) {
      next.push({
        who: "system",
        text: `command not found: ${cmd}. type 'help'.`,
      });
      setLines(next);
      return;
    }

    const output = handler();
    if (output.length === 1 && output[0] === "__clear__") {
      setLines(BANNER.map((t) => ({ who: "system", text: t })));
      return;
    }
    output.forEach((t) => next.push({ who: "system", text: t }));
    setLines(next);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setHistory((h) => [input, ...h].slice(0, 30));
      runCommand(input);
      setInput("");
      setHIndex(null);
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const next = hIndex === null ? 0 : Math.min(history.length - 1, hIndex + 1);
      setHIndex(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIndex === null) return;
      const next = hIndex - 1;
      if (next < 0) {
        setHIndex(null);
        setInput("");
      } else {
        setHIndex(next);
        setInput(history[next] ?? "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const all = Object.keys(COMMANDS);
      const match = all.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  }

  return (
    <section id="terminal" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Interactive"
          title="A live |terminal|."
          description="An interactive shell. Type `help` to explore — there are real responses behind every command."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="terminal overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-400/80" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                jeffery@accra — zsh
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                {new Date().toISOString().slice(0, 10)}
              </span>
            </div>

            <div
              ref={scrollRef}
              onClick={() => inputRef.current?.focus()}
              className="h-72 overflow-y-auto p-4 text-slate-100"
            >
              {lines.map((l, i) => (
                <div key={i} className="mb-1 whitespace-pre-wrap break-words">
                  {l.who === "user" ? (
                    <>
                      <span className="text-brand-400">jeffery@accra</span>
                      <span className="text-slate-500">:</span>
                      <span className="text-cyan-300">~</span>
                      <span className="text-slate-500">$ </span>
                      <span className="text-slate-100">{l.text}</span>
                    </>
                  ) : (
                    <span className="text-slate-300">{l.text}</span>
                  )}
                </div>
              ))}

              <form onSubmit={onSubmit} className="mt-1 flex items-center">
                <span className="text-brand-400">jeffery@accra</span>
                <span className="text-slate-500">:</span>
                <span className="text-cyan-300">~</span>
                <span className="text-slate-500">$&nbsp;</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                  placeholder="type 'help'"
                />
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
