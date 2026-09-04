import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import styles from './FinalConversionSection.module.css';
import { submitLead } from '../../utils/submitLead';

export const FinalConversionSection = () => {
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
                <Input name="childAge" placeholder="Child's Age (e.g., 3 Years)" label="Child Age" required />

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
                    {status === 'loading' ? 'Submitting...' : 'BOOK MY CAMPUS VISIT'}
                  </Button>
                </div>
                {status === 'error' && (
                  <p style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className={styles.smallText}>
                  Your information will only be used by the TSUS admissions team for admissions-related follow-up.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
