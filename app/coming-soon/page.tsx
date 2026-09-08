import Link from "next/link";
import { ArrowLeft, ShieldCheck, TrendingUp, Warehouse } from "lucide-react";

const highlights = [
  {
    title: "Peluang Terukur",
    description: "Rangkuman peluang investasi komoditas dengan fokus pada kebutuhan pangan nasional.",
    icon: TrendingUp,
  },
  {
    title: "Distribusi Nyata",
    description: "Informasi jaringan pasok, gudang, dan jalur distribusi yang sedang kami siapkan.",
    icon: Warehouse,
  },
  {
    title: "Kemitraan Aman",
    description: "Alur kerja sama yang jelas, profesional, dan mudah ditindaklanjuti oleh calon mitra.",
    icon: ShieldCheck,
  },
];

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F5132] text-white">
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

      <section className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.22em] text-[#d2ad5c]">
            <span className="h-px w-10 bg-[#d2ad5c]" />
            SEGERA HADIR
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Portal investasi komoditas pangan sedang kami siapkan.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Kami sedang menyiapkan halaman khusus untuk memperkenalkan arah investasi,
            cakupan distribusi, dan potensi komoditas pangan yang akan menjadi
            bagian dari pengembangan PT Unity Pangan Investama.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="group inline-flex min-w-52 items-center justify-center gap-3 rounded-full bg-[#d2ad5c] px-8 py-3.5 text-sm font-semibold text-[#173c2a] transition-colors duration-300 hover:bg-[#e1c77f]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Kembali ke Profil
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-black/20 backdrop-blur-md md:p-6">
            <div className="border-b border-white/15 pb-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#d2ad5c]">
                INVESTMENT ACCESS
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Apa yang akan tersedia?
              </h2>
            </div>

            <div className="divide-y divide-white/12">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#d2ad5c] text-[#173c2a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}