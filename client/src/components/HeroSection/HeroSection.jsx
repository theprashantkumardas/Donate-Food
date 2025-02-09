import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button/Button';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <video className={styles.heroVideo} autoPlay loop muted playsInline>
        <source src="https://videos.pexels.com/video-files/6894109/6894109-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.wrapper}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Join the fight against food waste today!</h1>
          <p className={styles.heroDescription}>
            Together, we can make a difference by donating unsold food to those in need. Sign up now to help support your community and reduce waste.
          </p>
            <div className={styles.heroButtons}>
            <Button styleType="primary">Donate Food</Button>
            <Button styleType="secondary">Request Food</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;