import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Breakpoints = {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type Props = {
  children: ReactNode[];
  itemsPerView?: Breakpoints;
  className?: string;
  ariaLabel?: string;
};

function resolvePerView(bp: Breakpoints, width: number) {
  if (width >= 1280 && bp.xl !== undefined) return bp.xl;
  if (width >= 1024 && bp.lg !== undefined) return bp.lg;
  if (width >= 768 && bp.md !== undefined) return bp.md;
  if (width >= 640 && bp.sm !== undefined) return bp.sm;
  return bp.base;
}

export default function Carousel({
  children,
  itemsPerView = { base: 1, md: 2, lg: 3 },
  className,
  ariaLabel,
}: Props) {
  const total = children.length;
  const [perView, setPerView] = useState<number>(itemsPerView.base);
  const [page, setPage] = useState(0);

  useEffect(() => {
    function update() {
      const w = typeof window === "undefined" ? 0 : window.innerWidth;
      setPerView(resolvePerView(itemsPerView, w));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [itemsPerView]);

  const pages = Math.max(1, Math.ceil(total / perView));

  useEffect(() => {
    if (page > pages - 1) setPage(pages - 1);
  }, [pages, page]);

  const slideWidth = 100 / perView;
  const translateX = -(page * perView * slideWidth);

  function prev() {
    setPage((p) => Math.max(0, p - 1));
  }
  function next() {
    setPage((p) => Math.min(pages - 1, p + 1));
  }

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `${translateX}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 30, mass: 0.6 }}
          className="flex"
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0 px-2.5"
              style={{ width: `${slideWidth}%` }}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {pages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous slide"
            className="btn-icon h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1.5" role="tablist">
            {Array.from({ length: pages }).map((_, i) => {
              const active = i === page;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    active
                      ? "w-7 bg-brand-600"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={page === pages - 1}
            aria-label="Next slide"
            className="btn-icon h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
