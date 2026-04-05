import Image from "next/image";
import type { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Company | Ledger & Co.",
  description:
    "Ledger & Co. was established as an architectural practice for wealth. For over four decades, we have designed financial structures that support global industries.",
};

export default function CompanyPage() {
  return (
    <main>
      {/* Hero Section: Our Story */}
      <section className="relative overflow-hidden bg-surface pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimateIn animation="fade-right" duration={900}>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-on-secondary-container mb-6 block">
                Founded 1984
              </span>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8">
                The Architecture of <br />
                <span className="italic text-on-primary-container">Legacy.</span>
              </h1>
              <div className="max-w-xl space-y-6">
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Ledger &amp; Co. was established not as a simple accounting
                  firm, but as an architectural practice for wealth. For over four
                  decades, we have designed the financial structures that support
                  global industries and private legacies.
                </p>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Our philosophy is rooted in the precision of the ledger and the
                  vision of the advisor. We believe that true financial advisory is
                  a dialogue between data and destiny.
                </p>
              </div>
            </AnimateIn>
          </div>
          <div className="lg:col-span-5 relative">
            <AnimateIn animation="fade-left" delay={200} duration={900}>
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-lg shadow-2xl relative">
                <Image
                  alt="Modern minimalist architectural interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfWMzcuse4nQZXAHj-Tbh7Imk7KGI5WhtIU1XlJKZA19xNMTOti865xeBu5PBXZXCP4UEg1MKirgacuH6U10ygMzl9G3-3_TqWv4C-lCzrTebqlCZDLgdHN4QKuiOpAjhGm1Bk2HNjdH81a59ufoWqqxIXTntqCTQ_ubwqSVXh21UaVrWCD-cuLes3P98ay_kuxB1XwJ46TEAS2L1rwO7JiZ72FoyEec8XMm_y8URTG28R_tzyI98Xueqm9QqbbEdJIxGWT6iObQ"
                  width={600}
                  height={750}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Growth Ornament */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-outline-variant/30 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border border-outline-variant/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-outline-variant/10 rounded-full" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission & Values: Bento Grid */}
      <section className="bg-primary py-24 text-on-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <AnimateIn animation="fade-up">
            <div className="mb-20">
              <h2 className="font-headline text-4xl md:text-5xl mb-4">
                Values that define us.
              </h2>
              <div className="h-1 w-24 bg-on-tertiary-container" />
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {[
              {
                icon: "account_balance",
                title: "Integrity as Foundation",
                desc: "Our word is the cornerstone of every structure we build. We prioritize transparency and ethical precision in every entry.",
              },
              {
                icon: "insights",
                title: "Insightful Foresight",
                desc: "We don\u2019t just report the past; we architect the future. Our advisors provide the clarity needed to navigate complex markets.",
              },
              {
                icon: "verified_user",
                title: "Enduring Partnership",
                desc: "We measure our success by the generational continuity of our clients\u2019 legacies. We are advisors for a lifetime.",
              },
            ].map((value, i) => (
              <AnimateIn key={value.title} animation="fade-up" delay={i * 100}>
                <div
                  className={`p-12 aspect-auto md:aspect-square flex flex-col justify-between hover:bg-on-primary-fixed-variant transition-colors duration-500 h-full ${
                    i === 1
                      ? "bg-primary/50 border-x border-white/5"
                      : "bg-primary-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-4xl text-on-tertiary-container">
                    {value.icon}
                  </span>
                  <div>
                    <h3 className="font-headline text-3xl mb-4">{value.title}</h3>
                    <p className="font-label text-sm text-secondary-fixed leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team: Leadership */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <AnimateIn animation="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
                  Leadership
                </span>
                <h2 className="font-headline text-5xl text-primary">
                  The Stewards of Strategy.
                </h2>
              </div>
              <a
                className="font-label text-xs uppercase tracking-widest text-primary border-b-2 border-on-tertiary-container pb-1 font-bold"
                href="#"
              >
                View Full Team
              </a>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Marcus Sterling",
                role: "Chief Executive Officer",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAufAkgdgfD0ftMdWSXl5-vKK0fauSyPXHV9GyyKMyNsoIoy41ovmV-GFPRi5jzg1d_i-BSRtJYktj9NBjgiZWwbjh8fGYJHwVbss-viuQubuZ9Qld0pYGFJ3Buwy4HE_tRYD-VOFbOlLsOVJmEc6R6K42jaNLycrGwNrD6G6z5tFXORWWKoyZpUV_SckWrf4Po36R6Ko8u2lUu_xVJ4NydLUCJRKF7HqVY4-eVIPNAqePhRXJOhb6SrF31xVocNiHdwYw9ja9BCNE",
                offset: false,
              },
              {
                name: "Helena Vance",
                role: "Managing Director, Advisory",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCs9ENP_ZV3Umr-0nLDqa0MFDpYI90AVLrkhTOh7NiHe7YNSFKCYi7d_ZsPnPHEr3q-CYB_qQdar1fvmzjulSuNpfR5tXb3NnhYkSuDncSZKMNZFGsGs5lltEFPDhGmiAIB5_TVII6U1j5xwpKL2z-Ak6m0kyCPkB2qEcKdeMSLfPuGfX_L9npHnf4VWJO56bCEQpxZl3qdkNN9_ki8lS9xSvit6PzvjyP-WTsKbtGgsvRkchHwkW9A7s6pL_2hdhgxM-wlwuqgYQ",
                offset: true,
              },
              {
                name: "Julian Thorne",
                role: "Head of Global Tax Strategy",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM-JgADAMCw6FbPo44_vtBYr3sWnchVzSgbC6WoqbBkfDmMiDiVH0sChcL0Zp_zQvSfRausWBhi5jM0S-noAmgfBfZeeMGqkMnfrUtVR79gJRwEYQvAgX9bF4WZehenXayDNAEH79Gl_pugOQlk8GyboLQOGv0AwJUEH8t3_qJUbeVNYvAg0EckxNUlMcBA7sqXtQMnCCgsIYXvKEPBTyOmTA1VrZkYyYErTnPysbXf9XUa5u5jkVo0fPD9PWPFatv26cEF4-kE8E",
                offset: false,
              },
              {
                name: "Sarah Chen",
                role: "Partner, Manufacturing Sector",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs74ajqyxhFBNiegzfPVJCVn6nh6hJ1Fr4RmZRl07wn1hNJrVKYfSc1y-Hxcpi_0IxOWQOp0LF2VndXds7AWcEvVeYI7lnxWfDZ9GTiI9VDEyR2ZEqkExnH0hRJOrkfW7KnOJiQDi57O7u_pqNDpNCQZcl3_5QIgVPuwgc5I1UwL9MkRhNgUjw5OREQGWCeaSYJGt4s7hQ-AhYW3jG-Iww-jk2CsfgGw8m_C7armcQOOhu_Wg1UufnBfyUyySuzc3pDlSghaD6sXI",
                offset: true,
              },
            ].map((leader, i) => (
              <AnimateIn key={leader.name} animation="fade-up" delay={i * 100}>
                <div className={`group ${leader.offset ? "lg:mt-12" : ""}`}>
                  <div className="aspect-[3/4] bg-surface-container-highest overflow-hidden mb-6 relative">
                    <Image
                      alt={leader.name}
                      src={leader.img}
                      width={400}
                      height={533}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h4 className="font-headline text-2xl text-primary mb-1">
                    {leader.name}
                  </h4>
                  <p className="font-label text-xs uppercase tracking-widest text-outline">
                    {leader.role}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Careers: CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <AnimateIn animation="fade-up">
            <div className="bg-surface-container-lowest p-12 md:p-24 shadow-sm border border-outline-variant/10 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-headline text-5xl md:text-6xl text-primary mb-8 leading-tight">
                    Join the <br />
                    <span className="italic">Ledger.</span>
                  </h2>
                  <p className="font-body text-lg text-on-surface-variant mb-10 max-w-md">
                    We are looking for architects of finance&mdash;individuals who
                    seek the balance of rigorous logic and creative
                    problem-solving.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="bg-on-tertiary-container text-on-primary px-8 py-4 rounded-full font-label text-xs uppercase tracking-widest font-bold flex items-center gap-3 active:scale-95 transition-transform">
                      Explore Open Positions
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                    <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-full font-label text-xs uppercase tracking-widest font-bold">
                      Our Culture
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block relative h-full min-h-[400px]">
                  <Image
                    alt="Corporate office interior"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxYqJiIaX1_C2ezl3BOkHE6UMYrihFrQ5lODJoHv8R2UtXe39B63mZ6Z8P1BbmHF8-ZDe1ZwYO4If9E1AT3SJgZkwTM-vSaigl8aLfvbBeuhQrg3JgY1OyQajnbHBvn10bOcuhK9jk6w3hkHwrDv2of2QI83-OG5GfxbLnN7Gv3PY3fFcJePlgVJTDRBw36uAPDdIovQmyz8m4KuWOxN9xCfJ2PHU0WpMXn4cOcVWkumhLssZHzmZaVt_tIWcufS52huLiy6ahX7I"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-80 grayscale"
                  />
                </div>
              </div>
              {/* Aesthetic Circle */}
              <div className="absolute -top-20 -right-20 w-96 h-96 border border-on-tertiary-container/5 rounded-full" />
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
