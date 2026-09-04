import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundOverlay}></div>
      <div className={`container ${styles.container}`}>

        <div className={styles.content}>
          <span className={styles.eyebrow}>NURSERY · LKG · UKG ADMISSIONS 2027–28 | LUDHIANA</span>
          <h1 className={styles.headline}>
            Choosing Your Child’s First School in Ludhiana? Make It the Only One They’ll Ever Need.
          </h1>
          <p className={styles.subline}>
            A dedicated Early Years program to begin with. A full Nursery-to-Grade-10 CBSE journey to grow into  on the same campus, with the same school family, from your child’s very first day.
          </p>

          <div className={styles.chips}>
            <span>Pre-Nursery</span>
            <span className={styles.dot}>·</span>
            <span>Nursery</span>
            <span className={styles.dot}>·</span>
            <span>LKG</span>
            <span className={styles.dot}>·</span>
            <span>UKG</span>
          </div>

          <p className={styles.bodyText}>
            At The Shri Ram Universal School, Sarabha Nagar, Ludhiana, young children learn through curiosity, play, communication and meaningful experiences in a nurturing Early Years environment  designed as the first chapter of a CBSE education that carries through to Grade 10.
          </p>

          <div className={styles.trustLine}>
            Happy Learning · Personal Attention · Experiential Learning
          </div>

          <div className={styles.actions}>
            <Button variant="primary">Book A Campus Visit</Button>
            <Button variant="outline" className={styles.secondaryBtn}>Call Admissions</Button>
          </div>
        </div>

        <div className={styles.formCardWrapper}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Book Your Campus Visit</h3>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
              <Input placeholder="Enter your name" label="Parent Name" required />
              <Input placeholder="+91" label="Mobile Number" type="tel" required />

              <Select
                label="Child's Age"
                defaultValue=""
                options={[
                  { value: "2.5-3", label: "2.5–3 Years" },
                  { value: "3-4", label: "3–4 Years" },
                  { value: "4-5", label: "4–5 Years" },
                  { value: "5-6", label: "5–6 Years" }
                ]}
                required
              />

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
                <Button variant="primary" fullWidth type="submit">Book My Visit</Button>
              </div>
              <p className={styles.smallText}>
                Your details will only be shared with the TSUS Ludhiana admissions team.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
