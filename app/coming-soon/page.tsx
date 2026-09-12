"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F5132] text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092318] via-[#0F5132]/95 to-[#173c2a]/90" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#071d14] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 50%, rgba(231,200,115,0.08), transparent 70%)",
        }}
      />

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className={`mb-6 flex items-center justify-center gap-3 text-sm font-medium tracking-[0.22em] text-[#d2ad5c] transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="h-px w-10 bg-[#d2ad5c]" />
          STAY TUNED
          <span className="h-px w-10 bg-[#d2ad5c]" />
        </p>

        <h1
          className={`text-6xl font-extrabold tracking-tight transition-all duration-700 ease-out sm:text-8xl md:text-9xl ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            COMING
          </span>
          <br />
          <span className="bg-gradient-to-b from-[#FDE280] via-[#E7C873] to-[#C7A35A] bg-clip-text text-transparent">
            SOON!!!
          </span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-xl text-base leading-8 text-white/60 transition-all duration-700 ease-out md:text-lg ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "240ms" }}
        >
          Portal pemantauan investasi anda akan segera hadir. Pantau perkembangan
          investasi, distribusi komoditas, dan hasil kerja sama anda secara
          transparan dan real-time, kapan pun dan di mana pun.
        </p>

        <div
          className={`mt-12 transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "360ms" }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d2ad5c] hover:bg-white/10 hover:text-[#e1c77f]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Kembali ke Profil
          </Link>
        </div>
      </section>
    </main>
  );
}