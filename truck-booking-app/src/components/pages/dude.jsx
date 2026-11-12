import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, UserCheck, CheckCircle2 } from 'lucide-react';

export default function Dude() {
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
        minHeight: '100vh',
        padding: isMobileOrTablet ? '60px 5%' : '70px 8%', 
        overflowX: 'hidden',
        borderTop: '1px solid rgba(253, 66, 2, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobileOrTablet ? '260px' : '450px',
          height: isMobileOrTablet ? '260px' : '450px',
          backgroundColor: '#FD4202',
          opacity: 0.07,
          borderRadius: '50%',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* COMPACT SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '32px', position: 'relative', zIndex: 2 }}>
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: '0.8rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '6px'
        }}>
          Role-Based Access & Identity
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: isMobileOrTablet ? '2.1rem' : '2.8rem',
          fontWeight: '800',
          margin: 0,
          lineHeight: '1.1'
        }}>
          Dedicated <span style={{ color: '#FD4202' }}>Owner & Driver</span> Portals
        </h2>
        <p style={{
          color: '#94A3B8',
          fontFamily: "'Poppins', sans-serif",
          marginTop: '8px',
          fontSize: '0.88rem',
          maxWidth: '520px',
          margin: '8px auto 0 auto'
        }}>
          Tailored verification credentials and management profiles designed specifically for fleet owners and active transit operators.
        </p>
      </div>

      {/* TWO BOXES GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobileOrTablet ? '1fr' : 'repeat(2, 1fr)',
        gap: '24px',
        width: '100%',
        maxWidth: '1150px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* LEFT BOX: TRUCK OWNER ID & PROFILE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            y: -8, 
            scale: 1.015,
            borderColor: 'rgba(253, 66, 2, 0.45)',
            boxShadow: '0 20px 40px rgba(253, 66, 2, 0.15), 0 0 20px rgba(253, 66, 2, 0.1)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{
            backgroundColor: 'rgba(18, 18, 18, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: isMobileOrTablet ? '20px' : '28px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div>
            {/* BADGE HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(253, 66, 2, 0.12)',
                border: '1px solid rgba(253, 66, 2, 0.3)',
                padding: '5px 12px',
                borderRadius: '16px'
              }}>
                <Truck size={14} color="#FD4202" />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FD4202', textTransform: 'uppercase' }}>
                  Owner ID Credential
                </span>
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', color: '#64748B', fontWeight: '600' }}>
                ID: GW-OWN-8492
              </span>
            </div>

            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '1.75rem',
              fontWeight: '700',
              margin: '0 0 8px 0',
              lineHeight: '1.2'
            }}>
              Truck Owner Portal
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#94A3B8',
              fontSize: '0.85rem',
              lineHeight: '1.5',
              marginBottom: '18px'
            }}>
              Manage your fleet portfolio, monitor telemetry across active corridors, track direct payouts, and assign verified drivers securely.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Multi-vehicle fleet tracking & asset registration',
                'Verified Owner ID badge with direct banking settlement',
                'Comprehensive earnings & brokerage-free tax invoicing',
                'Driver assignment & trip dispatch authority'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                  <CheckCircle2 size={15} color="#FD4202" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT BOX: TRUCK DRIVER ID & PROFILE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            y: -8, 
            scale: 1.015,
            borderColor: 'rgba(253, 66, 2, 0.45)',
            boxShadow: '0 20px 40px rgba(253, 66, 2, 0.15), 0 0 20px rgba(253, 66, 2, 0.1)'
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{
            backgroundColor: 'rgba(18, 18, 18, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: isMobileOrTablet ? '20px' : '28px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div>
            {/* BADGE HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(253, 66, 2, 0.12)',
                border: '1px solid rgba(253, 66, 2, 0.3)',
                padding: '5px 12px',
                borderRadius: '16px'
              }}>
                <UserCheck size={14} color="#FD4202" />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FD4202', textTransform: 'uppercase' }}>
                  Driver ID Credential
                </span>
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.75rem', color: '#64748B', fontWeight: '600' }}>
                ID: GW-DRV-3310
              </span>
            </div>

            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '1.75rem',
              fontWeight: '700',
              margin: '0 0 8px 0',
              lineHeight: '1.2'
            }}>
              Truck Driver Portal
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#94A3B8',
              fontSize: '0.85rem',
              lineHeight: '1.5',
              marginBottom: '18px'
            }}>
              Accept incoming load matching requests, track route telemetry in real time, confirm cargo unloading, and receive instant payouts directly.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Verified Driver ID badge with license & safety records',
                'Instant load discovery & one-tap cargo acceptance',
                'Real-time GPS route navigation & corridor telemetry',
                'Instant digital payment receipts upon delivery completion'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#E2E8F0', fontFamily: "'Poppins', sans-serif" }}>
                  <CheckCircle2 size={15} color="#FD4202" style={{ flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}