import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { JourneySection } from './components/sections/JourneySection';
import { GradeAgeSection } from './components/sections/GradeAgeSection';
import { EarlyYearsSection } from './components/sections/EarlyYearsSection';
import { PreschoolIntentSection } from './components/sections/PreschoolIntentSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { LocationSection } from './components/sections/LocationSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionsBlock } from './components/sections/AdmissionsBlock';
import { FAQSection } from './components/sections/FAQSection';
import { FinalConversionSection } from './components/sections/FinalConversionSection';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { ThankYouPage } from './pages/ThankYouPage';

function App() {
  if (window.location.pathname === '/thank-you') {
    return <ThankYouPage />;
  }

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <PreschoolIntentSection />
      <GradeAgeSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EarlyYearsSection />
      <LocationSection />
      <AdmissionsBlock />
      <FAQSection />
      <FinalConversionSection />
      <Footer />
      <div className="mobile-sticky-cta">
        <div className="mobile-sticky-cta-split">
          <a href="tel:+919172098206" className="cta-call" onClick={(e) => {
            if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
              e.preventDefault();
              (window as any).gtag_report_conversion('tel:+919172098206');
            }
          }}>Call Now</a>
          <a href="https://wa.me/919172098206" className="cta-whatsapp-sticky">WhatsApp Now</a>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default App;
