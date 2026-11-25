import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isPastHero = currentScrollY > 150;
      setScrolled(currentScrollY > 20);

      // In the hero section, the navbar is always visible
      if (!isPastHero) {
        setVisible(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
        return;
      }

      // Past hero section: when user scrolls, make it immediately visible
      setVisible(true);

      // Clear previous timeout and start a timer to hide navbar when scrolling stops
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        // Only hide if we are still past the hero section and mobile menu is closed
        if (window.scrollY > 150 && !mobileMenuOpen) {
          setVisible(false);
        }
      }, 1200); // Hides 1.2s after user stops scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setVisible(true);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-500 ease-in-out ${visible || mobileMenuOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
        }`}
    >
      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl flex items-center justify-between px-5 sm:px-8 py-3 ${scrolled
            ? 'glass-nav bg-[#070B14]/30 backdrop-blur-2xl border border-white/[0.08]'
            : 'bg-[#070B14]/10 backdrop-blur-md border border-white/[0.04]'
          }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg py-1"
          aria-label="PG Infotech Solutions Home"
        >
          <img
            src={`${import.meta.env.BASE_URL}pg-logo.png`}
            alt="PG Infotech Solutions Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="px-4 py-2 text-sm font-medium text-[#C8D5E8] hover:text-[#F5F8FF] hover:bg-white/[0.06] rounded-xl transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#C8D5E8] hover:text-[#F5F8FF] hover:bg-white/[0.06] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 glass-panel p-6 rounded-2xl flex flex-col gap-4 shadow-2xl animate-in fade-in duration-200 z-50">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-[#C8D5E8] hover:text-white hover:bg-blue-500/10 rounded-xl transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-sky-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
