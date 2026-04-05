import Image from "next/image";
import type { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Industries | Ledger & Co.",
  description:
    "Precision advisory for pioneer industries. We translate complex financial architecture into strategic clarity for SaaS, Manufacturing, and Healthcare.",
};

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient min-h-[716px] flex items-center pt-24">
        <div className="absolute -top-24 -right-24 w-96 h-96 growth-ornament opacity-20" />
        <div className="absolute -bottom-48 -left-12 w-[600px] h-[600px] growth-ornament opacity-10" />
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7">
            <AnimateIn animation="fade-right" duration={900}>
              <span className="font-label text-on-primary-container text-xs uppercase tracking-[0.3em] mb-6 block">
                Expertise by sector
              </span>
              <h1 className="font-headline text-5xl md:text-7xl text-on-primary leading-tight mb-8">
                Precision Advisory for <br />
                <span className="italic text-primary-fixed-dim">
                  Pioneer Industries.
                </span>
              </h1>
              <p className="font-body text-xl text-primary-fixed-dim/80 max-w-xl leading-relaxed mb-10">
                We translate complex financial architecture into strategic clarity,
                providing the high-end editorial perspective required for market
                leadership.
              </p>
            </AnimateIn>
          </div>
          <div className="md:col-span-5 relative">
            <AnimateIn animation="fade-left" delay={200} duration={900}>
              <div className="aspect-[4/5] bg-surface-container-highest/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/5 p-4">
                <Image
                  alt="Architectural facade representing financial precision"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfqKPuK1PSeQiyc8-oGRQoJOwqxMQahWdqaHbGTTmYR7pT-ohL1Jt9SfMZw55BnpPVGR4mDOHyvUYljy1r_HFaDI_c_Xp8JJ4dSZMWJ-SSAOIH03jagFu2JCZZY8vlmIw4u-UBsAGGqi-_WxouNiN2nlOZN55TgnEdtnU-gYzaNK78SX10M3zSmmmQXKSn_GPenfv4OlsBa_o7BXPMcCz-DrwXQMhuz1IcQHFqNtur4Wv6RIFlHxI7nhbE93XxanBOE3QRO8mKkyE"
                  width={600}
                  height={750}
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="w-full h-full object-cover rounded shadow-2xl"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Sector Navigation / Filter */}
      <section className="bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-8 justify-center items-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-outline">
            Selected Sectors
          </span>
          <div className="h-4 w-[1px] bg-outline-variant" />
          <a
            className="font-label text-xs uppercase tracking-widest text-primary hover:text-on-tertiary-container transition-colors"
            href="#saas"
          >
            Software (SaaS)
          </a>
          <a
            className="font-label text-xs uppercase tracking-widest text-primary hover:text-on-tertiary-container transition-colors"
            href="#manufacturing"
          >
            Advanced Manufacturing
          </a>
          <a
            className="font-label text-xs uppercase tracking-widest text-primary hover:text-on-tertiary-container transition-colors"
            href="#healthcare"
          >
            Global Healthcare
          </a>
        </div>
      </section>

      {/* Detailed Sections: SaaS */}
      <section className="py-32 bg-surface" id="saas">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <AnimateIn animation="fade-left">
                <div className="relative">
                  <div className="absolute -inset-4 border border-outline-variant/20 rounded-lg -z-10 translate-x-4 translate-y-4" />
                  <Image
                    alt="Modern glass office building"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlL6-iogOskMvwrUGge4sCgVQ3BagXN032TzhhWUb-KSjIjaraqcYrzpanhTwSt27CLCkjSyQHiwkxlSaIgVhIrhU0PaF149hqQZEtohjEXOc9mNBhnxTVpDH0Unm40i-UernrODwzEQOyCjO4M1wI7gvnw_Ld8Vn8zyaCpZYHCuVqhv9cTYrRDfmtdJdCI-RbHsYHDWKipjZoRk8wqF8716xcU9OJIeLVN2yxdiPEPiqdOfzB5qwj_fo0sH0kCfiCZbOl5devlnM"
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full aspect-square object-cover rounded-lg shadow-xl"
                  />
                </div>
              </AnimateIn>
            </div>
            <div className="order-1 md:order-2">
              <AnimateIn animation="fade-right" delay={150}>
                <span className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-on-tertiary-container mb-6">
                  <span className="material-symbols-outlined text-sm">cloud</span>
                  Software &amp; Technology
                </span>
                <h2 className="font-headline text-4xl text-on-surface mb-8">
                  Scaling the Digital <br />
                  Balance Sheet.
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  <p>
                    For SaaS enterprises, growth is the primary metric, but
                    sustainable profitability is the ultimate goal. We provide the
                    architectural framework for recurring revenue models.
                  </p>
                  <ul className="space-y-4 pt-4">
                    {[
                      "Revenue recognition auditing for multi-year contracts",
                      "Unit economic analysis (LTV/CAC) at scale",
                      "Capital efficiency & fundraising strategy",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-on-tertiary-container mt-0.5">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections: Manufacturing */}
      <section className="py-32 bg-surface-container-low" id="manufacturing">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <AnimateIn animation="fade-right">
                <span className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-on-tertiary-container mb-6">
                  <span className="material-symbols-outlined text-sm">
                    precision_manufacturing
                  </span>
                  Industrial Logic
                </span>
                <h2 className="font-headline text-4xl text-on-surface mb-8">
                  Asset-Heavy Intelligence.
                </h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  Modern manufacturing requires more than operational excellence;
                  it demands financial agility. We manage the complexity of global
                  supply chains and capital-intensive infrastructure.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="p-8 bg-surface-container-lowest shadow-sm">
                    <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-4">
                      Capital Advisory
                    </h4>
                    <p className="font-headline text-2xl text-primary">$2.4B</p>
                    <p className="text-[10px] font-label text-on-surface-variant mt-2">
                      Assets Optimized
                    </p>
                  </div>
                  <div className="p-8 bg-surface-container-lowest shadow-sm">
                    <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-outline mb-4">
                      Efficiency
                    </h4>
                    <p className="font-headline text-2xl text-primary">18%</p>
                    <p className="text-[10px] font-label text-on-surface-variant mt-2">
                      Cost Reduction
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <AnimateIn animation="fade-left" delay={150}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-outline-variant" />
                  <div className="grid grid-cols-1 gap-12">
                    <div className="bg-surface-container-lowest p-10 flex gap-8 items-center border-l-4 border-on-tertiary-container">
                      <span
                        className="material-symbols-outlined text-4xl text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        inventory
                      </span>
                      <div>
                        <h3 className="font-headline text-xl mb-2">
                          Inventory Ledgering
                        </h3>
                        <p className="text-sm text-on-surface-variant">
                          Real-time valuation and logistics-integrated reporting
                          for complex inventory systems.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-10 flex gap-8 items-center">
                      <span
                        className="material-symbols-outlined text-4xl text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        factory
                      </span>
                      <div>
                        <h3 className="font-headline text-xl mb-2">
                          CAPEX Strategy
                        </h3>
                        <p className="text-sm text-on-surface-variant">
                          Long-term planning for facility expansion and automation
                          technology integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections: Healthcare */}
      <section
        className="py-32 bg-primary text-on-primary relative overflow-hidden"
        id="healthcare"
      >
        <div className="absolute top-0 right-0 p-32 opacity-10">
          <span
            className="material-symbols-outlined text-[300px]"
            style={{ fontVariationSettings: "'wght' 100" }}
          >
            local_hospital
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <AnimateIn animation="fade-up">
            <div className="max-w-2xl mb-20">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary-fixed-dim mb-6 block">
                The Care Economy
              </span>
              <h2 className="font-headline text-5xl mb-8 leading-tight">
                Navigating the Compliance <br />
                of Compassion.
              </h2>
              <p className="text-primary-fixed-dim/70 text-lg leading-relaxed">
                In healthcare, the financial ledger must be as resilient as the
                medical standards. We provide specialized advisory for health
                systems and life science innovators.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {[
              {
                icon: "verified_user",
                title: "Regulatory Alignment",
                desc: "Deep integration with current healthcare billing regulations and state-level compliance mandates.",
              },
              {
                icon: "analytics",
                title: "Outcome Economics",
                desc: "Transitioning from fee-for-service to value-based care financial models without friction.",
              },
              {
                icon: "biotech",
                title: "Life Science R&D",
                desc: "Managing clinical trial funding streams and patent-protected revenue cycles.",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} animation="fade-up" delay={i * 100}>
                <div className="bg-primary-container p-12 border border-white/5 hover:bg-on-primary-fixed-variant transition-colors group h-full">
                  <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-8">
                    {card.icon}
                  </span>
                  <h4 className="font-headline text-2xl mb-4 group-hover:italic transition-all">
                    {card.title}
                  </h4>
                  <p className="text-sm text-primary-fixed-dim/80 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface-container-lowest border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <AnimateIn animation="scale-in">
            <h3 className="font-headline text-4xl text-primary mb-6 italic">
              Ready to Architect Your Growth?
            </h3>
            <p className="font-body text-on-surface-variant mb-12 max-w-xl mx-auto uppercase text-xs tracking-widest leading-loose">
              Whether you are scaling a SaaS platform or managing a manufacturing
              empire, our ledgers are ready for your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-on-tertiary-container text-on-primary px-10 py-4 rounded-full font-label text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-500/30 hover:scale-105 transition-all">
                Schedule a Consultation
              </button>
              <button className="text-primary font-label text-xs uppercase tracking-[0.2em] px-10 py-4 border border-outline-variant/30 rounded-full hover:bg-surface-container transition-colors">
                View Case Studies
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
