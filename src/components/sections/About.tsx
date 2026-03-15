import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="/images/about.png"
            alt="Elaho Labs team working"
            className="rounded-xl shadow"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Elaho Labs</h2>

          <p className="text-gray-600 mb-4">
            Elaho Labs is a software development studio focused on building
            modern web, mobile, and AI-powered applications for startups and
            businesses. Our mission is to transform ideas into scalable digital
            solutions that help companies grow and innovate.
          </p>

          <p className="text-gray-600 mb-6">
            From MVP development to full-scale platforms, we work closely with
            clients to design, develop, and deploy reliable software using
            modern technologies.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">10+</h3>
              <p className="text-gray-600">Projects Built</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-600">5+</h3>
              <p className="text-gray-600">Technologies Used</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-600">100%</h3>
              <p className="text-gray-600">Client Focused</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-indigo-600">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;