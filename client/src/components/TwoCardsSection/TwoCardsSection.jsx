import React from 'react';
import styles from './TwoCardsSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon

const TwoCardsSection = ({ tagline, heading, description, card1, card2 }) => {
  return (
    <section className={styles.twoCardsSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>📦</span> {/* Replace with your icon component or image */}
            <h3 className={styles.cardTitle}>{card1.title}</h3>
            <p className={styles.cardDescription}>{card1.description}</p>
            <div className={styles.cardButtons}>
              {card1.button1Text && <Button styleType="secondary">{card1.button1Text}</Button>}
              {card1.button2Text && (
                <Button styleType="primary">
                  {card1.button2Text} <FaArrowRight />
                </Button>
              )}
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>📦</span> {/* Replace with your icon component or image */}
            <h3 className={styles.cardTitle}>{card2.title}</h3>
            <p className={styles.cardDescription}>{card2.description}</p>
            <div className={styles.cardButtons}>
              {card2.button1Text && <Button styleType="secondary">{card2.button1Text}</Button>}
              {card2.button2Text && (
                <Button styleType="primary">
                  {card2.button2Text} <FaArrowRight />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCardsSection;