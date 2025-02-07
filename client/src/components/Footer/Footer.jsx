import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Logo />
            <div className={styles.location}>
              <p className={styles.footerLabel}>Location:</p>
              <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
            </div>
            <div className={styles.phone}>
              <p className={styles.footerLabel}>Phone:</p>
              <p>1800 123 4567</p>
            </div>
            <div className={styles.email}>
              <p className={styles.footerLabel}>Email:</p>
              <p>support@relume.io</p>
            </div>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIconLink}><FaFacebook /></a>
              <a href="#" className={styles.socialIconLink}><FaInstagram /></a>
              <a href="#" className={styles.socialIconLink}><FaTwitter /></a>
              <a href="#" className={styles.socialIconLink}><FaLinkedin /></a>
              <a href="#" className={styles.socialIconLink}><FaYoutube /></a>
            </div>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.footerLinksColumn}>
              <h4 className={styles.footerLinksColumnTitle}></h4>
              <ul className={styles.footerLinks}>
                <li><a href="/about" className={styles.footerLink}>About Us</a></li>
                <li><a href="/get-involved" className={styles.footerLink}>Get Involved</a></li>
                <li><a href="/our-impact" className={styles.footerLink}>Our Impact</a></li>
                <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
                <li><a href="/faqs" className={styles.footerLink}>FAQs</a></li>
              </ul>
            </div>
            <div className={styles.footerLinksColumn}>
              <h4 className={styles.footerLinksColumnTitle}></h4>
              <ul className={styles.footerLinks}>
                <li><a href="/blog" className={styles.footerLink}>Blog</a></li>
                <li><a href="/careers" className={styles.footerLink}>Careers</a></li>
                <li><a href="/newsroom" className={styles.footerLink}>Newsroom</a></li>
                <li><a href="/events" className={styles.footerLink}>Events</a></li>
                <li><a href="/volunteer" className={styles.footerLink}>Volunteer</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2024 Relume. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="/privacy" className={styles.bottomLink}>Privacy Policy</a>
            <a href="/terms" className={styles.bottomLink}>Terms of Service</a>
            <a href="/cookies" className={styles.bottomLink}>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;