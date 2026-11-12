import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MapPin, CheckCircle2 } from 'lucide-react';
import cargoImage from '../../assets/Get-your-cargo.jpg';
import wayImage from '../../assets/get-your-way.jpg';

export default function EasyGo() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      style={{ 
        position: 'relative',
        backgroundColor: '#000000', 
        color: '#FFFFFF', 
        padding: isMobileOrTablet ? '60px 5%' : '100px 8%', 
        overflowX: 'hidden',
        borderTop: '1px solid rgba(253, 66, 2, 0.15)'
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobileOrTablet ? '280px' : '450px',
          height: isMobileOrTablet ? '280px' : '450px',
          backgroundColor: '#FD4202',
          opacity: 0.07,
          borderRadius: '50%',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '8px'
        }}>
          Simple & Seamless
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: isMobileOrTablet ? '2.4rem' : '3.4rem',
          fontWeight: '800',
          margin: 0,
          lineHeight: '1.1'
        }}>
          Experience <span style={{ color: '#FD4202' }}>EasyGo</span>
        </h2>
        <p style={{
          color: '#94A3B8',
          fontFamily: "'Poppins', sans-serif",
          marginTop: '12px',
          fontSize: '0.95rem',
          maxWidth: '520px',
          margin: '12px auto 0 auto'
        }}>
          Designed for maximum efficiency—from securing high-pay loads to completing safe corridor navigation.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* FEATURE 1: GET YOUR CARGO BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            y: -8, 
            scale: 1.015,
            borderColor: 'rgba(253, 66, 2, 0.45)',
            boxShadow: '0 20px 40px rgba(253, 66, 2, 0.15), 0 0 20px rgba(253, 66, 2, 0.1)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: 'flex',
            flexDirection: isMobileOrTablet ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobileOrTablet ? '30px' : '50px',
            backgroundColor: 'rgba(18, 18, 18, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: isMobileOrTablet ? '24px' : '40px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer'
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: '1', width: '100%' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(253, 66, 2, 0.12)',
              border: '1px solid rgba(253, 66, 2, 0.3)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '16px'
            }}>
              <Smartphone size={16} color="#FD4202" />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FD4202', textTransform: 'uppercase' }}>
                Instant Booking
              </span>
            </div>

            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: isMobileOrTablet ? '1.8rem' : '2.3rem',
              fontWeight: '700',
              margin: '0 0 14px 0',
              lineHeight: '1.2'
            }}>
              Easy App Operation & Direct Cargo Booking
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#94A3B8',
              fontSize: '0.92rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Navigate an intuitive interface crafted specifically for truckers. Discover verified goods across your preferred corridors, secure competitive rates with zero commission cuts, and accept loads with a single tap.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Zero-friction, quick-action dispatch interface',
                'Instant match alerts based on truck type and location',
                'Verified shippers with upfront rates and zero middleman fees'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                  <CheckCircle2 size={18} color="#FD4202" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT MEDIA HOVER PREVIEW */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            style={{
              flex: '1',
              width: '100%',
              height: isMobileOrTablet ? '260px' : '340px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(253, 66, 2, 0.3)',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src={cargoImage} 
              alt="Get Your Cargo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        </motion.div>

        {/* FEATURE 2: GET YOUR WAY BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            y: -8, 
            scale: 1.015,
            borderColor: 'rgba(253, 66, 2, 0.45)',
            boxShadow: '0 20px 40px rgba(253, 66, 2, 0.15), 0 0 20px rgba(253, 66, 2, 0.1)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: 'flex',
            flexDirection: isMobileOrTablet ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobileOrTablet ? '30px' : '50px',
            backgroundColor: 'rgba(18, 18, 18, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: isMobileOrTablet ? '24px' : '40px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer'
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: '1', width: '100%' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(253, 66, 2, 0.12)',
              border: '1px solid rgba(253, 66, 2, 0.3)',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '16px'
            }}>
              <MapPin size={16} color="#FD4202" />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FD4202', textTransform: 'uppercase' }}>
                Live Corridor Telemetry
              </span>
            </div>

            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: isMobileOrTablet ? '1.8rem' : '2.3rem',
              fontWeight: '700',
              margin: '0 0 14px 0',
              lineHeight: '1.2'
            }}>
              Watch Your Way & Seamless Unloading
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#94A3B8',
              fontSize: '0.92rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Track your route seamlessly with integrated telemetry and live guidance. Arrive at destination hubs with verified unloading check-ins and trigger instant digital payouts upon delivery completion.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Real-time GPS navigation with live corridor safety updates',
                'Hassle-free digital unloading confirmation & receipt generation',
                'Automated instant payment release directly to your account'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                  <CheckCircle2 size={18} color="#FD4202" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT MEDIA HOVER PREVIEW */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            style={{
              flex: '1',
              width: '100%',
              height: isMobileOrTablet ? '260px' : '340px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(253, 66, 2, 0.3)',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src={wayImage} 
              alt="Get Your Way" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}