import { useId } from "react";

import { CORPORATE, TIMES } from "./brand";

/**
 * The dose colors as they appear in production — sampled from the
 * ColorMyDose™ color-code table (public/dose.png). Deeper and more saturated
 * than the brand bible's screen swatches, which stay authoritative at /brand.
 * `solid` is the header/compartment color; `tint` is the label ground.
 */
export const PRODUCT_DOSE: Record<string, { solid: string; tint: string }> = {
  morning: { solid: "#B7950D", tint: "#FEF9E7" },
  noon: { solid: "#C0392B", tint: "#FCEDEC" },
  evening: { solid: "#358548", tint: "#EAFAF1" },
  bedtime: { solid: "#6C3483", tint: "#F5EEF8" },
};

/**
 * A color-coded prescription bottle — the pharmacy end of the link.
 * The header strip and border carry the dose color, per §4.1 of the overview.
 */
export function RxBottle({
  color = PRODUCT_DOSE.bedtime.solid,
  tint = PRODUCT_DOSE.bedtime.tint,
  className,
}: {
  color?: string;
  tint?: string;
  className?: string;
}) {
  const uid = useId();
  const amberId = `${uid}-amber`;
  const capId = `${uid}-cap`;
  const roundId = `${uid}-round`;

  return (
    <svg
      viewBox="0 0 120 168"
      className={className}
      role="img"
      aria-label="Prescription bottle with a color-coded label"
    >
      <defs>
        {/* Translucent amber plastic — dark edges, gloss band left of center */}
        <linearGradient id={amberId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B06A10" />
          <stop offset="0.16" stopColor="#DE9435" />
          <stop offset="0.34" stopColor="#F2B45C" />
          <stop offset="0.58" stopColor="#DE9028" />
          <stop offset="0.85" stopColor="#C2761A" />
          <stop offset="1" stopColor="#A15E0B" />
        </linearGradient>
        <linearGradient id={capId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#C4CFD4" />
          <stop offset="0.28" stopColor="#F7F9FA" />
          <stop offset="0.62" stopColor="#E3E9EB" />
          <stop offset="1" stopColor="#B7C3C9" />
        </linearGradient>
        {/* Cylindrical shading — darkens both silhouette edges */}
        <linearGradient id={roundId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={CORPORATE.ink} stopOpacity="0.18" />
          <stop offset="0.14" stopColor={CORPORATE.ink} stopOpacity="0" />
          <stop offset="0.86" stopColor={CORPORATE.ink} stopOpacity="0" />
          <stop offset="1" stopColor={CORPORATE.ink} stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Vial — neck, shoulder, body in one outline */}
      <path
        d="M34 31 H86 V38 C86 44 98 45 98 52 V152 Q98 160 90 160 H30 Q22 160 22 152 V52 C22 45 34 44 34 38 Z"
        fill={`url(#${amberId})`}
        stroke="#8A4E06"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* Shadow the cap throws on the neck, and the thread ring below it */}
      <rect x="34" y="31" width="52" height="3.5" fill="#7E4A06" opacity="0.45" />
      <rect x="36.5" y="34.5" width="47" height="1.8" rx="0.9" fill="#7E4A06" opacity="0.4" />
      {/* Gloss down the left wall — the label covers its middle */}
      <rect x="28" y="44" width="7" height="110" rx="3.5" fill="#FFFFFF" opacity="0.32" />
      {/* Thick plastic at the base */}
      <ellipse cx="60" cy="154.5" rx="32" ry="4.6" fill="#8A4E06" opacity="0.35" />

      {/* Label — tinted ground with a color border, wrapped around the vial */}
      <rect
        x="26"
        y="58"
        width="68"
        height="88"
        rx="3"
        fill={tint}
        stroke={color}
        strokeWidth="2.5"
        style={{ transition: "fill 500ms ease, stroke 500ms ease" }}
      />
      {/* Label — color header strip */}
      <path
        d="M26 61a3 3 0 0 1 3-3h62a3 3 0 0 1 3 3v13H26z"
        fill={color}
        style={{ transition: "fill 500ms ease" }}
      />
      {/* Sig lines */}
      <g fill={CORPORATE.steel} opacity="0.45">
        <rect x="34" y="83" width="52" height="4" rx="2" />
        <rect x="34" y="94" width="42" height="4" rx="2" />
        <rect x="34" y="105" width="47" height="4" rx="2" />
        <rect x="34" y="116" width="36" height="4" rx="2" />
        <rect x="34" y="127" width="24" height="4" rx="2" />
      </g>

      {/* Curvature pass over vial and label together */}
      <path
        d="M34 31 H86 V38 C86 44 98 45 98 52 V152 Q98 160 90 160 H30 Q22 160 22 152 V52 C22 45 34 44 34 38 Z"
        fill={`url(#${roundId})`}
      />

      {/* Child-resistant cap — lip, ribbed top */}
      <rect
        x="25"
        y="24"
        width="70"
        height="7"
        rx="2.5"
        fill={`url(#${capId})`}
        stroke={CORPORATE.ink}
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      <rect
        x="27"
        y="4"
        width="66"
        height="21"
        rx="4.5"
        fill={`url(#${capId})`}
        stroke={CORPORATE.ink}
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      <path
        d="M33 7.5v13.5M39.75 7.5v13.5M46.5 7.5v13.5M53.25 7.5v13.5M60 7.5v13.5M66.75 7.5v13.5M73.5 7.5v13.5M80.25 7.5v13.5M87 7.5v13.5"
        stroke="#8FA2AB"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * The weekly organizer — compartments pre-color-coded at manufacture.
 * Four time-of-day rows across seven days.
 */
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function Organizer({
  className,
  /** When set, every other time row recedes so the match reads instantly. */
  activeKey,
}: {
  className?: string;
  activeKey?: string;
}) {
  return (
    <div className={className}>
      <div className="grid grid-cols-[1.5rem_repeat(7,minmax(0,1fr))] gap-1 sm:gap-1.5">
        <span />
        {DAYS.map((d, i) => (
          <span
            key={i}
            className="type-caption text-center text-steel"
            aria-hidden="true"
          >
            {d}
          </span>
        ))}

        {TIMES.map((t) => {
          const dimmed = activeKey !== undefined && activeKey !== t.key;
          return (
            <div key={t.key} className="contents">
              <span
                className="flex items-center justify-center transition-opacity duration-500"
                style={{ opacity: dimmed ? 0.3 : 1 }}
                title={t.name}
                aria-label={t.name}
              >
                <t.Symbol width={16} height={16} className="text-steel" />
              </span>
              {DAYS.map((_, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-[3px] transition-opacity duration-500"
                  style={{
                    background: PRODUCT_DOSE[t.key].solid,
                    opacity: dimmed ? 0.22 : 1,
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Darkened hues, legible as label text on the pale tint of each card body.
 * Shared by the color-code cards and the sticker previews below.
 */
export const LABEL_INK: Record<string, string> = {
  morning: "#8A6B12",
  noon: "#C0322F",
  evening: "#4B7A16",
  bedtime: "#5E52B8",
};

/**
 * The sticker as it appears on the bottle — a miniature of the color-code
 * card: solid header strip carrying the time of day, tinted ground naming
 * the label color.
 */
export function DoseSticker({
  time,
  className,
}: {
  time: (typeof TIMES)[number];
  className?: string;
}) {
  return (
    <span
      className={`inline-block w-[8.5rem] overflow-hidden rounded-[5px] border align-middle ${className ?? ""}`}
      style={{
        borderColor: `color-mix(in srgb, ${time.hex} 40%, #FFFFFF)`,
        background: `color-mix(in srgb, ${time.hex} 12%, #FFFFFF)`,
      }}
    >
      <span
        className="font-display flex items-center justify-center gap-1.5 px-2 py-1.5 text-[0.7rem] font-bold uppercase leading-none tracking-[0.08em]"
        style={{ background: time.hex, color: time.onColorHex }}
      >
        <time.Symbol width={13} height={13} />
        {time.name}
      </span>
      <span
        className="font-display block px-2 py-1.5 text-center text-[0.7rem] font-bold leading-none"
        style={{ color: LABEL_INK[time.key] }}
      >
        {time.colorName} Label
      </span>
    </span>
  );
}

/** The BID sticker — one split Morning + Bedtime label on a single bottle. */
export function DualSticker({ className }: { className?: string }) {
  const morning = TIMES[0];
  const bedtime = TIMES[3];
  return (
    <span
      className={`inline-block w-[8.5rem] overflow-hidden rounded-[5px] border align-middle ${className ?? ""}`}
      style={{
        borderColor: `color-mix(in srgb, ${bedtime.hex} 40%, #FFFFFF)`,
        background: `linear-gradient(to right, color-mix(in srgb, ${morning.hex} 12%, #FFFFFF) 50%, color-mix(in srgb, ${bedtime.hex} 12%, #FFFFFF) 50%)`,
      }}
    >
      <span className="flex">
        {[morning, bedtime].map((t) => (
          <span
            key={t.key}
            className="font-display flex flex-1 items-center justify-center gap-1 px-1 py-1.5 text-[0.7rem] font-bold uppercase leading-none tracking-[0.08em]"
            style={{ background: t.hex, color: t.onColorHex }}
          >
            <t.Symbol width={13} height={13} />
            {t.short}
          </span>
        ))}
      </span>
      <span className="font-display block px-2 py-1.5 text-center text-[0.7rem] font-bold leading-none">
        <span style={{ color: LABEL_INK.morning }}>{morning.colorName}</span>
        <span className="text-steel"> + </span>
        <span style={{ color: LABEL_INK.bedtime }}>{bedtime.colorName}</span>
      </span>
    </span>
  );
}

/** A dose-color chip with its symbol — never color alone, per §02 rule 03. */
export function DoseChip({
  time,
  className,
}: {
  time: (typeof TIMES)[number];
  className?: string;
}) {
  return (
    <span
      className={`font-display inline-flex items-center gap-1.5 rounded-[4px] px-2 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em] ${className ?? ""}`}
      style={{ background: time.hex, color: time.onColorHex }}
    >
      <time.Symbol width={13} height={13} />
      {time.name}
    </span>
  );
}

/** The BID marker — one split Morning + Bedtime label on a single bottle. */
export function DualChip({ className }: { className?: string }) {
  const morning = TIMES[0];
  const bedtime = TIMES[3];
  return (
    <span
      className={`inline-flex overflow-hidden rounded-[4px] ${className ?? ""}`}
    >
      <span
        className="font-display flex items-center gap-1 px-2 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em]"
        style={{ background: morning.hex, color: morning.onColorHex }}
      >
        <morning.Symbol width={13} height={13} />
        AM
      </span>
      <span
        className="font-display flex items-center gap-1 px-2 py-1 text-[0.7rem] font-bold uppercase tracking-[0.08em]"
        style={{ background: bedtime.hex, color: bedtime.onColorHex }}
      >
        <bedtime.Symbol width={13} height={13} />
        HS
      </span>
    </span>
  );
}
