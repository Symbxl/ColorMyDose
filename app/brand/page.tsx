import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import {
  Body,
  BedtimeSymbol,
  Caption,
  CORPORATE,
  Display,
  DOSE,
  Heading1,
  Heading2,
  Lockup,
  Mark,
  MARK_ORDER,
  MorningSymbol,
  Sheet,
  TIMES,
  Wordmark,
} from "../_components/brand";

const SECTIONS = [
  {
    n: "01",
    id: "wordmark",
    title: "The wordmark",
    sub: "Construction · Clear space · Misuse",
    folio: "03",
  },
  {
    n: "02",
    id: "color",
    title: "Color",
    sub: "Corporate palette · Functional dose colors",
    folio: "06",
  },
  {
    n: "03",
    id: "typography",
    title: "Typography",
    sub: "Typefaces · Scale & hierarchy",
    folio: "08",
  },
  {
    n: "04",
    id: "iconography",
    title: "Iconography",
    sub: "Time-of-day symbols · Markers",
    folio: "10",
  },
];

export const metadata: Metadata = {
  title: "ColorMyDose™ — Brand Guidelines",
  description:
    "Edition 01 · August 2026. Identity standards for the ColorMyDose™ system: wordmark, color, typography, and iconography.",
};

export default function BrandBible() {
  return (
    <>
      <TopBar />

      <main className="flex flex-col gap-6 px-3 py-6 sm:gap-8 sm:px-6 sm:py-10">
        <Cover />
        <Contents />
        <WordmarkPage />
        <ClearSpacePage />
        <MisusePage />
        <ColorPage />
        <DoseColorPage />
        <TypographyPage />
        <HierarchyPage />
        <IconographyPage />

        <p className="type-caption mx-auto max-w-[54rem] px-1 text-steel">
          ColorMyDose™ Brand Guidelines · Edition 01 · August 2026. Apply the
          standards as written. Exceptions are reviewed by the brand owner
          before release.
        </p>
      </main>
    </>
  );
}

/* ------------------------------------------------------------------ */

function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-[54rem] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <Lockup size={17} />
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="type-overline text-steel transition-colors hover:text-ink"
            >
              {s.title === "The wordmark" ? "Wordmark" : s.title}
            </a>
          ))}
          <Link
            href="/"
            className="type-overline border-l border-ink/15 pl-3 text-steel transition-colors hover:text-ink sm:pl-5"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
}

/* --- 01 · Cover --------------------------------------------------- */

