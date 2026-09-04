import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import styles from './JourneySection.module.css';

const images = [
  '/images/slide2.jpg',
  '/images/slide1.jpg',
  '/images/slide3.jpg'
];

export const JourneySection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-section ${styles.journeySection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            {images.map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt={`School Journey ${idx + 1}`} 
                className={`${styles.image} ${idx === currentIdx ? styles.active : ''}`}
                loading="lazy"
              />
            ))}
            <div className={styles.accentBox}></div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <span className={styles.eyebrow}>ONE SCHOOL. ONE JOURNEY.</span>
          <h2 className={styles.headline}>Your Child Doesn’t Just Start Here. They Grow Up Here.</h2>

          <p className={styles.bodyText}>
            Many parents choosing a preschool in Ludhiana are quietly already thinking about what comes after  will we need to find, apply to, and settle our child into a new school again in two years?
          </p>

          <p className={styles.bodyText}>
            At TSUS, that question doesn’t come up. Pre-Nursery, Nursery, LKG and UKG are the first steps of one CBSE school that continues all the way through Grade 10, on the same 3-acre Sarabha Nagar campus, under The 21st Century Skills School  the same teachers who know your Nursery child by name will still know them as they grow.
          </p>

          <div className={styles.supportingLine}>
            Early Years today. STEM labs, a Digital Literacy Lab, competitive sports, debate and design-thinking tomorrow  the same school, right through Class 10.
          </div>

          <Button variant="primary">SEE THE FULL TSUS JOURNEY</Button>
        </div>
      </div>
    </section>
  );
};
