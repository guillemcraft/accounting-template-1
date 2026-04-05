import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-1 md:col-span-1">
          <span className="text-3xl font-headline italic text-white mb-6 block">
            Ledger &amp; Co.
          </span>
          <p className="text-slate-400 text-sm font-body leading-relaxed max-w-xs">
            Curating financial stability for the ambitious enterprise. Licensed
            advisors across 50 states.
          </p>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-on-tertiary-container font-label mb-6 font-bold">
            Services
          </p>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Bookkeeping
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Tax Advisory
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Payroll
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Financial Reporting
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-on-tertiary-container font-label mb-6 font-bold">
            Company
          </p>
          <ul className="space-y-4">
            <li>
              <Link
                href="/company"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-xs tracking-widest text-on-tertiary-container font-label mb-6 font-bold">
            Legal
          </p>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-on-tertiary-container hover:translate-x-1 transition-all font-body text-sm inline-block"
              >
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-white/5">
        <p className="text-slate-500 text-[10px] font-label uppercase tracking-widest">
          &copy; 2024 Architectural Ledger Financial. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
