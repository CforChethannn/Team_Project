import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import WithGoWheel from './WithGoWheel';
import EasyGo from './easygo';
import FastPayment from './FastPayment';
import Dude from './dude';
import Insurance from './insurance';
import backgroundImage from '../../assets/trucker-bg.jpg';

export default function TruckerPage({ onNavigateHome, onNavigateTrucker, currentPage }) {
  const nextSectionRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* FLOATING NAVBAR */}
      <Navbar 
        onNavigateHome={onNavigateHome} 
        onNavigateTrucker={onNavigateTrucker}
        currentPage={currentPage}
      />

      {/* 1. TRUCKER HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100vw',
          maxWidth: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '8%',
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingTop: '120px',
          backgroundColor: '#000000',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            filter: 'brightness(0.85)'
          }}
        />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }} />

        <div style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ maxWidth: '580px', textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)' }}
          >
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#FFFFFF',
              margin: 0
            }}>
              Your Wheels,
            </h1>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(3rem, 7.5vw, 5.2rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              color: '#FD4202',
              margin: '0 0 16px 0'
            }}>
              Your Rules
            </h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(0.88rem, 2vw, 1rem)',
              lineHeight: '1.5',
              color: '#E2E8F0',
              margin: 0
            }}>
              Connect directly with verified shippers across primary corridors. Keep 100% of your earnings with zero brokerage fees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.button 
              onClick={handleScrollToNext}
              whileHover={{ scale: 1.04, backgroundColor: '#e03a02' }}
              whileTap={{ scale: 0.96 }}
              style={{
                backgroundColor: '#FD4202',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(253, 66, 2, 0.4)'
              }}
            >
              Find Load <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. WITH GOWHEEL ECOSYSTEM SECTION */}
      <WithGoWheel sectionRef={nextSectionRef} />

      {/* 3. EASYGO APP WORKFLOW SECTION */}
      <EasyGo />

      {/* 4. FASTPAYMENT INSTANT SETTLEMENT SECTION */}
      <FastPayment />

      {/* 5. DUDE OWNER & DRIVER ID PORTALS SECTION */}
      <Dude />

      {/* 6. INSURANCE COVERAGE SECTION */}
      <Insurance />
    </div>
  );
}