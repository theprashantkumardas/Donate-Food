import React from 'react';
import styles from './FAQSection.module.css';
import FAQItem from '../FAQItem/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What types of food can I donate?',
      answer:
        'We accept a wide range of food items, including perishable and non-perishable goods.  This could be anything from unsold prepared meals, surplus produce, canned goods, to bakery items.  Food must be within its expiration date, properly stored, and in good condition.  Please check our guidelines for a detailed list of acceptable items.',
    },
    {
      question: 'What happens to the donated food?',
      answer:
        'Donated food is carefully inspected to meet safety standards and then distributed to our partner network of local charities.  These charities provide meals and food assistance to individuals and families facing food insecurity in our community.  We prioritize getting the food to where it is needed most quickly and efficiently.',
    },
    {
      question: 'How do I schedule a food donation pickup?',
      answer:
        'Scheduling a pickup is easy!  After creating an account on our platform, you can access the "Donate Food" section to list the available items and preferred pickup times.  Our system will then match you with a local charity, and we ll coordinate the logistics.',
    },
    {
      question: 'What if a charity cant accept my donation?',
      answer:
        'If the initially matched charity is unable to accept your donation due to capacity constraints or specific needs, our system will automatically search for alternative partners in your area.  We ll keep you informed throughout the process to ensure your donation finds a good home.',
    },
    {
      question: 'What food safety guidelines should I follow when donating?',
      answer:
        'Food safety is our top priority! Please ensure that all food is handled, stored, and transported according to safe food handling practices. Refrigerate perishable items promptly, label food clearly, and avoid donating food that shows signs of spoilage. We recommend following guidelines from your local health department.',
    },
    {
      question: 'Is my donation tax-deductible?',
      answer:
        'In many cases, food donations are eligible for tax deductions.  We recommend consulting with your tax advisor to determine the specific benefits available to you.  We can provide documentation for your donations upon request.',
    },
    {
      question: 'Can I request a specific charity to receive my donation?',
      answer:
        'While our system aims to match donations with the most appropriate nearby charity, we understand you may have a preference.  You can indicate preferred charities in your profile, and we ll do our best to accommodate your request, availability permitting.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We currently serve [List of Cities/Regions] but are rapidly expanding! Check back often to see if weve launched in your area.  If youre outside our current service area but interested in donating or partnering, please contact us – we d love to explore future opportunities.',
    },
    {
      question: 'What measures are in place to ensure food safety during transport?',
      answer:
        'We have strict protocols for food safety during transport. All drivers and volunteers are trained in safe food handling practices. We have a collaboration between partner business in logistics industry in our area. Perishable items are transported in refrigerated vehicles to ensure they remain at safe temperatures during transit.',
    },
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