import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoCol}>
          <img
            src="/images/TSUS_Logo.png"
            alt="TSUS Footer Logo"
            className={styles.logo}
          />
        </div>
        
        <div className={styles.addressCol}>
          <div className={styles.mapContainer}>
            <iframe 
              src="https://maps.google.com/maps?q=The+Shri+Ram+Universal+School,+Sarabha+Nagar,+Ludhiana&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TSUS Ludhiana Map"
            ></iframe>
          </div>
        </div>      </div>
      <div className={styles.copyright}>
        <div className={`container ${styles.copyrightContainer}`}>
          <p>&copy; {new Date().getFullYear()} The Shri Ram Universal School, Ludhiana. All Rights Reserved.</p>
          <p>Developed by RightBrain Infotech Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};
