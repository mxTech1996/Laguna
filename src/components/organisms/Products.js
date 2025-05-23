// components/ProjectCard.js
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
    boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
    transition: { duration: 0.3 },
  },
};

// Helper to get tag color based on category (customize as needed)
const getTagColor = (category) => {
  if (!category) return 'bg-gray-500'; // Default for null category
  const lowerCategory = category.toLowerCase();
  if (lowerCategory.includes('strategy')) return 'bg-red-500';
  if (lowerCategory.includes('digital') || lowerCategory.includes('tech'))
    return 'bg-blue-500';
  if (lowerCategory.includes('operations') || lowerCategory.includes('process'))
    return 'bg-green-500';
  if (lowerCategory.includes('analytics') || lowerCategory.includes('data'))
    return 'bg-purple-500';
  if (lowerCategory.includes('change') || lowerCategory.includes('hr'))
    return 'bg-yellow-500 text-gray-800';
  return 'bg-orange-500'; // Default for other categories
};

const ProjectCard = ({ project }) => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const displayCategory = '$ ' + project.price;
  const isInCart = validateProductInCart(project.id);
  const handleAddToCart = () => {
    handleAddOrRemoveProduct(project.id);
  };

  return (
    <motion.div
      className='border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col'
      variants={cardVariants}
      whileHover='hover'
    >
      <div className='relative w-full h-56 sm:h-64'>
        <Image
          src={
            project.image ||
            'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          } // Fallback image
          alt={project.name || 'Consulting Project'}
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-300 group-hover:scale-105'
        />
        {displayCategory && (
          <span
            className={`absolute bottom-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full ${getTagColor(
              displayCategory
            )}`}
          >
            {displayCategory}
          </span>
        )}
      </div>
      <div className='p-5 flex-grow flex flex-col justify-between'>
        <div>
          <h3 className='text-lg md:text-xl font-semibold text-gray-800 mb-2'>
            {project.name || 'Project Title'}
          </h3>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {project.description}
          </p>
          {/* button add to cart */}
          <button
            onClick={handleAddToCart}
            className={`mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isInCart
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

// Sample data (replace with your actual data source)
const sampleProjects = dataSite.products;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const discoverLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
  },
};

const ProductsSection = ({ projects = sampleProjects }) => {
  // Pass projects as a prop
  return (
    <motion.section
      id='portfolio'
      className='py-16 md:py-24 bg-gray-50' // Light background for the section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3'
          variants={titleVariants}
        >
          Our Products
        </motion.h2>
        {/* <motion.div variants={discoverLinkVariants} className='mb-10 md:mb-12'>
          <Link href='/portfolio' legacyBehavior>
            <a className='text-sm font-medium text-red-600 hover:text-red-800 group inline-flex items-center'>
              Discover More
              <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-1' />
            </a>
          </Link>
        </motion.div> */}

        {projects && projects.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-600'>
            No projects to display at the moment.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default ProductsSection;
