import React, { useState } from 'react';
import styles from './FAQItem.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.questionContainer} onClick={toggleOpen}>
        <h3 className={styles.question}>{question}</h3>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
};

export default FAQItem;