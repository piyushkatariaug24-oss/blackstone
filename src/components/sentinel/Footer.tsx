'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[rgba(34,211,238,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="Black Stone logo"
                className="w-9 h-9 rounded-full object-cover border border-[rgba(34,211,238,0.15)]"
              />
              <span>
                <span className="text-[#F4F6F8] font-bold text-lg tracking-tight block" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  BLACK STONE
                </span>
                <span className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
                  Facility Management Pvt Ltd
                </span>
              </span>
            </div>
            <p className="text-[13px] text-[#8B9AA6] leading-relaxed">
              Solution Provider for Security, Housekeeping and All Manpower Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6] mb-4 font-medium" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Sectors', href: '#services' },
                { label: 'Credentials', href: '#credentials' },
                { label: 'Clients', href: '#clients' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-[#8B9AA6] hover:text-[#22D3EE] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6] mb-4 font-medium" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Security Guards',
                'CCTV Surveillance',
                'Housekeeping',
                'Manpower Supply',
                'Access Control',
                'Patrol Services',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[13px] text-[#8B9AA6] hover:text-[#22D3EE] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6] mb-4 font-medium" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:+919910496844" className="flex items-center gap-2 text-[13px] text-[#8B9AA6] hover:text-[#F4F6F8] transition-colors">
                <Phone size={13} className="text-[#22D3EE]" />
                +91 9910496844
              </a>
              <a href="mailto:blackstone12.sa@gmail.com" className="flex items-center gap-2 text-[13px] text-[#8B9AA6] hover:text-[#F4F6F8] transition-colors">
                <Mail size={13} className="text-[#22D3EE]" />
                <span className="break-all">blackstone12.sa@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-[13px] text-[#8B9AA6]">
                <MapPin size={13} className="text-[#22D3EE] mt-0.5 flex-shrink-0" />
                <span>Mehrauli, New Delhi-110030</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(34,211,238,0.04)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5a6872]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
            © {new Date().getFullYear()} Black Stone Facility Management Pvt Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-[#5a6872]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
            CIN: U74999DL2020PTC361359
          </p>
        </div>
      </div>
    </footer>
  );
}
