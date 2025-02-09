import React from 'react';
import HeaderSection from '../components/HeaderSection/HeaderSection';

import headerImg from '../assets/images/aboutHeaderSectionImg.jpg';
import InfoSection from '../components/InfoSection/InfoSection';
import GridSection from '../components/GridSection/GridSection';
import TeamSection from '../components/TeamSection/TeamSection';
import TimelineSection from '../components/TimelineSection/TimelineSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';


const AboutUs = () => {

  const infoSectionItems = [
    {
      title: 'The Alarming Truth About Food Waste',
      description:
        'Globally, an estimated one-third of all food produced is lost or wasted. In [Your City/Region], this translates to approximately [Number] tons of food ending up in landfills each year. This wasted food contributes significantly to greenhouse gas emissions, consumes precious resources like water and land, and exacerbates the issue of food insecurity.',
    },
    {
      title: 'Connecting Businesses, Nourishing Communities',
      description:
        'We’re providing an immediate solution through the power of connection. By linking local restaurants, grocery stores, and other food businesses with nearby charities, we facilitate the rescue of perfectly good, unsold food and ensure it reaches those who need it most.',
    },
    {
      title: 'Reducing Environmental Impact Together',
      description:
        'Every donation makes a difference in fighting food insecurity.',
    },
    {
      title: 'Addressing the Problem of Hunger',
      description:
        'More than 800 million people worldwide are currently facing problems to having food to eat and [platform name] has solutions to tackle this problem with your cooperation',
    },
    {
      title: 'The Alarming Truth About Food Waste',
      description:
        'Globally, an estimated one-third of all food produced is lost or wasted. In [Your City/Region], this translates to approximately [Number] tons of food ending up in landfills each year.',
    },
    {
      title: 'Addressing the Problem of Hunger',
      description:
        'More than 800 million people worldwide are currently facing problems to having food to eat and [platform name] has solutions to tackle this problem with your cooperation',
    },
  ];

  const gridSectionItems = [
    {
      title: '900+ Meals Served',
      description:
        "We’ve helped provide over [Number] nutritious meals to individuals and families struggling with hunger.",
      image: "https://images.unsplash.com/photo-1609139027234-57570f43f692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",// Replace with your image URL// Replace with your image URL
      tagline: "Tagline",
      buttonText: 'Read More'
    },
    {
      title: 'Tons Diverted',
      description:
        "We've diverted [Number] tons of perfectly edible food from landfills, reducing harmful methane emissions.",
      image: "https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",// Replace with your image URL// Replace with your image URL

      tagline: "Tagline",
      buttonText: 'Read More'
    },

    {
      title: 'Community Impact',
      tagline: "Tagline",
      description:
        "Our initiatives has saved nearly [currency][Amount] worth of food from being thrown away.",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",// Replace with your image URL
      buttonText: 'Read More'
    },
    {
      title: 'Tons Diverted',
      description:
        "We've diverted [Number] tons of perfectly edible food from landfills, reducing harmful methane emissions.",
      image: "https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",// Replace with your image URL// Replace with your image URL

      tagline: "Tagline",
      buttonText: 'Read More'
    },

  ];

  const teamMembers = [
    {
      name: 'John Doe',
      jobTitle: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Jane Smith',
      jobTitle: 'Marketing Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Mike Johnson',
      jobTitle: 'Lead Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'John Doe',
      jobTitle: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'John Doe',
      jobTitle: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Jane Smith',
      jobTitle: 'Marketing Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
  ];

  const timelineItems = [
    {
      date: 'Date',
      title: 'Inspiration Strikes',
      description: 'The idea for [Your Platform Name] is born after witnessing excessive food waste at a local restaurant.',
      button1Text: 'Button',
      button2Text: 'Button'
    },
    {
      date: 'Date',
      title: 'Building the Foundation',
      description: 'Initial seed funding is secured to develop the platform and build partnerships.',
      button1Text: 'Button',
      button2Text: 'Button'
    },
    {
      date: 'Date',
      title: 'Beta Launch',
      description: 'The beta platform launches with [X] participating businesses and charities in [Your City/Region].',
      button1Text: 'Button',
      button2Text: 'Button'
    },
    {
      date: 'Date',
      title: 'Expanding Our Reach:',
      description: 'We expand our operations to [New City/Area], reaching even more communities in need.',
      button1Text: 'Button',
      button2Text: 'Button'
    },
    // Add more timeline items here
  ];
  
  const testimonialsData = [
    {
      name: 'John Doe',
      position: 'Restaurant Name, Restaurant Type',
      text: "Before [Your Platform Name], we were throwing away perfectly good food at the end of each day. Now, we can easily donate it to a local shelter and help feed those in need. It's a win-win!",
      rating: 5,
      image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with your image URL
    },
    {
      name: 'Jane Smith',
      position: 'Position, Company Name',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 4,
      image: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with your image URL
    },
    {
      name: 'Mike Johnson',
      position: 'Position, Company Name',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with your image URL
    },
  ];


  return (
    <div>
      <HeaderSection
        tagline="Our Mission:"
        heading="Connecting Communities, Reducing Waste"
        description="We believe no good food should go to waste while people in our community go hungry. Our platform bridges the gap between businesses with surplus food and charities serving those in need, creating a more sustainable and equitable food system."
        image={headerImg} // Replace with your image URL
        button1Text="Button"
        button2Text="Button"
      />
      <InfoSection
        tagline="Tagline"
        heading="The Problem of Food Waste"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        items={infoSectionItems}
        button1Text="Donate"
        button2Text="Request"
      />
      <GridSection
        tagline="Tagline"
        heading="Our Impact in Local Communities: More Than Just Meals"
        description="Transforming Surplus into Support"
        gridItems={gridSectionItems}
        button1Text="Donate"
        button2Text="Request"
      />
      <TeamSection
        tagline="Tagline"
        heading="Our Team"
        description="Meet the Team Dedicated to Change"
        teamMembers={teamMembers}
        ctaHeading="We're Hiring!"
        ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ctaButtonText="Open Positions"
      />
      <TimelineSection
        tagline="Tagline"
        heading="Our Journey"
        description="The key milestones in our story"
        timelineItems={timelineItems}
        button1Text="Learn More"
        button2Text="Explore"
      />
      <TestimonialSection
        tagline="Tagline"
        heading="Customer Testimonials"
        description="Hear from Our Valued Partners"
        testimonials={testimonialsData}
      />
    </div>
  );
};

export default AboutUs;