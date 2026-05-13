import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.25)]",
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
