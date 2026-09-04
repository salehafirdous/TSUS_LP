import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import styles from './HeroSection.module.css';
import { submitLead } from '../../utils/submitLead';

export const HeroSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    await submitLead(
      formData,
      () => setStatus('success'),
      () => setStatus('error')
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroGradient}></div>

      <div className={styles.heroContainer}>

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
            <Button variant="primary" href="#lead-form">Book A Campus Visit</Button>
            <Button variant="outline" className={styles.secondaryBtn} href="#lead-form">Call Admissions</Button>
          </div>
        </div>
        <div className={styles.centerImageWrapper}>
          <img src="/nursery_child_uniform.png" alt="Preschool child learning in uniform" className={styles.centerImage} />
        </div>

        <div className={styles.formCardWrapper} id="lead-form">
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Book Your Campus Visit</h3>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <h4 style={{ color: 'var(--color-primary-blue)', marginBottom: '1rem', fontSize: '1.25rem' }}>Thank You!</h4>
                <p>Your visit has been booked successfully. Our admissions team will contact you shortly.</p>
                <Button variant="outline" style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input name="name" placeholder="Enter your name" label="Parent Name" required />
                <Input name="phone" placeholder="+91" label="Mobile Number" type="tel" required />

                <Select
                  name="childAge"
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
                  name="grade"
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

                <Input name="area" placeholder="Area / Locality" label="Area / Locality" required />

                <Select
                  name="interaction"
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
                  <Button variant="primary" fullWidth type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Book My Visit'}
                  </Button>
                </div>
                {status === 'error' && (
                  <p style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className={styles.smallText}>
                  Your details will only be shared with the TSUS Ludhiana admissions team.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
