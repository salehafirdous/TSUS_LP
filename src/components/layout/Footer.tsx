import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoCol}>
          <img
            src="/images/FooterLogo.png"
            alt="TSUS Footer Logo"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            The 21st Century Skills School
          </p>
        </div>
        <div className={styles.infoCol}>
          <div className={styles.contact}>
            <p>Email: info@tsusludhiana.com</p>
            <p>Phone: +91 98788-78825</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={`container ${styles.copyrightContainer}`}>
          <p>&copy; {new Date().getFullYear()} The Shri Ram Universal School, Ludhiana. All Rights Reserved.</p>
          <p>Developed by RightBrain Infotech Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};
