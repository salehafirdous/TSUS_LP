import React from 'react';
import { Button } from '../ui/Button';
import styles from './EarlyYearsSection.module.css';
import { CheckCircle2 } from 'lucide-react';

const learnings = [
  { title: 'How to Learn', desc: 'Curiosity and willingness to explore.' },
  { title: 'How to Communicate', desc: 'Language, conversation and expression.' },
  { title: 'How to Make Friends', desc: 'Sharing, cooperation and belonging.' },
  { title: 'How to Become Independent', desc: 'Trying little things with confidence.' },
  { title: 'How to Believe in Themselves', desc: 'Confidence built through everyday experiences.' }
];

const framework = [
  { title: 'Wonder Time', desc: 'a daily guided block for curiosity and open-ended questions' },
  { title: 'Circle Time', desc: 'builds emotional intelligence and a sense of classroom community' },
  { title: 'Show & Tell / Role Play', desc: 'early confidence in speaking and expressing' },
  { title: 'BALA (Building As Learning Aid)', desc: 'even our walls and corridors are designed to teach' },
  { title: 'DEAR Time (Drop Everything And Read)', desc: '15 unhurried minutes of reading, every day' },
  { title: 'Art Integration', desc: 'new concepts explored through creative, hands-on expression' }
];

export const EarlyYearsSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHY THE EARLY YEARS MATTER</span>
          <h2 className={styles.headline}>The First Five Years Shape So Much More.</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.subhead}>These are the years when children begin learning:</h3>
            <ul className={styles.list}>
              {learnings.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle2 className={styles.icon} size={24} />
                  <div>
                    <strong>{item.title}</strong>  {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.subhead}>How TSUS builds this  our Early Years framework:</h3>
            <ul className={styles.list}>
              {framework.map((item, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle2 className={styles.icon} size={24} />
                  <div>
                    <strong>{item.title}</strong>  {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <p>
            Every Pre-Primary section also has a dedicated <strong>didi</strong> working alongside the class teacher  so beyond academics, there’s always a familiar, caring adult close by.
          </p>
          <p>
            At TSUS Ludhiana, we aim to make these first experiences happy, meaningful and age-appropriate.
          </p>
          <div className="mt-4">
            <Button variant="primary">EXPLORE PRE-PRIMARY AT TSUS</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
