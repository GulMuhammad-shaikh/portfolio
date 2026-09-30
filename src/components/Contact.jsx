import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  Copy,
  Check,
  MessageSquare,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ theme, isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)',
    border: `1px solid ${theme.borderSubtle}`,
    color: theme.textPrimary,
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    boxSizing: 'border-box'
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#3b82f6',
              background: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)',
              border: `1px solid ${theme.borderSubtle}`,
              marginBottom: '16px'
            }}
          >
            <Sparkles size={15} />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: theme.textPrimary,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            Contact <span style={{ color: '#3b82f6' }}>Me</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: theme.textSecondary,
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Have a project in mind, seeking a MERN Stack Developer, or looking to collaborate? Reach out directly!
          </p>
        </div>

        {/* Contact Container Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Contact Details */}
          <div
            className="interactive-card"
            style={{
              background: theme.bgCard,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${theme.borderSubtle}`,
              borderRadius: '20px',
              padding: '36px',
              boxShadow: theme.shadowMedium
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: theme.textPrimary,
                marginBottom: '12px'
              }}
            >
              Let's Build Something Great
            </h3>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: '1.7',
                color: theme.textSecondary,
                marginBottom: '32px'
              }}
            >
              Whether you need a dynamic web app, an AI-powered portal, API integration, or full-stack software consulting, I'm ready to contribute.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${theme.borderSubtle}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(234, 67, 53, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ea4335'
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: '600' }}>EMAIL</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: '600',
                        color: theme.textPrimary,
                        textDecoration: 'none'
                      }}
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedField === 'email' ? '#10b981' : theme.textMuted,
                    cursor: 'pointer',
                    padding: '8px'
                  }}
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${theme.borderSubtle}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981'
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: '600' }}>PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: '600',
                        color: theme.textPrimary,
                        textDecoration: 'none'
                      }}
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedField === 'phone' ? '#10b981' : theme.textMuted,
                    cursor: 'pointer',
                    padding: '8px'
                  }}
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* WhatsApp Quick Message Button */}
              <a
                href={`https://wa.me/923042681062?text=Hi%20Gul%20Muhammad,%20I%20saw%20your%20portfolio`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  color: '#25d366',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '0.94rem'
                }}
                className="hover-lift"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>

              {/* Social Profiles Row */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    border: `1px solid ${theme.borderSubtle}`,
                    color: theme.textPrimary,
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}
                  className="hover-lift"
                >
                  <Linkedin size={18} color="#0a66c2" /> LinkedIn
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
                    border: `1px solid ${theme.borderSubtle}`,
                    color: theme.textPrimary,
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}
                  className="hover-lift"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="interactive-card"
            style={{
              background: theme.bgCard,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${theme.borderSubtle}`,
              borderRadius: '20px',
              padding: '36px',
              boxShadow: theme.shadowMedium
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    margin: '0 auto 20px auto'
                  }}
                >
                  <Check size={36} />
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: theme.textPrimary,
                    marginBottom: '10px'
                  }}
                >
                  Message Sent Successfully!
                </h3>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: theme.textSecondary,
                    maxWidth: '440px',
                    margin: '0 auto 26px auto',
                    lineHeight: '1.6'
                  }}
                >
                  Thank you for reaching out, <strong>{formData.name || 'there'}</strong>! I will review your message and respond directly via {formData.email || 'email'} promptly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: theme.textPrimary,
                    margin: 0
                  }}
                >
                  Send a Direct Message
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: '600',
                        color: theme.textSecondary,
                        marginBottom: '8px'
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontWeight: '600',
                        color: theme.textSecondary,
                        marginBottom: '8px'
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: '600',
                      color: theme.textSecondary,
                      marginBottom: '8px'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry / Collaboration"
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.84rem',
                      fontWeight: '600',
                      color: theme.textSecondary,
                      marginBottom: '8px'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Gul, I would like to discuss..."
                    required
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  className="hover-lift"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
