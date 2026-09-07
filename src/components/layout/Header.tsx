import React from 'react';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logoLink}>
            <img 
              src="/images/Logo.png" 
              alt="TSUS Ludhiana Logo" 
              className={styles.logo} 
            />
          </a>
          <div className={styles.taglineWrapper}>
            <span className={styles.taglineText}>The 21st Century Skills School</span>
          </div>
        </div>
        <div className={styles.actions}>
          <Button variant="primary" href="#lead-form">Enquire Now</Button>
        </div>
      </div>
    </header>
  );
};
