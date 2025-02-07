import React from 'react';
import styles from './TeamSection.module.css';
import Button from '../Button/Button'; // Assuming you have a Button component
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'; // Import social icons

const TeamSection = ({ tagline, heading, description, teamMembers, ctaHeading, ctaDescription, ctaButtonText }) => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.wrapper}>
        <p className={styles.tagline}>{tagline}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imageContainer}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.jobTitle}>{member.jobTitle}</p>
              <p className={styles.memberDescription}>{member.description}</p>
              <div className={styles.socialLinks}>
                <a href={member.linkedin} className={styles.socialIconLink}><FaLinkedin /></a>
                <a href={member.twitter} className={styles.socialIconLink}><FaTwitter /></a>
                <a href={member.website} className={styles.socialIconLink}><FaGlobe /></a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3 className={styles.ctaHeading}>{ctaHeading}</h3>
          <p className={styles.ctaDescription}>{ctaDescription}</p>
          <Button styleType="secondary">{ctaButtonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;