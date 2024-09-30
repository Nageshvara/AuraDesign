import React from 'react';
import './App.css';
import { Navbarcomp } from './components/NavbarComp';
import { ShimmerButtonDemo } from './components/ShimmerButtonDemo';
import Moveupcards from './components/Moveupcards';
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCards';
import { FooterComp } from './components/FooterComp';

function App() {
  return (
    <div className="bg-[#f0f8ff]">
      <Navbarcomp/>
      <div className="relative flex flex-col-reverse md:flex-row-reverse justify-between h-[40rem]">
        {/* Image for mobile (visible only on small screens) */}
        <div className="md:hidden flex justify-center items-center">
          <div className='absolute inset-0 flex justify-center items-center'>
              <h1 className='text-[8rem] text-[#171717] opacity-5' style={{ fontFamily: 'Makota, sans-serif' }}>AURA</h1>
          </div>
        </div>

        {/* Image for desktop */}
        <div className="hidden md:flex justify-center items-center gap-4 w-1/2 overflow-hidden">
          <img src='/assets/image_1.png' alt='modelpic' className='h-[45rem] opacity-90' />
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 md:relative flex flex-col items-center justify-center md:w-1/2 z-10 gap-8 p-6 mt-20">
          <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-[#171717]' style={{ fontFamily: 'Stardom, sans-serif' }}>
            Cosmetics and <span className='text-[#735DA5] font-bold'>Confidence</span>
          </h1>
          <h3 className="text-xl md:text-3xl text-center" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Unleash Your True Beauty
          </h3>
          <ShimmerButtonDemo />
        </div>
      </div>
      <div className='mt-12 relative md:mb-36'>
        <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-6xl md:leading-[5rem] text-[#171717]' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
          About the Collection
        </h1>
        <div className='relative top-8'>
          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-8xl text-[#171717] opacity-10' style={{ fontFamily: 'Makota, sans-serif' }}>AURA</h1>
          </div>
          <p className='text-center text-xl md:text-2xl md:px-36 px-8 text-[#171717] relative z-10' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
          Discover Aura Collection, where beauty meets elegance. Our premium range offers high-quality, skin-loving cosmetics designed for every skin tone. Unleash your confidence with shades that let you shine.
          </p>
        </div>
      </div>

      <div className='mt-12'>
        <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-6xl md:leading-[5rem] text-[#171717]' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>Embrace the Aura of Beauty</h1>
        <Moveupcards/>
      </div>
      <div className='relative top-8'>
          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-8xl text-[#171717] opacity-10 font-bold' style={{ fontFamily: 'Makota, sans-serif' }}>A-Z</h1>
          </div>
          <h1 className='text-4xl font-bold text-center tracking-[-0.02em] md:text-6xl md:leading-[5rem] text-[#171717]' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>What our Customers Say</h1>
          <InfiniteMovingCardsDemo/>
      </div>
      <FooterComp/>
    </div>
  );
}

export default App;
