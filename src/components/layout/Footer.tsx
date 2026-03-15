// Footer component
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-center text-gray-500">
      © {new Date().getFullYear()} Elaho Labs. All rights reserved.
    </footer>
  );
};

export default Footer;