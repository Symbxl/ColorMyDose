import type { CSSProperties, ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ *
 * Tokens
 * ------------------------------------------------------------------ */

export const CORPORATE = {
  ink: "#1D3A4F",
  steel: "#56778A",
  mist: "#EDF2F4",
  paper: "#FFFFFF",
} as const;

export const DOSE = {
  morning: "#F5C842",
  noon: "#E24B4A",
  evening: "#639922",
  bedtime: "#7F77DD",
} as const;

/** Reading order follows the dosing day. */
export const MARK_ORDER = [
  DOSE.morning,
  DOSE.noon,
  DOSE.evening,
  DOSE.bedtime,
];

/* ------------------------------------------------------------------ *
 * The mark — four modules on a 24-unit grid
 * ------------------------------------------------------------------ */

const MODULES: Array<[number, number]> = [
  [0, 0], // 1 · Morning  — top left
  [13, 0], // 2 · Noon     — top right
  [0, 13], // 3 · Evening  — bottom left
  [13, 13], // 4 · Bedtime  — bottom right
];

export function Mark({
  size = 24,
  colors = MARK_ORDER,
  className,
}: {
  size?: number | string;
  colors?: readonly string[];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="presentation"
      aria-hidden="true"
      style={{ display: "block", flex: "none" }}
    >
      {MODULES.map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={11}
          height={11}
          rx={2.9}
          fill={colors[i % colors.length]}
        />
      ))}
    </svg>
  );
}

/**
 * The four-color rule — the mark's modules laid flat, in dosing order.
 *
 * A brand signature, not a dose indication: it always carries all four colors
 * in the fixed order, so no single color is ever read as a time of day. This
 * is what keeps it clear of §02 rule 02 (function only) and rule 03 (never
 * color alone) — the same license the mark itself holds.
 */
