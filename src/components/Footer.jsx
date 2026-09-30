import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ theme, isDark }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${theme.borderSubtle}`,
        background: isDark ? '#080c14' : '#f1f5f9',
        padding: '60px 0 30px',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Footer Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px',
            marginBottom: '40px'
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{
                fontSize: '1.6rem',
                fontWeight: '800',
                color: theme.textPrimary,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{portfolioData.personal.firstName}</span>
              <span style={{ color: '#3b82f6', fontSize: '2rem', lineHeight: '1' }}>.</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  border: `1px solid ${theme.borderSubtle}`,
                  marginLeft: '4px'
                }}
              >
                AI MERN
              </span>
            </a>
            <p
              style={{
                fontSize: '0.9rem',
                color: theme.textSecondary,
                marginTop: '8px',
                maxWidth: '380px',
                lineHeight: '1.5'
              }}
            >
              Crafting intelligent, dynamic full-stack experiences with React, Node.js, Express, and modern AI pipelines.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.88rem',
                  color: theme.textSecondary,
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                className="hover-lift"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                border: `1px solid ${theme.borderSubtle}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.textPrimary
              }}
              className="hover-lift"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                border: `1px solid ${theme.borderSubtle}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a66c2'
              }}
              className="hover-lift"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                border: `1px solid ${theme.borderSubtle}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ea4335'
              }}
              className="hover-lift"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: theme.borderSubtle,
            marginBottom: '28px'
          }}
        />

        {/* Footer Bottom */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: theme.textMuted
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>{portfolioData.personal.name}</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Built with React & Vite</span>
            <span>•</span>
            <span style={{ color: '#3b82f6', fontWeight: '600' }}>AI Powered Edition</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.45)',
            zIndex: 9999,
            transition: 'all 0.3s ease'
          }}
          className="hover-lift"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};
