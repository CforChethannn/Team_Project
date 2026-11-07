import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import QuoteBanner from './components/QuoteBanner';
import Testimonials from './components/Testimonials';
import RoleBriefing from './components/RoleBriefing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // const handleNavigateDriver = () => {
  //   // Navigate logic (e.g., router switch, link route etc.)
  //   console.log("Navigating to Drivers Pathway details...");
  // };

  // const handleNavigateShipper = () => {
  //   // Navigate logic (e.g., router switch, link route etc.)
  //   console.log("Navigating to Shippers Pathway details...");
  // };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Features />
      <QuoteBanner />
      <Testimonials />
      <RoleBriefing 
        // onNavigateDriver={handleNavigateDriver}
        // onNavigateShipper={handleNavigateShipper}
      />
      <Contact />
      <Footer />
    </div>
  );
}