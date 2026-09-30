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
  Cpu,
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
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '120px 0 80px',
    overflow: 'hidden',
    boxSizing: 'border-box'
  };

  const ambientGlowStyle1 = {
    position: 'absolute',
    top: '15%',
    left: '10%',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
    filter: 'blur(70px)',
    pointerEvents: 'none',
    zIndex: 0
  };

  const ambientGlowStyle2 = {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.14) 0%, rgba(99, 102, 241, 0.06) 60%, transparent 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: 0
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
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
    padding: '14px 20px',
    borderRadius: '16px',
    background: isDark ? 'rgba(17, 24, 39, 0.85)' : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1px solid ${theme.borderSubtle}`,
    boxShadow: theme.shadowMedium,
    color: theme.textPrimary,
    fontWeight: '600',
    fontSize: '0.9rem',
    zIndex: 2
  };

  return (
    <section id="home" style={heroSectionStyle}>
      <div style={ambientGlowStyle1} className="animate-pulse-glow" />
      <div style={ambientGlowStyle2} className="animate-pulse-glow" />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        <div style={contentGridStyle}>
          {/* Left Column: Hero Copy */}
          <div>
            <div style={badgeStyle}>
              <Sparkles size={16} />
              <span>{portfolioData.personal.availability}</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: '900',
                color: theme.textPrimary,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 16px 0'
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
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
                fontWeight: '700',
                color: theme.textSecondary,
                marginBottom: '20px',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span style={{ marginRight: '8px' }}>I'm a</span>
              <span style={{ color: '#3b82f6' }}>{typewriterText}</span>
              <span className="cursor-blink" />
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
                color: theme.textSecondary,
                maxWidth: '560px',
                marginBottom: '32px'
              }}
            >
              {portfolioData.personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '0.98rem',
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
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  color: theme.textPrimary,
                  border: `1px solid ${theme.borderSubtle}`,
                  fontWeight: '600',
                  fontSize: '0.98rem',
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
                  gap: '8px',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Download size={18} /> Download CV
              </a>
            </div>

            {/* Social Icons & Direct Contact Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: '44px',
                  height: '44px',
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
                  width: '44px',
                  height: '44px',
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
                  width: '44px',
                  height: '44px',
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
                  width: '44px',
                  height: '44px',
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
                  fontSize: '0.85rem',
                  color: theme.textMuted,
                  marginLeft: '8px'
                }}
              >
                📍 Karachi, Pakistan
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Sphere & Floating Cards */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '440px'
            }}
          >
            {/* Center Visual Orb / Code Emblem */}
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(124, 58, 237, 0.25))',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 0 60px rgba(59, 130, 246, 0.2)'
              }}
              className="animate-spin-slow"
            >
              <div
                style={{
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(236, 72, 153, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>

            {/* Non-spinning Center Icon */}
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.5)'
                }}
              >
                <Code2 size={46} />
              </div>
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: theme.textPrimary,
                  background: isDark ? 'rgba(11, 15, 25, 0.8)' : 'rgba(255, 255, 255, 0.85)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  border: `1px solid ${theme.borderSubtle}`
                }}
              >
                Full-Stack AI
              </span>
            </div>

            {/* Floating Tech Badges */}
            <div
              style={{
                ...floatingCardBase,
                top: '20px',
                left: '-10px'
              }}
              className="animate-float-slow interactive-card"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b82f6'
                }}
              >
                <Atom size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700' }}>React & Next.js</div>
                <div style={{ fontSize: '0.72rem', color: theme.textSecondary }}>Modern Frontend</div>
              </div>
            </div>

            <div
              style={{
                ...floatingCardBase,
                bottom: '30px',
                left: '0px'
              }}
              className="animate-float-reverse interactive-card"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <Server size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700' }}>Node & Express</div>
                <div style={{ fontSize: '0.72rem', color: theme.textSecondary }}>Scalable Backend</div>
              </div>
            </div>

            <div
              style={{
                ...floatingCardBase,
                top: '40px',
                right: '-10px'
              }}
              className="animate-float-reverse interactive-card"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6'
                }}
              >
                <Bot size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700' }}>AI Powered</div>
                <div style={{ fontSize: '0.72rem', color: theme.textSecondary }}>LLMs & Integrations</div>
              </div>
            </div>

            <div
              style={{
                ...floatingCardBase,
                bottom: '40px',
                right: '-10px'
              }}
              className="animate-float-slow interactive-card"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(236, 72, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ec4899'
                }}
              >
                <Database size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700' }}>MongoDB & MySQL</div>
                <div style={{ fontSize: '0.72rem', color: theme.textSecondary }}>Database Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
