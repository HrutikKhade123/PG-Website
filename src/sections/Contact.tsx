import { useState } from 'react';
import { Phone, MessageSquare, Mail, User, Shield, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Technical Support',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Priya, I am reaching out from ${formData.name} regarding ${formData.service}. Message: ${formData.message}. Phone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/919272360335?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070B14]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-[#20B9FF] tracking-wider uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F8FF] tracking-tight">
            Need Technical Support?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Let's discuss your IT requirements. Get in touch with PG Infotech Solutions.
          </p>
        </div>

        {/* 3 Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Call Us */}
          <a
            href={COMPANY_INFO.links.phone}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-sky-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-xs text-[#94A3B8] mb-4">Direct voice support line for urgent assistance</p>
              <p className="text-base font-semibold text-sky-400">{COMPANY_INFO.phone}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#C8D5E8] flex items-center justify-between">
              <span>Immediate Assistance</span>
              <span className="text-sky-400 font-semibold">Tap to Call &rarr;</span>
            </div>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href={COMPANY_INFO.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-xs text-[#94A3B8] mb-4">Instant messaging, photos &amp; error reports</p>
              <p className="text-base font-semibold text-emerald-400">Chat with Support Engineer</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#C8D5E8] flex items-center justify-between">
              <span>Fast Chat Response</span>
              <span className="text-emerald-400 font-semibold">Open Chat &rarr;</span>
            </div>
          </a>

          {/* Card 3: Email Us */}
          <a
            href={COMPANY_INFO.links.email}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-sky-400/50 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#20B9FF] mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-xs text-[#94A3B8] mb-4">Detailed technical specifications &amp; requests</p>
              <p className="text-base font-semibold text-sky-400 break-all">{COMPANY_INFO.email}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-[#C8D5E8] flex items-center justify-between">
              <span>Formal Requests</span>
              <span className="text-sky-400 font-semibold">Send Mail &rarr;</span>
            </div>
          </a>

        </div>

        {/* Contact Person Details & Interactive Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-blue-500/20">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{COMPANY_INFO.contactPerson}</h3>
                <p className="text-sm text-sky-400 font-mono">{COMPANY_INFO.designation}</p>
                <p className="text-xs text-[#94A3B8] mt-0.5">{COMPANY_INFO.name}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#C8D5E8]">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>On-Site Technical Support PAN India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#C8D5E8]">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#C8D5E8]">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="break-all">{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-[#94A3B8] leading-relaxed">
              We respond promptly to commercial and business technical support inquiries across India.
            </div>
          </div>

          {/* Request Technical Support Interactive Form with Rectangular Gradient Button */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Support Request
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Fill in your details below to directly connect with our support engineer.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Support Request Initiated</h4>
                <p className="text-xs text-[#94A3B8]">
                  Thank you! Your inquiry was transferred to our support engineer channel. We will be in touch immediately.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C8D5E8] mb-1.5">
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Enterprise Office"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1424] border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#C8D5E8] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9XXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1424] border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C8D5E8] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1424] border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#C8D5E8] mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0C1424] border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    >
                      <option value="Technical Support">Technical Support</option>
                      <option value="Hardware / Software Issues">Hardware / Software Issues</option>
                      <option value="Desktop / Laptop Support">Desktop / Laptop Support</option>
                      <option value="IT Resources">IT Resources</option>
                      <option value="Network Printer Setup">Network Printer Setup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C8D5E8] mb-1.5">
                    Brief Description of Issue / Requirement *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your technical support requirement or issue..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0C1424] border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
