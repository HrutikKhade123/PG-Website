import { IndiaMapScene } from '../scenes/IndiaMapScene';
import { MapPin, Globe, CheckCircle, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export function PanIndiaCoverage() {
  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            Nationwide Presence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            One Network. Across India.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Connecting businesses with IT services and on-site technical support across India.
          </p>
        </div>

        {/* Main Grid: Interactive 3D India Map + Information Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 3D Geographically Accurate Map Column */}
          <div className="lg:col-span-8 relative w-full min-h-[460px] sm:min-h-[540px] lg:min-h-0 h-full rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col items-center justify-center p-2">
            <IndiaMapScene />

            {/* Floating Telemetry Overlay Badge */}
            <div className="absolute bottom-6 left-6 z-20 glass-panel px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8]">PAN India Network</p>
                <p className="text-xs font-bold text-white">Active On-Site &amp; Regional Support</p>
              </div>
            </div>
          </div>

          {/* Right Column: Coverage Highlights */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Multi-Region Support Operations
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Whether your organization operates in major commercial hubs or across dispersed branch locations, our support is structured to deliver dependable technical assistance.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Coordinated On-Site Dispatch
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Our support engineer coordinates direct technical intervention for hardware diagnostics, workstation issues, and network printer deployments.
              </p>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs text-sky-300">
                <CheckCircle className="w-4 h-4 shrink-0 text-sky-400" />
                <span>Prompt response &amp; resolution tracking</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0C1424] to-[#087BFF]/15 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-sky-400" />
                <h4 className="text-sm font-bold text-white">Direct Assistance Line</h4>
              </div>
              <p className="text-xs text-[#94A3B8] mb-4">
                Speak directly with Priya Gawande to schedule or initiate support for your office or enterprise site.
              </p>
              <a
                href={COMPANY_INFO.links.phone}
                className="btn-primary w-full flex items-center justify-center gap-2 py-2.5 text-xs tracking-wide"
              >
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
