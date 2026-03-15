// Hero section component
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-5xl font-bold max-w-3xl mx-auto">
        Build Powerful Web, Mobile & AI Applications
      </h1>
      <p className="mt-6 text-lg opacity-90 max-w-xl mx-auto">
        Elaho Labs helps startups and businesses turn ideas into scalable
        digital products.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-lg">
          View Our Work
        </button>
      </div>
    </section>
  );
};

export default Hero;