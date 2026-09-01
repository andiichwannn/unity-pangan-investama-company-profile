"use client";

import { useEffect, useState } from "react";

const products = [
  {
    name: "Beras",
    variant: "Pandan wangi, premium, medium",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "md:col-span-2",
  },
  {
    name: "Gula Pasir",
    variant: "Gula kristal putih, kemasan karung dan repack",
    image: "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?auto=format&fit=crop&w=800&q=80",
    span: "",
  },
  {
    name: "Tepung Terigu",
    variant: "Serbaguna & bakery, kemasan 1–25kg",
    image: "https://images.unsplash.com/photo-1627735483792-233bf632619b?auto=format&fit=crop&w=800&q=80",
    span: "md:row-span-2",
  },
  {
    name: "Minyak Goreng Pouch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7fSJ6w34ScAJR9Y6RjCEnBlQMTKrHUDKtcjwszBi8ExRpR3M0wPkFqe6&s=10",
    span: "",
  },
  {
    name: "Minyak Goreng Botol",
    image: "https://www.mbizmarket.co.id/news/wp-content/uploads/2022/11/mencari-distributor-minyak-goreng.png",
    span: "",
  },
  {
    name: "Minyak Goreng Curah",
    variant: "DMO & Non-DMO, CP 10 & CP 8",
    image: "https://svc-silinda.jabarprov.go.id/assets/public/image/commodities/77f19c7b-d533-41d6-98a9-1bf9832901fe.png",
    span: "",
  },
  {
    name: "Gas Elpiji 3kg",
    image: "https://infobanknews.com/wp-content/uploads/2022/04/LPG-Gas.jpeg",
    span: "",
  },
  {
    name: "Gas Elpiji 5.5kg & 12kg",
    image: "https://images.unsplash.com/photo-1644217209694-5ca176114adb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "",
  },
  {
    name: "Kopi",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    span: "md:col-span-2",
  },
];  

