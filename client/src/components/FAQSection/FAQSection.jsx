import React from 'react';
import styles from './FAQSection.module.css';
import FAQItem from '../FAQItem/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Is donated food safe to eat?',
      answer:
        'Yes, donated food is safe to eat as long as it meets food safety standards. Donators are encouraged to follow food safety guidelines and ensure that the donated food is still within its expiration date and properly stored.',
    },
    {
      question: 'How do I donate?',
      answer:
        'To donate, sign up on our platform. You can specify the type and quantity of food you want to donate. Our system will help you schedule a pick-up.',
    },
    {
      question: 'Is donated food safe to eat?',
      answer:
        'Yes, donated food is safe to eat as long as it meets food safety standards. Donators are encouraged to follow food safety guidelines and ensure that the donated food is still within its expiration date and properly stored.',
    },
    {
      question: 'How do I donate?',
      answer:
        'To donate, sign up on our platform. You can specify the type and quantity of food you want to donate. Our system will help you schedule a pick-up.',
    },
    {
      question: 'Is donated food safe to eat?',
      answer:
        'Yes, donated food is safe to eat as long as it meets food safety standards. Donators are encouraged to follow food safety guidelines and ensure that the donated food is still within its expiration date and properly stored.',
    },
    {
      question: 'How do I donate?',
      answer:
        'To donate, sign up on our platform. You can specify the type and quantity of food you want to donate. Our system will help you schedule a pick-up.',
    },
    // Add more FAQs here
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>FAQs</h2>
        <p className={styles.sectionDescription}>
          Find answers to common questions about food safety and donation guidelines.
        </p>
        <div className={styles.faqItems}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;