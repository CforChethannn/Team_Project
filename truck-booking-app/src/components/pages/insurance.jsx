import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImage from '../../assets/GoWheel-org.svg';

export default function Insurance() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        padding: isMobileOrTablet ? '40px 5%' : '50px 8%', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(253, 66, 2, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      {/* WITHGOWHEEL GRID PATTERN OVERLAY */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* AMBIENT GLOW BACKDROPS */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isMobileOrTablet ? '260px' : '500px',
          height: isMobileOrTablet ? '260px' : '500px',
          backgroundColor: '#FD4202',
          opacity: 0.08,
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: isMobileOrTablet ? '220px' : '400px',
          height: isMobileOrTablet ? '220px' : '400px',
          backgroundColor: '#FD4202',
          opacity: 0.05,
          borderRadius: '50%',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* CENTER GOWHEEL LOGO WATERMARK */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobileOrTablet ? '280px' : '520px',
        height: isMobileOrTablet ? '280px' : '520px',
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.04,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {!logoError ? (
          <img 
            src={logoImage} 
            alt="GoWheel Logo Background" 
            onError={() => setLogoError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <div style={{ fontFamily: "'League Spartan', sans-serif", fontSize: '7rem', fontWeight: '900', color: '#FD4202' }}>
            GW
          </div>
        )}
      </div>

      {/* COMPACT SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '28px', position: 'relative', zIndex: 3 }}>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: '0.78rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '4px'
        }}>
          Comprehensive Protection
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: isMobileOrTablet ? '2rem' : '2.7rem',
          fontWeight: '800',
          margin: 0,
          lineHeight: '1.1'
        }}>
          Driver & Fleet <span style={{ color: '#FD4202' }}>Insurance Coverage</span>
        </h2>
        <p style={{
          color: '#94A3B8',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.85rem',
          maxWidth: '520px',
          margin: '6px auto 0 auto'
        }}>
          Secure your transit operations with instant quote customization for commercial cargo vehicles and complete health security for drivers.
        </p>
      </div>

      {/* TWO CIRCULAR INSURANCE PORTALS CONTAINER */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileOrTablet ? '1fr' : 'repeat(2, 1fr)',
        gap: isMobileOrTablet ? '24px' : '40px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* LEFT CIRCLE: TRUCK INSURANCE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.025,
            borderColor: '#FD4202',
            boxShadow: '0 20px 45px rgba(253, 66, 2, 0.25), 0 0 30px rgba(253, 66, 2, 0.15)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: isMobileOrTablet ? '100%' : '385px',
            height: isMobileOrTablet ? 'auto' : '385px',
            margin: '0 auto',
            borderRadius: isMobileOrTablet ? '24px' : '50%',
            backgroundColor: 'rgba(253, 66, 2, 0.08)',
            border: '2px solid rgba(253, 66, 2, 0.45)',
            padding: isMobileOrTablet ? '28px 20px' : '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(253, 66, 2, 0.08)',
            cursor: 'pointer',
            boxSizing: 'border-box'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(253, 66, 2, 0.18)',
            border: '1px solid #FD4202',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px'
          }}>
            <Shield size={19} color="#FD4202" />
          </div>

          <h3 style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: '1.45rem',
            fontWeight: '700',
            margin: '0 0 2px 0',
            lineHeight: '1.15'
          }}>
            Truck Insurance
          </h3>

          <div style={{
            fontFamily: "'Sora', sans-serif",
            color: '#FD4202',
            fontSize: '0.8rem',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            Quote: Starting at ₹1,499 / mo
          </div>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            color: '#CBD5E1',
            fontSize: '0.78rem',
            lineHeight: '1.35',
            marginBottom: '12px',
            maxWidth: '280px'
          }}>
            Complete commercial vehicle protection covering transit damages, third-party liability, and cargo loss.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', width: '100%', maxWidth: '260px' }}>
            {[
              'Comprehensive collision & transit cover',
              'Zero depreciation add-on options',
              '24/7 roadside emergency assistance'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                <CheckCircle2 size={13} color="#FD4202" style={{ flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: '#e03a02' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: '#FD4202',
              color: '#FFFFFF',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '20px',
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: '700',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 4px 12px rgba(253, 66, 2, 0.4)'
            }}
          >
            Get Truck Quote <ArrowRight size={13} />
          </motion.button>
        </motion.div>

        {/* RIGHT CIRCLE: HEALTH INSURANCE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.025,
            borderColor: '#FD4202',
            boxShadow: '0 20px 45px rgba(253, 66, 2, 0.25), 0 0 30px rgba(253, 66, 2, 0.15)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{
            width: isMobileOrTablet ? '100%' : '385px',
            height: isMobileOrTablet ? 'auto' : '385px',
            margin: '0 auto',
            borderRadius: isMobileOrTablet ? '24px' : '50%',
            backgroundColor: 'rgba(253, 66, 2, 0.08)',
            border: '2px solid rgba(253, 66, 2, 0.45)',
            padding: isMobileOrTablet ? '28px 20px' : '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(253, 66, 2, 0.08)',
            cursor: 'pointer',
            boxSizing: 'border-box'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(253, 66, 2, 0.18)',
            border: '1px solid #FD4202',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px'
          }}>
            <HeartPulse size={19} color="#FD4202" />
          </div>

          <h3 style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: '1.45rem',
            fontWeight: '700',
            margin: '0 0 2px 0',
            lineHeight: '1.15'
          }}>
            Health Insurance
          </h3>

          <div style={{
            fontFamily: "'Sora', sans-serif",
            color: '#FD4202',
            fontSize: '0.8rem',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            Quote: Starting at ₹499 / mo
          </div>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            color: '#CBD5E1',
            fontSize: '0.78rem',
            lineHeight: '1.35',
            marginBottom: '12px',
            maxWidth: '280px'
          }}>
            Dedicated medical cover for drivers and families, featuring cashless hospitalization and accident disability support.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left', width: '100%', maxWidth: '260px' }}>
            {[
              '₹5 Lakh cashless medical hospitalization',
              'Accidental death & disability rider',
              'Annual health checkups included'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                <CheckCircle2 size={13} color="#FD4202" style={{ flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.04, backgroundColor: '#e03a02' }}
            whileTap={{ scale: 0.96 }}
            style={{
              backgroundColor: '#FD4202',
              color: '#FFFFFF',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '20px',
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: '700',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 4px 12px rgba(253, 66, 2, 0.4)'
            }}
          >
            Get Health Quote <ArrowRight size={13} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}