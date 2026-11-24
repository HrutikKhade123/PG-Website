import { ArrowUpRight, Phone, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070B14] border-t border-white/[0.08] text-[#F5F8FF] overflow-hidden">
      {/* Subtle top reflective border highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#20B9FF]/30 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        
        {/* Top Section: Brand Banner */}
        <div className="pb-12 border-b border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#home" className="inline-block group focus:outline-none" aria-label="PG Infotech Solutions">
              <img
                src="/pg-logo.png"
                alt="PG Infotech Solutions"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="hidden sm:block h-12 w-[1px] bg-white/[0.1]" />
            <div className="hidden sm:block">
              <p className="text-base font-bold text-white tracking-wide">PG Infotech Solutions</p>
              <p className="text-xs text-[#94A3B8]">IT Services &amp; On-site Support PAN India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.links.phone}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Middle Section: Columns Grid */}
        <div className="py-12 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              About
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Professional IT services and dependable on-site technical support for businesses across India.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-[#20B9FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20B9FF]" />
                PAN India Operations
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Support Process', href: '#process' },
                { label: 'PAN India Coverage', href: '#coverage' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#20B9FF] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Technical Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Hardware / Software Issues</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Desktop / Laptop Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">IT Resources</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Network Printer Setup</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact Person */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Contact Engineer
            </h3>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">{COMPANY_INFO.contactPerson}</p>
              <p className="text-xs text-[#20B9FF]">{COMPANY_INFO.designation}</p>
            </div>
            <div className="pt-2 space-y-2 text-sm">
              <a
                href={COMPANY_INFO.links.phone}
                className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={COMPANY_INFO.links.email}
                className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2 break-all"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>
            Dependable On-Site Technical Support across India.
          </p>
        </div>

      </div>
    </footer>
  );
}
