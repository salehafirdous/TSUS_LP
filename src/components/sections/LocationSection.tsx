import React from 'react';
import { Button } from '../ui/Button';
import styles from './LocationSection.module.css';
import { MapPin } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>CONVENIENTLY LOCATED</span>
          <h2 className={styles.headline}>A Nursery-to-Grade-10 CBSE School in Sarabha Nagar, Ludhiana</h2>
          
          <div className={styles.addressBox}>
            <MapPin className={styles.icon} size={32} />
            <div>
              <strong>The Shri Ram Universal School</strong><br />
              Block-D, Sarabha Nagar, Ludhiana – 141001
            </div>
          </div>
          
          <p className={styles.desc}>
            Convenient for families from Sarabha Nagar, Model Town, Civil Lines, BRS Nagar, Aggar Nagar, Kitchlu Nagar, and surrounding Ludhiana areas.
          </p>
          
          <div className={styles.actions}>
            <Button variant="primary">GET DIRECTIONS</Button>
            <Button variant="outline">BOOK A CAMPUS VISIT</Button>
          </div>
        </div>
        <div className={styles.mapCol}>
          <div className={styles.imageContainer}>
            <img
              src="/images/School.jpg"
              alt="The Shri Ram Universal School Campus"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
