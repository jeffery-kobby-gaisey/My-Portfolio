import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
};

export default function TypingText({
  words,
  typeSpeed = 70,
  deleteSpeed = 38,
  pause = 1400,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setSub((prev) =>
          deleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-1 inline-block h-[1em] w-[2px] -translate-y-[2px] animate-blink bg-brand-400 align-middle" />
    </span>
  );
}
