/**
 * The section nav, shared by the header and the footer.
 *
 * Kept out of the `"use client"` header module on purpose: exports from a
 * client module become client references, so a server component importing
 * `NAV` from there gets a proxy rather than the array.
 *
 * `short` runs in the header bar, where the row has to fit at 1024 px;
 * `label` runs everywhere the line can breathe.
 */
export const NAV = [
  { id: "who-we-serve", label: "Who we serve", short: "Who we serve" },
  { id: "system", label: "How it works", short: "How it works" },
  { id: "outcomes", label: "Why it matters", short: "Why it matters" },
  { id: "get-started", label: "Getting started", short: "Get started" },
];
