import React from 'react';

import ContactSection from '../components/ContactSection/ContactSection';
import FAQSection from '../components/FAQSection/FAQSection';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import StepsSection from '../components/StepsSection/StepsSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import TwoCardsSection from '../components/TwoCardsSection/TwoCardsSection';
import TeamSection from '../components/TeamSection/TeamSection';


const Donate = () => {

    const headerImg = 'https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const stepsData = [
        {
            title: 'Sign Up',
            description: 'Create a free account and tell us about your business and the types of food.',
            link: '/signup',
            linkText: 'Sign up'
        },
        {
            title: 'Schedule a Donation',
            description: 'Easily schedule one-time or recurring pickups directly through our platform.',
            link: '/schedule',
            linkText: 'Calendar'
        },
        {
            title: 'Track Your Impact',
            description: 'See the real-world results of your donations, from meals served to waste diverted.',
            link: '/impact',
            linkText: 'Graph'
        },
    ];

    const benefitsData = [
        {
            title: 'Tax Deductions',
            description: 'Qualify for potential tax deductions for food donations.'
        },
        {
            title: 'Reduce Waste Disposal Costs',
            description: 'Save money on trash disposal fees by donating instead of discarding.'
        },
        {
            title: 'Boost Your Brand Image',
            description: 'Showcase your commitment to social responsibility and sustainability.'
        },
        {
            title: 'Strengthen Community Ties',
            description: 'Support local charities and help feed those in need.'
        }
    ];

    const twoCardsData = {
        card1: {
            title: 'Tax Deductions',
            description: 'Qualify for potential tax deductions for food donations.',
            button1Text: 'Learn More',
            button2Text: 'Apply Now'
        },
        card2: {
            title: 'Reduce Waste Disposal Costs',
            description: 'Save money on trash disposal fees by donating instead of discarding.',
            button1Text: 'Calculate ',
            button2Text: 'Get Started'
        }
    };

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

    return (
        <>
            <HeaderSection
                tagline="Our Mission:"
                heading="Connecting Communities, Reducing Waste"
                description="We believe no good food should go to waste while people in our community go hungry. Our platform bridges the gap between businesses with surplus food and charities serving those in need, creating a more sustainable and equitable food system."
                image={headerImg} // Replace with your image URL
                button1Text="Get Started"
                button2Text="Schedule a Pickup"
            />
            <StepsSection
                heading="How Easy It Is to Donate"
                steps={stepsData}
            />
            <BenefitsSection
                tagline="Tagline"
                heading="Why Donate Through [Your Platform Name]"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                benefits={benefitsData}
                button1Text="Button"
                button2Text="Button"
            />
            <TwoCardsSection
                tagline="Tagline"
                heading="Additional Benefits"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                card1={twoCardsData.card1}
                card2={twoCardsData.card2}
                button1Text="More Benefits"
                button2Text="Get Started"
            />
            <ContactSection />
            <FAQSection />
            <TeamSection
                tagline="Tagline"
                heading="Our Team"
                description="Meet the Team Dedicated to Change"
                teamMembers={teamMembers}
                ctaHeading="We're Hiring!"
                ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                ctaButtonText="Open Positions"
            />
        </>

    );
};

export default Donate;