function Cover() {
  return (
    <section
      id="top"
      className="mx-auto flex w-full max-w-[54rem] flex-col bg-ink text-paper shadow-[0_1px_2px_rgba(29,58,79,0.06),0_12px_32px_-12px_rgba(29,58,79,0.35)]"
    >
      <div className="flex min-h-[38rem] flex-col justify-between px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex items-start justify-between gap-6">
          <Mark size={52} />
          <p className="type-overline text-paper/70">Edition 01 · August 2026</p>
        </div>

        <div className="py-16">
          <p className="type-overline mb-5 text-paper/70">Brand Guidelines</p>
          <Wordmark
            color={CORPORATE.paper}
            className="block text-[clamp(2.75rem,9vw,4.5rem)]"
          />
          <p className="mt-5 text-[1.375rem] italic leading-[1.4] text-paper/85">
            One Glance. Right Dose. Right Time.
          </p>
        </div>

        <div>
          <div className="mb-4 flex h-[3px] w-full overflow-hidden">
            {MARK_ORDER.map((c) => (
              <span key={c} className="flex-1" style={{ background: c }} />
            ))}
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="type-overline text-paper/70">
              ColorMyDose™ — for internal and agency partner use
            </p>
            <p className="type-overline hidden text-paper/70 sm:block">
              Identity Standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 02 · Contents ------------------------------------------------ */

function Contents() {
  return (
    <Sheet eyebrow="Contents" folio="02">
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <p className="type-overline mb-4 text-steel">The brand</p>
          <p className="text-[1.4rem] leading-[1.45]">
            ColorMyDose™ links every prescription bottle to its organizer
            compartment through a fixed, universal color code — so the right
            dose reaches the right time, at a glance.
          </p>
          <div className="mt-7 space-y-4 text-[0.95rem] leading-[1.55] text-ink/85">
            <p>
              These guidelines govern the ColorMyDose™ identity in all internal
              and agency-produced communications. They separate the corporate
              identity — ink, steel, and paper — from the four functional dose
              colors, which are reserved exclusively for marking administration
              time.
            </p>
            <p>
              Apply the standards as written. Exceptions are reviewed by the
              brand owner before release.
            </p>
          </div>
        </div>

        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id} className="border-b border-ink/10">
              <a
                href={`#${s.id}`}
                className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-mist/70"
              >
                <span className="type-caption w-6 shrink-0 text-steel">{s.n}</span>
                <span className="flex-1">
                  <span className="font-display block text-[1.0625rem] font-semibold leading-tight">
                    {s.title}
                  </span>
                  <span className="type-caption mt-1 block text-steel">{s.sub}</span>
                </span>
                <span className="type-caption shrink-0 text-steel">{s.folio}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Sheet>
  );
}

/* --- 03 · The wordmark -------------------------------------------- */

function WordmarkPage() {
  return (
    <Sheet id="wordmark" eyebrow="01 — The wordmark" folio="03">
      <Display>The wordmark</Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        The primary identifier of the system. The wordmark is set in Libre
        Franklin ExtraBold and carries the mark — four modules in the functional
        dose colors, ordered as the dosing day unfolds.
      </Body>

      <div className="mt-8 flex min-h-[11rem] items-center justify-center rounded-lg bg-mist px-6 py-12">
        <Lockup size={38} className="scale-[0.8] sm:scale-100" />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <Heading2>Construction</Heading2>
          <Body className="mt-3 text-[0.95rem]">
            The mark sits left of the wordmark, aligned to the cap height. Its
            width equals the wordmark x-height doubled; the gap between mark and
            wordmark equals two-thirds of one module. Never redraw either
            element — reproduce from master files only.
          </Body>

          <Heading2 className="mt-8">The mark</Heading2>
          <div className="mt-3 flex items-start gap-6">
            <Mark size={78} />
            <div>
              <ol className="space-y-1.5">
                {TIMES.map((t, i) => (
                  <li
                    key={t.key}
                    className="type-caption flex items-center gap-2 text-steel"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                      style={{ background: t.hex }}
                    />
                    <span className="text-ink">
                      <strong className="font-semibold">
                        {i + 1} · {t.name}
                      </strong>
                    </span>
                    <span>
                      —{" "}
                      {
                        [
                          "top left",
                          "top right",
                          "bottom left",
                          "bottom right",
                        ][i]
                      }
                    </span>
                  </li>
                ))}
              </ol>
              <Caption className="mt-3">
                Reading order follows the dosing day.
              </Caption>
            </div>
          </div>
        </div>

        <div>
          <Heading2>Versions</Heading2>
          <div className="mt-3 space-y-3">
            <VersionRow
              label="Primary lockup"
              note="Default for all applications"
            >
              <Lockup size={20} />
            </VersionRow>
            <VersionRow
              label="Wordmark"
              note="Where the mark appears separately nearby"
            >
              <Lockup size={20} showMark={false} />
            </VersionRow>
            <VersionRow label="Mark" note="App icons and favicons, from 12 px">
              <Mark size={26} />
            </VersionRow>
          </div>
        </div>
      </div>
    </Sheet>
  );
}

function VersionRow({
  children,
  label,
  note,
}: {
  children: ReactNode;
  label: string;
  note: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-ink/10 px-4 py-3.5">
      {children}
      <div className="text-right">
        <p className="type-caption font-semibold text-ink">{label}</p>
        <p className="type-caption text-steel">{note}</p>
      </div>
    </div>
  );
}

/* --- 04 · Clear space, minimum size, color applications ------------ */

function ClearSpacePage() {
  return (
    <Sheet eyebrow="01 — The wordmark" folio="04">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <Heading2>Clear space</Heading2>
          <div className="mt-3 flex min-h-[10.5rem] items-center justify-center rounded-lg bg-mist p-6">
            <div className="border border-dashed border-steel/60 px-[2.6rem] py-[1.7rem]">
              <Lockup size={22} />
            </div>
          </div>
          <div className="mt-3 flex gap-2.5">
            <span
              className="mt-0.5 h-3 w-3 shrink-0 rounded-[3px]"
              style={{ background: DOSE.morning }}
            />
            <Caption className="text-ink/80">
              Clear space on all sides equals one full mark (2 × 2 modules). No
              type, rules, or graphics may enter this zone.
            </Caption>
          </div>
        </div>

        <div>
          <Heading2>Minimum size</Heading2>
          <div className="mt-3 rounded-lg border border-ink/10">
            <div className="px-5 py-4">
              <Lockup size={15} />
              <Caption className="mt-2">
                Lockup — <strong className="text-ink">28 mm</strong> print ·{" "}
                <strong className="text-ink">110 px</strong> digital
              </Caption>
            </div>
            <div className="border-t border-ink/10 px-5 py-4">
              <Mark size={13} />
              <Caption className="mt-2">
                Mark alone — <strong className="text-ink">4 mm</strong> print ·{" "}
                <strong className="text-ink">12 px</strong> digital
              </Caption>
            </div>
            <div className="border-t border-ink/10 bg-mist/50 px-5 py-4">
              <Caption>
                Below these sizes the modules lose separation; use the wordmark
                alone.
              </Caption>
            </div>
          </div>
        </div>
      </div>

      <Heading2 className="mt-10">Color applications</Heading2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <ApplicationTile
          caption={
            <>
              <strong className="font-semibold text-ink">Positive</strong> —
              full color on Paper. Preferred.
            </>
          }
        >
          <div className="flex min-h-[7rem] items-center justify-center bg-paper">
            <Lockup size={22} />
          </div>
        </ApplicationTile>

        <ApplicationTile
          caption={
            <>
              <strong className="font-semibold text-ink">Reversed</strong> —
              full-color mark on Ink.
            </>
          }
        >
          <div className="flex min-h-[7rem] items-center justify-center bg-ink">
            <Lockup size={22} color={CORPORATE.paper} />
          </div>
        </ApplicationTile>

        <ApplicationTile
          caption={
            <>
              <strong className="font-semibold text-ink">One-color</strong> —
              all Ink, for single-color print.
            </>
          }
        >
          <div className="flex min-h-[7rem] items-center justify-center bg-paper">
            <Lockup size={22} markColors={[CORPORATE.ink]} />
          </div>
        </ApplicationTile>

        <ApplicationTile
          caption={
            <>
              <strong className="font-semibold text-ink">
                One-color reversed
              </strong>{" "}
              — all Paper on Ink.
            </>
          }
        >
          <div className="flex min-h-[7rem] items-center justify-center bg-ink">
            <Lockup
              size={22}
              color={CORPORATE.paper}
              markColors={[CORPORATE.paper]}
            />
          </div>
        </ApplicationTile>
      </div>
    </Sheet>
  );
}

function ApplicationTile({
  children,
  caption,
}: {
  children: ReactNode;
  caption: ReactNode;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-ink/10">
      {children}
      <figcaption className="type-caption border-t border-ink/10 bg-paper px-4 py-2.5 text-steel">
        {caption}
      </figcaption>
    </figure>
  );
}

/* --- 05 · Misuse --------------------------------------------------- */

const MISUSES: Array<{
  head: string;
  rest: string;
  ground?: string;
  render: ReactNode;
}> = [
  {
    head: "Never recolor the wordmark.",
    rest: "Dose colors are functional, not decorative.",
    render: (
      <Lockup
        size={19}
        color={DOSE.bedtime}
        markColors={[DOSE.noon, DOSE.bedtime, DOSE.evening, DOSE.morning]}
      />
    ),
  },
  {
    head: "Never reorder the modules.",
    rest: "The sequence is the dosing day.",
    render: (
      <Lockup
        size={19}
        markColors={[DOSE.evening, DOSE.morning, DOSE.noon, DOSE.bedtime]}
      />
    ),
  },
  {
    head: "Never stretch, condense, or skew.",
    rest: "Scale proportionally only.",
    render: (
      <span className="inline-block origin-center scale-x-[1.28]">
        <Lockup size={19} />
      </span>
    ),
  },
  {
    head: "Never add shadows or effects.",
    rest: "The lockup prints flat.",
    render: (
      <span className="inline-block [filter:drop-shadow(3px_4px_1px_rgba(29,58,79,0.45))]">
        <Lockup size={19} />
      </span>
    ),
  },
  {
    head: "Never place on low-contrast grounds.",
    rest: "Use Paper, Mist, or Ink.",
    ground: CORPORATE.steel,
    render: <Lockup size={19} color="#8FA6B4" />,
  },
  {
    head: "Never rotate or realign.",
    rest: "The lockup sits horizontal.",
    render: (
      <span className="inline-block rotate-[-9deg]">
        <Lockup size={19} />
      </span>
    ),
  },
];

function MisusePage() {
  return (
    <Sheet eyebrow="01 — The wordmark" folio="05">
      <Heading1>Misuse</Heading1>
      <Body className="mt-3 max-w-[40rem] text-[1.0625rem]">
        The wordmark is a fixed asset. The alterations below — and any others —
        are not permitted in any application.
      </Body>

      <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-3">
        {MISUSES.map((m) => (
          <figure key={m.head}>
            <div
              className="relative flex min-h-[7rem] items-center justify-center overflow-hidden rounded-md px-4"
              style={{ background: m.ground ?? CORPORATE.mist }}
            >
              <span className="absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[0.65rem] font-bold text-paper">
                ✕
              </span>
              {m.render}
            </div>
            <figcaption className="type-caption mt-2.5 text-steel">
              <strong className="font-semibold text-ink">{m.head}</strong>{" "}
              {m.rest}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-mist p-6">
        <p className="type-overline mb-4 text-steel">Correct use</p>
        <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {[
            "Reproduce from supplied master files only",
            "Positive on Paper is the preferred application",
            "Reverse on Ink for dark grounds",
            "Route exceptions to the brand owner before release",
          ].map((line) => (
            <p key={line} className="type-caption text-ink/85">
              — {line}
            </p>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

/* --- 06 · Color ---------------------------------------------------- */

const PROPORTION = [
  { name: "Paper", pct: 60, hex: CORPORATE.paper },
  { name: "Mist", pct: 22, hex: CORPORATE.mist },
  { name: "Ink", pct: 12, hex: CORPORATE.ink },
  { name: "Steel", pct: 6, hex: CORPORATE.steel },
];

const CONTRAST = [
  {
    label: "Paper on Ink / Ink on Paper",
    ratio: "11.9 : 1",
    grade: "AAA",
    bg: CORPORATE.ink,
    fg: CORPORATE.paper,
  },
  {
    label: "Ink on Mist",
    ratio: "10.6 : 1",
    grade: "AAA",
    bg: CORPORATE.mist,
    fg: CORPORATE.ink,
  },
  {
    label: "Steel on Paper",
    ratio: "4.8 : 1",
    grade: "AA — body size and larger",
    bg: CORPORATE.paper,
    fg: CORPORATE.steel,
  },
];

function ColorPage() {
  return (
    <Sheet id="color" eyebrow="02 — Color" folio="06">
      <Display>Color</Display>
      <Body className="mt-4 max-w-[43rem] text-[1.0625rem]">
        Two palettes with two jobs. The corporate palette carries the brand:
        calm, clinical, credible. The four dose colors are clinical instruments
        — they appear only to mark administration time, which keeps their
        meaning unambiguous at the point of care.
      </Body>

      <Heading2 className="mt-8">Corporate palette</Heading2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <SwatchCard
          name="Ink"
          hex="#1D3A4F"
          rgb="29 · 58 · 79"
          cmyk="63 · 27 · 0 · 69"
          role="Primary"
          use="text, headlines, reversed grounds"
          bg={CORPORATE.ink}
          fg={CORPORATE.paper}
          tall
        />
        <SwatchCard
          name="Steel"
          hex="#56778A"
          rgb="86 · 119 · 138"
          cmyk="38 · 14 · 0 · 46"
          role="Secondary"
          use="captions, rules, UI chrome"
          bg={CORPORATE.steel}
          fg={CORPORATE.paper}
          tall
        />
        <SwatchCard
          name="Mist"
          hex="#EDF2F4"
          rgb="237 · 242 · 244"
          cmyk="3 · 1 · 0 · 4"
          role="Ground"
          use="panels and tables"
          bg={CORPORATE.mist}
          fg={CORPORATE.ink}
        />
        <SwatchCard
          name="Paper"
          hex="#FFFFFF"
          rgb="255 · 255 · 255"
          cmyk="0 · 0 · 0 · 0"
          role="Ground"
          use="primary surface"
          bg={CORPORATE.paper}
          fg={CORPORATE.ink}
        />
      </div>
      <Caption className="mt-3">
        Ink and Steel may be tinted in 20% steps for rules, charts, and
        backgrounds. No other corporate colors are permitted.
      </Caption>

      <Heading2 className="mt-8">Proportion</Heading2>
      <div className="mt-3">
        <div className="flex h-9 w-full overflow-hidden rounded-sm border border-ink/10">
          {PROPORTION.map((p) => (
            <div
              key={p.name}
              style={{ width: `${p.pct}%`, background: p.hex }}
              className="h-full"
            />
          ))}
        </div>
        <div className="mt-2 flex w-full">
          {PROPORTION.map((p) => (
            <p
              key={p.name}
              style={{ width: `${p.pct}%` }}
              className="type-caption text-steel"
            >
              {p.name} {p.pct}
            </p>
          ))}
        </div>
      </div>

      <Heading2 className="mt-8">Contrast</Heading2>
      <div className="mt-3 overflow-hidden rounded-lg border border-ink/10">
        {CONTRAST.map((c, i) => (
          <div
            key={c.label}
            className={`flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 ${
              i > 0 ? "border-t border-ink/10" : ""
            }`}
          >
            <span
              className="font-display flex h-8 w-12 shrink-0 items-center justify-center rounded-sm border border-ink/10 text-sm font-semibold"
              style={{ background: c.bg, color: c.fg }}
            >
              Aa
            </span>
            <span className="type-caption flex-1 text-ink">{c.label}</span>
            <span className="type-caption w-20 font-bold text-ink">{c.ratio}</span>
            <span className="type-caption w-44 text-steel">{c.grade}</span>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

function SwatchCard({
  name,
  hex,
  rgb,
  cmyk,
  role,
  use,
  bg,
  fg,
  tall = false,
}: {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  role: string;
  use: string;
  bg: string;
  fg: string;
  tall?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink/10">
      <div
        className={`flex items-end px-5 pb-4 ${tall ? "pt-24" : "pt-14"}`}
        style={{ background: bg, color: fg }}
      >
        <div>
          <p className="font-display text-[0.95rem] font-bold leading-tight">
            {name}
          </p>
          <p className="type-caption opacity-80">{hex}</p>
        </div>
      </div>
      <div className="bg-paper px-5 py-3">
        <p className="type-caption text-steel">
          RGB {rgb} · CMYK {cmyk}
        </p>
        <p className="type-caption mt-1 text-steel">
          <strong className="font-semibold text-ink">{role}</strong> — {use}
        </p>
      </div>
    </div>
  );
}

/* --- 07 · The functional dose colors -------------------------------- */

const RULES = [
  {
    n: "01",
    head: "Fixed assignment.",
    rest: "Colors are permanently bound to times of day. Never reassign, swap, or repurpose them.",
  },
  {
    n: "02",
    head: "Function only.",
    rest: "Dose colors never appear decoratively — not in charts, headings, or corporate communications.",
  },
  {
    n: "03",
    head: "Never color alone.",
    rest: "Every dose color carries its time-of-day symbol and text label. Color supports the label; it never replaces it.",
  },
  {
    n: "04",
    head: "Dual-color for BID.",
    rest: "Twice-daily medications carry one split Morning + Bedtime marker on a single label.",
  },
];

function DoseColorPage() {
  return (
    <Sheet eyebrow="02 — Color" folio="07">
      <Heading1>The functional dose colors</Heading1>
      <Body className="mt-3 max-w-[42rem] text-[1.0625rem]">
        Four colors, permanently assigned to the four times of day. They appear
        on prescription labels, stickers, organizer compartments, and schedules
        — and nowhere else.
      </Body>

      <div className="mt-6 space-y-3">
        {TIMES.map((t) => (
          <div
            key={t.key}
            className="grid overflow-hidden rounded-lg border border-ink/10 sm:grid-cols-[15rem_1fr]"
          >
            <div
              className="flex items-center gap-3 px-5 py-5"
              style={{ background: t.hex, color: t.onColorHex }}
            >
              <t.Symbol width={26} height={26} />
              <div>
                <p className="font-display text-[0.95rem] font-bold uppercase tracking-[0.08em] leading-tight">
                  {t.name}
                </p>
                <p className="type-caption opacity-90">{t.colorName}</p>
              </div>
            </div>

            <div className="grid gap-4 bg-paper px-5 py-4 sm:grid-cols-3">
              <div>
                <p className="type-overline text-steel">Assignment</p>
                <p className="type-caption mt-1 font-semibold text-ink">
                  {t.assignment}
                </p>
              </div>
              <div>
                <p className="type-overline text-steel">Values</p>
                <p className="type-caption mt-1 text-steel">
                  {t.hex} · RGB {t.rgb}
                </p>
                <p className="type-caption text-steel">
                  CMYK {t.cmyk} · PMS {t.pms}
                </p>
              </div>
              <div>
                <p className="type-overline text-steel">On-color text</p>
                <p className="type-caption mt-1 font-semibold text-ink">
                  {t.onColor} · {t.ratio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-mist p-6">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <p className="type-overline text-steel">Rules of use</p>
          <p className="type-caption text-steel">
            Production standard — Pantone Solid Coated · ∆E ≤ 2.0 at D50 · match
            the approved physical sample, not a CMYK build
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {RULES.map((r) => (
            <div key={r.n} className="flex items-start gap-3">
              <p className="type-caption flex-1 text-ink/85">
                <strong className="font-semibold text-ink">
                  {r.n} · {r.head}
                </strong>{" "}
                {r.rest}
              </p>
              {r.n === "04" && <BidMarker />}
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

function BidMarker() {
  return (
    <span className="flex h-8 w-12 shrink-0 overflow-hidden rounded-[4px]">
      <span className="flex-1" style={{ background: DOSE.morning }} />
      <span className="flex-1" style={{ background: DOSE.bedtime }} />
    </span>
  );
}

/* --- 08 · Typography ------------------------------------------------ */

function TypographyPage() {
  return (
    <Sheet id="typography" eyebrow="03 — Typography" folio="08">
      <Display>Typography</Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        Two typefaces divide the work. Libre Franklin structures — headlines,
        labels, data, interface. Source Serif 4 explains — long-form text,
        standards, and counsel.
      </Body>

      <div className="mt-8 space-y-4">
        <div className="grid gap-6 rounded-lg border border-ink/10 px-6 py-6 sm:grid-cols-[10rem_1fr] sm:items-center">
          <p className="font-display text-[4.5rem] font-extrabold leading-none tracking-[-0.03em]">
            Aa
          </p>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <Heading2>Libre Franklin</Heading2>
              <p className="type-overline text-steel">Structural</p>
            </div>
            <Caption className="mt-2 text-ink/80">
              Headlines, section labels, tables, packaging callouts, and
              interface text. Set tight at display sizes (−2%), open at label
              sizes (+14%, uppercase).
            </Caption>
            <p className="font-display mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem]">
              <span className="font-normal">Regular</span>
              <span className="font-medium">Medium</span>
              <span className="font-semibold">SemiBold</span>
              <span className="font-bold">Bold</span>
              <span className="font-extrabold">ExtraBold</span>
            </p>
            <p className="font-display mt-2 text-[0.9rem] tracking-[0.02em] text-steel">
              AaBbCcDdEeFfGgHhIiJjKk 0123456789 mg · mcg · %
            </p>
          </div>
        </div>

        <div className="grid gap-6 rounded-lg border border-ink/10 px-6 py-6 sm:grid-cols-[10rem_1fr] sm:items-center">
          <p className="text-[4.5rem] leading-none">Aa</p>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="font-serif text-[1.125rem] font-semibold leading-[1.3]">
                Source Serif 4
              </h4>
              <p className="type-overline text-steel">Editorial</p>
            </div>
            <Body className="mt-2 text-[0.9rem] text-ink/80">
              Body copy, guidance, and patient-facing counsel. Italic carries
              the tagline and pull-quotes. Never used for labels, tables, or
              interface.
            </Body>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[1rem]">
              <span>Regular</span>
              <span className="italic">Italic</span>
              <span className="font-semibold">SemiBold</span>
              <span className="font-semibold italic">SemiBold Italic</span>
            </p>
            <p className="mt-2 text-[0.95rem] text-steel">
              AaBbCcDdEeFfGgHhIiJjKk 0123456789
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-mist p-5">
          <p className="type-overline mb-2 text-steel">Licensing</p>
          <Caption className="text-ink/80">
            Both typefaces are open source (SIL OFL) and served via Google Fonts
            — no license cost for internal or agency use, in print or digital.
          </Caption>
        </div>
        <div className="rounded-lg bg-mist p-5">
          <p className="type-overline mb-2 text-steel">Fallbacks</p>
          <Caption className="text-ink/80">
            Where webfonts cannot load: Libre Franklin → Helvetica / Arial;
            Source Serif 4 → Georgia / Times New Roman. Never substitute other
            typefaces.
          </Caption>
        </div>
      </div>
    </Sheet>
  );
}

/* --- 09 · Hierarchy & type scale ------------------------------------ */

const SCALE = [
  {
    style: "Display",
    face: "Libre Franklin ExtraBold",
    size: "30 pt / 40 px",
    leading: "1.05",
    tracking: "−2%",
    className: "font-display text-[1.35rem] font-extrabold tracking-[-0.02em]",
  },
  {
    style: "Heading 1",
    face: "Libre Franklin Bold",
    size: "21 pt / 28 px",
    leading: "1.15",
    tracking: "−1%",
    className: "font-display text-[1.05rem] font-bold tracking-[-0.01em]",
  },
  {
    style: "Heading 2",
    face: "Libre Franklin SemiBold",
    size: "13.5 pt / 18 px",
    leading: "1.3",
    tracking: "0",
    className: "font-display text-[0.95rem] font-semibold",
  },
  {
    style: "Overline",
    face: "Libre Franklin SemiBold",
    size: "7.5 pt / 10 px",
    leading: "1.4",
    tracking: "+14% · caps",
    className: "type-overline",
  },
  {
    style: "Body",
    face: "Source Serif 4 Regular",
    size: "12 pt / 16 px",
    leading: "1.5",
    tracking: "0",
    className: "text-[0.95rem]",
  },
  {
    style: "Caption",
    face: "Libre Franklin Medium",
    size: "9 pt / 12 px",
    leading: "1.4",
    tracking: "+2%",
    className: "type-caption",
  },
];

function HierarchyPage() {
  return (
    <Sheet eyebrow="03 — Typography" folio="09">
      <Heading2>Hierarchy in practice</Heading2>

      <div className="mt-3 rounded-lg border border-ink/10 px-6 py-8 sm:px-10">
        <p className="type-overline text-steel">Section 02 — Color</p>
        <Display className="mt-3">A universal language of time</Display>
        <Body className="mt-3 max-w-[36rem] text-[1.0625rem]">
          Four colors link the prescription bottle to the organizer compartment
          — assigned once, never repurposed.
        </Body>
        <Heading2 className="mt-6">The corporate palette</Heading2>
        <Body className="mt-2 max-w-[36rem] text-[0.95rem]">
          Ink carries text and headlines; Steel supports captions and rules;
          Mist and Paper ground every layout. Tints of Ink and Steel serve
          charts and tables.
        </Body>
        <Caption className="mt-5">Fig. 02 — Corporate palette proportions</Caption>
      </div>

      <Heading2 className="mt-10">Type scale</Heading2>
      <div className="mt-3 overflow-x-auto rounded-lg border border-ink/10">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <thead>
            <tr className="bg-mist">
              {["Style", "Typeface", "Size (print / digital)", "Leading", "Tracking"].map(
                (h) => (
                  <th key={h} className="type-overline px-4 py-3 text-steel">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {SCALE.map((r) => (
              <tr key={r.style} className="border-t border-ink/10">
                <td className="px-4 py-3">
                  <span className={r.className}>{r.style}</span>
                </td>
                <td className="type-caption px-4 py-3 text-steel">{r.face}</td>
                <td className="type-caption px-4 py-3 text-steel">{r.size}</td>
                <td className="type-caption px-4 py-3 text-steel">{r.leading}</td>
                <td className="type-caption px-4 py-3 text-steel">{r.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Caption className="mt-3">
        Patient-facing print materials never set body text below 12 pt. Digital
        interfaces never set body text below 16 px.
      </Caption>
    </Sheet>
  );
}

/* --- 10 · Iconography ----------------------------------------------- */

function IconographyPage() {
  return (
    <Sheet id="iconography" eyebrow="04 — Iconography" folio="10">
      <Display>The time-of-day symbols</Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        Four symbols pair with the four dose colors so that no marker ever
        depends on color alone. The sun rises, stands, and sets; the moon closes
        the day.
      </Body>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TIMES.map((t) => (
          <figure key={t.key}>
            <div className="flex min-h-[7rem] items-center justify-center rounded-lg bg-mist">
              <t.Symbol width={44} height={44} className="text-ink" />
            </div>
            <figcaption className="mt-2.5 flex items-baseline justify-between gap-2">
              <span className="type-caption flex items-center gap-2 font-semibold text-ink">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={{ background: t.hex }}
                />
                {t.name}
              </span>
              <span className="type-caption text-steel">{t.code}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <Heading2>Construction</Heading2>
          <ul className="mt-3 space-y-1.5">
            {[
              "Drawn on a 24-unit grid with a 2-unit stroke",
              "Round caps and joins throughout",
              "Forms derive from the circle and the horizon line",
              "Arrows indicate rise and set; never redraw or restyle",
              "Render in Ink on light grounds, Paper on Ink, or on the dose color per the contrast table",
            ].map((line) => (
              <li key={line} className="type-caption text-ink/85">
                — {line}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Heading2>Time markers</Heading2>
          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-4">
              <span
                className="font-display flex items-center gap-2 rounded-[5px] px-3 py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em]"
                style={{ background: DOSE.morning, color: CORPORATE.ink }}
              >
                <MorningSymbol width={16} height={16} />
                Morning
              </span>
              <Caption>Single marker — QAM</Caption>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex overflow-hidden rounded-[5px]">
                <span
                  className="font-display flex items-center gap-1.5 px-3 py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em]"
                  style={{ background: DOSE.morning, color: CORPORATE.ink }}
                >
                  <MorningSymbol width={15} height={15} />
                  AM
                </span>
                <span
                  className="font-display flex items-center gap-1.5 px-3 py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em]"
                  style={{ background: DOSE.bedtime, color: CORPORATE.paper }}
                >
                  <BedtimeSymbol width={15} height={15} />
                  HS
                </span>
              </span>
              <Caption>Dual marker — BID</Caption>
            </div>

            <Caption className="pt-2">
              Minimum reproduction 4 mm / 12 px. A symbol never appears without
              its text label at the point of use. Reversed labels on Red, Green,
              and Purple are set bold at 10 pt or larger.
            </Caption>
          </div>
        </div>
      </div>

      <div className="mt-10 flex h-[3px] w-full overflow-hidden">
        {MARK_ORDER.map((c) => (
          <span key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>
    </Sheet>
  );
}
