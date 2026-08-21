import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronRight, Check } from 'lucide-react';

const ScrollReveal = ({ children, className = '', delay = '0s' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentDom = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentDom) observer.unobserve(currentDom);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    if (currentDom) observer.observe(currentDom);
    
    return () => {
      if (currentDom) observer.unobserve(currentDom);
    };
  }, []);

  return (
    <div ref={domRef} className={`${className} ${isVisible ? 'animate-fade-in' : ''}`} style={{ opacity: isVisible ? 1 : 0, animationDelay: delay, transition: 'opacity 0.5s ease' }}>
      {children}
    </div>
  );
};

const steps = [
  {
    number: "01",
    title: "Define the Opportunity",
    desc: "We uncover growth opportunities, operational inefficiencies, and technology gaps to build a roadmap that delivers measurable business value.",
    impacts: ["Reduced technology risk", "Clear investment priorities", "Faster decision-making", "Executive alignment"]
  },
  {
    number: "02",
    title: "Build Solutions That Scale",
    desc: "Our architects and engineers design secure, resilient, and future-ready solutions that support growth and innovation.",
    impacts: ["Accelerated time-to-market", "Improved customer experience", "Increased operational efficiency", "Reduced technical debt"]
  },
  {
    number: "03",
    title: "Maximize Value & Performance",
    desc: "We continuously optimize your solutions to ensure reliability, scalability, security, and ongoing business impact.",
    impacts: ["Higher ROI", "Improved system performance", "Enhanced security", "Continuous innovation"]
  }
];

const MethodologySection = () => {
  return (
    <section id="methodology" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      
      {/* 1. Outcome-Focused Headline & 2. Trust Indicators */}
      <div className="section-padding pb-0" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2 }}>
                Transform Ideas Into <span className="text-gradient">Measurable Business Results</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="0.1s">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '60px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={18} color="var(--accent-emerald)" /> 20+ Years of Enterprise Technology Leadership</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={18} color="var(--accent-emerald)" /> Enterprise Architecture & Digital Transformation Experts</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={18} color="var(--accent-emerald)" /> AI, Cloud & Software Engineering Specialists</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={18} color="var(--accent-emerald)" /> Trusted Across Multiple Industries</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Business Benefits Banner */}
      <ScrollReveal delay="0.2s">
        <div style={{ background: 'rgba(16, 185, 129, 0.05)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)', padding: '30px 0' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>Why Organizations Choose Us:</h3>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {['Business-First Approach', 'Enterprise-Grade Solutions', 'Rapid Time-to-Value', 'Scalable Architecture', 'Continuous Optimization'].map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Methodology Grid Layout (Methodology left, Lead Magnet right) */}
      <div className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '60px', alignItems: 'start' }}>
            
            {/* 4. 3-Step Methodology with Business Impacts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <ScrollReveal>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>Our Proven Framework</h3>
              </ScrollReveal>
              
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={`${index * 0.15}s`}>
                  <div className="glass-panel methodology-card" style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'inline-block', background: 'var(--accent-emerald)', color: '#fff', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '16px' }}>
                        STEP {step.number}
                      </div>
                      <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>{step.title}</h4>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>{step.desc}</p>
                      
                      <div style={{ background: 'rgba(255,255,255,0.5)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                        <p style={{ fontWeight: 700, marginBottom: '12px', fontSize: '0.95rem' }}>BUSINESS IMPACT:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                          {step.impacts.map((impact, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                              <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                              <span>{impact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right Column: Lead Magnet & Social Proof (Sticky on Desktop) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'sticky', top: '120px' }}>
              
              {/* 5. Mid-Section Lead Magnet */}
              <ScrollReveal delay="0.3s">
                <div className="glass-panel" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '40px', color: '#fff', border: 'none', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>Not Sure Where To Start?</h3>
                  <p style={{ fontSize: '1.1rem', marginBottom: '24px', opacity: 0.9 }}>
                    Get a complimentary 30-minute technology strategy consultation with one of our senior architects.
                  </p>
                  <p style={{ fontWeight: 600, marginBottom: '16px' }}>We'll help you identify:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      "AI implementation opportunities",
                      "Modernization priorities & quick wins",
                      "Cost optimization opportunities",
                      "Technology risks and bottlenecks"
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
                          <Check size={16} color="#fff" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-arrow-hover" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#fff', color: '#059669', padding: '16px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', width: '100%', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    Book Your Free Strategy Session <ChevronRight size={20} />
                  </a>
                </div>
              </ScrollReveal>

              {/* 6. Social Proof / Credibility Statement */}
              <ScrollReveal delay="0.4s">
                <div className="glass-panel" style={{ padding: '40px', borderLeft: '4px solid var(--accent-emerald)' }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>Built for Organizations That Need Results</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                    Whether you're modernizing legacy systems, adopting AI, optimizing operations, or launching new digital products, we help organizations navigate complexity and deliver measurable outcomes.
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </div>

      {/* 7. High-Value CTA Footer */}
      <ScrollReveal>
        <div style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-glass)', padding: '80px 20px', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>Ready to Unlock Your Next Growth Opportunity?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
              Let's discuss how AI, enterprise architecture, software engineering, and operational excellence can help you reduce costs, accelerate innovation, and scale with confidence.
            </p>
            <a href="#contact" className="btn-primary btn-arrow-hover" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.15rem', padding: '16px 40px', textDecoration: 'none' }}>
              Get My Custom Technology Roadmap <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </ScrollReveal>

    </section>
  );
};

export default MethodologySection;
