import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin,
  Download,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ];

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        background: isScrolled
          ? (isDark ? 'rgba(10, 12, 16, 0.92)' : 'rgba(255, 255, 255, 0.94)')
          : (isDark ? 'rgba(10, 12, 16, 0.82)' : 'rgba(255, 255, 255, 0.85)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${theme.borderSubtle}`,
        boxShadow: isScrolled
          ? (isDark ? '0 10px 30px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(15, 23, 42, 0.05)')
          : 'none',
        transition: 'all 0.25s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1220px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3.5vw, 32px)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          boxSizing: 'border-box'
        }}
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            userSelect: 'none',
            cursor: 'pointer'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Developer Thumbnail Avatar */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `2px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : '#e2e8f0'}`,
              flexShrink: 0
            }}
          >
            <img
              src="/profile.png"
              alt="Gul Muhammad"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: theme.textPrimary
              }}
            >
              Gul Muhammad
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '600',
                color: theme.textMuted,
                letterSpacing: '0.02em'
              }}
            >
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hide-mobile"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
            padding: '4px',
            borderRadius: '9999px',
            border: `1px solid ${theme.borderSubtle}`
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive
                    ? (isDark ? '#ffffff' : '#0f172a')
                    : theme.textSecondary,
                  background: isActive
                    ? (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)')
                    : 'transparent',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                className="hover-lift"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Availability Pill (Desktop) */}
          <div
            className="hide-mobile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.74rem',
              fontWeight: 600,
              color: '#10b981'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 6px #10b981'
              }}
            />
            <span>Open to work</span>
          </div>

          {/* GitHub Icon Link */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hide-mobile hover-lift"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${theme.borderSubtle}`,
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Github size={17} />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hide-mobile hover-lift"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${theme.borderSubtle}`,
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Linkedin size={17} />
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hover-lift"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${theme.borderSubtle}`,
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} color="#f59e0b" /> : <Moon size={17} color="#3b82f6" />}
          </button>

          {/* Resume Download Pill Button (Desktop) */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Gul Muhammad Web Developer (1).pdf"
            className="hide-mobile hover-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: '9999px',
              background: isDark ? '#ffffff' : '#0f172a',
              color: isDark ? '#0a0c10' : '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: isDark
                ? '0 2px 10px rgba(255, 255, 255, 0.15)'
                : '0 2px 10px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.2s ease'
            }}
          >
            <Download size={14} /> Resume
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: `1px solid ${theme.borderSubtle}`,
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998
          }}
        />
      )}

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className="animate-slide-down"
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            maxHeight: 'calc(100vh - 68px)',
            overflowY: 'auto',
            background: isDark ? '#0c0f17' : '#ffffff',
            borderBottom: `1px solid ${theme.borderSubtle}`,
            boxShadow: theme.shadowLarge,
            padding: '20px 24px 28px',
            zIndex: 999,
            boxSizing: 'border-box'
          }}
        >
          {/* Developer Card Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 14px',
              background: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f8fafc',
              borderRadius: 14,
              marginBottom: 16,
              border: `1px solid ${theme.borderSubtle}`
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                flexShrink: 0
              }}
            >
              <img
                src="/profile.png"
                alt="Gul Muhammad"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.96rem', fontWeight: 800, color: theme.textPrimary }}>
                Gul Muhammad
              </div>
              <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>
                MERN Stack & AI Developer
              </div>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '4px 8px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                fontSize: '0.7rem',
                fontWeight: 700
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
              Open to work
            </div>
          </div>

          {/* Navigation Links List */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 10,
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#2563eb' : theme.textPrimary,
                    background: isActive
                      ? (isDark ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.08)')
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(37, 99, 235, 0.25)'
                      : '1px solid transparent'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} opacity={isActive ? 1 : 0.4} />
                </Link>
              );
            })}
          </nav>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Gul Muhammad Web Developer (1).pdf"
              style={{
                flex: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 18px',
                borderRadius: 12,
                background: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.88rem'
              }}
            >
              <Download size={16} /> Download Resume
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#f1f5f9',
                border: `1px solid ${theme.borderSubtle}`,
                color: theme.textPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <Github size={20} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#f1f5f9',
                border: `1px solid ${theme.borderSubtle}`,
                color: theme.textPrimary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
