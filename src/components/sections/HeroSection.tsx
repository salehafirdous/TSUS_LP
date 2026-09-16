import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import styles from './HeroSection.module.css';
import { submitLead } from '../../utils/submitLead';
import { GraduationCap, Users, Box, User } from 'lucide-react';

export const HeroSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    await submitLead(
      formData,
      () => {
        window.location.href = '/thank-you';
      },
      () => setStatus('error')
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroGradient}></div>

      <div className={styles.heroContainer}>

        <div className={styles.content}>
          <div className={styles.pillBadge}>
            <GraduationCap className={styles.pillIcon} size={20} />
            Nursery & Kindergarten Admissions 2027–28
          </div>
          <h1 className={styles.headline}>
            A <span className="highlight">Happy First School</span>.<br />
            A Confident Start<br />
            for Your Child.
          </h1>
          <p className={styles.subline}>
            Play-based learning, caring teachers and<br />
            personal attention helping your child feel secure,<br />
            make friends and grow in confidence.
          </p>

          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <div className={styles.iconCircle}><Users size={24} color="var(--color-dark-blue)" /></div>
              <span className={styles.featureText}>Small<br />Classes</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.featureCard}>
              <div className={styles.iconCircle}><Box size={24} color="var(--color-dark-blue)" /></div>
              <span className={styles.featureText}>Hands-On<br />Learning</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.featureCard}>
              <div className={styles.iconCircle}><User size={24} color="var(--color-dark-blue)" /></div>
              <span className={styles.featureText}>Individual<br />Attention</span>
            </div>
          </div>

          <div className={styles.mobileOnlyImageWrapper}>
            <img src="/images/HeroBG.JPG" alt="Preschool child learning in uniform" className={styles.centerImage} />
          </div>

          <Button variant="primary" className={`${styles.mobileOnlyBtn} ${styles.mobileBookVisitBtn}`} href="#lead-form">BOOK A CAMPUS VISIT</Button>

          <p className={styles.actionText}>
            Explore our early-years classrooms and meet our teachers.
          </p>
          <div className={styles.actions}>
            <Button variant="primary" className={styles.desktopOnlyBtn} href="#lead-form">Book A Campus Visit</Button>
            <Button variant="outline" className={`${styles.secondaryBtn} ${styles.desktopOnlyBtn}`} href="tel:+919172098206">Call Admissions</Button>
          </div>
        </div>
        <div className={styles.centerImageWrapper}>
          <img src="/images/HeroBG.JPG" alt="Preschool child learning in uniform" className={styles.centerImage} />
        </div>

        <div className={styles.formCardWrapper} id="lead-form">
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Book Your Campus Visit</h3>
            {status === 'loading' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <p>Submitting your request...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <Input name="name" placeholder="Enter your name" label="Parent Name" required />
                <Input name="phone" placeholder="+91" label="Mobile Number" type="tel" required />

                <Select
                  name="grade"
                  label="Grade Seeking Admission"
                  defaultValue=""
                  options={[
                    { value: "pre-nursery", label: "Pre-Nursery" },
                    { value: "nursery", label: "Nursery" },
                    { value: "lkg", label: "LKG" },
                    { value: "ukg", label: "UKG" },
                    { value: "grade 1-5", label: "Grade 1-5" },
                    { value: "grade 6-10", label: "Grade 6-10" }
                  ]}
                  required
                />

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
                  <Button variant="primary" fullWidth type="submit">
                    Book My Visit
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
