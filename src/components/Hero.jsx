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
  Atom,
  Server,
  Bot,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ theme, isDark }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const roles = portfolioData.personal.typingRoles;

  // Track window scroll position to rotate the portrait image smoothly on scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute rotation angle based on scroll down (e.g. 0.18 deg per pixel scrolled)
  const rotationDeg = scrollY * 0.18;

  // Typewriter text animation
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
        timeout = setTimeout(() => setIsDeleting(true), 2200);
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

  return (
    <section
      id="home"
      style={{
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: '60px 0 70px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100vw',
        background: isDark
          ? 'radial-gradient(circle at 50% 45%, #0d1527 0%, #060911 80%)'
          : 'radial-gradient(circle at 50% 45%, #ffffff 0%, #f1f5f9 90%)'
      }}
    >
      {/* Studio Radial Vignette & Warm Spotlight Aura */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 95vw)',
          height: 'min(700px, 95vw)',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, rgba(245, 158, 11, 0.10) 35%, rgba(59, 130, 246, 0.08) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        className="animate-spotlight"
      />

      <div className="responsive-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Studio 3-Column Balanced Grid (matching laptop reference photo) */}
        <div className="hero-studio-grid">
          {/* ================= LEFT COLUMN ================= */}
          <div className="hero-studio-col-left" style={{ textAlign: 'left' }}>
            {/* Small uppercase kicker */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontWeight: '800',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3b82f6',
                marginBottom: '16px'
              }}
            >
              <span>HI, I'M</span>
              <span
                style={{
                  background: isDark ? 'rgba(59, 130, 246, 0.18)' : 'rgba(37, 99, 235, 0.1)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  color: '#3b82f6'
                }}
              >
                GUL MUHAMMAD
              </span>
            </div>

            {/* Massive Bold Headline (SCALABLE SYSTEMS) */}
            <h1
              style={{
                fontSize: 'clamp(2.7rem, 5.2vw, 4.4rem)',
                fontWeight: '900',
                lineHeight: '1.04',
                letterSpacing: '-0.035em',
                color: theme.textPrimary,
                margin: '0 0 18px 0',
                textTransform: 'uppercase'
              }}
            >
              SCALABLE
              <br />
              <span
                style={{
                  background: isDark
                    ? 'linear-gradient(135deg, #ffffff 40%, #94a3b8 100%)'
                    : 'linear-gradient(135deg, #0f172a 40%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                SYSTEMS
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: '600',
                color: theme.textSecondary,
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '8px'
              }}
            >
              <span>Focusing on</span>
              <span style={{ color: '#3b82f6', fontWeight: '700' }}>{typewriterText}</span>
              <span className="cursor-blink" />
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: theme.textMuted,
                maxWidth: '420px',
                lineHeight: '1.6',
                margin: '0 0 24px 0'
              }}
            >
              Building intelligent, full-stack web applications with React, Node.js, Express, and AI-enabled workflows.
            </p>

            {/* Minimalist Scroll Indicator (matching laptop photo: ↓ SCROLL TO SCRUB TIMELINE) */}
            <div
              className="hero-scroll-indicator animate-bounce-subtle"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: '800',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: theme.textMuted,
                marginTop: '16px'
              }}
            >
              <span style={{ fontSize: '1rem', color: '#3b82f6' }}>↓</span>
              <span>SCROLL TO SCRUB TIMELINE</span>
            </div>
          </div>

          {/* ================= CENTER COLUMN (ROTATING PORTRAIT) ================= */}
          <div
            className="hero-studio-col-center"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '420px',
              margin: '0 auto'
            }}
          >
            {/* Center Studio Backlight Aura */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                borderRadius: '50%',
                background: isDark
                  ? 'radial-gradient(circle at 50% 45%, rgba(251, 146, 60, 0.22) 0%, rgba(245, 158, 11, 0.12) 35%, rgba(59, 130, 246, 0.08) 65%, transparent 80%)'
                  : 'radial-gradient(circle at 50% 45%, rgba(59, 130, 246, 0.16) 0%, rgba(139, 92, 246, 0.1) 45%, transparent 75%)',
                filter: 'blur(45px)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Rotating Portrait Image on Scroll */}
            <div
              title="Scroll down to rotate!"
              style={{
                position: 'relative',
                zIndex: 2,
                transform: `rotate(${rotationDeg}deg)`,
                transition: 'transform 0.12s cubic-bezier(0.1, 0.9, 0.2, 1)',
                willChange: 'transform',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'min(360px, 78vw)',
                height: 'min(480px, 85vw)',
                cursor: 'pointer'
              }}
            >
              <img
                src="/WhatsApp_Image_2025-05-31_at_7.49.27_PM-removebg-preview.png"
                onError={(e) => { e.currentTarget.src = '/profile.png'; }}
                alt="Gul Muhammad - MERN Stack Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  filter: isDark
                    ? 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 45px rgba(251, 146, 60, 0.2))'
                    : 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))',
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  pointerEvents: 'auto'
                }}
              />
            </div>

            {/* Subtle Interactive Hint Badge */}
            <div
              style={{
                marginTop: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${theme.borderSubtle}`,
                fontSize: '0.72rem',
                fontWeight: '700',
                color: theme.textMuted,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                zIndex: 3
              }}
            >
              <Sparkles size={12} color="#3b82f6" />
              <span>Scroll to Rotate Picture</span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="hero-studio-col-right" style={{ textAlign: 'left' }}>
            {/* Subtitle / Kicker */}
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: '800',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3b82f6',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'inline-block',
                  boxShadow: '0 0 10px #10b981'
                }}
              />
              <span>ROBUST BACKEND & AI ARCHITECTURE</span>
            </div>

            {/* Architecture description paragraph */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                lineHeight: '1.75',
                color: theme.textSecondary,
                marginBottom: '28px',
                maxWidth: '460px'
              }}
            >
              Architecting robust backend pipelines, cloud microservices, intelligent AI workflows, and high-performance database optimization.
            </p>

            {/* Action Pill Buttons (matching laptop photo style: solid pill + outline pill) */}
            <div
              className="hero-actions-wrap"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px'
              }}
            >
              {/* Primary Pill Button (View My Work / Explore Projects) */}
              <Link
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  background: isDark ? '#ffffff' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: isDark ? '#000000' : '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: isDark
                    ? '0 6px 20px rgba(255, 255, 255, 0.25)'
                    : '0 6px 20px rgba(37, 99, 235, 0.4)',
                  transition: 'all 0.25s ease'
                }}
                className="hover-lift"
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </Link>

              {/* Secondary Pill Button (Contact Me) */}
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '9999px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  color: theme.textPrimary,
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'}`,
                  fontWeight: '600',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                className="hover-lift"
              >
                Contact Me
              </Link>

              {/* Download Resume Pill Button */}
              <a
                href={portfolioData.personal.resumeUrl}
                download="Gul Muhammad Web Developer (1).pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '7px',
                  padding: '13px 22px',
                  borderRadius: '9999px',
                  background: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                  color: '#3b82f6',
                  border: '1px solid rgba(59, 130, 246, 0.35)',
                  fontWeight: '600',
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                className="hover-lift"
              >
                <Download size={16} /> CV
              </a>
            </div>

            {/* Social Icons & Coordinates */}
            <div
              className="hero-socials-wrap"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.textPrimary,
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Github size={18} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0a66c2',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                title="Email Gul"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ea4335',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Mail size={18} />
              </a>

              <a
                href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                title="Call Gul"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Phone size={18} />
              </a>

              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: theme.textMuted,
                  padding: '4px 8px'
                }}
              >
                📍 Karachi, PK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
