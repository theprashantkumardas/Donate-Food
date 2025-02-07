import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("toggleMobileMenu clicked!");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Logo />

        {/* Hamburger Menu Icon */}
        <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMobileMenuOpen ? `${styles.navList} ${styles.navListMobile}` : styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/donate" className={styles.navLink}>Donate</Link>
          </li>
          {/* Sign Up Button in Mobile Menu */}
          {isMobileMenuOpen && (
            <li className={styles.navItem}>
              <Link to="/signup" className={styles.navLink}>Sign Up</Link>
            </li>
          )}
        </ul>

        <div className={styles.navButtons}>
          <Link to="/signup"><Button styleType="secondary">Sign Up</Button></Link>
          {/* <Button primary>Login</Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;