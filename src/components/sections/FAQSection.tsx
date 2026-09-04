import React from 'react';
import { Accordion } from '../ui/Accordion';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'What is the age for Pre-Nursery admission?',
    a: 'Approximately 2.5–3 years, subject to final school eligibility criteria.'
  },
  {
    q: 'What is the age for Nursery admission?',
    a: 'Approximately 3–4 years.'
  },
  {
    q: 'What is the age for LKG admission?',
    a: 'Approximately 4–5 years.'
  },
  {
    q: 'What is the age for UKG admission?',
    a: 'Approximately 5–6 years.'
  },
  {
    q: 'Is TSUS a CBSE school in Ludhiana?',
    a: 'Yes. The Shri Ram Universal School, Ludhiana is a CBSE school running from Nursery through Grade 10  Early Years is the first stage of that same journey, not a separate preschool.'
  },
  {
    q: 'Where is TSUS Ludhiana located?',
    a: 'Block-D, Sarabha Nagar, Ludhiana – 141001.'
  },
  {
    q: 'Can parents visit the school before admission?',
    a: 'Yes. Parents can book a personalised campus visit.'
  },
  {
    q: 'Is online counselling available?',
    a: 'Yes. Parents can begin with an online counselling session.'
  },
  {
    q: 'What is the student-teacher ratio?',
    a: 'Approximately 1:10*, subject to grade/class structure.'
  },
  {
    q: 'What does Early Years learning at TSUS include?',
    a: 'Age-appropriate language development, play-based learning through our Wonder Time, Circle Time and Art Integration framework, social interaction, communication, motor development and foundational skills  supported by a dedicated didi in every section.'
  },
  {
    q: 'Does my child need to change schools after UKG?',
    a: 'No. TSUS runs Nursery through Grade 10 on the same Sarabha Nagar campus, so your child continues in the same school community as they grow.'
  },
  {
    q: 'How do I apply for Nursery, LKG or UKG admission in Ludhiana?',
    a: 'Submit the campus-visit form and the TSUS admissions team will guide you through eligibility and the next steps.'
  }
];

export const FAQSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Frequently Asked Questions About Nursery, LKG & UKG Admissions in Ludhiana</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
