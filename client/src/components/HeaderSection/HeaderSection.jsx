import React from 'react';
import styles from './HeaderSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component

const HeaderSection = ({ tagline, heading, description, image, button1Text, button2Text }) => {
  return (
    <section
      className={styles.headerSection}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <p className={styles.tagline}>{tagline}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonContainer}>
            {button1Text && <Button styleType="primary">{button1Text}</Button>}
            {button2Text && <Button styleType="secondary">{button2Text}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;