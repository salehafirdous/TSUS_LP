import React from 'react';
import styles from './GradeAgeSection.module.css';
import { ArrowRight } from 'lucide-react';

const grades = [
  {
    title: 'Pre-Nursery',
    age: '2.5–3 Years',
    image: '/images/pre_nursery_uniform.png',
    focus: 'Settling In · Sensory Play · First Friendships',
    desc: 'A gentle introduction to school where children begin feeling comfortable, exploring through their senses and interacting with other little learners.',
    linkText: 'Check Pre-Nursery'
  },
  {
    title: 'Nursery',
    age: '3–4 Years',
    image: '/images/nursery_uniform.png',
    focus: 'Language · Motor Skills · Early Routines',
    desc: 'An engaging early-learning environment designed to encourage communication, movement, independence and positive school routines.',
    linkText: 'Check Nursery'
  },
  {
    title: 'LKG',
    age: '4–5 Years',
    image: '/images/lkg_uniform.png',
    focus: 'Pre-Reading · Numbers · Self-Expression',
    desc: 'Children begin strengthening language, early numeracy and the confidence to express their thoughts and ideas.',
    linkText: 'Check LKG'
  },
  {
    title: 'UKG',
    age: '5–6 Years',
    image: '/images/ukg_uniform.png',
    focus: 'Reading Fluency · Grade 1 Readiness',
    desc: 'A transition year designed to strengthen foundational skills and help children move confidently towards Grade 1  and everything TSUS builds from there through Grade 10.',
    linkText: 'Check UKG'
  }
];

export const GradeAgeSection = () => {
  return (
    <section className={`py-section ${styles.gradeSection}`}>
      <div className={styles.gradeContainer}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FIND THE RIGHT CLASS FOR YOUR CHILD</span>
          <h2 className={styles.headline}>Early Years Admissions in Ludhiana  The First Steps of a Nursery-to-Grade-10 Journey</h2>
        </div>

        <div className={styles.grid}>
          {grades.map((grade, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img src={grade.image} alt={grade.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{grade.title}</h3>
                  <span className={styles.cardAge}>{grade.age}</span>
                </div>
                <p className={styles.cardFocus}>{grade.focus}</p>
                <p className={styles.cardDesc}>{grade.desc}</p>
                <a href="#admissions" className={styles.cardLink}>
                  {grade.linkText} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
