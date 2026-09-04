import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import styles from './FinalConversionSection.module.css';

export const FinalConversionSection = () => {
  return (
    <section className={`py-section ${styles.section}`}>
      <div className={`container ${styles.container}`}>

        <div className={styles.content}>
          <h2 className={styles.headline}>Ready to Explore TSUS Ludhiana?</h2>
          <h3 className={styles.subhead}>Book Your Campus Visit</h3>

          <ul className={styles.list}>
            <li>Meet our team.</li>
            <li>Explore the classrooms.</li>
            <li>Understand the Early Years approach  and the twelve years that follow it.</li>
            <li>See how your child responds to the environment.</li>
          </ul>
        </div>

        <div className={styles.formCol}>
          <div className={styles.formCard}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              <Input placeholder="Enter your name" label="Parent Name" required />
              <Input placeholder="+91" label="Mobile Number" type="tel" required />
              <Input placeholder="Child's Age (e.g., 3 Years)" label="Child Age" required />

              <Select
                label="Grade Seeking Admission"
                defaultValue=""
                options={[
                  { value: "pre-nursery", label: "Pre-Nursery" },
                  { value: "nursery", label: "Nursery" },
                  { value: "lkg", label: "LKG" },
                  { value: "ukg", label: "UKG" }
                ]}
                required
              />

              <Input placeholder="Area / Locality" label="Area / Locality" required />

              <Select
                label="Preferred Interaction"
                defaultValue=""
                options={[
                  { value: "campus-visit", label: "Campus Visit" },
                  { value: "saturday-experience", label: "Saturday Experience" },
                  { value: "online-counselling", label: "Online Counselling" }
                ]}
                required
              />

              <div className={styles.submitWrapper}>
                <Button variant="primary" fullWidth type="submit">BOOK MY CAMPUS VISIT</Button>
              </div>
              <p className={styles.smallText}>
                Your information will only be used by the TSUS admissions team for admissions-related follow-up.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