export function ColorRule({
  /** Bar depth in px — across for horizontal, wide for vertical. */
  thickness = 3,
  vertical = false,
  className,
  style,
}: {
  thickness?: number;
  vertical?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex overflow-hidden ${vertical ? "flex-col" : ""} ${className ?? ""}`}
      style={{
        ...(vertical ? { width: thickness } : { height: thickness }),
        ...style,
      }}
    >
      {MARK_ORDER.map((c) => (
        <span key={c} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * The wordmark & the primary lockup
 * ------------------------------------------------------------------ */

export function Wordmark({
  color = CORPORATE.ink,
  className,
  style,
}: {
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`font-display font-extrabold whitespace-nowrap ${className ?? ""}`}
      style={{ color, letterSpacing: "-0.02em", lineHeight: 1, ...style }}
    >
      ColorMyDose
      <span
        aria-hidden="true"
        style={{
          fontSize: "0.34em",
          verticalAlign: "super",
          letterSpacing: 0,
          marginLeft: "0.06em",
        }}
      >
        ™
      </span>
    </span>
  );
}

export function Lockup({
  /**
   * Wordmark type size — px as a number, or any CSS length (`clamp(…)`, `rem`)
   * as a string. Every other measure is derived from it in `em`, so the whole
   * lockup scales as one.
   */
  size = 28,
  color = CORPORATE.ink,
  markColors = MARK_ORDER,
  showMark = true,
  className,
  style,
}: {
  size?: number | string;
  color?: string;
  markColors?: readonly string[];
  showMark?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`inline-flex items-center ${className ?? ""}`}
      /* Gap between mark and wordmark equals two-thirds of one module. */
      style={{ fontSize: size, gap: "0.28em", ...style }}
    >
      {showMark && (
        /* The mark is 0.86 of the type size, kept square by its own box. */
        <span style={{ width: "0.86em", height: "0.86em", flex: "none" }}>
          <Mark size="100%" colors={markColors} />
        </span>
      )}
      <Wordmark color={color} style={{ fontSize: "1em" }} />
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Time-of-day symbols
 * 24-unit grid · 2-unit stroke · round caps and joins
 * ------------------------------------------------------------------ */

function Glyph({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Morning — the sun rises. */
export function MorningSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M3 18h18" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <path d="M12 11V3" />
      <path d="M9 6l3-3 3 3" />
    </Glyph>
  );
}

/** Noon — the sun stands. */
export function NoonSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5" />
      <path d="M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" />
    </Glyph>
  );
}

/** Evening — the sun sets. */
export function EveningSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M3 18h18" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <path d="M12 3v8" />
      <path d="M9 8l3 3 3-3" />
    </Glyph>
  );
}

/** Bedtime — the moon closes the day. */
export function BedtimeSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M20.5 14.2A8.6 8.6 0 1 1 11 3.4a6.7 6.7 0 0 0 9.5 10.8z" />
    </Glyph>
  );
}

export const TIMES = [
  {
    key: "morning",
    name: "Morning",
    colorName: "Yellow",
    hex: DOSE.morning,
    rgb: "245 200 66",
    cmyk: "0 · 18 · 73 · 4",
    pms: "143 C",
    code: "QAM",
    short: "AM",
    assignment: "QAM · once daily & BID first dose",
    onColor: "Ink",
    ratio: "7.5 : 1",
    onColorHex: CORPORATE.ink,
    Symbol: MorningSymbol,
  },
  {
    key: "noon",
    name: "Noon",
    colorName: "Red",
    hex: DOSE.noon,
    rgb: "226 75 74",
    cmyk: "0 · 67 · 67 · 11",
    pms: "179 C",
    code: "Midday",
    short: "MD",
    assignment: "Noon · midday dose",
    onColor: "Paper",
    ratio: "3.9 : 1",
    onColorHex: CORPORATE.paper,
    Symbol: NoonSymbol,
  },
  {
    key: "evening",
    name: "Evening",
    colorName: "Green",
    hex: DOSE.evening,
    rgb: "99 153 34",
    cmyk: "35 · 0 · 78 · 40",
    pms: "370 C",
    code: "PM",
    short: "PM",
    assignment: "PM · afternoon / evening dose",
    onColor: "Paper",
    ratio: "3.4 : 1",
    onColorHex: CORPORATE.paper,
    Symbol: EveningSymbol,
  },
  {
    key: "bedtime",
    name: "Bedtime",
    colorName: "Purple",
    hex: DOSE.bedtime,
    rgb: "127 119 221",
    cmyk: "43 · 46 · 0 · 13",
    pms: "2725 C",
    code: "QHS",
    short: "HS",
    assignment: "QHS · bedtime & BID second dose",
    onColor: "Paper",
    ratio: "3.8 : 1",
    onColorHex: CORPORATE.paper,
    Symbol: BedtimeSymbol,
  },
] as const;

/* ------------------------------------------------------------------ *
 * Page furniture
 * ------------------------------------------------------------------ */

export function Sheet({
  id,
  eyebrow,
  folio,
  children,
  dark = false,
  className,
}: {
  id?: string;
  eyebrow?: string;
  folio: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        "mx-auto w-full max-w-[54rem] shadow-[0_1px_2px_rgba(29,58,79,0.06),0_12px_32px_-12px_rgba(29,58,79,0.18)]",
        dark ? "bg-ink text-paper" : "bg-paper text-ink",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex min-h-[36rem] flex-col px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        {eyebrow !== undefined && (
          <header
            className={[
              "mb-8 flex items-baseline justify-between gap-4 border-b pb-3",
              dark ? "border-paper/20" : "border-ink/10",
            ].join(" ")}
          >
            <p className="type-overline">{eyebrow}</p>
            <p
              className={[
                "type-overline hidden sm:block",
                dark ? "text-paper/60" : "text-steel",
              ].join(" ")}
            >
              ColorMyDose™ Brand Guidelines
            </p>
          </header>
        )}

        <div className="flex-1">{children}</div>

        <footer
          className={[
            "mt-12 flex items-baseline justify-between gap-4 border-t pt-3",
            dark ? "border-paper/20" : "border-ink/10",
          ].join(" ")}
        >
          <p className={dark ? "type-caption text-paper/60" : "type-caption text-steel"}>
            ColorMyDose™ — for internal and agency partner use
          </p>
          <p
            className={[
              "type-caption font-bold",
              dark ? "text-paper/60" : "text-ink",
            ].join(" ")}
          >
            {folio}
          </p>
        </footer>
      </div>
    </section>
  );
}

/** Display — Libre Franklin ExtraBold · 40 px · 1.05 · −2% */
export function Display({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}

/** Heading 1 — Libre Franklin Bold · 28 px · 1.15 · −1% */
export function Heading1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.01em] ${className ?? ""}`}
    >
      {children}
    </h3>
  );
}

/** Heading 2 — Libre Franklin SemiBold · 18 px · 1.3 */
export function Heading2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`font-display text-[1.125rem] font-semibold leading-[1.3] ${className ?? ""}`}
    >
      {children}
    </h4>
  );
}

/** Body — Source Serif 4 Regular · 16 px · 1.5 */
export function Body({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-base leading-[1.5] ${className ?? ""}`}>{children}</p>
  );
}

export function Caption({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`type-caption text-steel ${className ?? ""}`}>{children}</p>;
}
