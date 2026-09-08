import React from 'react';
import { Button } from '../ui/Button';
import styles from './AdmissionsBlock.module.css';
import { Calendar, Tag, CheckCircle2 } from 'lucide-react';

export const AdmissionsBlock = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className="container">

        {/* Section 15: Saturday Experience */}
        <div className={styles.saturdayBox}>
          <div className={styles.saturdayContent}>
            <span className={styles.eyebrowLight}>WEEKEND SPECIAL</span>
            <h2 className={styles.headlineLight}>Don’t Just Visit a School. Let Your Child Experience It.</h2>
            <h4 className={styles.subheadLight}>Saturday Experience at TSUS Ludhiana</h4>

            <p className={styles.descLight}>Let your child Explore, Create, Play and Discover, while you:</p>
            <ul className={styles.listLight}>
              <li><CheckCircle2 size={20} /> Explore the campus</li>
              <li><CheckCircle2 size={20} /> Meet the school team</li>
              <li><CheckCircle2 size={20} /> Understand the Early Years approach</li>
              <li><CheckCircle2 size={20} /> Ask your admission questions</li>
            </ul>

            <div className={styles.actions}>
              <Button variant="primary" href="#lead-form">RESERVE MY SATURDAY SLOT</Button>
            </div>
          </div>
          <div className={styles.saturdayImageCol}>
            <img src="/images/binoculars_child.png" alt="Child experiencing school" className={styles.saturdayImage} />
          </div>
        </div>

        {/* Section 16 & 17: Admissions & Offer */}
        <div className={styles.grid}>

          <div className={styles.admissionsBox}>
            <span className={styles.eyebrow}>ADMISSIONS 2027-28</span>
            <h3 className={styles.headline}><span className="highlight">Nursery, LKG & UKG Admissions</span> Open in Ludhiana</h3>

            <div className={styles.chipsContainer}>
              <div className={styles.chip}>
                <span className={styles.chipTitle}>Pre-Nursery</span>
                <span className={styles.chipAge}>(2.5–3 Yrs)</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipTitle}>Nursery</span>
                <span className={styles.chipAge}>(3–4 Yrs)</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipTitle}>LKG</span>
                <span className={styles.chipAge}>(4–5 Yrs)</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipTitle}>UKG</span>
                <span className={styles.chipAge}>(5–6 Yrs)</span>
              </div>
            </div>

            <p className={styles.desc}>
              Visit TSUS Ludhiana, meet our Early Years team and understand the learning environment  and the full Nursery-to-Grade-10 journey your child is joining  before making your decision.
            </p>

            <Button variant="primary" href="#lead-form">CHECK ADMISSION AVAILABILITY</Button>
          </div>

          <div className={styles.offerBox}>
            <Tag size={48} className={styles.offerIcon} />
            <span className={styles.eyebrow}>CURRENT ADMISSION BENEFIT</span>
            <h3 className={styles.headline}><span className="highlight">25% Concession</span> on the Admission Fee*</h3>
            <p className={styles.desc}>
              For eligible Pre-Primary admissions  Nursery · LKG · UKG
            </p>
            <div className="mt-4">
              <Button variant="outline" href="#lead-form">CHECK ELIGIBILITY</Button>
            </div>
            <p className={styles.smallText}>
              *Subject to applicable admission terms, grade availability and school approval.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
