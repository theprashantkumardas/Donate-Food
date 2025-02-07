import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required />
      </div>
      <button type="submit" className={styles.submitButton}>Send Message</button>
    </form>
  );
};

export default ContactForm;