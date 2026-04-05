"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/company", label: "Company" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hasDarkHero = pathname === "/" || pathname === "/industries";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBg = scrolled || !hasDarkHero;

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 border-none ${
        showBg ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-20 w-full">
        <Link
          href="/"
          className={`text-3xl font-headline italic tracking-tight transition-colors ${
            showBg ? "text-primary" : "text-white"
          }`}
        >
          Ledger &amp; Co.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label uppercase text-xs tracking-wider transition-colors duration-300 ${
                  isActive
                    ? showBg
                      ? "text-primary font-bold border-b-2 border-primary pb-1"
                      : "text-white font-bold border-b-2 border-white pb-1"
                    : showBg
                      ? "text-slate-600 hover:text-primary"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block bg-on-tertiary-container text-on-primary px-8 py-3 rounded-full font-label uppercase text-xs tracking-widest font-bold shadow-xl shadow-on-tertiary-container/20 active:scale-95 transition-transform">
            Let&apos;s Talk
          </button>
          <button
            className={`md:hidden transition-colors ${showBg ? "text-primary" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 pb-8 pt-4 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                setMobileOpen(false);
                router.push(link.href);
              }}
              className={`block font-label uppercase text-sm tracking-wider w-full text-left ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-slate-600"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button className="w-full bg-on-tertiary-container text-white px-8 py-3 rounded-full font-label uppercase text-xs tracking-widest">
            Let&apos;s Talk
          </button>
        </div>
      )}
    </nav>
  );
}
