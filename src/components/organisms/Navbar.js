'use client';
import Link from 'next/link';
// import chevron from react icons
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-white py-4 px-6 md:px-10 lg:px-16 shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' legacyBehavior>
          <a className='text-2xl font-bold text-gray-800'>
            <span className='text-red-500'>♦</span>sway
          </a>
        </Link>

        {/* Navigation Links */}
        <ul className='hidden md:flex space-x-6 items-center'>
          <li>
            <Link href='/#about' legacyBehavior>
              <a
                href='/#about'
                className='text-gray-600 hover:text-red-500 flex items-center'
              >
                Know Us
              </a>
            </Link>
          </li>
          <li>
            <Link href='/#services' legacyBehavior>
              <a className='text-gray-600 hover:text-red-500 flex items-center'>
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio' legacyBehavior>
              <a className='text-gray-600 hover:text-red-500 flex items-center'>
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href='/services' legacyBehavior>
              <a className='text-gray-600 hover:text-red-500 flex items-center'>
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href='/#testimonials' legacyBehavior>
              <a className='text-gray-600 hover:text-red-500'>Testimonials</a>
            </Link>
          </li>
          <li>
            <Link href='/#why-us' legacyBehavior>
              <a className='text-gray-600 hover:text-red-500 flex items-center'>
                Why Choose Us
              </a>
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => (window.location.href = '/my-cart')}
          className='relative'
        >
          <a className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300'>
            Go to Cart
          </a>
          {/* counter */}
          <span className='absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full px-2 py-1'>
            3
          </span>
        </button>

        {/* Mobile Menu Button (optional, for smaller screens) */}
        {/* <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
