import Image from "next/image";
import type { ReactNode } from "react";

import {
  Body,
  ColorRule,
  CORPORATE,
  Display,
  Heading2,
  Lockup,
  Mark,
  TIMES,
  Wordmark,
} from "./_components/brand";
import {
  DoseSticker,
  DualChip,
  DualSticker,
} from "./_components/product";
import { HeroVideo } from "./_components/hero-video";
import { NAV } from "./_components/nav";
import { SiteHeader } from "./_components/site-header";
import { TalkToSales } from "./_components/talk-to-sales";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhoWeServe />
        <System />
        <Outcomes />
        <GetStarted />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Shell
 * ------------------------------------------------------------------ */

function Section({
  id,
  children,
  tone = "paper",
  className,
}: {
  id?: string;
  children: ReactNode;
  tone?: "paper" | "mist";
  className?: string;
}) {
  const grounds = {
    paper: "bg-paper text-ink",
    mist: "bg-mist text-ink",
  };
  return (
    <section
      id={id}
      className={`${grounds[tone]} px-5 py-16 sm:px-8 sm:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-[64rem]">{children}</div>
    </section>
  );
}

function Overline({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <>
      <ColorRule className="mb-3 w-14" />
      <p className={`type-overline ${muted ? "text-paper/60" : "text-steel"}`}>
        {children}
      </p>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-paper px-5 py-10 sm:px-8">
      <ColorRule className="mx-auto mb-10 max-w-[64rem]" />
      <div className="mx-auto flex max-w-[64rem] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Lockup size={19} />
          <p className="mt-3 text-[0.95rem] italic text-steel">
            One Glance. Right Dose. Right Time.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="type-caption text-steel transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
          <TalkToSales variant="quiet">Talk to sales</TalkToSales>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-[64rem] border-t border-ink/10 pt-4">
        <p className="type-caption text-steel">
          ColorMyDose™ — a color-coded medication management system for
          pharmacists, nurses, caregivers, and patients.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ *
 * Hero — the system doing its one thing, before a word is read
 * ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 pb-16 pt-14 text-paper sm:px-8 sm:pb-20 sm:pt-16 lg:pt-20">
      {/* Depth on the ink ground — steel only, so no glow reads as a dose color. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(56rem 38rem at 82% 0%, rgba(86,119,138,0.32), transparent 62%), radial-gradient(44rem 32rem at 0% 100%, rgba(86,119,138,0.18), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-[64rem]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Overline muted>Color-coded medication management</Overline>
            <h1 className="font-display mt-5 text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
              One Glance.
              <br />
              Right Dose.
              <br />
              Right Time.
            </h1>
            <p className="mt-6 max-w-[32rem] text-[1.125rem] leading-[1.5] text-paper/85">
              <Wordmark color={CORPORATE.paper} style={{ fontSize: "1.05em" }} />{" "}
              links every prescription bottle to its organizer compartment with
              one fixed, universal color code. If the colors match, the dose is
              right.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <TalkToSales variant="hero">Talk to sales</TalkToSales>
              <a
                href="#system"
                className="font-display rounded-[5px] border border-paper/30 px-5 py-3 text-[0.875rem] font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                See how it works
              </a>
            </div>
          </div>

          <figure>
            <HeroVideo />
            <figcaption className="type-caption mt-4 text-center text-paper/60">
              The bottle takes the color of its dosing time — the match is the
              verification.
            </figcaption>
          </figure>
        </div>

        <p className="type-caption mt-12 border-t border-paper/15 pt-5 text-paper/60">
          Integrates with major pharmacy systems&ensp;·&ensp;Or start today
          with the sticker set&ensp;·&ensp;No workflow changes
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * How it works — the one rule, then the rule in the visitor's hands
 * ------------------------------------------------------------------ */

function System() {
  return (
    <Section id="system" tone="mist">
      <Overline>How it works</Overline>
      <Display className="mt-4 max-w-[36rem]">
        Four times of day. Four colors. Fixed forever.
      </Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        Every dosing time is permanently assigned one color — the same on every
        bottle, every organizer, everywhere. Assigned once, never repurposed.
      </Body>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {TIMES.map((t) => (
          <div
            key={t.key}
            className="overflow-hidden rounded-lg border"
            style={{
              borderColor: `color-mix(in srgb, ${t.hex} 40%, #FFFFFF)`,
              background: `color-mix(in srgb, ${t.hex} 12%, #FFFFFF)`,
            }}
          >
            <div
              className="flex items-center justify-center gap-2.5 px-3 py-3"
              style={{ background: t.hex, color: t.onColorHex }}
            >
              <t.Symbol width={18} height={18} />
              <p className="font-display text-[0.875rem] font-bold uppercase leading-none tracking-[0.1em]">
                {t.name}
              </p>
            </div>
            <p className="type-caption px-3 py-3 text-center text-steel">
              {t.assignment}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <DualChip />
        <p className="type-caption text-steel">
          Twice-daily medications carry one dual-color label — morning and
          bedtime on the same sticker.
        </p>
      </div>

      <div className="mt-16 grid items-center gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14">
        <div>
          <Heading2>See the match for yourself</Heading2>
          <Body className="mt-3 text-[0.95rem] text-ink/85">
            Press play — the bottle&rsquo;s label takes the color of its
            dosing time, and the matching organizer row answers.
          </Body>
        </div>
        <HeroVideo className="border border-ink/10" />
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ *
 * Why it matters — three outcomes, right behind the pitch
 * ------------------------------------------------------------------ */

const OUTCOMES = [
  {
    stat: "≈50%",
    body: "of patients with chronic conditions don't take medications as directed. Color removes the confusion behind missed and mistaken doses.",
  },
  {
    stat: "1 glance",
    body: "replaces line-by-line verification against every bottle — at the counter, the bedside, or the kitchen table.",
  },
  {
    stat: "0 training",
    body: "is needed to fill or check an organizer, so nurses, family caregivers, and patients themselves can safely help.",
  },
];

function Outcomes() {
  return (
    <Section id="outcomes" tone="paper">
      <Overline>Why it matters</Overline>
      <Display className="mt-4 max-w-[32rem]">
        Safer for patients. Faster for you.
      </Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        The color-coded bridge between bottle and organizer minimizes
        medication errors at every stage — from the pharmacy counter to the
        bedside to the kitchen table.
      </Body>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {OUTCOMES.map((o) => (
          <div key={o.stat}>
            <ColorRule className="w-14" />
            <p className="font-display mt-5 text-[2.5rem] font-extrabold leading-none tracking-[-0.02em]">
              {o.stat}
            </p>
            <Body className="mt-3 text-[0.95rem] text-ink/85">{o.body}</Body>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ *
 * Who we serve — the care chain, from the overview §5
 * ------------------------------------------------------------------ */

function BenefitCheck({ size = 22 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="presentation"
      aria-hidden="true"
      style={{ display: "block", flex: "none" }}
    >
      <circle cx="12" cy="12" r="12" fill={CORPORATE.ink} />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        fill="none"
        stroke={CORPORATE.paper}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AUDIENCES = [
  {
    tag: "Setting the standard",
    title: "The pharmacist",
    body: "Every bottle leaves the counter color-coded — printed by integrated software or stickered by hand — and a filled organizer verifies in seconds, not minutes.",
  },
  {
    tag: "Clinical caregiving made safer",
    title: "The nurse & medication aide",
    body: "In nursing homes, assisted living, home health, and hospitals, one standardized visual system cuts administration errors and speeds preparation.",
  },
  {
    tag: "Empowered at home",
    title: "The family caregiver",
    body: "Spouses, adult children, and siblings turn a high-stakes responsibility into a simple color-matching exercise — no medical training required.",
  },
  {
    tag: "Independent and confident",
    title: "The patient",
    body: "Once the bottles carry color, self-managing is one match. No reading required, no memory required — just color, and the dignity that comes with it.",
  },
];

const SHARED_KIT = [
  {
    title: "One pre-color-coded organizer",
    body: "Compartments arrive colored from the manufacturer — ready to use from day one, at home or in the clinic.",
  },
  {
    title: "One sticker set",
    body: "All four colors plus dual-color BID stickers, with a one-page reference guide anyone can follow.",
  },
  {
    title: "One printed weekly schedule",
    body: "Every medication, color, and time on a single page — posted on the refrigerator or shared with the care team.",
  },
];

function WhoWeServe() {
  return (
    <Section id="who-we-serve" tone="paper">
      <Overline>Who we serve</Overline>
      <Display className="mt-4 max-w-[38rem]">
        Everyone who handles medications for another
      </Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        The system was designed to reach far beyond the pharmacy counter. Any
        responsible person in a patient&rsquo;s care circle can use it safely,
        because it asks for nothing but a color match.
      </Body>

      <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
        {AUDIENCES.map((a) => (
          <div key={a.title}>
            <BenefitCheck />
            <p className="type-overline mt-4 text-steel">{a.tag}</p>
            <Heading2 className="mt-2">{a.title}</Heading2>
            <Body className="mt-2 text-[0.95rem] text-ink/85">{a.body}</Body>
          </div>
        ))}
      </div>

      <div className="mt-12 grid overflow-hidden rounded-lg border border-ink/10 bg-paper md:grid-cols-2">
        <div className="flex min-h-[14rem] flex-col items-center justify-center gap-7 border-b border-ink/10 bg-mist/60 px-6 py-10 md:min-h-0 md:border-b-0 md:border-r">
          <Lockup size={26} />
          <div className="grid grid-cols-2 justify-items-center gap-2.5">
            {TIMES.map((t) => (
              <DoseSticker key={t.key} time={t} />
            ))}
            <DualSticker className="col-span-2" />
          </div>
        </div>
        <div className="space-y-6 p-6 sm:p-8">
          {SHARED_KIT.map((k) => (
            <div key={k.title} className="flex gap-4">
              <BenefitCheck size={20} />
              <div>
                <Heading2>{k.title}</Heading2>
                <Body className="mt-1.5 text-[0.95rem] text-ink/85">
                  {k.body}
                </Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ *
 * Getting started — two adoption pathways, feeding the closing CTA
 * ------------------------------------------------------------------ */

function PathwayCard({
  tag,
  title,
  body,
  children,
}: {
  tag: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-paper">
      <div className="flex h-[13rem] items-center justify-center overflow-hidden border-b border-ink/10 bg-mist/60">
        {children}
      </div>
      <div className="p-6 sm:p-8">
        <p className="type-overline text-steel">{tag}</p>
        <Heading2 className="mt-2">{title}</Heading2>
        <Body className="mt-2 text-[0.95rem] text-ink/85">{body}</Body>
      </div>
    </div>
  );
}

function GetStarted() {
  return (
    <Section id="get-started" tone="mist">
      <Overline>Getting started</Overline>
      <Display className="mt-4 max-w-[36rem]">
        Two ways to bring color to the counter
      </Display>
      <Body className="mt-4 max-w-[42rem] text-[1.0625rem]">
        Start with stickers today, integrate printing later, or run both —
        neither pathway changes how prescriptions are processed.
      </Body>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <PathwayCard
          tag="Ready today"
          title="The sticker set"
          body="All four colors plus dual-color BID stickers, applied by hand at the counter in seconds. No software, no setup, no training required."
        >
          <div className="grid grid-cols-2 justify-items-center gap-2.5">
            {TIMES.map((t) => (
              <DoseSticker key={t.key} time={t} />
            ))}
            <DualSticker className="col-span-2" />
          </div>
        </PathwayCard>

        <PathwayCard
          tag="Built into your workflow"
          title="Integrated label printing"
          body="The dose color prints directly on the prescription label through your dispensing software — compatible with major pharmacy systems."
        >
          <Image
            src="/pic.jpg"
            alt="A prescription bottle wearing the purple Bedtime label — QHS, bedtime & BID second dose"
            width={1024}
            height={348}
            className="h-full w-full object-cover"
          />
        </PathwayCard>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ *
 * Closing CTA
 * ------------------------------------------------------------------ */

function ClosingCta() {
  return (
    <section className="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center text-center">
        <Mark size={40} />
        <h2 className="font-display mt-8 max-w-[22ch] text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
          Bring <Wordmark color={CORPORATE.paper} style={{ fontSize: "1em" }} />{" "}
          to your pharmacy
        </h2>
        <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-[1.5] text-paper/85">
          Start with the sticker kit today, or talk to us about integrated
          label printing for your dispensing system.
        </p>
        <div className="mt-9">
          <TalkToSales variant="hero">Talk to sales</TalkToSales>
        </div>
        <p className="type-caption mt-6 text-paper/60">
          Free consultation · We respond within five minutes during business
          hours
        </p>
      </div>
    </section>
  );
}
