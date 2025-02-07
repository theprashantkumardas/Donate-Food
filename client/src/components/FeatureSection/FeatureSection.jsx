import React from 'react';
import styles from './FeatureSection.module.css';
import FeatureCard from '../FeatureCard/FeatureCard'; // Import FeatureCard component
import ReduceFoodWaste from '../../assets/images/feature1.jpg'; // Import images
import SupportLocalCommunities from '../../assets/images/feature2.jpg';
import StreamlinedDonation from '../../assets/images/feature3.jpg';
import Button from '../Button/Button'; // Import Button component
import { FaArrowRight } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      title: 'Reduce Food Waste Effectively',
      description: 'Join us in the fight against food waste.',
      image: ReduceFoodWaste,
    },
    {
      title: 'Support Local Communities With Every Donation',
      description: 'Your contributions make a real difference.',
      image: SupportLocalCommunities,
    },
    {
      title: 'Streamlined Donation Process For Everyone',
      description: 'Easily schedule and track your donations.',
      image: StreamlinedDonation,
    },
  ];

  return (
    <section className={styles.featureSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>Transforming Food Waste into Community Support</h2>
        <p className={styles.sectionDescription}>
          Our platform connects businesses with charities to minimize food waste. By donating unsold
          food, you can help nourish those in need while supporting local communities.
        </p>
        <div className={styles.featureCardsContainer}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button styleType="secondary">Donate</Button>
          <Button styleType="primary">
            Request <FaArrowRight />
          </Button>
        </div>
        <p className={styles.impactText}>Impact</p>
      </div>
    </section>
  );
};

export default FeatureSection;