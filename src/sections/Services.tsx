import { Headphones, Cpu, Laptop, Server, Printer, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../utils/constants';

const iconMap = {
  Headphones,
  Cpu,
  Laptop,
  Server,
  Printer,
};

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background glow illumination */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            Service Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            Technology Support That Keeps You Moving.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Practical IT support for everyday business technology needs.
          </p>
        </div>

        {/* 5 Premium Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon as keyof typeof iconMap] || Headphones;

            return (
              <div
                key={srv.id}
                className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group overflow-hidden border border-white/[0.08] hover:border-sky-400/40"
              >
                {/* Background soft ambient hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100" />

                <div>
                  {/* Top bar with ID number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-sky-400 tracking-wider">
                      {srv.id}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#20B9FF] group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Service Title & Primary Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    {srv.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C8D5E8]">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action trigger */}
                <div className="mt-8 pt-4 flex items-center justify-between border-t border-white/[0.06]">
                  <a
                    href={COMPANY_INFO.links.phone}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors"
                  >
                    <span>Request Support</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-mono">
                    On-Site &amp; Remote
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Full PAN India Callout Card with Animated Gradient Button */}
          <div className="glass-card rounded-2xl p-8 relative flex flex-col justify-between overflow-hidden border border-blue-500/30 bg-gradient-to-br from-[#0C1424] via-[#087BFF]/10 to-[#070B14]">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-xl bg-blue-500/20 text-sky-300 font-mono text-xs font-semibold uppercase tracking-wider inline-block">
                Custom IT Requirement?
              </span>
              <h3 className="text-2xl font-bold text-white">
                Need Dedicated On-site Assistance?
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Contact Priya Gawande at PG Infotech Solutions to discuss your business IT setup, network printers, or workforce hardware troubleshooting requirements.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={COMPANY_INFO.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
