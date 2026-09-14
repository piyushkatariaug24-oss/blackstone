'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'py-3'
          : 'bg-transparent py-5'
      }`}
      style={
        scrolled
          ? {
              background: 'rgba(11, 15, 20, 0.85)',
              backdropFilter: 'blur(20px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
              borderBottom: '1px solid rgba(34, 211, 238, 0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.3), 0 1px 0 rgba(34,211,238,0.08) inset',
            }
          : undefined
      }
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Black Stone logo"
            className="w-9 h-9 rounded-full object-cover border border-[rgba(34,211,238,0.15)]"
          />
          <span className="flex flex-col leading-none">
            <span
              className="text-[#F4F6F8] font-bold text-lg tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              BLACK STONE
            </span>
            <span
              className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6]"
              style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
            >
              Facility Mgmt
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-[#8B9AA6] hover:text-[#22D3EE] transition-colors duration-200 uppercase"
              style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+919910496844"
            className="flex items-center gap-2 text-[13px] text-[#8B9AA6] hover:text-[#F4F6F8] transition-colors"
            style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
          >
            <Phone size={14} />
            +91 9910496844
          </a>
          <a href="#contact" className="btn-cyan text-[13px] py-2.5 px-5">
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#F4F6F8] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F4F6F8] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F4F6F8] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-[rgba(34,211,238,0.06)] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[14px] font-medium text-[#8B9AA6] hover:text-[#22D3EE] transition-colors py-2"
                  style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[rgba(34,211,238,0.06)] flex flex-col gap-3">
                <a
                  href="tel:+919910496844"
                  className="flex items-center gap-2 text-[14px] text-[#8B9AA6]"
                >
                  <Phone size={14} />
                  +91 9910496844
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-cyan text-[14px] py-3 px-6 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
