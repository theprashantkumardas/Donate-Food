import React from 'react';
import styles from './TimelineSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon

const TimelineSection = ({ tagline, heading, description, timelineItems, button1Text, button2Text }) => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineDate}>{item.date}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDescription}>{item.description}</p>
                <div className={styles.timelineButtons}>
                  {item.button1Text && <Button styleType="secondary">{item.button1Text}</Button>}
                  {item.button2Text && (
                    <Button styleType="primary">
                      {item.button2Text} <FaArrowRight />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={styles.buttonContainer}>
          {button1Text && <Button styleType="secondary">{button1Text}</Button>}
          {button2Text && (
            <Button styleType="primary">
              {button2Text} <FaArrowRight />
            </Button>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default TimelineSection;