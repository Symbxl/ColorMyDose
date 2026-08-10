"use client";

import { useRef, useState } from "react";

/**
 * The hero film — the system doing its one thing, on a 16-second loop. The
 * bottle label cycles through the four dose colors and the matching organizer
 * row answers. Waits behind a white cover with a centered play button until
 * the viewer starts it; once running, it loops muted and inline and carries
 * its own pause control since it runs longer than five seconds.
 */
export function HeroVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setStarted(true);
    void videoRef.current?.play();
  };

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-paper shadow-[0_1px_2px_rgba(0,0,0,0.18),0_28px_56px_-24px_rgba(0,0,0,0.5)] ${className ?? ""}`}
    >
      <video
        ref={videoRef}
        className="block h-auto w-full"
        width={1280}
        height={800}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="A prescription bottle's label cycles through the four dose colors — Morning, Noon, Evening, and Bedtime — and the matching organizer row answers with a check mark."
      >
        <source src="/hero-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {started ? (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause animation" : "Play animation"}
          className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-ink/70 text-paper transition-colors hover:bg-ink"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor" aria-hidden="true">
              <rect x="6.2" y="5" width="3.6" height="14" rx="1.2" />
              <rect x="14.2" y="5" width="3.6" height="14" rx="1.2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor" aria-hidden="true">
              <path d="M8 5.4a1 1 0 0 1 1.52-.85l10 6.6a1 1 0 0 1 0 1.7l-10 6.6A1 1 0 0 1 8 18.6z" />
            </svg>
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={start}
          aria-label="Play video"
          className="group absolute inset-0 flex items-center justify-center bg-paper"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-ink text-paper shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" aria-hidden="true">
              <path d="M8 5.4a1 1 0 0 1 1.52-.85l10 6.6a1 1 0 0 1 0 1.7l-10 6.6A1 1 0 0 1 8 18.6z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
