export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
    </div>
  );
}
