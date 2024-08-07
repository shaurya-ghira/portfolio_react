import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Heyy there! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Shauryaditya Singh
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-end Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a front-end developer learning to building (mostly trying to
          build) creatives web apps. Currently, I’m focused on
          building full-stack web applications using Django.
        </p>
        <div>
          <Link to='work' smooth={true} duration={900}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;