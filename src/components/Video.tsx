"use client";

import Link from "next/link";
import { useState } from "react";

const frame = "aspect-video w-full overflow-hidden rounded-2xl bg-stone-900 shadow-2xl ring-1 ring-white/10";

function PlayBadge() {
  return (
    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

// Zeigt ein Video (YouTube/Vimeo-Embed oder MP4). Ohne `src` erscheint ein Platzhalter.
// Externe Videos werden erst nach Klick geladen (Datenschutz: keine Datenübertragung vorab).
export default function Video({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const [consent, setConsent] = useState(false);

  if (!src) {
    return (
      <div className={`${frame} relative flex flex-col items-center justify-center gap-4 text-stone-400`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(228,87,46,0.25),transparent_60%)]" />
        <PlayBadge />
        <p className="relative text-sm">Video folgt in Kürze</p>
      </div>
    );
  }

  if (src.endsWith(".mp4") || src.endsWith(".webm")) {
    return <video className={frame} src={src} poster={poster} controls playsInline preload="metadata" />;
  }

  if (!consent) {
    const provider = src.includes("vimeo") ? "Vimeo" : "YouTube";
    return (
      <div
        className={`${frame} relative flex flex-col items-center justify-center gap-4 bg-cover bg-center px-6 text-stone-300`}
        style={poster ? { backgroundImage: `linear-gradient(rgba(11,23,36,.6),rgba(11,23,36,.6)),url(${poster})` } : undefined}
      >
        <button type="button" onClick={() => setConsent(true)} aria-label={`Video von ${provider} laden`}>
          <PlayBadge />
        </button>
        <p className="relative max-w-md text-xs">
          Mit Klick wird das Video von {provider} geladen. Dabei werden Daten an {provider} übertragen.{" "}
          <Link href="/datenschutz/" className="underline hover:text-white">Mehr erfahren</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={frame}>
      <iframe
        src={src + (src.includes("?") ? "&" : "?") + "autoplay=1"}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
