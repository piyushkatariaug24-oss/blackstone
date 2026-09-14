'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services does Black Stone Facility Management provide?',
    answer:
      'We provide comprehensive security services (trained guards, gunmen, CCTV, electronic security, fire safety, access control, patrol guards) and facility services (housekeeping, telephone operators, receptionists, data operators, drivers, gardeners, peons, and office support staff).',
  },
  {
    question: 'Are you a licensed and certified company?',
    answer:
      'Yes, Black Stone Facility Management Pvt Ltd is ISO 9001:2015 Certified and PSARA Licensed under the Private Security Agencies Regulation Act. Our CIN is U74999DL2020PTC361359.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are headquartered in Delhi NCR (Mehrauli, South Delhi) and serve clients across Gurgaon, Greater Noida, Faridabad, and Pan India. Our major clients include housing societies like Princeton Floors, Clean & Green, Jalvayu Vihar, and Omaxe Hills.',
  },
  {
    question: 'How do you select and train your security guards?',
    answer:
      'Our guards are selected based on height, weight, physical fitness, and ability to work independently. They undergo rigorous training in SOPs, courtesy with firmness, and regular monitoring through periodic and surprise checks.',
  },
  {
    question: 'Do you provide both male and female staff?',
    answer:
      'Yes, we provide both male and female security guards, housekeeping staff, and facility management professionals to meet the diverse needs of our clients.',
  },
  {
    question: 'What types of clients do you serve?',
    answer:
      'We serve housing societies (RWAs), corporate offices, industrial facilities, hospitals, hotels, educational institutes, shopping malls, and construction sites across Delhi NCR and Pan India.',
  },
  {
    question: 'How quickly can you deploy staff?',
    answer:
      'For urgent requirements in Delhi NCR, we can deploy trained staff within 24-48 hours. For Pan India deployments, we recommend 3-5 days notice for optimal staff selection and deployment.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'You can contact Mr. Swadesh Kumar at +91 9910496844 or email us at blackstone12.sa@gmail.com. We provide free site visits and customized quotations within 24 hours.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-24 bg-[#0d1b2a] relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-heading mb-16"
        >
          <span className="section-badge">FAQ</span>
          <h2 className="text-[#f0f0f5]">Frequently Asked Questions</h2>
          <p>Find answers to common queries about our facility management and security services.</p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-gold/10 data-[state=open]:border-gold/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-white font-medium hover:no-underline hover:text-gold transition-colors duration-300 py-5 text-left text-base sm:text-lg [&[data-state=open]>svg]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#8888a0] leading-relaxed pb-5 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}