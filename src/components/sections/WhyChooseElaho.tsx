import React from "react";
import { CheckCircle2 } from "lucide-react"; 

const WhyChooseElaho: React.FC = () => {
  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Why Choose Elaho Labs?</h2>
        <p className="text-gray-600 mb-12">
          We deliver scalable, modern, and intelligent digital solutions that help your business grow.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-indigo-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Scalable & Reliable</h3>
              <p className="text-gray-600 text-sm">Solutions built to grow with your business.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-indigo-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Fast MVP Development</h3>
              <p className="text-gray-600 text-sm">Launch products quickly and efficiently.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-indigo-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">AI & Automation</h3>
              <p className="text-gray-600 text-sm">Smarter solutions to save time and increase productivity.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-indigo-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Modern UI/UX Design</h3>
              <p className="text-gray-600 text-sm">Intuitive, mobile-friendly, and visually appealing designs.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseElaho;