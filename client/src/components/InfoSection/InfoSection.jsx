import React from 'react';
import styles from './InfoSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaArrowRight } from 'react-icons/fa'; // Arrow icon (you can use a different icon)

const InfoSection = ({ tagline, heading, description, items, button1Text, button2Text }) => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.wrapper}>
                <p className={styles.tagline}>{tagline}</p>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.description}>{description}</p>

                <div className={styles.itemsContainer}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.subHeading}>
                                <span className={styles.itemIcon}>📦</span> {/* Replace with your icon component or image */}
                                <h3 className={styles.itemHeading}>{item.title}</h3>

                            </div>
                            <p className={styles.itemDescription}>{item.description}</p>
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

export default InfoSection;