// components/WhyChooseUsSection.js
'use client';

import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Helper component for animated numbers
function AnimatedStatNumber({ targetValue, suffix = '', isK = false }) {
  const ref = useRef(null);
  const finalDisplayValue = isK ? Math.floor(targetValue / 1000) : targetValue;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, finalDisplayValue, {
      duration: 2, // Adjust duration as needed
      ease: [0.25, 0.1, 0.25, 1], // Smooth ease
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [finalDisplayValue]);

  return (
    <span className='inline-block'>
      <span ref={ref}>0</span>
      {isK && 'K'}
      {suffix}
    </span>
  );
}

const statsData = [
  {
    value: 100,
    isK: false,
    textLine1: 'Client',
    textLine2: 'Engagements',
    color: 'text-red-500',
  },
  {
    value: 14,
    textLine1: 'Expert',
    textLine2: 'Consultants',
    color: 'text-red-500',
  }, // Adjusted from 28 for variety
  {
    value: 35,
    textLine1: 'Industry',
    textLine2: 'Recognitions',
    color: 'text-red-500',
  },
  {
    value: 2,
    textLine1: 'Years of',
    textLine2: 'Advisory',
    color: 'text-red-500',
  },
];

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

const itemVariants = {
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

const WhyChooseUsSection = () => {
  return (
    <motion.section
      id='why-us'
      className='py-16 md:py-24 bg-white'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-10 md:gap-16 items-center'>
          {/* Left Column: Stats */}
          <div className='grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12'>
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center md:text-left'
                variants={itemVariants}
              >
                <div
                  className='text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-1
                             text-orange-200/80' // Light fill/outline color for the number
                  style={{
                    WebkitTextStroke: '2px #FECACA', // Outline: light red (adjust color and width)
                    textStroke: '2px #FECACA', // Standard property (browser support varies)
                    // For a more "hollow" effect if fill is truly transparent:
                    // color: 'transparent',
                    // WebkitTextStroke: '2px #FFDAB9', // Example: peachy outline
                  }}
                >
                  <AnimatedStatNumber targetValue={stat.value} isK={stat.isK} />
                </div>
                <p
                  className={`text-sm sm:text-base font-semibold ${stat.color} leading-tight`}
                >
                  {stat.textLine1} <br className='hidden sm:inline' />
                  {stat.textLine2}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Text Content */}
          <motion.div variants={itemVariants}>
            <p className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2'>
              Why Choose Us
            </p>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5'>
              Elevate Your Vision
            </h2>
            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
              We possess the expertise to bring your strategic vision to life.
              Our team excels in diverse consulting disciplines, including
              market analysis, operational improvement, digital strategy, and
              organizational change. Trust us to transform your complex
              challenges into impactful and sustainable business realities.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
