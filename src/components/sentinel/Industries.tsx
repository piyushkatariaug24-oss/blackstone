'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Building,
  Building2,
  Factory,
  MapPin,
  Landmark,
  Store,
  Heart,
  GraduationCap,
  Hotel,
  HardHat,
  type LucideIcon,
} from 'lucide-react'

interface MarqueeItem {
  icon: LucideIcon
  name: string
}

const row1Items: MarqueeItem[] = [
  { icon: Building, name: 'Housing Societies' },
  { icon: Building2, name: 'Corporate Offices' },
  { icon: Factory, name: 'Industrial Facilities' },
  { icon: MapPin, name: 'Gurgaon' },
  { icon: MapPin, name: 'Greater Noida' },
  { icon: MapPin, name: 'Faridabad' },
  { icon: Store, name: 'Shopping Malls' },
  { icon: Heart, name: 'Hospitals' },
  { icon: GraduationCap, name: 'Educational Institutes' },
  { icon: Hotel, name: 'Hotels & Hospitality' },
  { icon: HardHat, name: 'Construction Sites' },
  { icon: Landmark, name: 'Delhi NCR' },
]

const row2Items: MarqueeItem[] = [
  { icon: Landmark, name: 'Delhi NCR' },
  { icon: HardHat, name: 'Construction Sites' },
  { icon: Hotel, name: 'Hotels & Hospitality' },
  { icon: GraduationCap, name: 'Educational Institutes' },
  { icon: Heart, name: 'Hospitals' },
  { icon: Store, name: 'Shopping Malls' },
  { icon: MapPin, name: 'Faridabad' },
  { icon: MapPin, name: 'Greater Noida' },
  { icon: MapPin, name: 'Gurgaon' },
  { icon: Factory, name: 'Industrial Facilities' },
  { icon: Building2, name: 'Corporate Offices' },
  { icon: Building, name: 'Housing Societies' },
]

function MarqueePill({ icon: Icon, name }: MarqueeItem) {
  return (
    <div className="flex items-center gap-2.5 px-6 py-3 mx-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm whitespace-nowrap hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-300">
      <Icon className="w-4 h-4 text-gold/70" />
      <span className="text-sm text-white/60 font-medium">{name}</span>
    </div>
  )
}

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="industries" className="py-20 bg-[#0a0a0f]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/8 border border-gold/20 text-gold text-xs font-medium tracking-widest uppercase mb-5">
            TRUSTED ACROSS DELHI NCR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our Clients{' '}
            <span className="text-gradient-gold">& Sectors</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Serving housing societies, corporate offices, and industrial facilities across the region.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - Left to Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12"
      >
        <div className="relative overflow-hidden marquee-mask">
          <div className="flex animate-marquee">
            {[...row1Items, ...row1Items].map((item, i) => (
              <div key={i} className="flex-shrink-0">
                <MarqueePill icon={item.icon} name={item.name} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Row 2 - Right to Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4"
      >
        <div className="relative overflow-hidden marquee-mask">
          <div className="flex animate-marquee-reverse">
            {[...row2Items, ...row2Items].map((item, i) => (
              <div key={i} className="flex-shrink-0">
                <MarqueePill icon={item.icon} name={item.name} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
