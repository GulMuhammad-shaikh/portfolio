import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Sparkles,
  Code2,
  Database,
  Bot,
  Atom,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ theme, isDark }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioData.personal.typingRoles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setTypewriterText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypewriterText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const heroSectionStyle = {
    minHeight: '92vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '120px 0 60px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100vw'
  };

  const ambientGlowStyle1 = {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: 'min(400px, 90vw)',
    height: 'min(400px, 90vw)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, rgba(139, 92, 246, 0.06) 50%, transparent 70%)',
    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: 0
  };

  const ambientGlowStyle2 = {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: 'min(400px, 90vw)',
    height: 'min(400px, 90vw)',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(99, 102, 241, 0.05) 60%, transparent 70%)',
    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: 0
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '9999px',
    fontSize: '0.84rem',
    fontWeight: '600',
    background: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)',
    border: '1px solid rgba(59, 130, 246, 0.25)',
    color: '#3b82f6',
    marginBottom: '20px'
  };

  const floatingCardBase = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 18px',
    borderRadius: '16px',
    background: isDark ? 'rgba(17, 24, 39, 0.88)' : 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${theme.borderSubtle}`,
    boxShadow: theme.shadowMedium,
    color: theme.textPrimary,
    fontWeight: '600',
    fontSize: '0.88rem',
    zIndex: 2,
    maxWidth: '220px'
  };

  const mobileTechBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 14px',
    borderRadius: '14px',
    background: isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)',
    border: `1px solid ${theme.borderSubtle}`,
    boxShadow: theme.shadowSmall,
    fontSize: '0.82rem',
    fontWeight: '600',
    color: theme.textPrimary,
    textAlign: 'left'
  };

  return (
    <section id="home" style={heroSectionStyle}>
      <div style={ambientGlowStyle1} className="animate-pulse-glow" />
      <div style={ambientGlowStyle2} className="animate-pulse-glow" />

      <div className="responsive-container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content-col">
            <div style={badgeStyle}>
              <Sparkles size={16} />
              <span>{portfolioData.personal.availability}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: '900',
                color: theme.textPrimary,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '0 0 16px 0',
                wordBreak: 'break-word'
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline'
                }}
              >
                {portfolioData.personal.name}
              </span>
            </h1>

            <div
              className="hero-typewriter-wrap"
              style={{
                fontSize: 'clamp(1.15rem, 2.4vw, 1.75rem)',
                fontWeight: '700',
                color: theme.textSecondary,
                marginBottom: '20px',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px'
              }}
            >
              <span>I'm a</span>
              <span style={{ color: '#3b82f6' }}>{typewriterText}</span>
              <span className="cursor-blink" />
            </div>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.7',
                color: theme.textSecondary,
                maxWidth: '560px',
                marginBottom: '32px'
              }}
            >
              {portfolioData.personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-buttons-wrap"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px', width: '100%' }}
            >
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
                }}
                className="hover-lift"
              >
                Explore Projects <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                Contact Me
              </Link>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Gul_Muhammad_Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  fontWeight: '600',
                  fontSize: '0.94rem',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            {/* Social Icons & Coordinates */}
            <div
              className="hero-socials-wrap"
              style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.textPrimary,
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Github size={20} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                title="Email Gul"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea4335',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Mail size={20} />
              </a>

              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                title="Call Gul"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Phone size={20} />
              </a>

              <span
                style={{
                  fontSize: '0.82rem',
                  color: theme.textMuted,
                  padding: '4px 8px'
                }}
              >
                📍 Karachi, PK
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Orb & Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Center Visual Orb */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'min(300px, 78vw)',
                height: 'min(300px, 78vw)',
                maxWidth: '300px',
                maxHeight: '300px',
                margin: '0 auto'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(124, 58, 237, 0.25))',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.2)'
                }}
                className="animate-spin-slow"
              >
                <div
                  style={{
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    border: '1px dashed rgba(236, 72, 153, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                />
              </div>

              {/* Center Emblem */}
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  zIndex: 3
                }}
              >
                <div
                  style={{
                    width: 'min(80px, 22vw)',
                    height: 'min(80px, 22vw)',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)'
                  }}
                >
                  <Code2 size={36} />
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: theme.textPrimary,
                    background: isDark ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    border: `1px solid ${theme.borderSubtle}`
                  }}
                >
                  Full-Stack AI
                </span>
              </div>

              {/* Floating Badges for Desktop (> 768px) */}
              <div className="tech-badges-desktop">
                <div
                  style={{
                    ...floatingCardBase,
                    top: '0px',
                    left: '-24px'
                  }}
                  className="animate-float-slow interactive-card"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(59, 130, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3b82f6',
                      flexShrink: 0
                    }}
                  >
                    <Atom size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700' }}>React & Next.js</div>
                    <div style={{ fontSize: '0.7rem', color: theme.textSecondary }}>Frontend</div>
                  </div>
                </div>

                <div
                  style={{
                    ...floatingCardBase,
                    bottom: '10px',
                    left: '-20px'
                  }}
                  className="animate-float-reverse interactive-card"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      flexShrink: 0
                    }}
                  >
                    <Server size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700' }}>Node & Express</div>
                    <div style={{ fontSize: '0.7rem', color: theme.textSecondary }}>Backend</div>
                  </div>
                </div>

                <div
                  style={{
                    ...floatingCardBase,
                    top: '10px',
                    right: '-24px'
                  }}
                  className="animate-float-reverse interactive-card"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#8b5cf6',
                      flexShrink: 0
                    }}
                  >
                    <Bot size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700' }}>AI Powered</div>
                    <div style={{ fontSize: '0.7rem', color: theme.textSecondary }}>LLMs & APIs</div>
                  </div>
                </div>

                <div
                  style={{
                    ...floatingCardBase,
                    bottom: '15px',
                    right: '-20px'
                  }}
                  className="animate-float-slow interactive-card"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(236, 72, 153, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ec4899',
                      flexShrink: 0
                    }}
                  >
                    <Database size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.84rem', fontWeight: '700' }}>MongoDB & SQL</div>
                    <div style={{ fontSize: '0.7rem', color: theme.textSecondary }}>Databases</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Tech Badges (<= 768px): clean 2-column grid below orb */}
            <div className="tech-badges-mobile">
              <div style={mobileTechBadgeStyle}>
                <Atom size={18} color="#38bdf8" />
                <span>React / Next.js</span>
              </div>
              <div style={mobileTechBadgeStyle}>
                <Server size={18} color="#10b981" />
                <span>Node / Express</span>
              </div>
              <div style={mobileTechBadgeStyle}>
                <Bot size={18} color="#8b5cf6" />
                <span>AI Powered</span>
              </div>
              <div style={mobileTechBadgeStyle}>
                <Database size={18} color="#ec4899" />
                <span>MongoDB / SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
