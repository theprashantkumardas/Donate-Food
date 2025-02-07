import React from 'react';

import ContactSection from '../components/ContactSection/ContactSection';
import FAQSection from '../components/FAQSection/FAQSection';
import HeaderSection from '../components/HeaderSection/HeaderSection';


const Contact = () => {

  const headerImg = 'https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


  return (
    <>
      <HeaderSection
        tagline="Our Mission:"
        heading="Connecting Communities, Reducing Waste"
        description="We believe no good food should go to waste while people in our community go hungry. Our platform bridges the gap between businesses with surplus food and charities serving those in need, creating a more sustainable and equitable food system."
        image={headerImg} // Replace with your image URL
        button1Text="Button"
        button2Text="Button"
      />
      <ContactSection />
      <FAQSection />
    </>

  );
};

export default Contact;