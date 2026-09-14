'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2, Home, Hotel, Hospital, Warehouse, PartyPopper, ShieldUser,
} from 'lucide-react';

const sectors = [
  { icon: Building2, name: 'Corporate Offices' },
  { icon: Home, name: 'Residential Societies' },
  { icon: Hotel, name: 'Hotels' },
  { icon: Hospital, name: 'Hospitals' },
  { icon: Warehouse, name: 'Warehouses & Industries' },
  { icon: PartyPopper, name: 'Events' },
  { icon: ShieldUser, name: 'VIP Protection' },
];

export default function Sectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// Sectors`}</div>
          <h2>Industries We Serve</h2>
          <p>From residential complexes to high-security VIP deployments, our teams are trained for every environment.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glow-card flex flex-col items-center text-center py-8 px-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center mb-4">
                <sector.icon size={22} className="text-[#22D3EE]" />
              </div>
              <span className="text-[14px] font-medium text-[#F4F6F8]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                {sector.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
