// components/TestimonialCard.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
    y: -5,
    boxShadow: '0px 8px 16px rgba(0,0,0,0.05)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// Helper function to get initials
const getInitials = (nameStr) => {
  if (!nameStr) return '?';
  const nameParts = nameStr.split(',')[0].trim().split(' '); // Get the name part before comma, then split by space
  if (nameParts.length === 0 || nameParts[0] === '') return '?';
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
  return (
    nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)
  ).toUpperCase();
};

const TestimonialCard = ({ testimonial }) => {
  const { name: nameStr, description, image } = testimonial;

  // Split name and title/company
  let displayName = nameStr;
  let displayTitleCompany = '';
  const commaIndex = nameStr.indexOf(',');
  if (commaIndex !== -1) {
    displayName = nameStr.substring(0, commaIndex).trim();
    displayTitleCompany = nameStr.substring(commaIndex + 1).trim();
  }

  const initials = getInitials(displayName);

  return (
    <motion.div
      className='flex flex-col bg-rose-50 p-6 rounded-lg h-full text-left' // Light pinkish background
      variants={cardVariants}
      whileHover='hover'
      // For staggering, parent will control 'initial' and 'animate' or use whileInView here
    >
      <div className='mb-4'>
        {image ? (
          <div className='relative w-12 h-12 rounded-full overflow-hidden'>
            <Image
              src={image}
              alt={displayName}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ) : (
          <div className='w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center text-rose-600 font-semibold text-lg'>
            {initials}
          </div>
        )}
      </div>

      <h3 className='text-base sm:text-lg font-semibold text-gray-800'>
        {displayName}
      </h3>
      {displayTitleCompany && (
        <p className='text-xs sm:text-sm text-gray-600 mb-3'>
          {displayTitleCompany}
        </p>
      )}
      <blockquote className='text-sm text-gray-700 leading-relaxed italic'>
        &quot;{description}&quot;
      </blockquote>
      {/* Rating is not displayed to match the visual example. Date is also omitted. */}
    </motion.div>
  );
};

import { dataSite } from '@/data';

// Sample data (replace with your actual data source)
const sampleTestimonials = dataSite.references;

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const TestimonialsSection = ({ testimonials = sampleTestimonials }) => {
  return (
    <motion.section
      id='testimonials'
      className='py-16 md:py-24 bg-white' // Or a very light gray like bg-gray-50 if cards pop more
      variants={sectionContainerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-12'
          variants={titleVariants}
        >
          What Our Clients Say
        </motion.h2>

        {testimonials && testimonials.length > 0 ? (
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={gridVariants}
          >
            {testimonials.map((testimonial) => (
              // TestimonialCard handles its own variants and will be staggered by gridVariants
              <TestimonialCard
                key={testimonial.id || testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        ) : (
          <p className='text-center text-gray-600'>
            No testimonials to display at the moment.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
