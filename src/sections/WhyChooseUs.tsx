import { ShieldCheck, Wrench, Briefcase, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../utils/constants';

const whyIcons = {
  ShieldCheck,
  Wrench,
  Briefcase,
  MapPin,
};

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0C1424]/40 border-y border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            Value &amp; Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            Reliable Support. Practical Solutions.
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Professional assistance engineered to keep your team working and business systems running smoothly.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = whyIcons[item.icon as keyof typeof whyIcons] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-sky-400/30 transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] shrink-0 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-sky-400">
                      FEATURE {item.id}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
