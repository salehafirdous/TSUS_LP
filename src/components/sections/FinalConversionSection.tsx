import React from 'react';
import { Button } from '../ui/Button';
import styles from './FinalConversionSection.module.css';

export const FinalConversionSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>THE NEXT STEP</span>
          <h2 className={styles.headline}>Ready to Explore TSUS Ludhiana?</h2>
          <h3 className={styles.subhead}>Book Your Campus Visit</h3>

          <div className={styles.chipsContainer}>
            <div className={styles.chip}>Meet our team</div>
            <div className={styles.chip}>Explore the classrooms</div>
            <div className={styles.chip}>Understand the Early Years approach</div>
            <div className={styles.chip}>See how your child responds</div>
          </div>

          <div className={styles.buttonWrapper}>
            <Button variant="primary" href="#lead-form" className={styles.pulsingBtn}>
              BOOK MY CAMPUS VISIT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
