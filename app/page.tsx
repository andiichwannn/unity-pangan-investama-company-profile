"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const products = [
  {
    name: "Beras",
    variant: "Pandan wangi, premium, medium",
    image: "/beras.jpg",
    span: "md:col-span-2",
  },
  {
    name: "Gula Pasir",
    variant: "Gula kristal putih, kemasan karung dan repack",
    image: "/gula.jpg",
    span: "",
  },
  {
    name: "Tepung Terigu",
    variant: "Serbaguna & bakery, kemasan 1–25kg",
    image: "/tepung.jpg",
    span: "md:row-span-2",
  },
  {
    name: "Minyak Goreng Pouch",
    image: "/minyak-pouch.png",
    span: "",
  },
  {
    name: "Minyak Goreng Botol",
    image: "/minyak-botol.png",
    span: "",
  },
  {
    name: "Minyak Goreng Curah",
    variant: "DMO & Non-DMO, CP 10 & CP 8",
    image: "/minyak-curah.png",
    span: "",
  },
  {
    name: "Gas Elpiji 3kg",
    image: "/gas-3kg.jpg",
    span: "",
  },
  {
    name: "Gas Elpiji 5.5kg & 12kg",
    image: "/gas-12kg.jpg",
    span: "",
  },
  {
    name: "Kopi",
    image: "/kopi.jpg",
    span: "md:col-span-2",
  },
];  

