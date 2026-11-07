import React from 'react';
import logoSvg from '../assets/Gowheel-org.svg'; // Adjust path if saved in public/ (e.g., src="/Gowheel-org.svg")

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000000',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#FFFFFF',
      padding: '80px 5% 40px 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* RESPONSIVE STYLES */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto 60px auto;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .footer-logo-img {
          height: 42px;
          width: auto;
          object-fit: contain;
        }

        .footer-logo-text {
          font-family: 'League Spartan', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1;
        }

        .footer-heading {
          font-family: 'League Spartan', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 20px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link-item {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          color: #A0AEC0;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-link-item:hover {
          color: #FD4202;
        }

        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FD4202;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .social-icon-btn:hover {
          background-color: #FD4202;
          color: #FFFFFF;
          border-color: #FD4202;
          transform: translateY(-3px);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 24px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>

      {/* TOP CONTENT GRID */}
      <div className="footer-grid">
        {/* BRAND & LOGO COLUMN */}
        <div>
          <div className="footer-brand-header">
            {/* SVG LOGO IMAGE */}
            <img 
              src={logoSvg} 
              alt="GoWheel Logo" 
              className="footer-logo-img" 
            />
            {/* BRAND NAME */}
            <h3 className="footer-logo-text">
              Go<span style={{ color: '#FD4202' }}>Wheel</span>
            </h3>
          </div>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem',
            color: '#A0AEC0',
            lineHeight: '1.6',
            marginBottom: '24px',
            maxWidth: '360px'
          }}>
            India's premier zero-brokerage freight platform connecting verified shippers and truck drivers directly with transparent route pricing.
          </p>

          {/* SOCIAL MEDIA ICONS */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              IG
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              X
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              FB
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="footer-heading">Platform</h4>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link-item">About Us</a></li>
            <li><a href="#features" className="footer-link-item">Zero Brokerage</a></li>
            <li><a href="#drivers" className="footer-link-item">Driver Portal</a></li>
            <li><a href="#shippers" className="footer-link-item">Shipper Portal</a></li>
            <li><a href="#contact" className="footer-link-item">Support Desk</a></li>
          </ul>
        </div>

        {/* LEGAL LINKS */}
        <div>
          <h4 className="footer-heading">Legal & Safety</h4>
          <ul className="footer-links">
            <li><a href="#privacy" className="footer-link-item">Privacy Policy</a></li>
            <li><a href="#terms" className="footer-link-item">Terms of Service</a></li>
            <li><a href="#insurance" className="footer-link-item">Cargo Security</a></li>
            <li><a href="#verification" className="footer-link-item">Account Verification</a></li>
          </ul>
        </div>

        {/* VISUAL NEWSLETTER */}
        <div>
          <h4 className="footer-heading">Route & Load Alerts</h4>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.85rem',
            color: '#A0AEC0',
            lineHeight: '1.5',
            marginBottom: '16px'
          }}>
            Subscribe to get instant freight updates across primary South & North corridors.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="email"
              readOnly
              placeholder="Enter your email address"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#FFFFFF',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="button"
              style={{
                backgroundColor: 'transparent',
                color: '#FD4202',
                border: '2px solid #FD4202',
                borderRadius: '10px',
                padding: '10px 16px',
                fontWeight: '700',
                fontSize: '0.85rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.25s ease'
              }}
            >
              Get Alerts →
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.85rem',
          color: '#718096',
          margin: 0
        }}>
          © 2026 GoWheel Logistics Platform. All rights reserved.
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#A0AEC0',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8rem'
        }}>
          🔒 Encrypted & Verified Freight Platform
        </div>
      </div>
    </footer>
  );
}