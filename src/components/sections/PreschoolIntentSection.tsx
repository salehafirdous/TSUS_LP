import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import styles from './PreschoolIntentSection.module.css';

const images = [
  '/images/Nursery1.jpg',
  '/images/project.jpg',
  '/images/Student.jpg',
  '/images/Lab.jpg'
];

export const PreschoolIntentSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>CHOOSING A SCHOOL IN LUDHIANA FOR YOUR 3-YEAR-OLD?</span>
          <h2 className={styles.headline}>Look Beyond ABCs and Numbers.</h2>
          
          <p className={styles.bodyText}>
            Parents looking for the right Nursery or LKG school in Ludhiana are usually asking themselves five quieter questions:
          </p>
          
          <ul className={styles.questionsList}>
            <li>Will my child be <strong>safe</strong>?</li>
            <li>Will my child be <strong>happy</strong>?</li>
            <li>Will my child be <strong>seen</strong> — known as an individual, not a roll number?</li>
            <li>Will they get a <strong>strong foundation</strong>?</li>
            <li>Am I making the <strong>right choice</strong>, this early, for their whole school life?</li>
          </ul>
          
          <p className={styles.bodyText}>
            The right first learning environment should help children enjoy learning — not simply prepare them for the next worksheet. And because that first choice at TSUS is also, quietly, a choice for the next twelve years, we treat it with the same weight you do.
          </p>
          
          <div className="mt-4">
            <Button variant="primary">EXPERIENCE TSUS LUDHIANA</Button>
          </div>
        </div>
        
        <div className={styles.imageCol}>
          <div className={styles.carouselContainer}>
            {images.map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt={`Preschool Learning ${idx + 1}`} 
                className={`${styles.carouselImage} ${idx === currentIdx ? styles.active : ''}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
