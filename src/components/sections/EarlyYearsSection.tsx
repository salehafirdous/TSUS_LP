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
      <div className={`containerWide ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHY THE EARLY YEARS MATTER</span>
          <h2 className={styles.headline}>The First Five Years Shape So Much More.</h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.customTable}>
            <thead>
              <tr>
                <th>These are the years when children begin learning:</th>
                <th>How TSUS builds this — our Early Years framework:</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(learnings.length, framework.length) }).map((_, idx) => (
                <tr key={idx}>
                  <td>
                    {learnings[idx] ? (
                      <div className={styles.tableCellContent}>
                        <CheckCircle2 className={styles.icon} size={24} />
                        <div>
                          <strong>{learnings[idx].title}</strong> — {learnings[idx].desc}
                        </div>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {framework[idx] ? (
                      <div className={styles.tableCellContent}>
                        <CheckCircle2 className={styles.icon} size={24} />
                        <div>
                          <strong>{framework[idx].title}</strong> — {framework[idx].desc}
                        </div>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.bottomBox}>
          <p>
            Every Pre-Primary section also has a dedicated <strong>didi</strong> working alongside the class teacher  so beyond academics, there’s always a familiar, caring adult close by.
          </p>
          <p>
            At TSUS Ludhiana, we aim to make these first experiences happy, meaningful and age-appropriate.
          </p>
          <div className="mt-4">
            <Button variant="primary" href="#lead-form">EXPLORE PRE-PRIMARY AT TSUS</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
