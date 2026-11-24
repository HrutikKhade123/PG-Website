import { Shield, MapPin, Zap, Network, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            About PG Infotech Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            One Network. Across India.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            PG Infotech Solutions provides IT services and on-site technical support to help businesses maintain dependable technology operations. Our focus is on practical technical solutions, responsive assistance, and support across India.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Practical Solutions */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-6 transition-transform group-hover:scale-110">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Practical Technical Solutions
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              We focus on diagnosing and fixing issues cleanly, minimizing downtime, and ensuring business hardware and software remain stable during day-to-day operations.
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#C8D5E8]">
              <CheckCircle className="w-4 h-4 text-sky-400" />
              <span>Reliable diagnostics &amp; execution</span>
            </div>
          </div>

          {/* Card 2: Responsive On-Site Assistance */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-6 transition-transform group-hover:scale-110">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Responsive Assistance
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Quick response when critical hardware or connectivity fails. Our team coordinates fast technical support to keep enterprise workstations functioning smoothly.
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#C8D5E8]">
              <CheckCircle className="w-4 h-4 text-sky-400" />
              <span>Direct engineer coordination</span>
            </div>
          </div>

          {/* Card 3: PAN India Reach */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-6 transition-transform group-hover:scale-110">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              PAN India Service
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Providing dependable technical support across locations in India, helping multi-branch operations and remote teams operate with technological confidence.
            </p>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#C8D5E8]">
              <CheckCircle className="w-4 h-4 text-sky-400" />
              <span>Cross-region IT coverage</span>
            </div>
          </div>

        </div>

        {/* Support Engineer Highlight Banner with Rectangular Gradient Button */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              PG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-white">{COMPANY_INFO.contactPerson}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 font-mono">
                  {COMPANY_INFO.designation}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8]">Dedicated IT Services &amp; Technical Support Contact</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_INFO.links.phone}
              className="btn-primary px-6 py-2.5 text-xs tracking-wide flex items-center gap-2 justify-center w-full md:w-auto"
            >
              <Network className="w-3.5 h-3.5" />
              <span>Connect Direct: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
