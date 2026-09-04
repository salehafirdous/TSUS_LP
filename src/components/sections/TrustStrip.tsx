import React from 'react';
import styles from './TrustStrip.module.css';

export const TrustStrip = () => {
  return (
    <section className={styles.trustStrip}>
      <div className={`containerWide ${styles.container}`}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>10+ YEARS</h2>
          <p className={styles.statLabel}>Educational Legacy</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>100+</h2>
          <p className={styles.statLabel}>Schools Across India</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>50,000+</h2>
          <p className={styles.statLabel}>Students</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>15+ STATES</h2>
          <p className={styles.statLabel}>Across India</p>
        </div>
      </div>
    </section>
  );
};
