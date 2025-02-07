import React from 'react';
import styles from './StepsSection.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const StepsSection = ({ tagline, heading, steps }) => {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.stepIcon}>📦</span> {/* Replace with your icon component or image */}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <a href={step.link} className={styles.stepLink}>
                {step.linkText} <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;