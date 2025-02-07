import React from 'react';
import styles from './GridSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon

const GridSection = ({ tagline, heading, description, gridItems, button1Text, button2Text }) => {
  return (
    <section className={styles.gridSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.gridContainer}>
          {gridItems.map((item, index) => (
            <div key={index} className={styles.gridItem}>
              {item.image && (
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} className={styles.gridImage} />
                </div>
              )}
              <div className={styles.container}>
              <p className={styles.itemTagline}>{item.tagline}</p>
              <h3 className={styles.itemHeading}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
              {item.buttonText && (
                <Button styleType="secondary">
                  {item.buttonText} <FaArrowRight />
                </Button>
              )}
              </div>
              
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          {button1Text && <Button styleType="secondary">{button1Text}</Button>}
          {button2Text && (
            <Button styleType="primary">
              {button2Text} <FaArrowRight />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GridSection;