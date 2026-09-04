import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoCol}>
          <img 
            src="https://www.tsusludhiana.com/assets/site/img/footer/tsus-footer-logo.png" 
            alt="TSUS Footer Logo" 
            className={styles.logo} 
          />
          <p className={styles.tagline}>
            The 21st Century Skills School
          </p>
        </div>
        <div className={styles.infoCol}>
          <p className={styles.address}>
            <strong>The Shri Ram Universal School</strong><br />
            Block-D, Sarabha Nagar, Ludhiana – 141001
          </p>
          <div className={styles.contact}>
            <p>Email: info@tsusludhiana.com</p>
            <p>Phone: +91 98788-78825</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} The Shri Ram Universal School, Ludhiana. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
