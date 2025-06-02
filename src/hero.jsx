import React from 'react';

import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero relative min-h-screen -mt-20 grid grid-cols-1 justify-items-center ' onMouseOver={closeSubmenu}>
      <div className='hero-center w-[90vw] max-w-[var(--max-width)] grid items-center'>
        <article >
          <h1 className='hero-info capitalize max-w-[500px] mb-8 text-white text-4xl font-bold'>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p className='max-w-[35em] leading-[1.8] text-white '>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn font-bold bg-white p-2 mt-2 rounded shadow-md hover:bg-gray-300 text-purple-900 '>Start now</button>
        </article>
       
      </div>
    </section>
  );
};

export default Hero;