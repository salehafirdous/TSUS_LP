import React from 'react';
import { Building2, MapPin, Users, Globe, BookOpen } from 'lucide-react';
import styles from './StatsSection.module.css';

export const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`containerWide ${styles.container}`}>
        <div className={styles.grid}>
          
          <div className={styles.statItem}>
            <Building2 className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>50+</span>
              <span className={styles.label}>Schools</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <MapPin className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>20+</span>
              <span className={styles.label}>Cities</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Globe className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>9+</span>
              <span className={styles.label}>States</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <Users className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>70,000+</span>
              <span className={styles.label}>Students</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <BookOpen className={styles.icon} size={32} />
            <div className={styles.textWrapper}>
              <span className={styles.value}>2500+</span>
              <span className={styles.label}>Teachers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
