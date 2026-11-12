import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Percent, Clock, MapPin, Headphones } from 'lucide-react';
import logoWatermark from '../../assets/GoWheel-org.svg';

export default function WithGoWheel({ sectionRef }) {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Screen resize listener for responsive layout switching
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 850);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const boxes = [
    { id: 1, title: '0% Brokerage', desc: 'Keep 100% of your earnings with zero middleman commissions.', icon: <Percent size={18} color="#FD4202" /> },
    { id: 2, title: 'Verified Shippers', desc: 'Direct connection with fully verified cargo owners.', icon: <ShieldCheck size={18} color="#FD4202" /> },
    { id: 3, title: 'Live Telemetry', desc: 'Real-time GPS tracking and route security monitoring.', icon: <MapPin size={18} color="#FD4202" /> },
    { id: 4, title: 'Instant Matching', desc: 'Smart algorithms match optimal nearby loads in seconds.', icon: <Truck size={18} color="#FD4202" /> },
    { id: 5, title: '24/7 Support Desk', desc: 'Dedicated 24/7 operational assistance across key corridors.', icon: <Headphones size={18} color="#FD4202" /> },
    { id: 6, title: 'Fast Payouts', desc: 'Instant, transparent digital payouts completed upon delivery.', icon: <Clock size={18} color="#FD4202" /> }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: isMobileOrTablet ? 'auto' : '85vh',
        width: '100vw',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: isMobileOrTablet ? '60px 20px' : '40px 5%',
        backgroundColor: '#000000',
        boxSizing: 'border-box',
        overflow: 'hidden',
        borderTop: '1px solid rgba(253, 66, 2, 0.15)'
      }}
    >
      {/* WATERMARK BACKGROUND LOGO */}
      <img
        src={logoWatermark}
        alt=""
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobileOrTablet ? '320px' : '500px',
          opacity: 0.04,
          filter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* AMBIENT GLOW BACKDROP */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobileOrTablet ? '220px' : '300px',
        height: isMobileOrTablet ? '220px' : '300px',
        backgroundColor: '#FD4202',
        opacity: 0.08,
        borderRadius: '50%',
        filter: 'blur(90px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: isMobileOrTablet ? '0.75rem' : '0.8rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '4px'
        }}>
          Ecosystem Features
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: isMobileOrTablet ? '2rem' : '2.5rem',
          fontWeight: '800',
          color: '#FFFFFF',
          margin: 0,
          lineHeight: '1.1'
        }}>
          With Your <span style={{ color: '#FD4202' }}>GoWheel</span>
        </h2>
        <p style={{
          color: '#94A3B8',
          fontFamily: "'Poppins', sans-serif",
          marginTop: '6px',
          fontSize: isMobileOrTablet ? '0.8rem' : '0.85rem',
          maxWidth: '460px',
          padding: '0 10px'
        }}>
          Operational advantages designed to put control back into your hands.
        </p>
      </div>

      {/* RESPONSIVE LAYOUT SWITCH: DESKTOP OVAL VS MOBILE GRID */}
      {isMobileOrTablet ? (
        /* MOBILE & TABLET STACKED GRID VIEW */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          width: '100%',
          maxWidth: '650px',
          marginTop: '20px',
          zIndex: 2
        }}>
          {boxes.map((box, index) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              style={{
                backgroundColor: 'rgba(18, 18, 18, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <div style={{
                  backgroundColor: 'rgba(253, 66, 2, 0.12)',
                  padding: '8px',
                  borderRadius: '8px',
                  border: '1px solid rgba(253, 66, 2, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {box.icon}
                </div>
                <h3 style={{ fontFamily: "'League Spartan', sans-serif", fontSize: '0.95rem', fontWeight: '700', color: '#FFFFFF', margin: 0 }}>
                  {box.title}
                </h3>
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: '#94A3B8', margin: 0, lineHeight: '1.4' }}>
                {box.desc}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        /* DESKTOP RADIAL OVAL VIEW */
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          height: '440px',
          marginTop: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}>
          {/* CENTER CORE BADGE */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            backgroundColor: 'rgba(253, 66, 2, 0.1)',
            border: '2px solid #FD4202',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '12px',
            boxShadow: '0 0 25px rgba(253, 66, 2, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 5
          }}>
            <span style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '0.9rem',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: '1.3'
            }}>
              GoWheel Ecosystem
            </span>
          </div>

          {/* 6 CARDS IN OVAL FORMATION */}
          {boxes.map((box, index) => {
            const angle = (index * (360 / boxes.length)) - 90;
            const radiusX = 290; 
            const radiusY = 190;
            const x = radiusX * Math.cos((angle * Math.PI) / 180);
            const y = radiusY * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, scale: 1, x: x, y: y }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.45, 
                  delay: index * 0.07, 
                  type: 'spring', 
                  stiffness: 200,
                  damping: 18 
                }}
                whileHover={{ 
                  scale: 1.04, 
                  borderColor: 'rgba(253, 66, 2, 0.6)',
                  boxShadow: '0 8px 25px rgba(253, 66, 2, 0.25)' 
                }}
                style={{
                  position: 'absolute',
                  width: '185px',
                  backgroundColor: 'rgba(18, 18, 18, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '12px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                  zIndex: 4,
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <div style={{
                    backgroundColor: 'rgba(253, 66, 2, 0.12)',
                    padding: '6px',
                    borderRadius: '8px',
                    border: '1px solid rgba(253, 66, 2, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {box.icon}
                  </div>
                  <h3 style={{ 
                    fontFamily: "'League Spartan', sans-serif", 
                    fontSize: '0.88rem', 
                    fontWeight: '700', 
                    color: '#FFFFFF', 
                    margin: 0 
                  }}>
                    {box.title}
                  </h3>
                </div>
                <p style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontSize: '0.72rem', 
                  color: '#94A3B8', 
                  margin: 0, 
                  lineHeight: '1.35' 
                }}>
                  {box.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}