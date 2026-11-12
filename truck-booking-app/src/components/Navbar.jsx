import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus } from 'lucide-react';
import logo from '../assets/GoWheel-org.svg';

export default function Navbar({ onNavigateHome, onNavigateTrucker, currentPage }) {
  const [activeLink, setActiveLink] = useState(currentPage === 'trucker' ? 'Trucker' : 'Home');

  const navLinks = [
    { 
      name: 'Home', 
      action: () => { 
        setActiveLink('Home'); 
        if (onNavigateHome) onNavigateHome(); 
      } 
    },
    { 
      name: 'Trucker', 
      action: () => { 
        setActiveLink('Trucker'); 
        if (onNavigateTrucker) onNavigateTrucker(); 
      } 
    },
    { name: 'Transport Service', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 32px',
        backgroundColor: '#fff',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(253, 66, 2, 0.4)',
        position: 'fixed',
        top: '20px',
        left: '40px',
        right: '40px',
        borderRadius: '40px',
        zIndex: 1000
      }}
    >
      {/* 1. LOGO (Clicking logo goes Home) */}
      <motion.div 
        onClick={onNavigateHome}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          fontSize: '1.4rem', 
          fontWeight: '800', 
          color: '#000',
          cursor: 'pointer'
        }}
      >
        <img 
          src={logo} 
          alt="GoWheel Logo" 
          style={{ height: '38px', width: 'auto' }} 
        />
        <span style={{ fontFamily: 'monospace' }}>
          <span style={{ color: '#FD490D' }}>Go</span>Wheel
        </span>
      </motion.div>

      {/* 2. NAVIGATION LINKS */}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center', fontFamily: 'Times New Roman, serif' }}>
        {navLinks.map((link) => (
          link.action ? (
            <motion.span
              key={link.name}
              onClick={link.action}
              whileHover={{ color: '#FD4202' }}
              style={{
                color: activeLink === link.name ? '#FD4202' : '#000',
                textDecoration: 'none',
                fontWeight: activeLink === link.name ? '700' : '500',
                fontSize: '1rem',
                position: 'relative',
                padding: '6px 0',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: '#FD4202',
                    borderRadius: '2px'
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.span>
          ) : (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              whileHover={{ color: '#FD4202' }}
              style={{
                color: '#000',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                padding: '6px 0',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
            </motion.a>
          )
        ))}
      </div>

      {/* 3. BUTTONS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <motion.button 
          whileHover={{ scale: 1.04, backgroundColor: '#000', color: '#fff' }}
          whileTap={{ scale: 0.96 }}
          style={{
            backgroundColor: 'transparent',
            color: '#000',
            border: '2px solid #000',
            padding: '8px 18px',
            borderRadius: '20px',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <LogIn size={16} /> Sign In
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.04, backgroundColor: '#e03a02' }}
          whileTap={{ scale: 0.96 }}
          style={{
            backgroundColor: '#FD4202',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(253, 66, 2, 0.3)'
          }}
        >
          <UserPlus size={16} /> Sign Up
        </motion.button>
      </div>
    </motion.nav>
  );
}