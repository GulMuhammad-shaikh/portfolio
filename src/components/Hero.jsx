import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ theme, isDark }) => {
  const techStack = [
    { name: 'React.js', color: '#38bdf8' },
    { name: 'Node.js', color: '#22c55e' },
    { name: 'Express.js', color: '#94a3b8' },
    { name: 'MongoDB', color: '#10b981' },
    { name: 'JavaScript (ES6+)', color: '#f59e0b' },
    { name: 'Next.js', color: isDark ? '#ffffff' : '#0f172a' },
    { name: 'Tailwind CSS', color: '#06b6d4' },
    { name: 'PHP & MySQL', color: '#8b5cf6' },
    { name: 'REST APIs', color: '#ec4899' },
    { name: 'Git & GitHub', color: '#f97316' }
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '120px 0 60px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%'
      }}
    >
      {/* Subtle Ambient Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 90vw)',
          height: '450px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.05) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="responsive-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main 2-Column Balanced Hero Grid */}
        <div className="hero-grid-modern">
          {/* Left Column: Authoritative Developer Introduction */}
          <div style={{ textAlign: 'left' }}>
            {/* Live Availability Status Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#10b981',
                marginBottom: '20px'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              <span>Available for full-time roles & projects</span>
            </div>

            {/* Clear, High-Impact Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: theme.textPrimary,
                margin: '0 0 20px 0'
              }}
            >
              Engineering scalable{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                full-stack
              </span>{' '}
              web applications.
            </h1>

            {/* Authentic, Trustworthy Bio */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.12rem)',
                lineHeight: 1.7,
                color: theme.textSecondary,
                maxWidth: '560px',
                margin: '0 0 32px 0'
              }}
            >
              Hi, I'm <strong style={{ color: theme.textPrimary }}>Gul Muhammad</strong> — a Full-Stack MERN Developer based in Karachi, Pakistan. I build dependable web applications with React, Node.js, Express, and MongoDB, focused on clean architecture, real-world utility, and seamless user experiences.
            </p>

            {/* Call-to-Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '40px'
              }}
            >
              {/* Primary: View Projects */}
              <Link
                to="/projects"
                className="hover-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  background: '#2563eb',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </Link>

              {/* Secondary: Download Resume */}
              <a
                href={portfolioData.personal.resumeUrl}
                download="Gul Muhammad Web Developer (1).pdf"
                className="hover-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#ffffff',
                  color: theme.textPrimary,
                  border: `1px solid ${theme.borderSubtle}`,
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: isDark ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              {/* Contact Me */}
              <Link
                to="/contact"
                className="hover-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: 'transparent',
                  color: theme.textSecondary,
                  border: `1px solid ${theme.borderSubtle}`,
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Mail size={16} />
                <span>Contact</span>
              </Link>
            </div>

            {/* Quick Metrics / Credibility Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: `1px solid ${theme.borderSubtle}`,
                maxWidth: '560px'
              }}
            >
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: theme.textPrimary }}>
                  1+ Yrs
                </div>
                <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: 500 }}>
                  Hands-on Experience
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: theme.textPrimary }}>
                  CampusCoin
                </div>
                <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: 500 }}>
                  Featured Live Project
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: theme.textPrimary }}>
                  ADSE
                </div>
                <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: 500 }}>
                  Aptech Learning Center
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: theme.textPrimary }}>
                  Karachi
                </div>
                <div style={{ fontSize: '0.78rem', color: theme.textMuted, fontWeight: 500 }}>
                  Sindh, Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Developer Presentation Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Clean Framed Card */}
            <div
              className="interactive-card"
              style={{
                width: '100%',
                maxWidth: '420px',
                borderRadius: '24px',
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                boxShadow: theme.shadowLarge,
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Card Top Header */}
              <div
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${theme.borderSubtle}`,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : '#f8fafc'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#ef4444'
                    }}
                  />
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#f59e0b'
                    }}
                  />
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#10b981'
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: theme.textMuted,
                    textTransform: 'uppercase'
                  }}
                >
                  developer.json
                </div>
              </div>

              {/* Developer Photo Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '380px',
                  background: isDark
                    ? 'linear-gradient(180deg, rgba(37, 99, 235, 0.08) 0%, rgba(10, 12, 16, 0.95) 100%)'
                    : 'linear-gradient(180deg, rgba(37, 99, 235, 0.05) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/profile.png"
                  alt="Gul Muhammad - MERN Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: isDark
                      ? 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.8))'
                      : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
                  }}
                />

                {/* Status Pill Floating at Bottom of Photo */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    background: isDark ? 'rgba(10, 12, 16, 0.85)' : 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid ${theme.borderSubtle}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: theme.textPrimary }}>
                      Gul Muhammad
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>
                      MERN Stack & AI Developer
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: theme.textMuted
                    }}
                  >
                    <MapPin size={12} color="#2563eb" />
                    <span>Karachi</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: `1px solid ${theme.borderSubtle}`,
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : '#ffffff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-lift"
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#f1f5f9',
                      color: theme.textPrimary,
                      textDecoration: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Github size={14} /> GitHub
                  </a>

                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-lift"
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#f1f5f9',
                      color: theme.textPrimary,
                      textDecoration: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: '#10b981'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#10b981'
                    }}
                  />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div
          style={{
            marginTop: '56px',
            paddingTop: '32px',
            borderTop: `1px solid ${theme.borderSubtle}`,
            width: '100%'
          }}
        >
          <div
            style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: theme.textMuted,
              marginBottom: '16px'
            }}
          >
            Core Technologies & Toolkit
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  background: isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
                  border: `1px solid ${theme.borderSubtle}`,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: theme.textPrimary,
                  boxShadow: isDark ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.03)'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: tech.color
                  }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
