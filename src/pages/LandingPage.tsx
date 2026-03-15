import React from "react";
import {
  Navbar,
  Hero,
  Services,
  Projects,
  CTA,
  About,
  WhyChooseElaho,
  Contact,
  Footer,
} from "../components";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyChooseElaho />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
