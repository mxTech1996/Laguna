// components/AboutSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Using a star icon from react-icons as a simpler base for the starburst
// You can replace this with a custom SVG or more complex CSS if needed
import { FaStar } from 'react-icons/fa'; // Example, can be replaced by a more jagged star or custom SVG
import { dataSite } from '@/data';

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

const textChildVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      // Corrección: Ajusta el tercer valor (P2x) para que esté entre 0 y 1.
      // Esta es una curva easeOutExpo aproximada.
      // Puedes usar herramientas online como https://cubic-bezier.com/ para encontrar la curva que te guste.
      ease: [0.16, 1, 0.3, 1], // Ejemplo de una curva válida (easeOutExpo like)
      // O una más simple como:
      // ease: [0.25, 0.1, 0.25, 1], // Curva general suave
    },
  },
};

const decorativeStarVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      delay: 0.4,
    },
  },
};

const spiralVariants = {
  hidden: { opacity: 0, pathLength: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      className='py-16 md:py-24 bg-white overflow-hidden' // White background
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Left Column: Text Content */}
          <motion.div className='relative z-10'>
            <motion.p
              className='text-sm font-semibold text-red-600 uppercase tracking-wider mb-2'
              variants={textChildVariants}
            >
              Our Approach
            </motion.p>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5'
              variants={textChildVariants}
            >
              More Than Surface-Level Solutions
            </motion.h2>
            <motion.p
              className='text-base md:text-lg text-gray-600 leading-relaxed'
              variants={textChildVariants}
            >
              Whether you&#39;re seeking transformative business strategies,
              operational excellence, or insightful market analysis, we have the
              expertise to make it happen. Our team is skilled in a range of
              consulting disciplines, including strategic planning, process
              optimization, digital transformation, and change management,
              delivering outcomes that drive real value.
            </motion.p>
          </motion.div>

          {/* Right Column: Image and Decorative Elements */}
          <motion.div className='relative flex justify-center items-center mt-10 md:mt-0'>
            {/* Decorative Spirals (SVG) - positioned behind */}
            <motion.svg
              width='180'
              height='150'
              viewBox='0 0 150 120'
              className='absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-60 -z-1'
              style={{ filter: 'blur(0.5px)' }}
              aria-hidden='true'
            >
              <motion.path
                d='M 10 60 C 10 20, 140 20, 140 60 S 10 100, 10 60'
                stroke='#FF8A65' // Light Orange color
                strokeWidth='2.5'
                fill='transparent'
                variants={spiralVariants}
              />
              <motion.path
                d='M 20 70 C 20 30, 130 30, 130 70 S 20 110, 20 70'
                stroke='#FF7043' // Medium Orange color
                strokeWidth='2'
                fill='transparent'
                variants={{
                  ...spiralVariants,
                  visible: {
                    ...spiralVariants.visible,
                    transition: {
                      ...spiralVariants.visible.transition,
                      delay: spiralVariants.visible.transition.delay + 0.2,
                    },
                  },
                }} // Slightly delay second spiral
              />
            </motion.svg>

            {/* Main Image */}
            <motion.div
              className='relative w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-lg shadow-2xl overflow-hidden'
              variants={imageVariants}
            >
              <Image
                src={dataSite.image_hero2}
                alt='Strategic process and creative solutions'
                layout='fill'
                objectFit='cover'
              />
            </motion.div>

            {/* Decorative Starburst - positioned to overlap from left-middle of image */}
            <motion.div
              className='absolute left-0 md:-left-8 top-1/2 transform -translate-y-1/2 z-20'
              variants={decorativeStarVariants}
              style={{
                // Adjust size and position as needed
                width: '80px',
                height: '80px',
                marginLeft: '-15px', // To pull it slightly more to the left of image edge
              }}
            >
              {/* Simple CSS Star - can be replaced with more complex SVG or icon */}
              <div className='relative w-full h-full'>
                {[0, 30, 60, 90, 120, 150].map((angle) => (
                  <div
                    key={angle}
                    className='absolute w-full h-1.5 bg-red-500 rounded-full'
                    style={{
                      top: '50%',
                      left: '0%',
                      transformOrigin: 'center left',
                      transform: `translateY(-50%) rotate(${angle}deg) scaleX(0.9)`,
                    }}
                  />
                ))}
                <div className='absolute inset-0 w-12 h-12 bg-red-500 rounded-full m-auto opacity-80 blur-sm'></div>
                <div className='absolute inset-0 w-10 h-10 bg-red-600 rounded-full m-auto'></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
