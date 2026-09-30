import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';

export const Navbar = ({ theme, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '74px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isScrolled
      ? (isDark ? 'rgba(11, 15, 25, 0.85)' : 'rgba(255, 255, 255, 0.88)')
      : 'transparent',
    backdropFilter: isScrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
    borderBottom: isScrolled ? `1px solid ${theme.borderSubtle}` : '1px solid transparent',
    boxShadow: isScrolled ? theme.shadowSmall : 'none'
  };

  const navContainerStyle = {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: theme.textPrimary,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    letterSpacing: '-0.02em',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0
  };

  const desktopNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
    padding: '4px 6px',
    borderRadius: '9999px',
    border: `1px solid ${theme.borderSubtle}`
  };

  const getLinkStyle = (sectionId) => {
    const isActive = activeSection === sectionId;
    return {
      textDecoration: 'none',
      fontSize: '0.88rem',
      fontWeight: isActive ? '600' : '500',
      color: isActive ? '#ffffff' : theme.textSecondary,
      background: isActive ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : 'transparent',
      padding: '7px 16px',
      borderRadius: '9999px',
      transition: 'all 0.25s ease',
      boxShadow: isActive ? '0 2px 10px rgba(37, 99, 235, 0.35)' : 'none',
      cursor: 'pointer',
      border: 'none'
    };
  };

  const iconBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
    border: `1px solid ${theme.borderSubtle}`,
    color: theme.textPrimary,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        {/* Brand Logo - scrolls to top without changing URL */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          style={logoStyle}
          aria-label="Scroll to home"
        >
          <span>{portfolioData.personal.firstName}</span>
          <span style={{ color: '#3b82f6', fontSize: '1.8rem', lineHeight: '1' }}>.</span>
          <span
            style={{
              fontSize: '0.7rem',
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
        </button>

        {/* Desktop Navigation - smooth scrolls without changing URL hash */}
        <nav className="hide-mobile" style={desktopNavStyle}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleNavClick(e, link.id)}
              style={getLinkStyle(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            style={iconBtnStyle}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
            className="hover-lift"
          >
            {isDark ? <Sun size={19} color="#f59e0b" /> : <Moon size={19} color="#3b82f6" />}
          </button>

          {/* GitHub Quick Link */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={iconBtnStyle}
            title="GitHub Profile"
            className="hide-mobile hover-lift"
          >
            <Github size={19} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={iconBtnStyle}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            bottom: 0,
            background: isDark ? 'rgba(11, 15, 25, 0.98)' : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            zIndex: 999,
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={(e) => handleNavClick(e, link.id)}
              style={{
                fontSize: '1.15rem',
                fontWeight: '600',
                color: activeSection === link.id ? '#3b82f6' : theme.textPrimary,
                padding: '14px 20px',
                borderRadius: '12px',
                background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                border: `1px solid ${theme.borderSubtle}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: '#3b82f6' }}>→</span>
            </button>
          ))}

          <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
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
                padding: '14px',
                borderRadius: '12px',
                background: theme.isDark ? '#1f2937' : '#e2e8f0',
                color: theme.textPrimary,
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
