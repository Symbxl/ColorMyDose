"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";

import { ColorRule, Lockup } from "./brand";
import { NAV } from "./nav";
import { TalkToSales } from "./talk-to-sales";

/**
 * The site header — a full-height bar carrying the lockup, the section nav,
 * and the sales CTA. The four-color rule closes the bar off at the bottom
 * (§02: the rule always carries all four colors, so it reads as the brand
 * signature rather than a time of day) and marks the section in view.
 */
export function SiteHeader() {
  const barRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(
    NAV.map((n) => n.id),
    barRef,
  );
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  /* Escape closes the mobile sheet; so does a resize into the desktop bar. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_24px_-8px_rgba(29,58,79,0.28)]" : ""
      }`}
    >
      <div
        ref={barRef}
        className="mx-auto flex h-[4.5rem] max-w-[64rem] items-center gap-4 px-5 sm:h-[5.25rem] sm:px-8"
      >
        <Link
          href="/"
          aria-label="ColorMyDose — home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Lockup size="clamp(1.25rem, 2.4vw, 1.625rem)" />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Sections"
          className="ml-auto hidden items-center gap-0.5 lg:flex"
        >
          {NAV.map((n) => (
            <NavLink
              key={n.id}
              href={`#${n.id}`}
              current={active === n.id}
              onClick={() => setOpen(false)}
            >
              {n.short}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0 lg:gap-5 lg:border-l lg:border-ink/15 lg:pl-5">
          <TalkToSales variant="solid" className="hidden sm:inline-block">
            Talk to sales
          </TalkToSales>
          <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>

      <ColorRule thickness={3} />

      {/*
        Mobile / tablet sheet. An overlay rather than a block in the flow: a
        sheet that takes layout space shifts the document when it closes, and
        the anchor the tap just triggered then lands on the wrong section.
      */}
      <div
        id="site-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-ink/10 bg-paper shadow-[0_16px_32px_-16px_rgba(29,58,79,0.35)] lg:hidden"
      >
        <nav
          aria-label="Menu"
          className="mx-auto max-w-[64rem] px-5 py-2 sm:px-8"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === n.id ? "true" : undefined}
              className={`type-nav flex items-center gap-3.5 border-b border-ink/8 py-4 transition-colors ${
                active === n.id ? "text-ink" : "text-steel hover:text-ink"
              }`}
            >
              {/* Marks the section in view. `vertical` sets the width only —
                  the height has to come from here or the bar collapses. */}
              <ColorRule
                thickness={4}
                vertical
                className={`h-5 shrink-0 rounded-full transition-opacity ${
                  active === n.id ? "opacity-100" : "opacity-0"
                }`}
              />
              {n.label}
            </a>
          ))}
          <div className="py-4 sm:hidden">
            <TalkToSales variant="solid" className="block w-full py-3.5">
              Talk to sales
            </TalkToSales>
          </div>
        </nav>
      </div>
    </header>
  );
}

/**
 * A desktop nav link — a mist pill for the section in view. Deliberately not a
 * dose color: the bar already closes on the four-color rule, and a single color
 * here would read as a time of day (§02 rule 02).
 */
function NavLink({
  href,
  current,
  onClick,
  children,
}: {
  href: string;
  current: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={current ? "true" : undefined}
      className={`type-nav flex items-center rounded-[5px] px-2.5 py-2 text-[0.6875rem] transition-colors ${
        current ? "bg-mist text-ink" : "text-steel hover:bg-mist/70 hover:text-ink"
      }`}
    >
      {children}
    </a>
  );
}

function MenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="site-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className="-mr-2 flex size-11 items-center justify-center rounded-[5px] text-ink transition-colors hover:bg-mist lg:hidden"
    >
      <span aria-hidden="true" className="relative block h-3.5 w-5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-200"
            style={
              open
                ? {
                    top: "6px",
                    transform:
                      i === 1 ? "scaleX(0)" : `rotate(${i === 0 ? 45 : -45}deg)`,
                  }
                : { top: `${i * 6}px` }
            }
          />
        ))}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ *
 * Hooks
 * ------------------------------------------------------------------ */

/** The id of the section currently under the header, or null above the first. */
function useActiveSection(ids: string[], headerRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    /* A section counts as "in view" once it crosses a line just below the bar.
       Measured, not hard-coded: the bar changes height at `sm`, and the line
       has to sit under `scroll-padding-top` or an anchor jump lands one
       pixel short of its own section. */
    const read = () => {
      const line = (headerRef.current?.offsetHeight ?? 84) + 48;
      let current: string | null = null;
      for (const el of sections) {
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= line && bottom > line) current = el.id;
      }
      setActive(current);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [ids.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return active;
}

/** True once the page has scrolled past `threshold` px. */
function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const read = () => setScrolled(window.scrollY > threshold);
    read();
    window.addEventListener("scroll", read, { passive: true });
    return () => window.removeEventListener("scroll", read);
  }, [threshold]);

  return scrolled;
}
