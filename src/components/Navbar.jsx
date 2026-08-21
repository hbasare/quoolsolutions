import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="glass-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Quool Solutions - Enterprise Architecture, AI and Cloud Consulting Logo" width="219" height="90" style={{ height: '90px', width: 'auto' }} />
        </div>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Services</a>
          <a href="#methodology" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--text-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Methodology</a>
          <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', textDecoration: 'none', display: 'inline-block' }}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
