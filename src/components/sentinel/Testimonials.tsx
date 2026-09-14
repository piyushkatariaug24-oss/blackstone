'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Black Stone has been managing security for Princeton Floors for over 2 years. Their guards are well-trained, courteous yet firm, and the regular supervision gives us complete peace of mind.',
    name: 'Rajiv Malhotra',
    title: 'RWA President, Princeton Floors, Gurgaon',
    image: '/images/testimonials/testimonial-1.png',
  },
  {
    quote:
      'We switched to Black Stone for our housekeeping and security needs at Jalvayu Vihar. The difference in cleanliness and security standards was immediately noticeable. Highly professional team.',
    name: 'Sunita Verma',
    title: 'Resident Director, Jalvayu Vihar, Greater Noida',
    image: '/images/testimonials/testimonial-2.png',
  },
  {
    quote:
      'Their facility management services at our corporate office are exceptional. The housekeeping staff uses modern cleaning equipment and the security team is always alert and professional.',
    name: 'Vikram Singh',
    title: 'Operations Head, TechCorp India',
    image: '/images/testimonials/testimonial-3.png',
  },
  {
    quote:
      'From security guards to gardeners, Black Stone provides excellent manpower for our housing society. Their quick response to any issue and regular monitoring is commendable.',
    name: 'Anita Sharma',
    title: 'Secretary, Omaxe Hills RWA, Faridabad',
    image: '/images/testimonials/testimonial-4.png',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => {
        let next = prevPage + newDirection
        if (next < 0) next = testimonials.length - 1
        if (next >= testimonials.length) next = 0
        return [next, newDirection]
      })
    },
    []
  )

  const goTo = useCallback(
    (index: number) => {
      setPage(([prevPage]) => [index, index > prevPage ? 1 : -1])
    },
    []
  )

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isInView, paginate])

  const current = testimonials[page]

  return (
    <section id="testimonials" className="py-24 bg-[#0d1b2a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-badge">
            <MessageSquareQuote className="w-4 h-4" />
            TESTIMONIALS
          </span>
          <h2 className="text-gradient-gold">What Our Clients Say</h2>
          <p>
            Trusted by housing societies, corporate offices, and RWA members
            across Delhi NCR for exceptional facility management services.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-10 h-10 rounded-full border border-gold/30 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-10 h-10 rounded-full border border-gold/30 bg-navy/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="premium-card"
              >
                {/* Large quote icon */}
                <Quote className="w-10 h-10 text-gold/40 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-lg text-white/90 italic leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Gold gradient divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div>
                    <p className="font-semibold text-white">{current.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {current.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === page
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}