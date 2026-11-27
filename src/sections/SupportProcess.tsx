import { useEffect, useRef } from 'react';
import { PhoneCall, FileSearch, CheckCircle2, LifeBuoy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SUPPORT_STEPS } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const stepIcons = {
  PhoneCall,
  FileSearch,
  CheckCircle2,
  LifeBuoy,
};

export function SupportProcess() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (Horizontal layout): Shuffle along X & Y with rotation
      mm.add('(min-width: 768px)', () => {
        // Cards 0 & 2 (1st & 3rd): Initial offset in positive direction
        const forwardCards = [cardRefs.current[0], cardRefs.current[2]].filter(Boolean);
        // Cards 1 & 3 (2nd & 4th): Initial offset in reverse (negative) direction
        const reverseCards = [cardRefs.current[1], cardRefs.current[3]].filter(Boolean);

        // Shuffle animation tied to scroll scrub
        gsap.fromTo(
          forwardCards,
          {
            y: 70,
            x: -25,
            rotateZ: -3,
            opacity: 0.4,
          },
          {
            y: 0,
            x: 0,
            rotateZ: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          reverseCards,
          {
            y: -70,
            x: 25,
            rotateZ: 3,
            opacity: 0.4,
          },
          {
            y: 0,
            x: 0,
            rotateZ: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1.2,
            },
          }
        );
      });

      // Mobile (Vertical layout): Shuffle from left and right alternately
      mm.add('(max-width: 767px)', () => {
        const forwardCards = [cardRefs.current[0], cardRefs.current[2]].filter(Boolean);
        const reverseCards = [cardRefs.current[1], cardRefs.current[3]].filter(Boolean);

        gsap.fromTo(
          forwardCards,
          { x: -50, opacity: 0.3, rotateZ: -2 },
          {
            x: 0,
            opacity: 1,
            rotateZ: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          reverseCards,
          { x: 50, opacity: 0.3, rotateZ: 2 },
          {
            x: 0,
            opacity: 1,
            rotateZ: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-24 relative overflow-hidden bg-[#070B14]">
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
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SUPPORT_STEPS.map((item, index) => {
              const Icon = stepIcons[item.icon as keyof typeof stepIcons] || LifeBuoy;

              return (
                <div
                  key={item.step}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/[0.08] hover:border-sky-400/40 group relative transition-colors duration-300 will-change-transform"
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
