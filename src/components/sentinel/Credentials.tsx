'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const credentials = [
  { label: 'CIN', value: 'U74999DL2020PTC361359' },
  { label: 'PAN', value: 'AAICB9023F' },
  { label: 'GST', value: '07AAICB9023F1ZS' },
  { label: 'PF Code', value: 'DSNHP2853857000' },
  { label: 'ESIC Code', value: '11001435950001099' },
  { label: 'Udyam', value: 'UDYAM-DL-08-0046136' },
];

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="credentials" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="section-badge">{`// Credentials`}</div>
          <h2>Registered &amp; Verified</h2>
          <p>Every credential is active and verifiable — displayed as live system data, not marketing text.</p>
        </motion.div>

        {/* Two-column layout: stamp left, grid right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Rotating verified stamp */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <svg className="stamp" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="stampCircle" d="M100,20 A80,80 0 1,1 99.9,20" fill="none" />
              </defs>
              <circle className="ring" cx="100" cy="100" r="80" />
              <circle className="ring" cx="100" cy="100" r="64" />
              <text>
                <textPath href="#stampCircle" startOffset="0%">VERIFIED • REGISTERED • ISO 9001:2015 • PSARA • </textPath>
              </text>
              <path className="check" d="M68,102 L88,122 L134,74" />
            </svg>
          </div>

          {/* Credential chips grid */}
          <div className="grid sm:grid-cols-2 gap-4 flex-1 w-full">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="credential-chip"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full bg-[#22D3EE] flex-shrink-0"
                    style={{ animation: 'verifiedPulse 2s ease-in-out infinite' }}
                  />
                  <CheckCircle2 size={13} className="text-[#22D3EE] flex-shrink-0" />
                  <span className="label">{cred.label}</span>
                </div>
                <span className="value">{cred.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
