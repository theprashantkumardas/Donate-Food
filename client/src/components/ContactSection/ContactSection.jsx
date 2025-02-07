import React from 'react';
import styles from './ContactSection.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import ContactForm from '../ContactForm/ContactForm'; // Import the ContactForm component

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionDescription}>We'd love to hear from you!</p>
        <div className={styles.contactContainer}>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Email</h3>
                <p>Reach out anytime</p>
                <a href="mailto:hello@relume.io">hello@relume.io</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} id='phoneIcon' />
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Phone</h3>
                <p>Call us for support</p>
                <p>+1 (555) 000-0000</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Office</h3>
                <p>123 Sample St, Sydney NSW 2000 AU</p>
                <a href="#" className={styles.getDirections}>Get Directions </a>
              </div>
            </div>
          </div>
          <ContactForm /> {/* Use the ContactForm component */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;