// components/ConsultingCoreValueSection.js
'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const discoverLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4, // Delay to appear after the main text
      ease: 'easeOut',
    },
  },
};

const blockGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2, // Delay the start of blocks animation
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const CoreValueSection = () => {
  return (
    <motion.section
      className='bg-red-600 text-white py-16 md:py-24 px-6 lg:px-8 overflow-hidden'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left Column: Text Content */}
        <div className='md:pr-8'>
          <motion.p
            className='text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium'
            variants={textVariants}
          >
            We champion strategic foresight as the cornerstone of sustainable
            growth. Every solution we craft embodies our commitment to rigorous
            analysis and innovative thinking, ensuring your business navigates
            complexity with clarity and achieves enduring success.
          </motion.p>
          <motion.div variants={discoverLinkVariants}>
            <Link href='/services/strategic-planning' legacyBehavior>
              <a className='mt-8 inline-flex items-center text-sm font-semibold tracking-wider uppercase group text-white hover:text-red-200 transition-colors duration-300'>
                Discover More
                <FaArrowRight className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
              </a>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Stylized Blocks Illustration */}
        <motion.div
          className='relative flex justify-center items-center h-64 md:h-80'
          variants={blockGroupVariants}
        >
          {/* Simplified Block Representation */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className='absolute bg-white bg-opacity-90 shadow-2xl border-2 border-white border-opacity-50'
              variants={blockVariants}
              style={{
                width: i === 1 ? '14rem' : '12rem', // Middle block slightly wider
                height: '4.5rem',
                // Simulating isometric perspective and stacking
                transform: `translateY(${(i - 1) * 3.5}rem) translateX(${
                  (i - 1) * -1
                }rem) rotateX(10deg) rotateY(-15deg) rotateZ(0deg)`,
                // Slightly different offsets for a more dynamic stack
                left: `calc(50% - ${i === 1 ? '7rem' : '6rem'} + ${
                  (i - 1) * 0.5
                }rem)`,
                zIndex: 2 - i, // Top block has higher z-index
                borderRadius: '0.25rem',
              }}
            >
              {/* Inner lines to mimic the image's block details */}
              <div className='w-full h-full relative'>
                {[...Array(3)].map((_, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className='absolute bg-red-300 bg-opacity-30'
                    style={{
                      top: `${(rowIndex + 1) * 25 - 2.5}%`,
                      left: '5%',
                      right: '5%',
                      height: '2px',
                    }}
                  />
                ))}
                {[...Array(5)].map((_, colIndex) => (
                  <div
                    key={`col-${colIndex}`}
                    className='absolute bg-red-300 bg-opacity-30'
                    style={{
                      left: `${(colIndex + 1) * (100 / 6) - 1}%`,
                      top: '10%',
                      bottom: '10%',
                      width: '2px',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoreValueSection;
