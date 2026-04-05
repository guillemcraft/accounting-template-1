import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-container pt-28 pb-16">
        {/* Growth Ornament - Animated */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 border border-outline-variant rounded-full w-[800px] h-[800px] hero-circle-1" />
          <div className="absolute top-1/2 left-1/2 border border-outline-variant rounded-full w-[1000px] h-[1000px] hero-circle-2" />
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
          <div className="text-white space-y-8">
            <AnimateIn animation="fade-right" duration={900}>
              <h1 className="text-6xl md:text-8xl font-headline leading-[1.1] font-light">
                Make bookkeeping and tax easy
              </h1>
              <p className="text-xl md:text-2xl font-body text-slate-300 max-w-lg font-light leading-relaxed mt-8">
                High-precision financial management for modern enterprises. We
                handle the ledger, you build the legacy.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-6">
                <button className="bg-on-tertiary-container text-white px-10 py-5 rounded-full font-label uppercase text-sm tracking-widest hover:opacity-90 transition-all shadow-xl shadow-orange-950/40">
                  Explore our services
                </button>
              </div>
            </AnimateIn>
          </div>
          <div className="relative hidden lg:block">
            <AnimateIn animation="fade-left" delay={200} duration={900}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform rotate-3 hover:rotate-0 transition-transform duration-700 bg-surface-container">
                <Image
                  alt="Professional Accountant"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjzYd7VduJ5zdyMonTcwb1KyxaG-wP68C7tcl-0uctqBLxjoeoCE7nhTJwWjWIUxIrj43DTKwHm5gYRbkodrSnzPPC35DfzI8O-Bov5gt-V8nlWvCEza8E6w-UJJDzS-K5S_mDUlacR0seMdSiaDnGHvi8uyLwrD-YvKvRSO1qB6P-gcVW0Gngyb9_p7hFq2Rrt-Lf5mYb5r87Q9aVWJ7lLhA1oXx2HRie-XpiV7cT2I2zN3PTQib03_B4PQ9qBMFtQu4JuL63zX4"
                  width={600}
                  height={750}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-xl editorial-shadow max-w-xs transform -rotate-2">
                <p className="font-headline italic text-2xl text-primary leading-tight">
                  &ldquo;Accuracy is the architectural foundation of
                  scale.&rdquo;
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Ticker */}
      <section className="py-16 bg-surface-container-low border-none overflow-hidden">
        <p className="font-label uppercase text-xs tracking-[0.3em] text-center text-outline mb-10">
          Trusted by Global Visionaries
        </p>
        <div className="relative w-full overflow-hidden opacity-40 hover:opacity-60 transition-opacity duration-500">
          <div className="ticker-track flex w-max gap-20 items-center">
            {[...Array(2)].map((_, setIndex) =>
              ["Lumina", "Vanguard", "Stratosphere", "Apex", "Foundry", "Meridian"].map(
                (name) => (
                  <span
                    key={`${setIndex}-${name}`}
                    className="text-primary font-headline text-2xl italic font-bold whitespace-nowrap px-4"
                  >
                    {name}
                  </span>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <AnimateIn animation="fade-right">
                <h2 className="text-5xl font-headline text-primary mb-6">
                  Expert accounting services
                </h2>
                <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-12">
                  A comprehensive suite of financial instruments designed for the
                  discerning business owner.
                </p>
                <a
                  className="text-primary font-bold border-b-2 border-primary-fixed-dim pb-1 font-label uppercase text-xs tracking-widest hover:border-primary transition-all"
                  href="#"
                >
                  View all capabilities
                </a>
              </AnimateIn>
            </div>
            <AnimateIn animation="fade-up" delay={150} className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] px-[1px] bg-outline-variant/10 h-full">
                {[
                  {
                    icon: "account_balance",
                    title: "Bookkeeping",
                    desc: "Precision record-keeping that forms the backbone of your financial health.",
                  },
                  {
                    icon: "account_balance_wallet",
                    title: "Tax Advisory",
                    desc: "Strategic planning to optimize your fiscal position and ensure seamless compliance.",
                  },
                  {
                    icon: "receipt_long",
                    title: "Expense Management",
                    desc: "Granular visibility into capital outflow, categorized for intelligent decision-making.",
                  },
                  {
                    icon: "insights",
                    title: "Financial Reporting",
                    desc: "High-level editorial summaries of your business performance every month.",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="bg-surface-container-lowest p-10 hover:bg-surface-bright transition-colors group"
                  >
                    <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-6 block group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-headline font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <AnimateIn animation="fade-right">
                <span className="font-label uppercase text-xs tracking-widest text-on-secondary-container block">
                  Fee Transparency
                </span>
                <h2 className="text-6xl font-headline text-primary leading-tight mt-8">
                  Keep things simple with fixed monthly pricing
                </h2>
                <div className="grid sm:grid-cols-2 gap-12 mt-12">
                  <div className="space-y-4">
                    <div className="w-12 h-[2px] bg-on-tertiary-container" />
                    <h4 className="font-headline text-2xl italic">
                      Predictable Growth
                    </h4>
                    <p className="text-sm text-on-surface-variant font-body">
                      No hidden fees, no hourly billing. Just absolute clarity for
                      your annual planning.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-[2px] bg-on-tertiary-container" />
                    <h4 className="font-headline text-2xl italic">
                      Scalable Tiers
                    </h4>
                    <p className="text-sm text-on-surface-variant font-body">
                      Our services expand as your volume grows, maintaining a
                      constant ratio of value.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn animation="fade-left" delay={200} className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-square rounded-full border border-primary/10 absolute -top-12 -right-12 w-full h-full" />
                <div className="relative bg-white rounded-xl overflow-hidden editorial-shadow transform translate-x-4">
                  <Image
                    alt="Financial Planning"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0KInshMNF8DDw6z5AMK8KUWcKb7L96MQR-kIfCdBwLTgUoeKUFBMW3FMeU8TlmEd1BXJBEBhXqDmrYCuFPPTuKH3_OGDeQkPtiigx364EnX7oOncrwoZeq7frdJuXh5_EqzeYdjqOCBzQLA3BXT4yDLWzQfSLSZ2Dd73s74CL4wZPY-zDzEN44y4_v9JXcgK30R3E-bA6kuDtp-lDXZ-CTAOkZh2BkrTizVuUAi-9UjsRJxC3yiSne17Va9gAtLCmva_ea9T6aQw"
                    width={600}
                    height={450}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Professional Context Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <AnimateIn animation="fade-left">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    alt="Expert Staff"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOw9CuCrMkXWrD27qvZL-wJMq2exgujXyhgq8tj50tuVZYtDVJ2EqoSuL40cuKCUlZfmnDqxqt0srVQ4-_B_h31itJ07NpDDfpV1xprjeI-LPPhw8yHilZjSWcnGuCwdNWQoaufyhOLVP7ulnuU8tUHFZHyif3niyFzVv2cMBshA21LEcyIibxpwXkqEgAI_C9Y7zauffpafsoeKzCWBlIZS_obyRMnYvXERm53ruFYaCW6NQz-D9DxSKPZekj7mi3PHpwsCGNzBA"
                    width={400}
                    height={533}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="rounded-xl aspect-[3/4] object-cover mt-12"
                  />
                  <Image
                    alt="Expert Staff"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoanpFSAdqkrrrtCGQKxe_hC9na9KGPLURdEvzaRi8yYC_Zvxn4v_jPhxLp0zln_DJn2nLp3v9Ty3rnkgCRs8OgN9bzorGi93B2UoNhUV-oQnUtxHUW43K0AYNtqciv7nXrS4awXNYhkdra0zc344XJJVnx7NQ-R0DiooDeNR89LzpWzIGh6ZO7YtStI0_lFV_77l8jxzSsXVzvMkQfyO8_amvwYgxzdVJOCrsvLkKIK0VQHuYsrkPgWOZ2l2m4Avv8NDqTT2Ufus"
                    width={400}
                    height={533}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="rounded-xl aspect-[3/4] object-cover mb-12"
                  />
                </div>
              </AnimateIn>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <AnimateIn animation="fade-right" delay={150}>
                <h2 className="text-5xl font-headline text-primary">
                  Work with someone who understands your business
                </h2>
                <p className="text-lg text-on-surface-variant font-body leading-relaxed mt-8">
                  We don&apos;t just balance books; we learn your industry&apos;s
                  nuances. From creative agencies to complex manufacturing, our
                  advisors speak your language.
                </p>
                <button className="flex items-center gap-4 text-primary font-bold group mt-8">
                  <span className="font-label uppercase text-xs tracking-[0.2em]">
                    Meet our directors
                  </span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </button>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl font-headline text-white max-w-md">
              Giving businesses their time back
            </h2>
            <p className="text-slate-400 font-label uppercase text-xs tracking-widest hidden md:block">
              Case Studies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Ledger & Co. transformed our chaotic finances into a clear strategic roadmap. We\u2019ve scaled 300% since switching.",
                name: "Elena Vance",
                role: "CEO, Lumina Studios",
              },
              {
                quote:
                  "The editorial style reporting is a breath of fresh air. I finally understand the \u2018why\u2019 behind our numbers.",
                name: "Marcus Aurelius",
                role: "Founder, Foundry Capital",
              },
              {
                quote:
                  "Tax season used to be a nightmare. Now, it\u2019s just another Tuesday. Their precision is unmatched.",
                name: "Sarah Chen",
                role: "MD, Meridian Health",
              },
            ].map((testimonial, i) => (
              <AnimateIn key={testimonial.name} animation="fade-up" delay={i * 100}>
                <div className="bg-primary-container p-12 rounded-lg border border-white/5 space-y-8 h-full">
                  <span className="text-on-tertiary-container font-headline text-6xl">
                    &ldquo;
                  </span>
                  <p className="text-white text-lg font-body italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-headline text-xl">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-400 font-label uppercase text-[10px] tracking-widest">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-48 bg-surface-container-lowest text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary rounded-full w-[400px] h-[400px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary rounded-full w-[600px] h-[600px]" />
        </div>
        <div className="max-w-3xl mx-auto px-8 relative z-10">
          <AnimateIn animation="scale-in">
            <h2 className="text-6xl md:text-8xl font-headline text-primary mb-12">
              Get started today
            </h2>
            <p className="text-xl text-on-surface-variant font-body mb-16 max-w-xl mx-auto">
              Your architecture for financial excellence begins with a single
              conversation.
            </p>
            <button className="bg-on-tertiary-container text-white px-16 py-6 rounded-full font-label uppercase text-sm tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-orange-500/40">
              Book a Call
            </button>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
