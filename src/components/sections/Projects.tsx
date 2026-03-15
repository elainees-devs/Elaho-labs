// Projects section component
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-center px-8">
      <h2 className="text-3xl font-bold">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">EduSynx Platform</h3>
          <p className="text-gray-600">School management system</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Retail POS</h3>
          <p className="text-gray-600">Offline point of sale system</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">AI Chatbot</h3>
          <p className="text-gray-600">Customer automation assistant</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;