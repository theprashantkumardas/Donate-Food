import React from 'react';
import styles from './BenefitsSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon

const BenefitsSection = ({ tagline, heading, description, benefits, button1Text, button2Text }) => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.wrapper}>
        <div className={styles.introSection}>
          <p className={styles.tagline}>{tagline}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}>
            {button1Text && <Button styleType="secondary">{button1Text}</Button>}
            {button2Text && (
              <Button styleType="primary">
                {button2Text} <FaArrowRight />
              </Button>
            )}
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>📦</span> {/* Replace with your icon component or image */}
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;