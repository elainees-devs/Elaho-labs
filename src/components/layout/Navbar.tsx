// Navbar component
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
      <h1 className="text-2xl font-bold text-indigo-600">ELAHO Labs</h1>
      <div className="hidden md:flex gap-8">
        <a href="#services">Services</a>
        <a href="#projects">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
