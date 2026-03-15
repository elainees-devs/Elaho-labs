import React, { useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import CalendarModal from "../ui/CalendarModal";

const Contact: React.FC = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-3">
            Have an idea or project? Let’s build it together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

            <p className="text-gray-600 mb-6">
              Elaho Labs helps businesses build modern web, mobile and AI
              solutions. Tell us about your project and we’ll help bring it to
              life.
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-medium">Email:</span> hello@elaho.dev
              </p>

              <p>
                <span className="font-medium">Location:</span> Nairobi, Kenya
              </p>

              <p>
                <span className="font-medium">Phone:</span> +254 700 000 000
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow space-y-6">

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                onClick={() => setCalendarOpen(true)}
              >
                <span className="flex items-center"><CalendarCheck size={20} /></span>
                Book Now
              </button>
              <CalendarModal isOpen={calendarOpen} onClose={() => setCalendarOpen(false)} />
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;