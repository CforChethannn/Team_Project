import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import driverImg from '../assets/driver.png'; // Make sure driver.png is in src/assets/
import shipperImg from '../assets/owner.png'; // Make sure shipper.png is in src/assets/

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      type: 'driver',
      name: 'Harvinder S.',
      role: 'Driver (10+ years exp)',
      image: driverImg,
      text: 'GoWheel changed the game for me. Finding reliable cargo is effortless now, and getting 0% commission means I actually keep my hard-earned pay. Verified partners mean no stress on the road.',
      pointerRight: false // Bubble comes after avatar (left aligned layout)
    },
    {
      id: 2,
      type: 'shipper',
      name: 'Rajendra Gopal',
      role: 'Logistics Manager',
      image: shipperImg,
      text: "Booking logistics has never been this seamless. We get instant access to verified drivers, the tracking is completely transparent, and since there's 0% brokerage, our operational costs have dropped significantly.",
      pointerRight: true // Bubble comes before avatar (right aligned layout)
    }
  ];

  return (
    <section 
      className="bg-ambient-briefing"
      style={{
        padding: '100px 5%',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h2 style={{
          fontFamily: "'poppins', sans-serif",
          fontSize: '3.2rem',
          fontWeight: '700',
          lineHeight: '1.1',
          textTransform: 'uppercase',
          margin: 0
        }}>
          What Our <span style={{ color: '#FD4202' }}>Clients Say</span>
        </h2>
      </motion.div>

      {/* REVIEWS ZIG-ZAG WRAPPER */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '90px',
        maxWidth: '1000px',
        width: '100%'
      }}>
        {/* REVIEW 1: DRIVER (AVATAR LEFT, BUBBLE RIGHT) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '40px',
          flexWrap: 'wrap-reverse'
        }}>
          {/* POPPING AVATAR WITH FILLED ORANGE CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              backgroundColor: '#FD4202',
              borderRadius: '50%',
              boxShadow: '0 0 50px rgba(253, 66, 2, 0.4)',
              flexShrink: 0
            }}
          >
            <img
              src={reviews[0].image}
              alt={reviews[0].name}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%) scale(1.15)', // Head pops out of circle
                transformOrigin: 'bottom center',
                width: '100%',
                height: 'auto',
                pointerEvents: 'none'
              }}
            />
          </motion.div>

          {/* MESSAGE BUBBLE */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '32px 36px',
              maxWidth: '540px',
              position: 'relative',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
            }}
          >
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#E2E8F0',
              margin: '0 0 20px 0'
            }}>
              "{reviews[0].text}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  {reviews[0].name}
                </h4>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.8rem',
                  color: '#A0AEC0'
                }}>
                  {reviews[0].role}
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FD4202" color="#FD4202" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* REVIEW 2: SHIPPER (BUBBLE LEFT, AVATAR RIGHT) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          {/* MESSAGE BUBBLE */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '32px 36px',
              maxWidth: '540px',
              position: 'relative',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
            }}
          >
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#E2E8F0',
              margin: '0 0 20px 0'
            }}>
              "{reviews[1].text}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  margin: 0
                }}>
                  {reviews[1].name}
                </h4>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.8rem',
                  color: '#A0AEC0'
                }}>
                  {reviews[1].role}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FD4202" color="#FD4202" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* POPPING AVATAR WITH FILLED ORANGE CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              backgroundColor: '#FD4202',
              borderRadius: '50%',
              boxShadow: '0 0 50px rgba(253, 66, 2, 0.4)',
              flexShrink: 0
            }}
          >
            <img
              src={reviews[1].image}
              alt={reviews[1].name}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%) scale(1.15)', // Head pops out of circle
                transformOrigin: 'bottom center',
                width: '100%',
                height: 'auto',
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}