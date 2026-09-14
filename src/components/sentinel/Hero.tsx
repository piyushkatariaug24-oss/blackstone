'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

function AnimatedCounter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="data-readout">
      {count}{suffix}
    </span>
  );
}

const headlineWords = ['Manpower', 'Excellence.'];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!bgRef.current) return;
    const scrollY = window.scrollY;
    bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background photo */}
      <div ref={bgRef} className="hero-bg-image" />
      <div className="hero-bg-overlay" />

      {/* Particle network + radar */}
      <ParticleNetwork />
      <div className="radar-container">
        <div className="radar-ring radar-ring-1" />
        <div className="radar-ring radar-ring-2" />
        <div className="radar-ring radar-ring-3" />
        <div className="radar-sweep" />
        <div className="scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">
        {/* Verified badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="verified-tag">
            <span className="dot" />
            ISO 9001:2015
          </div>
          <div className="verified-tag">
            <span className="dot" />
            PSARA Licensed
          </div>
        </motion.div>

        {/* Staggered headline */}
        <h1
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.05] text-[#F4F6F8] mb-4"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
              className={i === 2 ? 'text-gradient-cyan' : ''}
            >
              {word}{i < headlineWords.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-[#8B9AA6] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Solution Provider for Security, Housekeeping and All Manpower Services — protecting 700+ deployments across Delhi NCR and Pan India.
        </motion.p>

        {/* Stat counters with eased count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-12"
        >
          {[{ n: 700, s: '+', l: 'Guards Deployed' }, { n: 6, s: '+', l: 'Years in Operation' }, { n: 0, s: '', l: 'Monitoring', display: '24/7' }].map((stat) => (
            <div key={stat.l} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#F4F6F8]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                {stat.display ? (
                  <span className="data-readout">{stat.display}</span>
                ) : (
                  <AnimatedCounter target={stat.n} suffix={stat.s} />
                )}
              </div>
              <div className="text-[11px] tracking-[2px] uppercase text-[#8B9AA6] mt-1" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="tel:+919910496844" className="btn-amber text-[15px]">
            <Phone size={18} />
            Call Now
          </a>
          <a href="#contact" className="btn-outline-cyan text-[15px]">
            Get Free Quote
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <div className="w-5 h-8 rounded-full border-2 border-[rgba(34,211,238,0.25)] mx-auto flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-[#22D3EE]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
