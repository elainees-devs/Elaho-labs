// Services section component
import React from 'react';
import { Code2, Smartphone, BrainCircuit } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        <div className="p-8 bg-white rounded-xl shadow">
          <Code2 className="mx-auto text-indigo-600" size={40} />
          <h3 className="text-xl font-semibold mt-4">Web Development</h3>
          <p className="text-gray-600 mt-2">
            Modern websites and scalable SaaS platforms.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow">
          <Smartphone className="mx-auto text-indigo-600" size={40} />
          <h3 className="text-xl font-semibold mt-4">Mobile Apps</h3>
          <p className="text-gray-600 mt-2">
            Cross-platform apps for Android and iOS.
          </p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow">
          <BrainCircuit className="mx-auto text-indigo-600" size={40} />
          <h3 className="text-xl font-semibold mt-4">AI Solutions</h3>
          <p className="text-gray-600 mt-2">
            AI chatbots, automation tools and intelligent systems.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Services;
