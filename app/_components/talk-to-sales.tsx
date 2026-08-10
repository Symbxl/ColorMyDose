"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { ColorRule } from "./brand";

/* ------------------------------------------------------------------ *
 * Trigger
 * ------------------------------------------------------------------ */

const TRIGGERS = {
  /** Primary hero button — paper on the ink ground. */
  hero: "font-display rounded-[5px] bg-paper px-5 py-3 text-[0.875rem] font-semibold text-ink transition-opacity hover:opacity-90",
  /** Hero-weight button on the ink ground. */
  outline:
    "font-display rounded-[5px] border border-paper/30 px-5 py-3 text-[0.875rem] font-semibold text-paper transition-colors hover:bg-paper/10",
  /**
   * Nav-weight button on the paper ground. Carries no display utility on
   * purpose — callers set `hidden sm:inline-block`, and a `display` class here
   * would win over theirs regardless of source order.
   */
  solid:
    "font-display rounded-[5px] bg-ink px-4 py-2.5 text-center text-[0.8125rem] font-semibold tracking-[0.02em] whitespace-nowrap text-paper transition-colors hover:bg-steel",
  /** Footer / nav text link. */
  quiet: "type-caption text-steel transition-colors hover:text-ink",
};

export function TalkToSales({
  variant,
  children,
  className,
}: {
  variant: keyof typeof TRIGGERS;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${TRIGGERS[variant]} ${className ?? ""}`}
      >
        {children}
      </button>
      <SalesDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Dialog — a bottom sheet on mobile, a centered card on desktop
 * ------------------------------------------------------------------ */

function SalesDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [sent, setSent] = useState(false);
  const titleId = useId();
  const descId = useId();

  /* Drive the native dialog from state so Escape, focus containment, and
     inert background come for free. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  /* iOS keeps scrolling the page behind a modal dialog. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    // No endpoint is wired up yet — acknowledge locally.
    e.preventDefault();
    setSent(true);
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClose={() => {
        onClose();
        setSent(false);
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="
        fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none
        max-h-[92dvh] overflow-y-auto overscroll-contain
        rounded-t-2xl rounded-b-none bg-paper text-ink
        shadow-[0_-1px_2px_rgba(0,0,0,0.06),0_-24px_60px_-20px_rgba(0,0,0,0.45)]
        backdrop:bg-ink/45 backdrop:backdrop-blur-[2px]
        sm:inset-0 sm:m-auto sm:h-fit sm:w-[calc(100%-2.5rem)] sm:max-w-[31rem]
        sm:rounded-2xl
        sm:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_32px_64px_-24px_rgba(0,0,0,0.45)]
      "
    >
      <ColorRule thickness={4} className="sticky top-0 z-10" />

      <div className="p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-mist text-steel transition-colors hover:bg-mist/70 hover:text-ink sm:right-5 sm:top-7"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M1.5 1.5 12.5 12.5M12.5 1.5 1.5 12.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <h2
              id={titleId}
              className="font-display text-[1.25rem] font-bold tracking-[-0.01em]"
            >
              Thank you — request received
            </h2>
            <p id={descId} className="mt-3 text-[0.95rem] leading-[1.5] text-steel">
              A member of the ColorMyDose™ team will reach out within five
              minutes during business hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="font-display mt-6 w-full rounded-[10px] bg-ink px-5 py-3.5 text-[0.9375rem] font-bold text-paper transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id={titleId}
              className="font-display pr-10 text-center text-[1.25rem] font-bold leading-[1.25] tracking-[-0.01em] sm:pr-0"
            >
              Talk to sales · free consultation
            </h2>
            <p
              id={descId}
              className="mt-3 text-[0.95rem] leading-[1.5] text-steel"
            >
              Drop your details and we&rsquo;ll reach out about bringing
              ColorMyDose™ to your pharmacy, clinic, or care team.
            </p>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex gap-2.5">
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center gap-1.5 rounded-[10px] bg-mist px-3.5 py-3.5"
                >
                  <span className="text-[1.05rem] leading-none">🇺🇸</span>
                  <span className="font-display text-[0.9375rem] text-steel">
                    +1
                  </span>
                </div>
                <Field
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  placeholder="Phone number *"
                  label="Phone number"
                />
              </div>

              <div className="mt-2.5 space-y-2.5">
                <Field
                  name="firstName"
                  autoComplete="given-name"
                  placeholder="First name *"
                  label="First name"
                />
                <Field
                  name="lastName"
                  autoComplete="family-name"
                  placeholder="Last name *"
                  label="Last name"
                />
              </div>

              <label className="mt-4 flex gap-3 text-[0.8125rem] leading-[1.45] text-steel">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-ink"
                />
                <span>
                  By entering your information, you consent to your data being
                  saved in accordance with our{" "}
                  <a href="#" className="underline hover:text-ink">
                    Terms
                  </a>{" "}
                  &amp;{" "}
                  <a href="#" className="underline hover:text-ink">
                    Privacy Policy
                  </a>{" "}
                  and to receive follow-up messages.
                </span>
              </label>

              <button
                type="submit"
                className="font-display mt-5 w-full rounded-[10px] bg-ink px-5 py-3.5 text-[0.9375rem] font-bold text-paper transition-opacity hover:opacity-90"
              >
                Request call (we respond within 5 mins)
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      required
      aria-label={label}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="w-full rounded-[10px] border border-ink/15 bg-paper px-3.5 py-3.5 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-ink focus:ring-2 focus:ring-ink/15"
    />
  );
}
