import { PhoneCall, FileSearch, CheckCircle2, LifeBuoy } from 'lucide-react';
import { SUPPORT_STEPS } from '../utils/constants';

const stepIcons = {
  PhoneCall,
  FileSearch,
  CheckCircle2,
  LifeBuoy,
};

export function SupportProcess() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            Service Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            Simple Process. Reliable Support.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            A transparent four-step workflow designed to resolve your technical requirements without complexity.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          
          {/* Progressive Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-[#087BFF] via-[#20B9FF] to-[#C8D5E8]/40 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SUPPORT_STEPS.map((item) => {
              const Icon = stepIcons[item.icon as keyof typeof stepIcons] || LifeBuoy;

              return (
                <div
                  key={item.step}
                  className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/[0.08] hover:border-sky-400/40 group relative transition-all duration-300"
                >
                  <div>
                    {/* Step Icon Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0C1424] border border-white/10 flex items-center justify-center text-[#20B9FF] mb-6 shadow-xl group-hover:scale-105 group-hover:border-sky-400/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-sky-400 tracking-wider">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro indicator */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94A3B8] font-mono">
                    <span>Phase {item.step}</span>
                    <span className="text-emerald-400 font-sans">Active Assistance</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
