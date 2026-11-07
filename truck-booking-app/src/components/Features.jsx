import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Percent } from 'lucide-react';
import logoWatermark from '../assets/GoWheel-org.svg'; // Ensure logo SVG path is correct

export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: 'Verified Shippers',
      description: 'Connect directly with background-checked, trusted business shippers for secure cargo loads.',
      icon: <ShieldCheck size={36} color="#FD4202" />,
      tag: 'TRUST & SAFETY'
    },
    {
      id: 2,
      title: 'Verified Truck Drivers',
      description: 'Access a reliable network of licensed, verified fleet operators and experienced drivers on-demand.',
      icon: <UserCheck size={36} color="#FD4202" />,
      tag: 'QUALIFIED FLEET'
    },
    {
      id: 3,
      title: '0% Commission',
      description: 'Keep 100% of your earnings. Zero hidden middleman fees or brokerage cuts on booked loads.',
      icon: <Percent size={36} color="#FD4202" />,
      tag: 'MAXIMUM PROFIT'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '100px 5%',
      color: '#FFFFFF',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Container for absolute background elements
      overflow: 'hidden',
      borderTop: '1px solid rgba(253, 66, 2, 0.2)'
    }}>
      {/* 1. WATERMARK LOGO BEHIND CARDS */}
      <img
        src={logoWatermark}
        alt=""
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          opacity: 0.08,             // Subtle opacity so it peeks through the glass
          filter: 'blur(1px)',        // Slight blur to enhance depth
          pointerEvents: 'none',      // Allows user clicks to pass through
          zIndex: 1
        }}
      />

      {/* 2. GLOW ACCENT BEHIND LOGO */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        backgroundColor: '#FD4202',
        opacity: 0.12,
        borderRadius: '50%',
        filter: 'blur(120px)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* 3. SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}
      >
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Why Choose GoWheel
        </span>
        <h2 style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: '3.2rem',
          fontWeight: '800',
          margin: '10px 0 0 0',
          lineHeight: '1.1'
        }}>
          Engineered For <span style={{ color: '#FD4202' }}>Efficiency</span>
        </h2>
      </motion.div>

      {/* 4. FEATURE CARDS GRID (GLASS EFFECT) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          zIndex: 2 // Keeps cards above the watermark logo
        }}
      >
        {featuresList.map((feature) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              borderColor: '#FD4202',
              boxShadow: '0 12px 30px rgba(253, 66, 2, 0.25)' 
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              backdropFilter: 'blur(16px)', // Blurs watermark logo passing behind card
              WebkitBackdropFilter: 'blur(16px)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            {/* ICON CONTAINER */}
            <div style={{
              backgroundColor: 'rgba(253, 66, 2, 0.1)',
              padding: '16px',
              borderRadius: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              border: '1px solid rgba(253, 66, 2, 0.2)'
            }}>
              {feature.icon}
            </div>

            {/* TAG */}
            <span style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}>
              {feature.tag}
            </span>

            {/* TITLE */}
            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#FFFFFF',
              margin: '0 0 12px 0'
            }}>
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              color: '#A0AEC0',
              lineHeight: '1.6',
              margin: 0
            }}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}