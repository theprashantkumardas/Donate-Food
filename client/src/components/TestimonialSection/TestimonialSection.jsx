import React from 'react';
import styles from './TestimonialSection.module.css';
import { FaStar } from 'react-icons/fa'; // Import star icon

const TestimonialSection = ({ tagline, heading, description, testimonials }) => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.starIcon} />
                ))}
              </div>
              <p className={styles.testimonialText}>
                "{testimonial.text}"
              </p>
              <div className={styles.authorInfo}>
                <div className={styles.authorImageContainer}>
                  <img src={testimonial.image} alt={testimonial.name} className={styles.authorImage} />
                </div>
                <div className={styles.authorDetails}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorPosition}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;