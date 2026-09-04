import React from 'react';
import styles from './TestimonialsSection.module.css';
import { Quote } from 'lucide-react';

const videos = [
  "UrsKXl-db5Y",
  "t8tfafx__uE",
  "Q-_bKMJhAkY"
];

export const TestimonialsSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>PARENT STORIES</span>
          <h2 className={styles.headline}>Hear From TSUS Parents.</h2>
        </div>
        
        <div className={styles.testimonialsWrapper}>


          <div className={styles.videoSection}>
            <div className={styles.videoHeader}>

            </div>

            <div className={styles.videoGrid}>
            {videos.map((vid, idx) => (
              <div key={idx} className={styles.videoCard}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${vid}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
