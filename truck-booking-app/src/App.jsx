import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import QuoteBanner from './components/QuoteBanner';
import Testimonials from './components/Testimonials';
import RoleBriefing from './components/RoleBriefing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TruckerPage from './components/pages/TruckerPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleGoHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleGoTrucker = () => {
    setCurrentPage('trucker');
    window.scrollTo(0, 0); // Forces page to open at top hero section
  };

  // IF TRUCKER PAGE IS ACTIVE
  if (currentPage === 'trucker') {
    return (
      <TruckerPage 
        onNavigateHome={handleGoHome} 
        onNavigateTrucker={handleGoTrucker}
        currentPage={currentPage}
      />
    );
  }

  // MAIN HOME PAGE VIEW
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar 
        onNavigateHome={handleGoHome} 
        onNavigateTrucker={handleGoTrucker}
        currentPage={currentPage}
      />
      <Hero />
      <Features />
      <QuoteBanner />
      <Testimonials />
      {/* "Know More" triggers handleGoTrucker to open TruckerPage at top */}
      <RoleBriefing onNavigateDriver={handleGoTrucker} />
      <Contact />
      <Footer />
    </div>
  );
}