export default function Home() {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
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
  
  return (
    <main className="bg-[#F8F7F3] text-gray-800">
      {/* ====================================================== */}
      {/* NAVBAR */}
      {/* ====================================================== */}
      <header
        className="fixed top-0 left-0 z-50 w-full transition-[box-shadow] duration-300"
        style={{
          backgroundColor: `rgba(15, 81, 50, ${navbarOpacity * 0.92})`,
          backdropFilter: `blur(${navbarOpacity * 12}px)`,
          WebkitBackdropFilter: `blur(${navbarOpacity * 12}px)`,
          boxShadow:
            navbarOpacity > 0.2 ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">          
          <button
            type="button"
            onClick={scrollToHero}
            className="text-sm font-bold tracking-wide text-white transition-colors duration-300 md:text-base"
          >
            PT UNITY PANGAN INVESTAMA
          </button>

          <nav className="hidden gap-8 text-sm md:flex">
            {[
              ["Tentang Kami", "#tentang"],
              ["Visi & Misi", "#visimisi"],
              ["Produk", "#produk"],
              ["Kontak", "#kontak"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="group relative py-2 text-white/90 transition-colors duration-300 hover:text-[#E7C873]"
              >
                {label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#E7C873] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}      
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#163c2a]">                
        <img
          src="https://images.unsplash.com/photo-1730697897539-16a87a38be69?q=80&w=2000&auto=format&fit=crop"
          alt="Unity Pangan Investama"
          className="absolute inset-0 h-full w-full object-cover"
        />
         
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f21] via-[#163c2a]/90 to-[#163c2a]/50" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-[#d2ad5c]">
              <span className="h-px w-10 bg-[#d2ad5c]" />
              Company Profile
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              PT Unity
              <br />
              <span className="font-light italic text-[#d2ad5c]">
                Pangan
              </span>{" "}
              Investama
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
              Solusi investasi, perdagangan, dan distribusi komoditas terpercaya
              untuk pasar nasional maupun internasional.
            </p>

            <a
              href="#tentang"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#d2ad5c] px-7 py-3.5 text-sm font-semibold text-[#173c2a] transition hover:bg-[#e1c77f]"
            >
              Tentang Kami
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TENTANG KAMI */}
      {/* ====================================================== */}
      <section id="tentang" className="scroll-mt-8 bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-8 lg:grid-cols-2">
          <div>
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

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
              alt="Warehouse"
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
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

      {/* ====================================================== */}
      {/* VISI & MISI */}
      {/* ====================================================== */}
      <section id="visimisi" className="scroll-mt-8 bg-[#0F5132] py-20">
        <div className="mx-auto max-w-6xl px-8">          
          <div className="mb-16">
            <h2 className="text-center text-3xl font-bold tracking-[0.18em] text-white md:text-4xl">
              VISI & MISI PERUSAHAAN
            </h2>        
            <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />
          </div>

          <div className="grid lg:grid-cols-2">            
            <div className="pb-12 lg:pr-16 lg:pb-0">
              <p className="mb-6 text-md font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                VISI
              </p>

              <div className="mb-7 h-px w-10 bg-[#E7C873]" />

              <h3 className="max-w-xl text-2xl font-medium text-white leading-relaxed md:text-3xl">
                Menjadi mitra strategis global terkemuka dalam industri investasi,
                perdagangan, dan distribusi komoditas yang berkelanjutan.
              </h3>
            </div>
            
            <div className="border-t border-white/15 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <p className="mb-6 text-md font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
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

      {/* ====================================================== */}
      {/* PRODUK & LOKASI PENYIMPANAN*/}
      {/* ====================================================== */}
      <section id="produk" className="scroll-mt-8 bg-white py-20">
        <div className="mx-auto max-w-7xl px-8">          
          <div className="mx-auto mb-10 max-w-2xl">
            <h2 className="text-center text-3xl font-bold tracking-[0.18em] text-[#143D2B] md:text-4xl">
              PRODUK KAMI
            </h2>        
            <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />
          </div>
          
          <div className="mb-8 grid gap-8 md:grid-cols-2 md:gap-12">
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
            {products.map((item) => (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-lg ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 md:h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
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
            ))}
          </div>
        </div>

        <div className="mx-auto pt-16 max-w-7xl">
          <h2 className="text-center text-3xl font-bold tracking-[0.18em] text-[#143D2B] md:text-4xl">
            LOKASI PENYIMPANAN
          </h2>        
          <div className="mx-auto mt-5 mb-8 h-1 w-20 bg-[#C7A35A]" />

          <div className="mx-auto grid gap-6 px-8 sm:grid-cols-2">
            <div className="flex items-center gap-6 rounded-xl bg-[#143D2B] px-10 py-10">
              <span className="text-6xl font-extrabold text-white/10">01</span>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Marunda
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Jakarta Utara
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 rounded-xl bg-[#143D2B] px-10 py-10">
              <span className="text-6xl font-extrabold text-white/10">02</span>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Tanjung Priuk
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Jakarta Utara
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* KONTAK */}
      {/* ====================================================== */}
      <section id="kontak" className="scroll-mt-8 bg-[#0F5132] pt-12 pb-6 text-white">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">            
            <div className="flex items-center">
              <div className="w-fit">
                <h2 className="text-4xl font-bold leading-[1.05] tracking-[0.08em] md:text-5xl">
                  HUBUNGI
                </h2>

                <div className="mt-1 flex w-full items-center">
                  <div className="mr-4 h-1 flex-1 bg-[#C7A35A]" />            
                  <h2 className="text-4xl font-bold leading-[1.05] tracking-[0.08em] md:text-5xl">
                    KAMI
                  </h2>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-white/15">              
              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Email
                </p>

                <p className="break-all text-[15px] leading-6 text-white/90">
                  ptunitypanganinvestama@gmail.com
                </p>
              </div>
              
              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Telepon
                </p>

                <p className="text-[15px] leading-6 text-white/90">
                  (021) 39833458
                </p>
              </div>
              
              <div className="grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E7C873]">
                  Website
                </p>

                <p className="text-[15px] leading-6 text-white/90">
                  www.unitypanganinvestama.com
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
          
          <div className="mt-4 border-t border-white/15 pt-4 text-sm text-white/50 text-center">
            © 2026 PT Unity Pangan Investama. All Rights Reserved.
          </div>
        </div>
      </section>
    </main>
  );
}