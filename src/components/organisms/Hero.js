'use client';
import { dataSite } from '@/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-white relative overflow-hidden'>
      <div className='container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 lg:py-32'>
        <div className='relative z-10'>
          {/* Decorative image top left */}
          <div className='absolute top-0 -left-4 md:-left-10 transform -translate-y-1/4 hidden md:block'>
            <div className='relative w-32 h-32 md:w-40 md:h-40'>
              {/* Placeholder for the starburst effect - you might need an SVG or a complex div structure */}
              <div className='absolute inset-0 bg-orange-100 transform rotate-45'></div>
              <Image
                src={dataSite.image_hero}
                alt='Decorative person'
                width={140}
                height={180}
                className='rounded-lg shadow-lg object-cover relative z-10'
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
                }} // Approximate clipping
              />
            </div>
          </div>

          {/* Decorative shape top right */}
          <div className='absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 hidden lg:block'>
            {/* Placeholder for the star shape - best to use an SVG */}
            <svg
              width='150'
              height='150'
              viewBox='0 0 100 100'
              className='text-red-200 fill-current opacity-50'
            >
              <polygon
                points='50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35'
                stroke='red'
                strokeWidth='2'
                fill='none'
              />
              <polygon
                points='50,10 58,37 85,37 63,55 70,80 50,65 30,80 37,55 15,37 42,37'
                className='text-black fill-current'
              />
            </svg>
          </div>

          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800'>
              Driving Excellence{' '}
              <span className='inline-block px-4 py-1 bg-blue-200 text-blue-700 rounded-md'>
                Through
              </span>
            </h1>
            <h2 className='mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700'>
              Strategic
            </h2>
            <h2 className='mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold'>
              <span className='inline-block px-4 py-1 bg-orange-400 text-white rounded-md shadow-lg'>
                Management
              </span>{' '}
              Solutions
            </h2>
          </div>
        </div>

        {/* Main content image/video area */}
        <div className='mt-12 md:mt-16 lg:mt-20 relative'>
          <div className='aspect-w-16 aspect-h-9 rounded-xl md:rounded-3xl shadow-2xl overflow-hidden mx-auto max-w-5xl'>
            {/* Replace with your actual image or video component */}
            <Image
              src={dataSite.image_hero2}
              alt='Creative solutions showcase'
              layout='fill'
              objectFit='cover'
              className='transform scale-105 w-full h-auto' // Slight zoom to mimic the rounded corners effect
            />
          </div>
          {/* Decorative red ball */}
          <div className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 bg-red-500 rounded-full shadow-xl z-20 hidden md:block'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
