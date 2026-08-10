"use client";

import { useEffect, useState } from "react";

import { TIMES } from "./brand";
import { Organizer, PRODUCT_DOSE, RxBottle } from "./product";

const SIG: Record<(typeof TIMES)[number]["key"], string> = {
  morning: "Take 1 tablet every morning",
  noon: "Take 1 tablet at noon",
  evening: "Take 1 tablet every evening",
  bedtime: "Take 1 tablet at bedtime",
};

/**
 * The hero artifact — the system doing its one thing. A bottle takes the
 * color of its dosing time and the matching organizer row answers; the other
 * rows recede. Cycles on its own until the visitor takes over via the
 * time-of-day tabs, and never auto-plays under prefers-reduced-motion.
 */
export function MatchDemo({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TIMES.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  const time = TIMES[index];
  const dose = PRODUCT_DOSE[time.key];

  return (
    <figure
      className={`min-w-0 overflow-hidden rounded-lg bg-paper text-ink shadow-[0_1px_2px_rgba(0,0,0,0.18),0_28px_56px_-24px_rgba(0,0,0,0.5)] ${className ?? ""}`}
    >
      <div className="flex items-center gap-4 px-5 pt-6 sm:gap-5 sm:px-7 sm:pt-7">
        <RxBottle
          color={dose.solid}
          tint={dose.tint}
          className="w-16 shrink-0 sm:w-20"
        />
        <span
          aria-hidden="true"
          className="hidden flex-none basis-7 border-t-2 border-dashed transition-colors duration-500 sm:block"
          style={{ borderColor: dose.solid }}
        />
        <Organizer activeKey={time.key} className="min-w-0 flex-1" />
      </div>

      <figcaption className="px-5 pb-5 pt-4 text-center sm:px-7">
        <p className="type-caption text-steel">
          <strong className="font-semibold text-ink">
            &ldquo;{SIG[time.key]}&rdquo;
          </strong>{" "}
          &mdash; {time.colorName.toLowerCase()} label,{" "}
          {time.colorName.toLowerCase()} compartment.
        </p>
      </figcaption>

      <div
        role="group"
        aria-label="Preview a dosing time"
        className="flex border-t border-ink/10"
      >
        {TIMES.map((t, i) => {
          const active = i === index;
          return (
            <button
              key={t.key}
              type="button"
              aria-pressed={active}
              aria-label={t.name}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
              className={`font-display flex flex-1 items-center justify-center gap-1.5 px-1 py-2.5 text-[0.7rem] font-bold uppercase leading-none tracking-[0.08em] transition-colors ${
                active ? "" : "text-steel hover:bg-mist"
              }`}
              style={active ? { background: t.hex, color: t.onColorHex } : undefined}
            >
              <t.Symbol width={13} height={13} />
              <span className="hidden min-[26rem]:inline">{t.name}</span>
            </button>
          );
        })}
      </div>
    </figure>
  );
}
