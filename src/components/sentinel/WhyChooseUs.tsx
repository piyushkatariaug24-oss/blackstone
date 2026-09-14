'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ShieldCheck,
  Award,
  Shield,
  Eye,
  Camera,
  Clock,
  Users,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'PSARA Licensed',
    description:
      'Fully licensed under Private Security Agencies Regulation Act with government compliance',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    description:
      'Internationally recognized quality management system ensuring consistent service delivery',
  },
  {
    icon: Shield,
    title: 'Background Verified Staff',
    description:
      'Rigorous selection based on height, weight, physical fitness, and thorough background checks',
  },
  {
    icon: Eye,
    title: 'Regular Monitoring & Supervision',
    description:
      'Periodic and surprise checks at all deployed sites to ensure SOP compliance and quality',
  },
  {
    icon: Camera,
    title: 'CCTV & Electronic Security',
    description:
      'Advanced surveillance with CCTV, access control, perimeter security, and fire-fighting systems',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Round-the-clock security coverage with dedicated supervision and emergency response teams',
  },
  {
    icon: Users,
    title: 'Male & Female Staff',
    description:
      'Diverse workforce of trained male and female security guards and facility management professionals',
  },
  {
    icon: Zap,
    title: 'Quick Deployment',
    description:
      'Fast deployment across Delhi NCR and Pan India for urgent and planned security requirements',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" className="py-24 bg-[#0d1b2a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-badge">
            <ShieldCheck className="w-4 h-4" />
            WHY CHOOSE US
          </span>
          <h2 className="text-gradient-gold">The Black Stone Advantage</h2>
          <p>
            Discover what sets us apart in the facility management industry — commitment,
            expertise, and unwavering dedication to your safety and comfort.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="premium-card glow-card text-center"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mt-4 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 mx-auto w-8 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}