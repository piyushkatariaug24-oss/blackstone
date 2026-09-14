'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  Shield, Eye, Flame, KeyRound, ScanLine, Route,
  Sparkles, PhoneCall, Monitor, Database, Car,
  Leaf, Briefcase,
} from 'lucide-react';
import { useTilt } from '@/hooks/useTilt';

const securityServices = [
  { icon: Shield, title: 'Trained Guards & Gunmen', desc: 'Male and female security personnel rigorously trained for all environments.' },
  { icon: Eye, title: 'CCTV & Electronic Surveillance', desc: 'Advanced monitoring systems with 24/7 live surveillance and recording.' },
  { icon: Flame, title: 'Fire-Fighting Readiness', desc: 'Equipped and trained personnel for fire prevention and emergency response.' },
  { icon: KeyRound, title: 'Access Control', desc: 'Biometric, RFID, and manual access management for premises security.' },
  { icon: ScanLine, title: 'Perimeter & Gate Security', desc: 'Comprehensive perimeter monitoring and controlled gate entry systems.' },
  { icon: Route, title: 'Patrol & Supervised Checks', desc: 'Regular patrol routines with documented supervisory checks and reports.' },
];

const facilityServices = [
  { icon: Sparkles, title: 'Housekeeping Staff', desc: 'Professional cleaning and maintenance personnel for all premises.' },
  { icon: PhoneCall, title: 'Telephone Operators', desc: 'Trained operators for call handling, paging, and communication management.' },
  { icon: Briefcase, title: 'Receptionists', desc: 'Front-desk professionals trained in corporate hospitality and visitor management.' },
  { icon: Monitor, title: 'Data Operators', desc: 'Skilled data entry and document management personnel for back-office operations.' },
  { icon: Database, title: 'Cleaners (Dry/Wet/Vacuum)', desc: 'Specialized cleaning teams with professional-grade equipment.' },
  { icon: Car, title: 'Drivers', desc: 'Licensed and verified drivers for corporate, personal, and logistics needs.' },
  { icon: Route, title: 'Runners & Peons', desc: 'Reliable support staff for document dispatch and office errands.' },
  { icon: Leaf, title: 'Gardeners', desc: 'Experienced horticulture staff for landscape maintenance and beautification.' },
];

/* eslint-disable react-hooks/refs */
function ServiceCard({ service, index }: { service: typeof securityServices[0]; index: number }) {
  const tilt = useTilt(6);
  const inView = useInView(tilt.ref, { once: true, margin: '-40px' });

  // Attach tilt event listeners via effect
  useEffect(() => {
    const el = tilt.ref.current;
    if (!el) return;
    el.addEventListener('mousemove', tilt.onMouseMove as unknown as EventListener);
    el.addEventListener('mouseleave', tilt.onMouseLeave as unknown as EventListener);
    return () => {
      el.removeEventListener('mousemove', tilt.onMouseMove as unknown as EventListener);
      el.removeEventListener('mouseleave', tilt.onMouseLeave as unknown as EventListener);
    };
  }, [tilt.ref, tilt.onMouseMove, tilt.onMouseLeave]);

  return (
    <div
      ref={tilt.ref}
      className="tilt-card"
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        className="glow-card group"
      >
        <div className={`icon-stroke-animate${inView ? ' in-view' : ''} w-10 h-10 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center mb-4 group-hover:border-[rgba(34,211,238,0.25)] transition-colors`}>
          <service.icon size={18} className="text-[#22D3EE]" />
        </div>
        <h3 className="text-[15px] font-semibold text-[#F4F6F8] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          {service.title}
        </h3>
        <p className="text-[13px] text-[#8B9AA6] leading-relaxed">
          {service.desc}
        </p>
      </motion.div>
    </div>
  );
}
/* eslint-enable react-hooks/refs */

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// Services`}</div>
          <h2>Comprehensive Security & Facility Solutions</h2>
          <p>End-to-end manpower services — from armed security to housekeeping, all under one contract.</p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-[12px] tracking-[2.5px] uppercase text-[#22D3EE] mb-8 font-medium" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
            Security Services
          </h3>
          <div className="section-photo h-40 sm:h-48 rounded-2xl overflow-hidden mb-8">
            <img src="/images/photos/security-guard.jpg" alt="Security guard on duty" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[12px] tracking-[2.5px] uppercase text-[#22D3EE] mb-8 font-medium" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
            Facility & Manpower Services
          </h3>
          <div className="section-photo h-40 sm:h-48 rounded-2xl overflow-hidden mb-8">
            <img src="/images/photos/housekeeping.jpg" alt="Housekeeping services" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilityServices.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
