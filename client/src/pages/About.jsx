import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className="text-center mb-12">
        <h1 className='text-4xl font-bold mb-4 text-slate-800'>About AbodeAvenue</h1>
        <p className='text-lg text-slate-700'>Welcome to AbodeAvenue - Your Trusted Real Estate Partner</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img src="/images/real-estate-agent.svg" alt="Real Estate Agent" className="max-w-xs md:max-w-sm" />
        </div>
        <div>
          <p className='mb-4 text-lg text-slate-700'>At AbodeAvenue, we are passionate about helping you find your dream home or sell your property for the best value. Our team of experienced real estate agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
          <p className='mb-4 text-lg text-slate-700'>Whether you're a first-time homebuyer or a seasoned investor, we're here to guide you every step of the way. We specialize in properties in the most desirable neighborhoods and offer personalized assistance tailored to your unique needs.</p>
          <p className='mb-4 text-lg text-slate-700'>Our mission is to help you achieve your real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. With AbodeAvenue, you can trust that you're in good hands.</p>
        </div>
      </div>
    </div>
  );
}
