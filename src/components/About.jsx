import React from 'react';
import {
  UserCheck,
  Download,
  Mail,
  Phone,
  MapPin,
  Languages,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const About = ({ theme, isDark }) => {
  const infoItems = [
    { icon: <UserCheck size={18} color="#3b82f6" />, label: 'Name', value: portfolioData.personal.name },
    { icon: <Briefcase size={18} color="#8b5cf6" />, label: 'Role', value: portfolioData.personal.title },
    { icon: <Mail size={18} color="#ea4335" />, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
    { icon: <Phone size={18} color="#10b981" />, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}` },
    { icon: <MapPin size={18} color="#f59e0b" />, label: 'Location', value: portfolioData.personal.location },
    { icon: <GraduationCap size={18} color="#06b6d4" />, label: 'Education', value: 'ADSE @ Aptech Learning' },
    { icon: <Languages size={18} color="#ec4899" />, label: 'Languages', value: 'English · Urdu · Sindhi' },
    { icon: <Sparkles size={18} color="#3b82f6" />, label: 'Specialty', value: 'MERN Stack & AI Workflows' }
  ];

  return (
    <section id="about" className="section-responsive" style={{ position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
      <div className="responsive-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <span>GET TO KNOW ME</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: theme.textPrimary,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            About <span style={{ color: '#3b82f6' }}>Me</span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: theme.textSecondary,
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Passionate MERN Stack Developer transforming complex concepts into clean, accessible, and intelligent digital experiences.
          </p>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
            width: '100%'
          }}
        >
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="interactive-card"
              style={{
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                borderRadius: '16px',
                padding: '20px 14px',
                textAlign: 'center',
                boxShadow: theme.shadowSmall
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '4px'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: theme.textSecondary, fontWeight: '500' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="responsive-2col">
          {/* Bio Story Card */}
          <div
            className="interactive-card card-padding"
            style={{
              background: theme.bgCard,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${theme.borderSubtle}`,
              borderRadius: '20px',
              boxShadow: theme.shadowMedium,
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)',
                color: '#3b82f6',
                fontWeight: '600',
                fontSize: '0.85rem',
                marginBottom: '20px'
              }}
            >
              <Code2 size={16} /> MERN & AI Problem Solver
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: '700',
                color: theme.textPrimary,
                marginBottom: '18px',
                lineHeight: '1.3'
              }}
            >
              Crafting Next-Generation Web Architectures
            </h3>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: '1.75',
                color: theme.textSecondary,
                marginBottom: '16px'
              }}
            >
              {portfolioData.personal.aboutBio1}
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: '1.75',
                color: theme.textSecondary,
                marginBottom: '28px'
              }}
            >
              {portfolioData.personal.aboutBio2}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {[
                'Full-Stack JavaScript & MERN architecture expert',
                'AI-enabled workflows & modern API integrations',
                'Performance-first, responsive, and mobile-friendly UI',
                'Strong relational & NoSQL database fundamentals (MongoDB, MySQL)'
              ].map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span style={{ fontSize: '0.92rem', color: theme.textPrimary, fontWeight: '500' }}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <div className="about-buttons-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Gul_Muhammad_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#ffffff',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.35)'
                }}
                className="hover-lift"
              >
                <Download size={18} /> Download CV
              </a>

              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  color: theme.textPrimary,
                  border: `1px solid ${theme.borderSubtle}`,
                  fontWeight: '600',
                  fontSize: '0.94rem',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Quick Info Grid Card */}
          <div
            className="interactive-card card-padding"
            style={{
              background: theme.bgCard,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${theme.borderSubtle}`,
              borderRadius: '20px',
              boxShadow: theme.shadowMedium,
              boxSizing: 'border-box'
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.35rem)',
                fontWeight: '700',
                color: theme.textPrimary,
                marginBottom: '24px'
              }}
            >
              Personal Details & Coordinates
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="about-info-item"
                  style={{
                    background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    border: `1px solid ${theme.borderSubtle}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '0.86rem', fontWeight: '600', color: theme.textMuted }}>
                      {item.label}
                    </span>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#3b82f6',
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                        overflowWrap: 'anywhere'
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: theme.textPrimary,
                        textAlign: 'right',
                        wordBreak: 'break-word'
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
