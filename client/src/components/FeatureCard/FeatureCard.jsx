import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className={styles.featureCard}>
      
        <img src={image} alt={title} className={styles.imageContainer} />
      
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;