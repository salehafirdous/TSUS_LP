import React from 'react';
import styles from './TestimonialsSection.module.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    category: 'Happy School Experience',
    parent: 'Parent of Nursery Student',
    quote: "We were worried about our child's first step into school, but TSUS made it seamless. The environment is so nurturing and they truly focus on making learning happy.",
    color: 'blue'
  },
  {
    category: 'Communication & Confidence',
    parent: 'Parent of LKG Student',
    quote: "The way our daughter has grown in her communication skills is amazing. The Show & Tell and Circle Time activities have given her so much confidence.",
    color: 'gold'
  },
  {
    category: 'Teacher Attention',
    parent: 'Parent of UKG Student',
    quote: "With the small learning groups and dedicated didi, we know our son is seen and heard. The personal attention is what sets TSUS apart from other schools.",
    color: 'rose'
  }
];

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
          <div className={styles.textReviews}>
            {testimonials.map((test, idx) => (
              <div key={idx} className={`${styles.card} ${styles[`card-${test.color}`]}`}>
                <div className={styles.cardInner}>
                  <Quote className={styles.quoteIcon} size={40} />
                  <p className={styles.quoteText}>"{test.quote}"</p>
                  <div className={styles.footer}>
                    <div className={styles.avatar}>
                      {test.parent.charAt(10)}
                    </div>
                    <div className={styles.parentInfo}>
                      <div className={styles.category}>{test.category}</div>
                      <div className={styles.parent}>{test.parent}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.videoHeader}>
            <h3 className={styles.subHeadline}>Watch Their Experiences</h3>
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
    </section>
  );
};
