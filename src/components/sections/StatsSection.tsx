import React from 'react';
import { Building2, MapPin, Users, Globe } from 'lucide-react';
import styles from './StatsSection.module.css';

export const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`containerWide ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.statItem}>
            <Building2 className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>10+ YEARS</span>
              <span className={styles.label}>Educational Legacy</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <MapPin className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>100+</span>
              <span className={styles.label}>Schools Across India</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Users className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>50,000+</span>
              <span className={styles.label}>Students</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Globe className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>15+ STATES</span>
              <span className={styles.label}>Across India</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
