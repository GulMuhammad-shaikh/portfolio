import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
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
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${theme.borderSubtle}`,
        background: isDark ? '#040507' : '#f1f5f9',
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
          {/* Brand Link to Home */}
          <div>
            <Link
              to="/"
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: theme.textPrimary,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>{portfolioData.personal.name}</span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#2563eb',
                  background: isDark ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.08)',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  border: `1px solid ${isDark ? 'rgba(37, 99, 235, 0.25)' : 'rgba(37, 99, 235, 0.2)'}`
                }}
              >
                Full-Stack
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.9rem',
                color: theme.textSecondary,
                marginTop: '10px',
                maxWidth: '420px',
                lineHeight: '1.6'
              }}
            >
              Building reliable web applications and modern architectures with React, Node.js, Express, and MongoDB. Open to engineering opportunities.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '0.88rem',
                  color: theme.textSecondary,
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '4px 0',
                  transition: 'color 0.2s ease'
                }}
                className="hover-lift"
              >
                {link.label}
              </Link>
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
                color: theme.textPrimary,
                textDecoration: 'none'
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
                color: '#0a66c2',
                textDecoration: 'none'
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
                color: '#ea4335',
                textDecoration: 'none'
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>React & Vite</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-top button (Bottom-Left) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.45)',
            zIndex: 9990,
            transition: 'all 0.3s ease'
          }}
          className="hover-lift scroll-top-btn"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};
