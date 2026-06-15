import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
      {/* Background gradients */}
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent-emerald-light) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: -1 }} />

      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 className="animate-fade-in" style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
          Together, we reimagine the <span className="text-gradient">Future</span> of your <span className="text-gradient">Digital Enterprise</span>
        </h1>
        <p className="animate-fade-in delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          In a world defined by constant change, rising complexity, and evolving market demands, reimagining the future is no
          longer optional, it’s a competitive advantage. At Quool Solutions, we partner with organizations to transform their
          digital enterprise, unlocking new opportunities for growth, accelerating innovation, and building the resilience
          needed to thrive in an ever-changing business landscape.
        </p>
        <div className="animate-fade-in delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#services" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            Explore Services <ArrowRight size={20} />
          </a>
          <a href="#methodology" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            Our Methodology
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
