import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Building, Briefcase, MessageSquare, Tag } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
      case 'company':
      case 'role':
      case 'subject':
      case 'message':
        return value.trim() ? '' : 'This field is required';
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) return 'Email is required';
        return emailRegex.test(value) ? '' : 'Please enter a valid email address';
      case 'phone':
        if (!value) return 'Phone number is required';
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        return phoneRegex.test(value) ? '' : 'Phone number must be 10 digits';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));

    // Real-time validation if field was already touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, formattedValue) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields on submit
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) return;

    setStatus('submitting');
    
    const submitData = new FormData();
    submitData.append("access_key", "ba1cb85a-1158-476d-a5ac-bdaa2388cb62");
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({
          name: '', email: '', phone: '', company: '', role: '', subject: '', message: ''
        });
        setTouched({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const getInputClassName = (name) => {
    if (!touched[name]) return '';
    return errors[name] ? 'input-error' : 'input-success';
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="contact-header animate-fade-in">
          <h2 className="text-gradient">Get in Touch</h2>
          <p className="contact-subtitle"><strong style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.25rem', display: 'block', marginBottom: '8px' }}>Turn your vision into results.</strong> From digital transformation and cloud solutions to AI and enterprise modernization, we're ready to help you accelerate your business outcomes. Fill out the form below and let's explore what's possible together.</p>
        </div>
        
        <div className="contact-content animate-fade-in delay-100">
          <div className="glass-panel contact-card">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name"><User size={18} /> Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('name')} placeholder="John Doe" />
                  {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="input-group">
                  <label htmlFor="email"><Mail size={18} /> Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('email')} placeholder="john@company.com" />
                  {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="phone"><Phone size={18} /> Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('phone')} placeholder="(555) 000-0000" />
                  {touched.phone && errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                <div className="input-group">
                  <label htmlFor="company"><Building size={18} /> Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('company')} placeholder="Acme Corp" />
                  {touched.company && errors.company && <span className="error-text">{errors.company}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="role"><Briefcase size={18} /> Position / Role</label>
                  <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('role')} placeholder="CTO" />
                  {touched.role && errors.role && <span className="error-text">{errors.role}</span>}
                </div>
                <div className="input-group">
                  <label htmlFor="subject"><Tag size={18} /> Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('subject')} placeholder="How can we help?" />
                  {touched.subject && errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="message"><MessageSquare size={18} /> Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className={getInputClassName('message')} rows="5" placeholder="Tell us about your project or inquiry..."></textarea>
                {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" className="btn-primary submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <span className="btn-content">Sending...</span>
                ) : (
                  <span className="btn-content">Book a Free Consultation <Send size={18} /></span>
                )}
              </button>

              {status === 'success' && (
                <div className="status-message success-message">
                  <CheckCircle size={20} />
                  <p>Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="status-message error-message">
                  <AlertCircle size={20} />
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
