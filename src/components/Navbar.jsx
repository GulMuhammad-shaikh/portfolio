import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Layers,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ theme, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: <Home size={15} /> },
    { label: 'About', path: '/about', icon: <User size={15} /> },
    { label: 'Skills', path: '/skills', icon: <Code2 size={15} /> },
    { label: 'Experience', path: '/experience', icon: <Briefcase size={15} /> },
    { label: 'Projects', path: '/projects', icon: <FolderGit2 size={15} /> },
    { label: 'Services', path: '/services', icon: <Layers size={15} /> },
    { label: 'Education', path: '/education', icon: <GraduationCap size={15} /> },
    { label: 'Contact', path: '/contact', icon: <Mail size={15} /> }
  ];

  // Auto-close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when screen expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Header background & elevation (matching Campus Coin)
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '68px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
    background: isScrolled
      ? (isDark ? 'rgba(5, 6, 8, 0.95)' : 'rgba(255, 255, 255, 0.95)')
      : (isDark ? 'rgba(5, 6, 8, 0.88)' : 'rgba(255, 255, 255, 0.88)'),
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)',
    boxShadow: isScrolled
      ? (isDark ? '0 10px 30px rgba(0, 0, 0, 0.25)' : '0 8px 25px rgba(15, 23, 42, 0.05)')
      : 'none'
  };

  const navContainerStyle = {
    maxWidth: '1220px',
    margin: '0 auto',
    padding: '0 clamp(16px, 3.5vw, 32px)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    boxSizing: 'border-box'
  };

  // Brand Logo (Campus Coin style emblem + title + tagline)
  const brandStyle = {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    userSelect: 'none',
    cursor: 'pointer'
  };

  // Desktop link styling (Campus Coin style)
  const getDesktopLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      textDecoration: 'none',
      fontSize: '13px',
      fontWeight: isActive ? 700 : 500,
      color: isActive ? '#2563eb' : (isDark ? '#94a3b8' : '#475569'),
      background: isActive
        ? (isDark ? 'rgba(59, 130, 246, 0.14)' : 'rgba(37, 99, 235, 0.1)')
        : 'transparent',
      border: isActive
        ? (isDark ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(37, 99, 235, 0.25)')
        : '1px solid transparent',
      padding: '7px 11px',
      borderRadius: '10px',
      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      letterSpacing: '0.2px',
      whiteSpace: 'nowrap'
    };
  };

  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        {/* Brand Logo - Campus Coin layout */}
        <Link to="/" style={brandStyle} onClick={() => setMobileMenuOpen(false)}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '11px',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              flexShrink: 0
            }}
          >
            <Code2 size={22} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.15 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: theme.textPrimary }}>
                {portfolioData.personal.firstName}<span style={{ color: '#2563eb' }}>.</span>
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: '6px',
                  background: 'rgba(37, 99, 235, 0.12)',
                  color: '#2563eb',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  letterSpacing: '0.8px'
                }}
              >
                AI MERN
              </span>
            </div>
            <span
              style={{
                fontSize: '8px',
                fontWeight: 700,
                letterSpacing: '1.4px',
                color: theme.textMuted,
                textTransform: 'uppercase',
                marginTop: '2px',
                whiteSpace: 'nowrap'
              }}
            >
              MERN STACK • AI POWERED
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={getDesktopLinkStyle(link.path)}
              className="hover-lift"
            >
              <span style={{ opacity: 0.85, display: 'flex', alignItems: 'center' }}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Desktop Theme Switcher (Campus Coin Style) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hide-mobile hover-lift"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.04)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.14)' : '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '10px',
              padding: '6px 12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark or light mode"
          >
            <span style={{ display: 'grid', placeItems: 'center', width: 20, height: 20 }}>
              {isDark ? <Moon size={15} color="#38bdf8" /> : <Sun size={15} color="#f59e0b" />}
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: theme.textPrimary }}>
              {isDark ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* Desktop GitHub Link */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${theme.borderSubtle}`,
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            title="GitHub Profile"
            className="hide-mobile hover-lift"
          >
            <Github size={17} />
          </a>

          {/* Desktop Resume Download Pill */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Gul Muhammad Web Developer (1).pdf"
            style={{
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: '#ffffff',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.22)' : 'none',
              textDecoration: 'none',
              padding: '7px 16px',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: isDark ? '0 2px 10px rgba(0, 0, 0, 0.4)' : '0 4px 14px rgba(37, 99, 235, 0.35)',
              transition: 'all 0.2s ease'
            }}
            className="hide-mobile hover-lift"
          >
            <Download size={14} /> Resume
          </a>

          {/* Mobile Theme Toggle Button (Campus Coin Style) */}
          <button
            type="button"
            className="hide-desktop hover-lift"
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
              color: theme.textPrimary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Moon size={18} color="#38bdf8" /> : <Sun size={18} color="#f59e0b" />}
          </button>

          {/* Mobile Menu Hamburger / X Button (Campus Coin Style) */}
          <button
            type="button"
            className="hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
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

      {/* Mobile Drawer Backdrop (Campus Coin Style) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998
          }}
        />
      )}

      {/* Mobile Attached Dropdown Drawer (Campus Coin Style) */}
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
            background: isDark ? 'rgba(5, 6, 8, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDark ? '0 20px 40px rgba(0, 0, 0, 0.6)' : '0 20px 40px rgba(15, 23, 42, 0.12)',
            padding: '16px 20px 24px',
            zIndex: 999,
            boxSizing: 'border-box'
          }}
        >
          {/* Developer Header Card (Like CampusCoin mobileUserHeader) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 14px',
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
              borderRadius: 14,
              marginBottom: 10,
              border: `1px solid ${theme.borderSubtle}`
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 14,
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
                flexShrink: 0
              }}
            >
              GM
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: theme.textPrimary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {portfolioData.personal.name}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>
                {portfolioData.personal.role}
              </div>
            </div>
          </div>

          {/* Interactive Theme Switcher Row (Like CampusCoin mobileThemeToggleRow) */}
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '10px 14px',
              borderRadius: 12,
              background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
              border: `1px solid ${theme.borderSubtle}`,
              cursor: 'pointer',
              marginBottom: 12,
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            aria-label="Toggle dark or light mode"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                  color: isDark ? '#38bdf8' : '#f59e0b'
                }}
              >
                {isDark ? <Moon size={16} /> : <Sun size={16} />}
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary }}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>

            {/* Switch pill & thumb */}
            <div
              style={{
                width: 38,
                height: 22,
                borderRadius: 12,
                padding: 2,
                background: isDark ? '#2563eb' : '#cbd5e1',
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                transition: 'background 0.3s ease'
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  transform: isDark ? 'translateX(16px)' : 'translateX(0px)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          </button>

          {/* Navigation Links (CampusCoin style) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.94rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#2563eb' : theme.textPrimary,
                    padding: '11px 14px',
                    borderRadius: 10,
                    background: isActive
                      ? (isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)')
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(37, 99, 235, 0.3)'
                      : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: isActive ? '#2563eb' : theme.textMuted, display: 'flex', alignItems: 'center' }}>
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  <span style={{ color: isActive ? '#2563eb' : theme.textMuted, fontSize: '0.85rem' }}>
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Buttons */}
          <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingTop: 12, borderTop: `1px solid ${theme.borderSubtle}` }}>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Gul Muhammad Web Developer (1).pdf"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '11px 14px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 13,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
              }}
            >
              <Download size={16} /> Resume PDF
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '11px 14px',
                borderRadius: 10,
                background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${theme.borderSubtle}`,
                color: theme.textPrimary,
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none'
              }}
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
