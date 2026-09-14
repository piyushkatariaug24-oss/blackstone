'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Users, MapPin, TrendingUp } from 'lucide-react'

interface StatItem {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  {
    icon: Shield,
    value: 700,
    suffix: '+',
    label: 'Guards & Staff',
  },
  {
    icon: Users,
    value: 6,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    icon: MapPin,
    value: 50,
    suffix: '+',
    label: 'Client Locations',
  },
  {
    icon: TrendingUp,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
  },
]

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="text-5xl md:text-6xl font-bold text-gradient-gold tabular-nums">
      {count}
      <span className="text-gold-light">{suffix}</span>
    </span>
  )
}

export default function Statistics() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-20 bg-[#0a0a0f] relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      {/* Top gold gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      {/* Bottom gold gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="text-center relative"
              >
                {/* Gold gradient glow behind number */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-16 bg-gold/8 blur-3xl rounded-full" />

                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>

                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />

                <p className="text-muted-foreground mt-3 text-sm sm:text-base font-medium tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}