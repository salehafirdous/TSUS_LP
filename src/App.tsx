import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStrip } from './components/sections/TrustStrip';
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

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <TrustStrip />
      <JourneySection />
      <GradeAgeSection />
      <EarlyYearsSection />
      <PreschoolIntentSection />
      <FeaturesSection />
      <LocationSection />
      <TestimonialsSection />
      <AdmissionsBlock />
      <FAQSection />
      <FinalConversionSection />
      <Footer />
    </div>
  )
}

export default App;