type Product = {
  name: string;
  variant?: string;
  image: string;
  span: string;
};

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const revealCls = (inView: boolean) =>
  `transition-all duration-700 ease-out will-change-transform ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;


function ProductCard({
    item,
    index,
  }: {
    item: Product;
    index: number;
  }) {
  const [ref, inView] = useReveal(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
      className={`group relative h-64 overflow-hidden rounded-lg md:h-full ${item.span} ${revealCls(
        inView
      )}`}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#143D2B]/90 via-[#143D2B]/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <h3 className="text-sm font-semibold leading-snug text-white md:text-base">
          {item.name}
        </h3>
        {item.variant && (
          <p className="mt-0.5 text-[11px] text-white/70 md:text-xs">
            {item.variant}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [mounted, setMounted] = useState(false);
  const scrolled = navbarOpacity > 0.2;
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const fadeStart = 200;   
      const fadeEnd = 300;   

      let opacity = 0;

      if (scrollY > fadeStart) {
        opacity = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      }

      setNavbarOpacity(opacity);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const [tentangTextRef, tentangTextIn] = useReveal();
  const [tentangImgRef, tentangImgIn] = useReveal();

  const [visimisiTitleRef, visimisiTitleIn] = useReveal();
  const [visiRef, visiIn] = useReveal();
  const [misiRef, misiIn] = useReveal();

  const [produkTitleRef, produkTitleIn] = useReveal();
  const [produkIntroRef, produkIntroIn] = useReveal();
  const [lokasiTitleRef, lokasiTitleIn] = useReveal();
  const [lokasi1Ref, lokasi1In] = useReveal();
  const [lokasi2Ref, lokasi2In] = useReveal();

  const [kontakLeftRef, kontakLeftIn] = useReveal();
  const [kontakRightRef, kontakRightIn] = useReveal();
  
  return (
    <main className="bg-[#F8F7F3] text-gray-800">
      {/* ====== NAVBAR ====== */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "border-b border-gray-100" : ""
        }`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${navbarOpacity * 0.92})`,
          backdropFilter: `blur(${navbarOpacity * 12}px)`,
          WebkitBackdropFilter: `blur(${navbarOpacity * 12}px)`,
          boxShadow:
            navbarOpacity > 0.2 ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">          
          <button
            type="button"
            onClick={scrollToHero}
            className="flex h-full items-center gap-3 text-sm font-bold tracking-wide transition-colors duration-300 md:text-base"
          >
            <Image
              src="/logo-icon.png"
              alt="Logo PT Unity Pangan Investama"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span
              className={`bg-clip-text text-transparent transition-colors duration-300 ${
                scrolled
                  ? "bg-gradient-to-b from-[#C7A35A] via-[#A98A3F] to-[#8F6F2E]"
                  : "bg-gradient-to-b from-[#FDE280] via-[#E7C873] to-[#D2A94E]"
              }`}
            >
              UNITY PANGAN INVESTAMA
            </span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex gap-8 text-sm">
              {[
                ["Tentang Kami", "#tentang"],
                ["Visi & Misi", "#visimisi"],
                ["Produk", "#produk"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className={`group relative py-2 transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-[#A98A3F]"
                      : "text-white/90 hover:text-[#E7C873]"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-[#A98A3F]" : "bg-[#E7C873]"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <Link
              href="/coming-soon"
              className={`group relative rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? "border-[#C7A35A] bg-[#d2ad5c] text-[#173c2a] hover:bg-[#e1c77f]"
                  : "border-[#E7C873]/70 bg-[#d2ad5c] text-[#173c2a] hover:bg-[#e1c77f]"
              }`}
            >
              Mulai Investasi
            </Link>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}      
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#163c2a]">                
        <Image
          src="/hero.jpg"
          alt="Unity Pangan Investama"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-transform duration-[1600ms] ease-out ${
            mounted ? "scale-100" : "scale-110"
          }`}
        />
         
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f21] via-[#163c2a]/90 to-[#163c2a]/50" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-4xl">
            <div
              className={`mb-7 flex items-center gap-3 text-sm font-medium tracking-[0.22em] text-[#d2ad5c] transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="h-px w-10 bg-[#d2ad5c]" />
              COMPANY PROFILE
            </div>

            <h1
              className={`text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              PT Unity
              <br />
              <span className="font-light italic text-[#d2ad5c]">
                Pangan
              </span>{" "}
              Investama
            </h1>

            <p
              className={`mt-8 max-w-2xl text-base lg:text-lg leading-8 text-white/75 transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "240ms" }}
            >
              Solusi investasi, perdagangan, dan distribusi komoditas terpercaya
              untuk pasar nasional maupun internasional.
            </p>

            <div
              className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/coming-soon"
                className="group inline-flex min-w-52 items-center justify-center gap-3 rounded-full bg-[#d2ad5c] px-10 py-3.5 text-sm font-semibold text-[#173c2a] transition-colors duration-300 hover:bg-[#e1c77f]"
              >
                Mulai Investasi
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#tentang"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#d2ad5c] hover:bg-white/10 hover:text-[#e1c77f]"
              >
                Tentang Kami
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TENTANG KAMI ===== */}
      <section id="tentang" className="scroll-mt-8 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-8 lg:grid-cols-2">
          <div ref={tentangTextRef} className={revealCls(tentangTextIn)}>
            <p className="text-sm font-semibold tracking-[0.25em] text-[#0F5132]">
              TENTANG KAMI
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#143D2B]">
              PT UNITY PANGAN INVESTAMA
            </h2>

            <div className="mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />

            <p className="mb-5 leading-8 text-gray-700">
              PT Unity Pangan Investama didirikan dengan komitmen kuat untuk
              menghadirkan solusi investasi, perdagangan, dan distribusi yang
              terpercaya serta berkelanjutan.
            </p>

            <p className="mb-5 leading-8 text-gray-700">
              Sebagai perusahaan yang bergerak secara komprehensif di sektor ini,
              baik skala nasional maupun internasional, fokus utama kami adalah
              menyediakan layanan dan komoditas berkualitas tinggi yang memenuhi
              standar pasar global.
            </p>

            <p className="mb-5 leading-8 text-gray-700">
              Didukung oleh pengalaman mendalam dan jaringan industri yang luas,
              kami berkomitmen menjaga integritas, profesionalisme, serta
              kepuasan pelanggan di setiap lini bisnis.
            </p>

            <p className="leading-8 text-gray-700">
              Portofolio komoditas yang kami kelola mencakup kopi, kelapa sawit,
              minyak goreng curah (DMO dan Non-DMO CP 10 & CP 8), gula, serta
              gas hasil bumi untuk pasar domestik maupun internasional.
            </p>
          </div>

          <div
            ref={tentangImgRef}
            style={{ transitionDelay: "120ms" }}
            className={`relative h-[500px] ${revealCls(tentangImgIn)}`}
          >
            <Image
              src="/gudang.jpg"
              alt="Warehouse"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white p-6 shadow-lg">
              <p className="text-2xl font-bold text-[#0F5132]">
                Nasional & Internasional
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Solusi investasi, perdagangan, dan distribusi komoditas
                terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISI & MISI ===== */}
      <section
        id="visimisi"
        className="relative scroll-mt-8 overflow-hidden bg-[#0F5132] py-20"
      >
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
              "linear-gradient(115deg, rgba(255,255,255,0.05) 0%, transparent 32%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 85% 0%, rgba(231,200,115,0.10), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-8">
          <div ref={visimisiTitleRef} className={`mb-16 ${revealCls(visimisiTitleIn)}`}>
            <h2 className="text-center text-3xl font-bold tracking-[0.18em] text-white md:text-4xl">
              VISI & MISI PERUSAHAAN
            </h2>
            <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />
          </div>

          <div className="grid lg:grid-cols-2">
            <div
              ref={visiRef}
              className={`pb-12 lg:pr-16 lg:pb-0 ${revealCls(visiIn)}`}
            >
              <p className="mb-6 text-md font-semibold tracking-[0.2em] text-[#E7C873]">
                VISI
              </p>

              <div className="mb-7 h-px w-10 bg-[#E7C873]" />

              <h3 className="max-w-xl text-2xl font-medium text-white leading-relaxed md:text-3xl">
                Menjadi mitra strategis global terkemuka dalam industri investasi,
                perdagangan, dan distribusi komoditas yang berkelanjutan.
              </h3>
            </div>

            <div
              ref={misiRef}
              style={{ transitionDelay: "120ms" }}
              className={`border-t border-white/15 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0 ${revealCls(
                misiIn
              )}`}
            >
              <p className="mb-6 text-md font-semibold tracking-[0.2em] text-[#E7C873]">
                MISI
              </p>

              <div className="mb-8 h-px w-10 bg-[#E7C873]" />

              <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Investasi Strategis
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Mengembangkan investasi yang cerdas dan terukur pada sektor
                    pangan dan komoditas potensial.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    Distribusi Unggul
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Membangun jaringan perdagangan dan distribusi yang efisien
                    serta andal di pasar domestik dan internasional.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    Kualitas Global
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Menjamin seluruh produk dan layanan memenuhi standar mutu
                    tertinggi.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    Kemitraan Terpercaya
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Mengedepankan integritas dan profesionalisme demi memberikan
                    nilai tambah bagi mitra bisnis dan investor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUK & LOKASI PENYIMPANAN ===== */}
      <section id="produk" className="scroll-mt-8 bg-white py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div ref={produkTitleRef} className={`mx-auto mb-10 max-w-2xl ${revealCls(produkTitleIn)}`}>
            <h2 className="text-center text-3xl font-bold tracking-[0.18em] text-[#143D2B] md:text-4xl">
              PRODUK KAMI
            </h2>
            <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />
          </div>

          <div
            ref={produkIntroRef}
            className={`mb-8 grid gap-8 md:grid-cols-2 md:gap-12 ${revealCls(
              produkIntroIn
            )}`}
          >
            <p className="leading-7 text-gray-700">
              Sebagai perseroan yang bergerak di bidang distribusi nasional dan
              perdagangan komoditas pangan, PT Unity Pangan Investama berkomitmen
              menyediakannya secara komprehensif dalam skala besar serta partai
              grosir.
            </p>

            <p className="leading-7 text-gray-700">
              Kami hadir sebagai mitra strategis yang andal untuk memenuhi kebutuhan
              pasar tradisional, jaringan ritel modern, industri hospitality,
              koperasi, korporasi, hingga pengadaan proyek pemerintah maupun sektor
              swasta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[repeat(3,11rem)]">
            {products.map((item, index) => (
              <ProductCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </div>

        <div ref={lokasiTitleRef} className={`mx-auto pt-16 max-w-7xl ${revealCls(lokasiTitleIn)}`}>
          <h2 className={"text-center text-3xl font-bold tracking-[0.18em] text-[#143D2B] md:text-4xl"}>
            LOKASI PENYIMPANAN
          </h2>
          <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />

          <div className="mx-auto grid gap-6 px-8 sm:grid-cols-2">
            <div
              ref={lokasi1Ref}
              className={`relative flex items-center gap-6 overflow-hidden rounded-xl px-10 py-10 shadow-lg shadow-[#0b3a27]/20 ring-1 ring-white/10 ${revealCls(
                lokasi1In
              )}`}
              style={{
                background:
                  "linear-gradient(160deg, #1a5238 0%, #0F5132 55%, #0d452f 100%)",
              }}
            >              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90% 90% at 100% 0%, rgba(231,200,115,0.28), transparent 55%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 70% at 100% 100%, rgba(45,212,191,0.12), transparent 60%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 55%, rgba(255,255,255,0.06) 75%, transparent 90%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(8,35,24,0.45) 0%, transparent 55%)",
                }}
              />

              <span className="relative text-6xl font-extrabold text-white/10">01</span>
              <div className="relative">
                <h3 className="text-3xl font-bold text-white">Marunda</h3>
                <p className="mt-2 text-sm text-white/60">Jakarta Utara</p>
              </div>
            </div>

            <div
              ref={lokasi2Ref}
              style={{
                transitionDelay: "100ms",
                background:
                  "linear-gradient(160deg, #1a5238 0%, #0F5132 55%, #0d452f 100%)",
              }}
              className={`relative flex items-center gap-6 overflow-hidden rounded-xl px-10 py-10 shadow-lg shadow-[#0b3a27]/20 ring-1 ring-white/10 ${revealCls(
                lokasi2In
              )}`}
            >              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90% 90% at 100% 0%, rgba(231,200,115,0.28), transparent 55%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 70% at 100% 100%, rgba(45,212,191,0.12), transparent 60%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 55%, rgba(255,255,255,0.06) 75%, transparent 90%)",
                }}
              />              
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(8,35,24,0.45) 0%, transparent 55%)",
                }}
              />

              <span className="relative text-6xl font-extrabold text-white/10">02</span>
              <div className="relative">
                <h3 className="text-3xl font-bold text-white">Tanjung Priuk</h3>
                <p className="mt-2 text-sm text-white/60">Jakarta Utara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== KONTAK ===== */}
      <section
        id="kontak"
        className="relative scroll-mt-8 overflow-hidden bg-[#0F5132] pt-12 pb-6 text-white"
      >
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
              "linear-gradient(245deg, rgba(255,255,255,0.05) 0%, transparent 32%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 15% 100%, rgba(231,200,115,0.10), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div ref={kontakLeftRef} className={`flex items-center justify-center text-center lg:justify-start lg:text-left ${revealCls(kontakLeftIn)}`}>
              <div className="w-fit">
                <div className="lg:hidden">
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[0.18em] md:text-5xl">
                    HUBUNGI KAMI
                  </h2>
                  <div className="mx-auto mt-5 h-1 w-20 bg-[#C7A35A]" />
                </div>

                <div className="hidden lg:block">
                  <h2 className="text-5xl font-bold leading-[1.05] tracking-[0.08em]">
                    HUBUNGI
                  </h2>

                  <div className="mt-1 flex w-full items-center">
                    <div className="mr-4 h-1 flex-1 bg-[#C7A35A]" />
                    <h2 className="text-5xl font-bold leading-[1.05] tracking-[0.08em]">
                      KAMI
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={kontakRightRef}
              style={{ transitionDelay: "120ms" }}
              className={`divide-y divide-white/15 ${revealCls(kontakRightIn)}`}
            >
              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Email
                </p>

                <p className="break-all text-[15px] leading-6 text-white/90">
                  Unity.pangan.investama@gmail.com
                </p>
              </div>

              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Website
                </p>

                <p className="text-[15px] leading-6 text-white/90">
                  www.unitypanganinvestama.co.id
                </p>
              </div>

              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Alamat
                </p>

                <p className="max-w-2xl text-[15px] leading-7 text-white/90">
                  Gedung Sarinah, Lt 12, Jl. MH. Thamrin No. 11 RT.08 RW.004,
                  Gondangdia, Menteng, Kota Administrasi Jakarta Pusat, DKI Jakarta,
                  Kode Pos 10350.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 border-t border-white/15 pt-4 text-sm text-white/50 text-center sm:flex-row sm:justify-center sm:gap-2">
            <span>© 2026 PT Unity Pangan Investama. All Rights Reserved.</span>
          </div>
        </div>
      </section>
    </main>
  );
}