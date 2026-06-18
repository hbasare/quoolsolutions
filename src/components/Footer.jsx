import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-glass)', padding: '60px 20px 30px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', marginBottom: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="Quool Solutions Logo" style={{ height: '75px' }} />
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            Elevating your business through modern enterprise architecture, AI, and robust engineering.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '80px' }}>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '20px' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Us</a>
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</a>
              <a href="#methodology" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Methodology</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '20px' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://www.linkedin.com/company/quoolsolutions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-glass)', paddingTop: '30px' }}>
        <p>&copy; {new Date().getFullYear()} Quool Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
