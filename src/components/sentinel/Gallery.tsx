'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from 'lucide-react'

const galleryItems = [
  { src: '/images/gallery/gallery-1.png', category: 'Security Guards' },
  { src: '/images/gallery/gallery-2.png', category: 'VIP Protection' },
  { src: '/images/gallery/gallery-3.png', category: 'CCTV Monitoring' },
  { src: '/images/gallery/gallery-4.png', category: 'Industrial Security' },
  { src: '/images/gallery/gallery-5.png', category: 'Event Security' },
  { src: '/images/gallery/gallery-6.png', category: 'Housekeeping Services' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-badge">
            <Camera className="w-4 h-4" />
            OUR GALLERY
          </span>
          <h2 className="text-gradient-gold">Our Operations</h2>
          <p>
            A glimpse into our security deployments, housekeeping operations,
            and facility management across Delhi NCR.
          </p>
        </div>

        <motion.div
          className="masonry-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="masonry-item"
            >
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
              />
              <div className="overlay">
                <span className="text-white text-sm font-medium tracking-wide">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}