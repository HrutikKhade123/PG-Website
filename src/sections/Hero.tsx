import { ArrowRight, PhoneCall, ShieldCheck, Cpu, Headphones, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#070B14]">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Small Label with Liquid Glass badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#20B9FF] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C8D5E8]">
            PG INFOTECH SOLUTIONS
          </span>
        </div>

        {/* Main Heading: Strictly 2 lines with whitespace-nowrap on each line */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#F5F8FF] leading-[1.1] mb-8">
          <span className="block sm:whitespace-nowrap">Technology Problems?</span>
          <span className="gradient-flowing-text block sm:whitespace-nowrap">
            We've Got You Covered.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-10">
          Reliable IT services and professional on-site technical support, delivering dependable solutions for businesses across India.
        </p>

        {/* Action Buttons: Rectangular with subtle curve (rounded-xl) and shifting gradient */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={COMPANY_INFO.links.phone}
            className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm w-full sm:w-auto cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get Technical Support</span>
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-[#C8D5E8] hover:text-white glass-panel hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Key Feature Trust Badges */}
        <div className="pt-8 border-t border-white/[0.08] max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2 border border-white/[0.08]">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-semibold text-white">On-Site Support</span>
            <span className="text-[10px] text-[#94A3B8]">Direct dispatch</span>
          </div>

          <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2 border border-white/[0.08]">
            <Cpu className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-semibold text-white">Hardware &amp; OS</span>
            <span className="text-[10px] text-[#94A3B8]">Diagnostic fixes</span>
          </div>

          <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2 border border-white/[0.08]">
            <Headphones className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-semibold text-white">Expert Engineer</span>
            <span className="text-[10px] text-[#94A3B8]">Fast response</span>
          </div>

          <div className="glass-panel p-4 rounded-xl flex flex-col items-center gap-2 border border-white/[0.08]">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-semibold text-white">PAN India</span>
            <span className="text-[10px] text-[#94A3B8]">Nationwide reach</span>
          </div>
        </div>

      </div>
    </section>
  );
}
