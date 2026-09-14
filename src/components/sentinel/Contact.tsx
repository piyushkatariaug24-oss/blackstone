'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, User, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success('Message sent! We will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// Contact`}</div>
          <h2>Get in Touch</h2>
          <p>Reach out for a free consultation and customized security plan.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glow-card space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#22D3EE]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-1" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Address</div>
                  <p className="text-[14px] text-[#F4F6F8] leading-relaxed">
                    Ward No-2, Office No-4, Prop No-266/G-1, UGF<br />
                    Mehrauli, New Delhi, South Delhi, Delhi-110030
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#22D3EE]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-1" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Email</div>
                  <a href="mailto:blackstone12.sa@gmail.com" className="text-[14px] text-[#22D3EE] hover:underline break-all">
                    blackstone12.sa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#22D3EE]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-1" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Phone</div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+911120860014" className="text-[14px] text-[#F4F6F8] hover:text-[#22D3EE] transition-colors">011-20860014</a>
                    <a href="tel:+919910496844" className="text-[14px] text-[#F4F6F8] hover:text-[#22D3EE] transition-colors">9910496844</a>
                    <a href="tel:+919811406844" className="text-[14px] text-[#F4F6F8] hover:text-[#22D3EE] transition-colors">9811406844</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-[#22D3EE]" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-1" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Contact Person</div>
                  <p className="text-[14px] text-[#F4F6F8]">Mr. Swadesh Kumar</p>
                </div>
              </div>

              <a
                href="https://wa.me/919910496844"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.15)] text-[#22D3EE] text-[13px] font-medium hover:bg-[rgba(34,211,238,0.1)] transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glow-card space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-2 block" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[rgba(17,24,32,0.6)] border border-[rgba(34,211,238,0.1)] rounded-lg px-4 py-3 text-[14px] text-[#F4F6F8] placeholder-[#5a6872] focus:border-[rgba(34,211,238,0.35)] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-2 block" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-[rgba(17,24,32,0.6)] border border-[rgba(34,211,238,0.1)] rounded-lg px-4 py-3 text-[14px] text-[#F4F6F8] placeholder-[#5a6872] focus:border-[rgba(34,211,238,0.35)] focus:outline-none transition-colors"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-2 block" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Email</label>
                  <input
                    type="email"
                    className="w-full bg-[rgba(17,24,32,0.6)] border border-[rgba(34,211,238,0.1)] rounded-lg px-4 py-3 text-[14px] text-[#F4F6F8] placeholder-[#5a6872] focus:border-[rgba(34,211,238,0.35)] focus:outline-none transition-colors"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-2 block" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Company</label>
                  <input
                    type="text"
                    className="w-full bg-[rgba(17,24,32,0.6)] border border-[rgba(34,211,238,0.1)] rounded-lg px-4 py-3 text-[14px] text-[#F4F6F8] placeholder-[#5a6872] focus:border-[rgba(34,211,238,0.35)] focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-2 block" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Message *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-[rgba(17,24,32,0.6)] border border-[rgba(34,211,238,0.1)] rounded-lg px-4 py-3 text-[14px] text-[#F4F6F8] placeholder-[#5a6872] focus:border-[rgba(34,211,238,0.35)] focus:outline-none transition-colors resize-none"
                  placeholder="Describe your security or facility management needs..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-cyan w-full justify-center text-[15px] disabled:opacity-50"
              >
                <Send size={16} />
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
