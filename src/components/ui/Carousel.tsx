import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useAnimationControls, type PanInfo } from "framer-motion";
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

const SWIPE_OFFSET_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 400;

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
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();

  // Resolve responsive perView + track viewport width for drag math
  useEffect(() => {
    function update() {
      const el = viewportRef.current;
      const winW = typeof window === "undefined" ? 0 : window.innerWidth;
      setPerView(resolvePerView(itemsPerView, winW));
      if (el) setViewportWidth(el.clientWidth);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [itemsPerView]);

  const pages = Math.max(1, Math.ceil(total / perView));

  useEffect(() => {
    if (page > pages - 1) setPage(pages - 1);
  }, [pages, page]);

  // Animate the track whenever page or viewportWidth changes
  useEffect(() => {
    const target = -(page * viewportWidth);
    controls.start({
      x: target,
      transition: { type: "spring", stiffness: 220, damping: 30, mass: 0.6 },
    });
  }, [page, viewportWidth, controls]);

  function goTo(p: number) {
    setPage(Math.max(0, Math.min(pages - 1, p)));
  }
  function prev() {
    goTo(page - 1);
  }
  function next() {
    goTo(page + 1);
  }

  function onDragEnd(_: unknown, info: PanInfo) {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipedLeft =
      offset < -SWIPE_OFFSET_THRESHOLD || velocity < -SWIPE_VELOCITY_THRESHOLD;
    const swipedRight =
      offset > SWIPE_OFFSET_THRESHOLD || velocity > SWIPE_VELOCITY_THRESHOLD;
    if (swipedLeft) next();
    else if (swipedRight) prev();
    else {
      // Snap back to current page
      controls.start({
        x: -(page * viewportWidth),
        transition: { type: "spring", stiffness: 260, damping: 32 },
      });
    }
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(pages - 1);
    }
  }

  const slideWidth = 100 / perView;
  const maxX = 0;
  const minX = -((pages - 1) * viewportWidth);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKey}
    >
      <div
        ref={viewportRef}
        className="overflow-hidden touch-pan-y select-none"
      >
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={{ left: minX, right: maxX }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={onDragEnd}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="shrink-0 px-2.5"
              style={{ width: `${slideWidth}%` }}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
            >
              {/* Prevent in-card clicks from being interpreted as drags */}
              <div className="pointer-events-auto">{child}</div>
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
                  onClick={() => goTo(i)}
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
