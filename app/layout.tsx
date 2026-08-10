import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://colormydose.com",
  ),
  title: {
    default: "ColorMyDose™ — One Glance. Right Dose. Right Time.",
    template: "%s",
  },
  description:
    "A color-coded medication management system for pharmacists, nurses, caregivers, and patients. ColorMyDose™ links every prescription bottle to its organizer compartment through a fixed, universal color code.",
  openGraph: {
    title: "ColorMyDose™ — One Glance. Right Dose. Right Time.",
    description:
      "A color-coded medication management system that links every prescription bottle to its organizer compartment through a fixed, universal color code.",
    siteName: "ColorMyDose™",
    type: "website",
    images: [
      {
        url: "/social.png",
        width: 512,
        height: 335,
        alt: "ColorMyDose™ — the four-color dosing system: Morning yellow, Noon red, Evening green, Bedtime purple.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorMyDose™ — One Glance. Right Dose. Right Time.",
    description:
      "A color-coded medication management system that links every prescription bottle to its organizer compartment through a fixed, universal color code.",
    images: ["/social.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
