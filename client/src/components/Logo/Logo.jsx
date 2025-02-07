import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/images/logo.png'; // Import your logo image

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Food Rescue Logo" className={styles.logoImage} />
        {/* <h1 className={styles.logoText}>lOGO</h1> */}
    </div>
  );
};

export default Logo;