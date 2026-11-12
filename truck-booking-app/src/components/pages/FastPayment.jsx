import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, CreditCard } from 'lucide-react';
import paymentBgImage from '../../assets/payment-transaction.jpg';

export default function FastPayment() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [imageError, setImageError] = useState(false);

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
        padding: isMobileOrTablet ? '60px 5%' : '80px 8%', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(253, 66, 2, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
      }}
    >
      {/* FULL SCREEN TRANSACTION BACKGROUND IMAGE / SVG */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.22
      }}>
        {!imageError ? (
          <img 
            src={paymentBgImage} 
            alt="Full Screen Transaction Background" 
            onError={() => setImageError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* FALLBACK FULL-SCREEN GRAPHIC (SHIPPER -> ₹ -> DRIVER) */
          <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice" fill="none">
            <circle cx="150" cy="200" r="100" stroke="#FD4202" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
            <text x="150" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="League Spartan">SHIPPER</text>
            
            <path d="M 250 200 L 440 200" stroke="#FD4202" strokeWidth="3" strokeDasharray="8 8" opacity="0.8" />
            
            <circle cx="500" cy="200" r="55" fill="rgba(253, 66, 2, 0.2)" stroke="#FD4202" strokeWidth="3" />
            <text x="500" y="215" textAnchor="middle" fill="#FD4202" fontSize="48" fontWeight="bold" fontFamily="Sora">₹</text>
            
            <path d="M 560 200 L 750 200" stroke="#FD4202" strokeWidth="3" strokeDasharray="8 8" opacity="0.8" />
            
            <circle cx="850" cy="200" r="100" stroke="#FD4202" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
            <text x="850" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="League Spartan">DRIVER</text>
          </svg>
        )}
      </div>

      {/* AMBIENT GLOW BACKDROP */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobileOrTablet ? '280px' : '500px',
          height: isMobileOrTablet ? '280px' : '500px',
          backgroundColor: '#FD4202',
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(150px)',
          pointerEvents: 'none',
          zIndex: 2
        }} 
      />

      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 3 }}>
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
          Instant Settlements
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: isMobileOrTablet ? '2.2rem' : '3.2rem',
          fontWeight: '800',
          margin: 0,
          lineHeight: '1.1'
        }}>
          Direct Shipper to Driver <span style={{ color: '#FD4202' }}>Fast Payouts</span>
        </h2>
        <p style={{
          color: '#94A3B8',
          fontFamily: "'Poppins', sans-serif",
          marginTop: '8px',
          fontSize: '0.9rem',
          maxWidth: '540px',
          margin: '8px auto 0 auto'
        }}>
          Transparent digital billing with automated payout release upon delivery confirmation. Zero middleman holds or hidden fees.
        </p>
      </div>

      {/* TWO-COLUMN DETAILS & CARDS CONTENT (NO ENCLOSING BOX CONTAINER) */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1150px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 3,
        display: 'flex',
        flexDirection: isMobileOrTablet ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobileOrTablet ? '30px' : '50px'
      }}>
        
        {/* LEFT DETAILS COLUMN */}
        <div style={{ flex: '1', width: '100%' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(253, 66, 2, 0.12)',
            border: '1px solid rgba(253, 66, 2, 0.3)',
            padding: '5px 12px',
            borderRadius: '16px',
            marginBottom: '14px'
          }}>
            <Zap size={14} color="#FD4202" />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FD4202', textTransform: 'uppercase' }}>
              Instant Digital Settlement
            </span>
          </div>

          <h3 style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: isMobileOrTablet ? '1.7rem' : '2.2rem',
            fontWeight: '700',
            margin: '0 0 10px 0',
            lineHeight: '1.2'
          }}>
            Automated Digital Billing & Direct Transfer
          </h3>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            color: '#CBD5E1',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            Eliminate payment delays and middleman commissions. GoWheel's smart ledger verifies delivery completion and releases instant payments directly from the shipper to the driver's account.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Instant payment release upon digital unloading confirmation',
              '100% direct shipper-to-driver digital invoicing',
              'Zero hidden transaction fees or broker deductions',
              'Transparent transaction history with automated PDF receipts'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#F1F5F9', fontFamily: "'Poppins', sans-serif" }}>
                <CheckCircle2 size={16} color="#FD4202" style={{ flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT INTERACTIVE CARDS COLUMN */}
        <div style={{
          flex: '1',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {/* SHIPPER CARD */}
          <motion.div 
            whileHover={{ x: 6, borderColor: 'rgba(253, 66, 2, 0.6)' }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(12, 12, 12, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              padding: '14px 20px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(253, 66, 2, 0.15)',
                border: '1px solid #FD4202',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CreditCard size={18} color="#FD4202" />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>Sender</span>
                <span style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: '700', fontSize: '1rem' }}>Verified Shipper</span>
              </div>
            </div>
            <span style={{ color: '#10B981', fontWeight: '700', fontSize: '0.85rem' }}>Payment Released</span>
          </motion.div>

          {/* TRANSACTION DIRECTION BADGE (RUPEES SYMBOL) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(253, 66, 2, 0.35)' }} />
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FD4202',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Sora', sans-serif",
              fontWeight: '800',
              fontSize: '1.3rem',
              boxShadow: '0 0 18px rgba(253, 66, 2, 0.5)'
            }}>
              ₹
            </div>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(253, 66, 2, 0.35)' }} />
          </div>

          {/* DRIVER CARD */}
          <motion.div 
            whileHover={{ x: -6, borderColor: 'rgba(16, 185, 129, 0.6)' }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(12, 12, 12, 0.75)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '16px',
              padding: '14px 20px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={18} color="#10B981" />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>Receiver</span>
                <span style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: '700', fontSize: '1rem' }}>Trucker / Driver</span>
              </div>
            </div>
            <span style={{ color: '#10B981', fontWeight: '700', fontSize: '0.9rem' }}>+ ₹ Instant Payout</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}