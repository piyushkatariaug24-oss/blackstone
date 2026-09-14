'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, MapPin, Users } from 'lucide-react';

const quickFacts = [
  { icon: Shield, label: 'Certified', value: 'ISO 9001:2015 & PSARA Licensed' },
  { icon: Clock, label: 'Experience', value: '6+ Years in Operation' },
  { icon: MapPin, label: 'Coverage', value: 'Delhi NCR & Pan India' },
  { icon: Users, label: 'Workforce', value: '700+ Trained Personnel' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// About`}</div>
          <h2>Trusted Protection Since 2020</h2>
          <p>Delivering reliable, data-backed security and facility management solutions across India.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Team photo — above text on mobile, right side on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="section-photo">
              <img
                src="/images/photos/staff-team.png"
                alt="Black Stone team — our trained security and facility management personnel"
                className="h-48 sm:h-64 lg:h-full lg:row-span-2"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <p className="text-[#8B9AA6] text-base leading-[1.8] mb-6">
              <strong className="text-[#F4F6F8] font-semibold">Black Stone Facility Management Pvt Ltd</strong> is a professionally managed security and facility services company headquartered in Delhi NCR. Since our founding in 2020, we have grown to deploy over <strong className="text-[#F4F6F8] font-semibold">700+ trained security personnel</strong> across residential societies, corporate offices, hotels, hospitals, and industrial facilities.
            </p>
            <p className="text-[#8B9AA6] text-base leading-[1.8] mb-6">
              Our operations are backed by <strong className="text-[#22D3EE] font-medium">ISO 9001:2015 certification</strong> and a valid <strong className="text-[#22D3EE] font-medium">PSARA license</strong>, ensuring every deployment meets the highest industry standards. We provide end-to-end manpower solutions — from trained security guards and gunmen to housekeeping staff, receptionists, data operators, and more.
            </p>
            <p className="text-[#8B9AA6] text-base leading-[1.8]">
              With 24/7 supervision, regular checks, and a commitment to excellence, Black Stone is your single-window partner for complete facility management.
            </p>
          </motion.div>

          {/* Quick Facts card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="glow-card space-y-0">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className={`flex items-start gap-4 py-4 ${i < quickFacts.length - 1 ? 'border-b border-[rgba(34,211,238,0.06)]' : ''}`}
                >
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-[rgba(34,211,238,0.06)] border border-[rgba(34,211,238,0.1)] flex items-center justify-center flex-shrink-0">
                    <fact.icon size={16} className="text-[#22D3EE]" />
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[1.5px] uppercase text-[#8B9AA6] mb-0.5" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
                      {fact.label}
                    </div>
                    <div className="text-[14px] font-medium text-[#F4F6F8]">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}