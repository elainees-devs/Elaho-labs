// CTA section component
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Have an Idea? Let's Build It Together
      </h2>
      <button className="mt-6 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold">
        Start Your Project
      </button>
    </section>
  );
};

export default CTA;
