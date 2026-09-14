'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IndianRupee, GraduationCap, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: IndianRupee,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages',
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description: 'Certified security training programs',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear advancement pathways',
  },
];

function GoldParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-gold/40"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -30, -60],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

export default function Recruitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="careers" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-[100px]" />
        {/* Animated gold particles */}
        <GoldParticle delay={0} x="10%" y="60%" />
        <GoldParticle delay={0.5} x="25%" y="30%" />
        <GoldParticle delay={1} x="75%" y="50%" />
        <GoldParticle delay={1.5} x="85%" y="70%" />
        <GoldParticle delay={2} x="50%" y="20%" />
        <GoldParticle delay={0.8} x="40%" y="80%" />
        <GoldParticle delay={1.3} x="60%" y="40%" />
        <GoldParticle delay={0.3} x="15%" y="45%" />
        <GoldParticle delay={1.8} x="90%" y="25%" />
        <GoldParticle delay={2.3} x="35%" y="65%" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Full-width card with dramatic background */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
            <div className="absolute inset-0 glass-strong" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/30 rounded-tl-lg" />
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/30 rounded-br-lg" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium tracking-widest uppercase mb-8"
              >
                <Users className="w-4 h-4" />
                JOIN OUR TEAM
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient-gold leading-tight"
              >
                Join Black Stone's Team
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#8888a0] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Build your career with Delhi NCR&apos;s leading facility management company. We offer
                competitive pay, professional training, and growth opportunities across security and facility services.
              </motion.p>

              {/* Benefits Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                      className="flex flex-col items-center gap-3 p-4"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{benefit.title}</h4>
                        <p className="text-[#8888a0] text-xs mt-1">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a href="#contact" className="btn-gold inline-flex items-center gap-2 text-lg px-10 py-4">
                  Apply Now
                  <TrendingUp className="w-5 h-5 relative z-10" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}