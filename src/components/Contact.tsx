import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  AlertCircle,
} from "lucide-react";
import { profile, socials } from "@/data/content";
import SectionHeading from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [status, setStatus] = useState<Status>("idle");

  function validate(state: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (state.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      next.email = "Please enter a valid email.";
    if (state.message.trim().length < 10)
      next.message = "Message must be at least 10 characters.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.setTimeout(() => {
      try {
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch {
        setStatus("error");
      }
    }, 700);
  }

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's |build something secure|."
          description="Open to internships, contract work and serious collaboration. I usually reply within a day."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT — info card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="surface relative overflow-hidden p-6 sm:p-7"
          >
            <h3 className="font-display text-xl font-semibold text-slate-900">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Whether it's a CTF team-up, a security audit, or a full-stack
              build — I'd love to hear what you're working on.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-700">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-medium text-slate-800 hover:text-brand-700"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-700">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={profile.phoneHref}
                  className="text-sm font-medium text-slate-800 hover:text-brand-700"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-700">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {profile.location}
                </span>
              </li>
            </ul>

            <div className="mt-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Find me elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
                  >
                    <s.icon className="h-3.5 w-3.5 text-brand-600" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.form
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="surface space-y-4 p-6 sm:p-7"
          >
            <Field
              label="Name"
              id="name"
              value={form.name}
              error={errors.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              placeholder="Ada Lovelace"
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              placeholder="you@company.com"
            />
            <Field
              label="Message"
              id="message"
              as="textarea"
              value={form.message}
              error={errors.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              placeholder="Tell me a little about the project, role, or CTF…"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-700"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Opening your mail client…
                </motion.span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-1.5 text-xs text-rose-600">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong — try email directly.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
};

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  as = "input",
  error,
}: FieldProps) {
  const base =
    "peer w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400";
  const borderClass = error
    ? "border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15"
    : "border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(base, borderClass, "min-h-[120px] resize-y")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(base, borderClass)}
        />
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
