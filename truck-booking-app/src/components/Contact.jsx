import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, ShieldCheck, Clock, Truck, Package, Building2 } from 'lucide-react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('driver');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    originCity: '',
    destinationCity: '',
    vehicleType: '',
    cargoWeight: '',
    fleetSize: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Submission:', { role: activeTab, ...formData });
    alert('Thank you! Our GoWheel logistics coordinator will get in touch shortly.');
  };

  return (
    <section className="bg-ambient-briefing contact-section">
      {/* RESPONSIVE CSS INJECTION */}
      <style>{`
        .contact-section {
          padding: 100px 5%;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          width: 100%;
          max-width: 1200px;
          z-index: 2;
        }

        .contact-card {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          will-change: transform, opacity, border-color, box-shadow;
          transform: translateZ(0);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-info-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tabs-container {
          display: flex;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 30px;
          gap: 4px;
        }

        .section-title {
          font-family: 'League Spartan', sans-serif;
          font-size: 3.2rem;
          font-weight: 800;
          margin: 10px 0 0 0;
          line-height: 1.1;
        }

        /* TABLET RESPONSIVE (<= 992px) */
        @media (max-width: 992px) {
          .contact-section {
            padding: 80px 4%;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact-card {
            padding: 32px;
          }
          .section-title {
            font-size: 2.6rem;
          }
        }

        /* MOBILE RESPONSIVE (<= 640px) */
        @media (max-width: 640px) {
          .contact-section {
            padding: 60px 4%;
          }
          .contact-card {
            padding: 24px 20px;
            border-radius: 18px;
          }
          .section-title {
            font-size: 2.1rem;
          }
          .tabs-container {
            flex-direction: column;
            gap: 6px;
          }
          .tab-button {
            padding: 10px 8px !important;
            font-size: 0.8rem !important;
          }
          .submit-btn {
            width: 100% !important;
          }
          .info-row {
            gap: 12px !important;
          }
        }
      `}</style>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        style={{ textAlign: 'center', marginBottom: '40px', transform: 'translateZ(0)' }}
      >
        <span style={{
          fontFamily: "'Sora', sans-serif",
          color: '#FD4202',
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Direct Support
        </span>
        <h2 className="section-title">
          Get In <span style={{ color: '#FD4202' }}>Touch</span>
        </h2>
      </motion.div>

      {/* MAIN CONTAINER */}
      <div className="contact-grid">
        {/* FORM PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
          whileHover={{ borderColor: '#FD4202', boxShadow: '0 12px 35px rgba(253, 66, 2, 0.2)' }}
          className="contact-card"
        >
          {/* ROLE SELECTOR TABS */}
          <div className="tabs-container">
            {[
              { id: 'driver', label: 'Truck Driver', icon: <Truck size={16} /> },
              { id: 'shipper', label: 'Cargo Shipper', icon: <Package size={16} /> },
              { id: 'fleet', label: 'Fleet Owner', icon: <Building2 size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                className="tab-button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeTab === tab.id ? '#FD4202' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : '#A0AEC0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
              <div>
                {activeTab === 'driver' && (
                  <>
                    <label style={labelStyle}>Vehicle Model / Capacity</label>
                    <input
                      type="text"
                      name="vehicleType"
                      placeholder="e.g. 14-Wheeler / 25 Ton"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      style={inputStyle}
                    />
                  </>
                )}
                {activeTab === 'shipper' && (
                  <>
                    <label style={labelStyle}>Estimated Cargo Weight</label>
                    <input
                      type="text"
                      name="cargoWeight"
                      placeholder="e.g. 15 Tons Steel Coils"
                      value={formData.cargoWeight}
                      onChange={handleInputChange}
                      style={inputStyle}
                    />
                  </>
                )}
                {activeTab === 'fleet' && (
                  <>
                    <label style={labelStyle}>Total Trucks in Fleet</label>
                    <input
                      type="text"
                      name="fleetSize"
                      placeholder="e.g. 12 Trucks"
                      value={formData.fleetSize}
                      onChange={handleInputChange}
                      style={inputStyle}
                    />
                  </>
                )}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Primary Origin</label>
                <input
                  type="text"
                  name="originCity"
                  placeholder="e.g. Bengaluru"
                  value={formData.originCity}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Primary Destination</label>
                <input
                  type="text"
                  name="destinationCity"
                  placeholder="e.g. Mumbai"
                  value={formData.destinationCity}
                  onChange={handleInputChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Message / Specific Route Query</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Share any special instructions, regular routes, or specific load details..."
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#FD4202', color: '#FFFFFF' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="submit-btn"
              style={{
                backgroundColor: 'transparent',
                color: '#FD4202',
                border: '2px solid #FD4202',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px',
                transition: 'all 0.25s ease'
              }}
            >
              Submit Inquiry <Send size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
          whileHover={{ borderColor: '#FD4202', boxShadow: '0 12px 35px rgba(253, 66, 2, 0.2)' }}
          className="contact-card contact-info-card"
        >
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(253, 66, 2, 0.1)',
              border: '1px solid rgba(253, 66, 2, 0.3)',
              padding: '6px 14px',
              borderRadius: '20px',
              color: '#FD4202',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '24px'
            }}>
              <Clock size={16} /> 24/7 Logistics Desk
            </div>

            <h3 style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: '2.2rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              color: '#FFFFFF'
            }}>
              Direct Operational <span style={{ color: '#FD4202' }}>Support</span>
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.95rem',
              color: '#A0AEC0',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              Need immediate load matching, onboarding assistance, or route tracking? Our regional coordinators handle inquiries across all primary Indian freight corridors with zero delays.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div className="info-row" style={infoRowStyle}>
                <div style={iconBoxStyle}><Phone size={20} color="#FD4202" /></div>
                <div>
                  <div style={infoTitleStyle}>Call Center / WhatsApp</div>
                  <div style={infoValueStyle}>+91 1800-GOWHEEL (469-4335)</div>
                </div>
              </div>

              <div className="info-row" style={infoRowStyle}>
                <div style={iconBoxStyle}><Mail size={20} color="#FD4202" /></div>
                <div>
                  <div style={infoTitleStyle}>Support Email</div>
                  <div style={infoValueStyle}>support@gowheel.in</div>
                </div>
              </div>

              <div className="info-row" style={infoRowStyle}>
                <div style={iconBoxStyle}><MapPin size={20} color="#FD4202" /></div>
                <div>
                  <div style={infoTitleStyle}>Logistics Hub HQ</div>
                  <div style={infoValueStyle}>Hebbal Industrial Area, Mysuru, KA</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(253, 66, 2, 0.08)',
            border: '1px solid rgba(253, 66, 2, 0.2)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <ShieldCheck size={32} color="#FD4202" style={{ flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              color: '#E2E8F0',
              lineHeight: '1.5'
            }}>
              <strong>100% Verified Accounts:</strong> All submitted licenses, GST numbers, and RC documents undergo instant digital verification.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// STYLES
const labelStyle = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#E2E8F0',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '10px',
  padding: '12px 14px',
  color: '#FFFFFF',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box'
};

const infoRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const iconBoxStyle = {
  backgroundColor: 'rgba(253, 66, 2, 0.1)',
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid rgba(253, 66, 2, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const infoTitleStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.8rem',
  color: '#A0AEC0',
  fontWeight: '500'
};

const infoValueStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '1rem',
  color: '#FFFFFF',
  fontWeight: '600',
  marginTop: '2px'
};