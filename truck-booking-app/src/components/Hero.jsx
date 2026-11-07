import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import videoBg from '../assets/video.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Pause video when scrolled out of view (using Intersection Observer)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 } // Pauses as soon as 90% of the Hero section is scrolled away
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 2. Pause video when switching browser tabs
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current?.pause();
      } else if (sectionRef.current) {
        // Only resume if the section is currently visible on screen
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          videoRef.current?.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        maxWidth: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '6%',
        paddingLeft: '5%',
        backgroundColor: '#000000',
        boxSizing: 'border-box'
      }}
    >
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src={videoBg}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      {/* OVERLAY */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        zIndex: 2
      }} />

      {/* CONTENT (BOTTOM-LEFT ALIGNED) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '520px'
        }}
      >
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '4.8rem',
          fontWeight: '600',
          lineHeight: '1.1',
          color: '#FFFFFF',
          margin: 0
        }}>
          Your Cargo,
        </h1>
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '6rem',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#FD4202',
          margin: '0 0 16px 0'
        }}>
          Our Priority
        </h1>

        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '1rem',
          lineHeight: '1.5',
          color: '#E2E8F0',
          marginBottom: '28px'
        }}>
          Seamless logistics, real-time tracking, and trusted drivers. We connect shippers and carriers to keep your goods moving without interruption.
        </p>

        {/* CTA BUTTONS */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: '#e03a02' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: '#FD4202',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px 26px',
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
            Find Truck <ArrowRight size={18} />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#FFFFFF',
              border: '2px solid #FFFFFF',
              padding: '12px 26px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(4px)'
            }}
          >
            Find Goods <Truck size={18} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}