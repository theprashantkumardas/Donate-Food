import React from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import FAQSection from '../components/FAQSection/FAQSection';
import ContactSection from '../components/ContactSection/ContactSection';


const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <FeatureSection />
      <ContactSection />
      <FAQSection />
      
    </div>
  );
};

export default Home;