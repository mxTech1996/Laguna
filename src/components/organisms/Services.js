// components/ServiceCard.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { dataSite } from '@/data';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const hoverVariants = {
  hover: {
    y: -6,
    boxShadow: '0px 12px 24px rgba(0,0,0,0.08)', // Slightly more pronounced shadow on hover
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const ServiceCard = ({ service }) => {
  // Create a slug from the title for the URL (basic version)
  const slug = service.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  return (
    <motion.div
      className='flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 h-full'
      variants={cardVariants}
      whileHover='hover'
      initial='hidden' // Ensure variants are applied on initial render if staggered
      animate='visible' // If staggered by parent, parent controls this. Or can be whileInView.
    >
      <div className='relative w-full aspect-[16/10] sm:aspect-[16/9]'>
        <Image
          src={
            service.image ||
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          } // Fallback image
          alt={service.title}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-300 group-hover:scale-105' // Apply group hover from parent if needed
        />
      </div>
      <div className='p-5 sm:p-6 flex flex-col flex-grow'>
        <h3 className='text-lg md:text-xl font-semibold text-gray-900 mb-2'>
          {service.title}
        </h3>
        <p className='text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3'>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

// components/ConsultingServicesSection.js

// Sample data using your provided structure + some more for variety
const sampleServices = dataSite.services;

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      // Stagger direct children if needed, or let children have their own delays
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const discoverLinkSectionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
  },
};

const gridVariants = {
  hidden: {}, // Parent doesn't need opacity if children handle it
  visible: {
    transition: {
      staggerChildren: 0.15, // Stagger the appearance of children (ServiceCard)
      delayChildren: 0.2, // Small delay before the first child starts
    },
  },
};

const ConsultingServicesSection = ({ services = sampleServices }) => {
  // Pass services as a prop
  return (
    <motion.section
      className='py-16 md:py-24 bg-white'
      variants={sectionContainerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-12'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-0'
            variants={titleVariants}
          >
            Our Consulting Services
          </motion.h2>
        </div>

        {services && services.length > 0 ? (
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
            variants={gridVariants}
            // initial="hidden" // Already handled by parent or card itself
            // animate="visible" // Already handled by parent or card itself
          >
            {services.map((service) => (
              // ServiceCard now handles its own hidden/visible through its variants
              // and will be staggered by the parent gridVariants
              <ServiceCard
                key={service.id || service.title}
                service={service}
              />
            ))}
          </motion.div>
        ) : (
          <p className='text-center text-gray-600'>
            No services to display at the moment.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default ConsultingServicesSection;
