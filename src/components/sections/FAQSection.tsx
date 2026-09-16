import React from 'react';
import { Accordion } from '../ui/Accordion';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'What is the age eligibility for Pre-Nursery, Nursery, LKG and UKG?',
    a: (
      <>
        The indicative age bands are:<br/>
        Pre-Nursery: approximately 2.5–3 years<br/>
        Nursery: approximately 3–4 years<br/>
        LKG: approximately 4–5 years<br/>
        UKG: approximately 5–6 years<br/>
        Final eligibility depends on the applicable age cut-off date and school admission criteria. The admissions team will confirm the appropriate class after checking your child’s date of birth.
      </>
    )
  },
  {
    q: 'How do children learn in the Early Years at TSUS?',
    a: 'Children learn through play, conversation, stories, movement, art and meaningful hands-on experiences. Programmes such as Wonder Time, Circle Time, Show & Tell, role play, reading and Art Integration help develop curiosity, language, confidence, social skills and independence.'
  },
  {
    q: 'If learning is play-based, will my child still develop a strong academic foundation?',
    a: 'Yes. Play-based learning does not mean learning without purpose. Activities are designed to build early language, pre-reading, numeracy, motor skills, communication and problem-solving in an age-appropriate manner. By UKG, the focus progressively includes reading fluency and readiness for Grade 1.'
  },
  {
    q: 'How much individual attention will my child receive?',
    a: 'TSUS maintains an approximate 1:10 student–teacher ratio, subject to grade and class structure. Each Pre-Primary section also has a dedicated didi working alongside the teacher, helping young children receive closer attention and care.'
  },
  {
    q: 'What if my child is shy or takes time to settle into school?',
    a: 'Young children settle at different speeds. TSUS provides a nurturing Early Years environment with smaller learning groups, caring teachers and a familiar didi in every section. Parents can discuss their child’s routines, temperament and specific concerns with the Early Years team during the campus visit.'
  },
  {
    q: 'How does TSUS help children become confident in English?',
    a: 'Children use English naturally through stories, songs, conversations, classroom participation, Show & Tell and role play. The emphasis is on helping children communicate and express themselves confidently—not merely memorise words.'
  },
  {
    q: 'How does the school manage safety and hygiene?',
    a: 'The school’s processes include controlled gate access, visitor registration, CCTV monitoring and supervision during arrival and dispersal. Classrooms and common areas undergo morning cleaning and sanitisation, with washroom-cleaning and waste-clearing rounds during the school day.'
  },
  {
    q: 'Will my child need to change schools after UKG?',
    a: 'No. The Early Years programme is part of The Shri Ram Universal School’s larger CBSE journey, continuing through Grade 10 on the Sarabha Nagar campus. This provides continuity without requiring another school search after UKG.'
  },
  {
    q: 'TSUS is relatively new in Ludhiana. What educational experience supports the school?',
    a: 'The Ludhiana school has been operating since 2020 and works in collaboration with Shri Educare Limited. Its approach draws on The Shri Way—child-centred, experiential and balanced education—while also introducing modern, future-ready learning as children progress through school.'
  },
  {
    q: 'What happens during a pre-primary campus visit?',
    a: 'Parents meet the admissions team, tour the Early Years classrooms and learning spaces, understand the teaching approach and discuss their child’s needs. A child interaction may also be conducted so that the school and parents can understand the child’s readiness and comfort.'
  },
  {
    q: 'How do I begin the admission process?',
    a: 'Submit the campus-visit form or contact the admissions team. The team will confirm age eligibility, explain the relevant grade and schedule a visit or counselling interaction.'
  }
];

export const FAQSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.headline}>Frequently Asked Questions About <span className="highlight">Nursery, LKG & UKG Admissions</span> in Ludhiana</h2>
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
