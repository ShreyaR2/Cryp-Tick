import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto py-16 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 text-gray-300 bg-radial from-[#451795] to-[#12032b]'>
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold text-[#00ff88]'>REACT.</h1>
        <p className='text-sm leading-relaxed'>
          Pioneering digital solutions through innovative technology and strategic design. 
          Transforming complex challenges into seamless experiences.
        </p>
        <div className='flex space-x-6'>
          <a href="#" className='text-white hover:text-[#00ff88] transition-colors'>
            <FaFacebookSquare size={24} />
          </a>
          <a href="#" className='text-white hover:text-[#00ff88] transition-colors'>
            <FaInstagram size={24} />
          </a>
          <a href="#" className='text-white hover:text-[#00ff88] transition-colors'>
            <FaTwitterSquare size={24} />
          </a>
          <a href="#" className='text-white hover:text-[#00ff88] transition-colors'>
            <FaGithubSquare size={24} />
          </a>
          <a href="#" className='text-white hover:text-[#00ff88] transition-colors'>
            <FaDribbbleSquare size={24} />
          </a>
        </div>
      </div>
      
      <div className='lg:col-span-2 flex flex-wrap justify-between gap-8 mt-6'>
        <div className='min-w-[150px]'>
          <h6 className='font-semibold text-[#00ff88] mb-4'>Solutions</h6>
          <ul className='space-y-3'>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Analytics</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Marketing</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Commerce</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Insights</a></li>
          </ul>
        </div>

        <div className='min-w-[150px]'>
          <h6 className='font-semibold text-[#00ff88] mb-4'>Support</h6>
          <ul className='space-y-3'>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Pricing</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Documentation</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Guides</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>API Status</a></li>
          </ul>
        </div>

        <div className='min-w-[150px]'>
          <h6 className='font-semibold text-[#00ff88] mb-4'>Company</h6>
          <ul className='space-y-3'>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>About</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Blog</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Jobs</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Press</a></li>
          </ul>
        </div>

        <div className='min-w-[150px]'>
          <h6 className='font-semibold text-[#00ff88] mb-4'>Legal</h6>
          <ul className='space-y-3'>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Claim</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Policy</a></li>
            <li><a href="#" className='text-sm hover:text-white transition-colors'>Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;