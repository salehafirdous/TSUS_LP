import React from 'react';
import { Button } from '../components/ui/Button';

export const ThankYouPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-bg-light)',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'var(--color-white)',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        maxWidth: '700px',
        width: '100%'
      }}>
        {/* Using the TSUS logo */}
        <img 
          src="/images/new-logo.png" 
          alt="TSUS Logo" 
          style={{ 
            height: '110px', 
            display: 'block', 
            margin: '0 auto 2.5rem auto',
            imageRendering: 'crisp-edges'
          }}
        />
        
        <h1 style={{ 
          color: 'var(--color-dark-blue)', 
          fontSize: '2rem',
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)'
        }}>
          Thank You!
        </h1>
        
        <p style={{ 
          color: 'var(--color-text-main)', 
          fontSize: '1.125rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          Your visit has been booked successfully. Our admissions team will contact you shortly to confirm the details.
        </p>
        
        <Button variant="primary" onClick={() => window.location.replace('/')}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};
