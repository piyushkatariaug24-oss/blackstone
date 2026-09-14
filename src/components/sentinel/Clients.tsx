'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Building2, Home } from 'lucide-react';

const corporateClients = [
  'Vodafone',
  'D-Mart',
  'Hindustan Zinc Limited',
  'Cars24',
  'FabFurnish.com',
  'MallPlaza',
  'Unitech Machines Limited',
  'Nijhawan Group',
  'Travel Boutique',
  'ETM Solutions',
  'Vidanta',
  'HR Executive Club',
  'Techno Auto Components',
  'KVTEK',
  'MGF Group',
];

const residentialClients = [
  { name: 'Princeton Floors', location: 'Sector-51, Gurgaon' },
  { name: 'Clean & Green', location: 'Sector-51, Gurgaon' },
  { name: 'Jalvayu Vihar', location: 'Greater Noida' },
  { name: 'Omaxe Hills', location: 'Faridabad' },
];

/* ---- Wordmark for each corporate client ---- */
function ClientWordmark({ name }: { name: string }) {
  return (
    <div className="client-wordmark group flex-shrink-0">
      <span className="client-wordmark-text">{name}</span>
    </div>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [marqueePaused, setMarqueePaused] = useState(false);

  return (
    <section id="clients" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* ---- Section Heading ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// Clients`}</div>
          <h2>
            From <span className="text-gradient-cyan">Vodafone</span> to{' '}
            <span className="text-gradient-cyan">Hindustan Zinc</span>
            <br className="hidden sm:block" />
            {' '}— Trusted Across Industries
          </h2>
          <p className="max-w-2xl">
            Trusted by 19+ clients across corporate, retail & residential sectors.
            From Fortune 500 subsidiaries to boutique firms, our clients choose reliability.
          </p>
        </motion.div>

        {/* ===== CORPORATE & INDUSTRIAL CLIENTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          {/* Group label */}
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Building2 size={16} className="text-[#22D3EE]" />
            <h3
              className="text-sm font-semibold uppercase tracking-[3px] text-[#8B9AA6]"
              style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
            >
              Corporate & Industrial Clients
            </h3>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] text-[11px] font-bold text-[#22D3EE]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
              15
            </span>
          </div>

          {/* Marquee Row 1: first 8 clients */}
          <div
            className="marquee-mask mb-4"
            onMouseEnter={() => setMarqueePaused(true)}
            onMouseLeave={() => setMarqueePaused(false)}
          >
            <div
              className="marquee-track"
              style={{
                animationPlayState: marqueePaused ? 'paused' : 'running',
              }}
            >
              {[...corporateClients.slice(0, 8), ...corporateClients.slice(0, 8)].map(
                (name, i) => (
                  <ClientWordmark key={`r1-${i}`} name={name} />
                )
              )}
            </div>
          </div>

          {/* Marquee Row 2: last 7 clients (reverse direction) */}
          <div
            className="marquee-mask"
            onMouseEnter={() => setMarqueePaused(true)}
            onMouseLeave={() => setMarqueePaused(false)}
          >
            <div
              className="marquee-track-reverse"
              style={{
                animationPlayState: marqueePaused ? 'paused' : 'running',
              }}
            >
              {[...corporateClients.slice(8), ...corporateClients.slice(8)].map(
                (name, i) => (
                  <ClientWordmark key={`r2-${i}`} name={name} />
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* ===== RESIDENTIAL SOCIETIES ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Group label */}
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Home size={16} className="text-[#22D3EE]" />
            <h3
              className="text-sm font-semibold uppercase tracking-[3px] text-[#8B9AA6]"
              style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
            >
              Residential Societies
            </h3>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(34,211,238,0.1)] border border-[rgba(34,211,238,0.2)] text-[11px] font-bold text-[#22D3EE]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
              4
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {residentialClients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="glow-card flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#22D3EE]" />
                </div>
                <div>
                  <h4
                    className="text-[16px] font-semibold text-[#F4F6F8] mb-1"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {client.name}
                  </h4>
                  <p
                    className="text-[13px] text-[#8B9AA6]"
                    style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
                  >
                    {client.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
