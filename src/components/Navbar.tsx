import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import useActiveSection from "@/hooks/useActiveSection";
import { cn, smoothScrollTo } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(id: string) {
    setOpen(false);
    smoothScrollTo(id);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page pt-4">
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 backdrop-blur-xl transition-all duration-300",
            scrolled && "bg-white/95 shadow-card"
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("home");
            }}
            className="group flex items-center gap-2 text-sm"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 font-mono text-xs font-bold text-brand-700">
              {profile.initials}
            </span>
            <span className="hidden font-mono text-[13px] font-semibold tracking-wide text-slate-900 sm:inline">
              jeffery<span className="text-brand-600">.</span>dev
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.id);
                    }}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:text-slate-900",
                      isActive && "text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg border border-brand-200 bg-brand-50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary hidden h-9 px-3 text-xs sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Open menu"
              className="btn-icon h-9 w-9 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-page md:hidden"
          >
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-card">
              {navLinks.map((link) => {
                const isActive = active === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.id);
                    }}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900",
                      isActive && "bg-brand-50 text-brand-700"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={profile.resumeUrl}
                download
                className="btn-primary mt-2 w-full"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
