import React from 'react';
import { motion } from 'framer-motion';
import { Truck, PackageCheck, ArrowRight } from 'lucide-react';

export default function RoleBriefing({ onNavigateDriver, onNavigateShipper }) {
  const pathways = [
    {
      id: 1,
      title: 'For Truck Drivers',
      icon: <Truck size={36} color="#FD4202" />,
      description: 'Connect directly with verified business shippers across top freight routes. Keep 100% of your earnings with zero middleman commissions and real-time load booking.',
      buttonLabel: 'Know More',
      action: onNavigateDriver,
      initialX: -30
    },
    {
      id: 2,
      title: 'For Shippers',
      icon: <PackageCheck size={36} color="#FD4202" />,
      description: 'Post cargo loads in seconds and instantly match with background-checked fleet operators. Track shipments end-to-end with transparent pricing and zero brokerage markups.',
      buttonLabel: 'Know More',
      action: onNavigateShipper,
      initialX: 30
    }
  ];

  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '100px 5%',
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        style={{ textAlign: 'center', marginBottom: '60px', transform: 'translateZ(0)' }}
      >
        <span style={{
          fontFamily: "'poppins', sans-serif",
          color: '#FD4202',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Tailored For You
        </span>
        <h2 style={{
          fontFamily: "'Georgian', sans-serif",
          fontSize: '3.2rem',
          fontWeight: '800',
          margin: '10px 0 0 0',
          lineHeight: '1.1'
        }}>
          Choose Your <span style={{ color: '#FD4202' }}>Pathway</span>
        </h2>
      </motion.div>

      {/* STACKED CARDS CONTAINER */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px',
        position: 'relative',
        zIndex: 2
      }}>
        {pathways.map((path) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, x: path.initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={{ 
              y: -4,
              borderColor: '#FD4202',
              boxShadow: '0 12px 35px rgba(253, 66, 2, 0.25)' 
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '36px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '40px',
              willChange: 'transform, opacity, border-color, box-shadow',
              transform: 'translateZ(0)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              flexWrap: 'wrap'
            }}
          >
            {/* ICON & TITLE */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '24px',
              minWidth: '280px',
              flex: '1 1 auto'
            }}>
              <div style={{
                backgroundColor: 'rgba(253, 66, 2, 0.1)',
                padding: '16px',
                borderRadius: '16px',
                border: '1px solid rgba(253, 66, 2, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {path.icon}
              </div>
              <h3 style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: '2.4rem',
                fontWeight: '800',
                color: '#FFFFFF',
                margin: 0,
                lineHeight: '1'
              }}>
                {path.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#A0AEC0',
              margin: 0,
              flex: '2 1 400px',
              minWidth: '280px'
            }}>
              {path.description}
            </p>

            {/* BUTTON */}
            <motion.button
              onClick={path.action}
              whileHover={{ scale: 1.04, backgroundColor: '#FD4202', color: '#FFFFFF' }}
              whileTap={{ scale: 0.96 }}
              style={{
                backgroundColor: 'transparent',
                color: '#FD4202',
                border: '2px solid #FD4202',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '0.95rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                flexShrink: 0,
                transition: 'background-color 0.25s ease, color 0.25s ease',
                width: '100%',
                maxWidth: '180px'
              }}
            >
              {path.buttonLabel} <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}