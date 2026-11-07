import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteBanner() {
  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '100px 8%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* MAIN RAW QUOTE TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ maxWidth: '950px' }}
      >
        <h2 style={{
          fontFamily: "'Redaction 50'",
          fontSize: '3.8rem',
          fontWeight: '800',
          lineHeight: '1.2',
          color: '#FFFFFF',
          margin: '0 0 20px 0',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        //   fontStyle:'italic',
        }}>
          "Direct Connection, Verified Partners & <span style={{ color: '#FD4202' }}>Zero Brokerage Fee"</span>
        </h2>

        {/* SECONDARY TAGLINE */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '1.25rem',
          fontWeight: '400',
          color: '#A0AEC0',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Trust you can count on for every load.
        </p>
      </motion.div>
    </section>
  );
}
