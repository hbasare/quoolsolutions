import React from 'react';
import { BrainCircuit, Map, Layers, Code2, Server, Lightbulb, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit size={32} color="var(--accent-emerald)" />,
    title: "AI Strategy & Intelligent Automation",
    subtitle: "Turn AI into a competitive advantage.",
    description: "We help organizations identify, implement, and scale AI solutions that automate processes, improve decision-making, enhance customer experiences, and drive measurable business outcomes.",
    outcomes: ["Increased productivity", "Reduced operational costs", "Faster decision-making", "Enhanced customer experiences"]
  },
  {
    icon: <Map size={32} color="var(--accent-emerald)" />,
    title: "Digital Transformation Roadmapping",
    subtitle: "Discover the highest-value opportunities for innovation.",
    description: "Our experts work with your team to identify business challenges, uncover growth opportunities, and create a practical technology roadmap aligned with your strategic objectives.",
    outcomes: ["Clear transformation strategy", "Reduced project risk", "Faster ROI", "Better investment decisions"]
  },
  {
    icon: <Layers size={32} color="var(--accent-emerald)" />,
    title: "Enterprise Architecture & Technology Strategy",
    subtitle: "Align technology investments with business growth.",
    description: "We design scalable, resilient, and future-ready technology ecosystems that support innovation, improve agility, and enable sustainable business growth.",
    outcomes: ["Improved business alignment", "Reduced technical debt", "Enhanced scalability", "Better governance and risk management"]
  },
  {
    icon: <Code2 size={32} color="var(--accent-emerald)" />,
    title: "Custom Software & Platform Engineering",
    subtitle: "Build solutions that differentiate your business.",
    description: "From cloud-native applications to enterprise platforms, we develop secure, scalable, and high-performance software tailored to your unique business needs.",
    outcomes: ["Faster time-to-market", "Improved customer experiences", "Greater operational efficiency", "Competitive differentiation"]
  },
  {
    icon: <Server size={32} color="var(--accent-emerald)" />,
    title: "Cloud & IT Operations Excellence",
    subtitle: "Keep your business running at peak performance.",
    description: "We optimize, secure, and manage critical technology environments to ensure reliability, resilience, and continuous business operations.",
    outcomes: ["Improved uptime", "Enhanced security", "Reduced operational overhead", "Increased system performance"]
  },
  {
    icon: <Lightbulb size={32} color="var(--accent-emerald)" />,
    title: "Technology Advisory & Executive Consulting",
    subtitle: "Gain clarity for your most critical technology decisions.",
    description: "Our senior consultants help leaders navigate digital transformation, modernization initiatives, technology investments, and organizational change with confidence.",
    outcomes: ["Strategic technology alignment", "Accelerated transformation", "Improved decision-making", "Sustainable business growth"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>
            Transform Your Business with Strategic Technology <span className="text-gradient">Solutions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            <strong>From AI adoption and enterprise architecture to software delivery and operational excellence, we help organizations accelerate growth, reduce complexity, and unlock new opportunities through technology.</strong>
          </p>
        </div>

        {/* Changed grid layout to 2 columns for wider cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '40px', marginBottom: '80px' }}>
          {services.map((service, index) => (
            <div key={index} className="glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, padding: '40px 30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                <div style={{ background: 'var(--accent-emerald-light)', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)', flex: 1 }}>{service.title}</h3>
              </div>
              
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
                {service.subtitle}
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                {service.description}
              </p>
              
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Outcomes:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {service.outcomes.map((outcome, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ lineHeight: 1.4 }}>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Generation Intro/Outro Section */}
        <div className="glass-panel animate-fade-in" style={{ padding: '60px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,250,252,0.9))' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>
            Ready to unlock your next growth opportunity?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.6 }}>
            Whether you're exploring AI, modernizing legacy systems, optimizing operations, or building new digital products, our experts help you transform technology into measurable business results.
          </p>
          <a href="#contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', fontSize: '1.1rem', padding: '14px 32px' }}>
            Schedule a Free Strategy Consultation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
