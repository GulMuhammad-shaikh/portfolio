import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  ExternalLink,
  Github,
  CheckCircle2,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { portfolioData } from '../data/portfolioData';

export const HomePage = ({ theme, isDark }) => {
  const project = portfolioData.projects[0]; // CampusCoin

  const quickCards = [
    {
      title: 'About Me',
      description: 'Background, ADSE studies at Aptech, engineering principles, and core values.',
      path: '/about',
      icon: <User size={22} color="#2563eb" />,
      color: '#2563eb'
    },
    {
      title: 'Technical Skills',
      description: 'Comprehensive toolkit across React, Node.js, Express, MongoDB, and modern tools.',
      path: '/skills',
      icon: <Code2 size={22} color="#8b5cf6" />,
      color: '#8b5cf6'
    },
    {
      title: 'Work Experience',
      description: 'Hands-on roles at Bidec Solutions, CoreTech Innovations, and production workflows.',
      path: '/experience',
      icon: <Briefcase size={22} color="#10b981" />,
      color: '#10b981'
    },
    {
      title: 'Education & Aptech',
      description: 'Advance Diploma in Software Engineering (ADSE) and academic qualifications.',
      path: '/education',
      icon: <GraduationCap size={22} color="#f59e0b" />,
      color: '#f59e0b'
    }
  ];

  return (
    <div>
      {/* High-Trust Hero Section */}
      <Hero theme={theme} isDark={isDark} />

      {/* Featured Project Showcase: CampusCoin */}
      <section style={{ padding: '40px 0 70px', position: 'relative', width: '100%' }}>
        <div className="responsive-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#2563eb',
                  marginBottom: '8px'
                }}
              >
                <Sparkles size={14} />
                <span>PROOF OF WORK</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: theme.textPrimary,
                  margin: 0
                }}
              >
                Featured Project
              </h2>
            </div>

            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#2563eb',
                textDecoration: 'none'
              }}
              className="hover-lift"
            >
              <span>View all projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* CampusCoin Spotlight Card */}
          <div
            className="interactive-card"
            style={{
              background: theme.bgCard,
              borderRadius: '24px',
              border: `1px solid ${theme.borderSubtle}`,
              boxShadow: theme.shadowMedium,
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                padding: 'clamp(24px, 4vw, 36px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '32px',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <Wallet size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: '#10b981',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      Fintech · Student Expense Tracker
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: theme.textPrimary, margin: 0 }}>
                      CampusCoin
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.96rem',
                    color: theme.textSecondary,
                    lineHeight: 1.65,
                    marginBottom: '20px'
                  }}
                >
                  A real-time financial tracking and budgeting web app created for college students. Enables daily expenditure logging, category breakdown, smart savings goals, and visual spending analytics.
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {['React.js', 'JavaScript ES6+', 'Vite', 'Tailwind CSS', 'State Management', 'Analytics'].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '4px 11px',
                        borderRadius: '8px',
                        background: isDark ? 'rgba(255, 255, 255, 0.05)' : '#f1f5f9',
                        color: theme.textPrimary,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: `1px solid ${theme.borderSubtle}`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  <a
                    href="https://campus-coin-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-lift"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 22px',
                      borderRadius: '12px',
                      background: '#10b981',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                    }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://github.com/GulMuhammad-shaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-lift"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '11px 20px',
                      borderRadius: '12px',
                      background: isDark ? 'rgba(255, 255, 255, 0.06)' : '#ffffff',
                      color: theme.textPrimary,
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      border: `1px solid ${theme.borderSubtle}`
                    }}
                  >
                    <Github size={16} />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* Right: Key Features Box */}
              <div
                style={{
                  background: isDark ? 'rgba(255, 255, 255, 0.02)' : '#f8fafc',
                  padding: '24px',
                  borderRadius: '18px',
                  border: `1px solid ${theme.borderSubtle}`
                }}
              >
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: theme.textPrimary, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Core System Highlights
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Instant transaction logging with dynamic category distribution',
                    'Interactive budget vs actual expenditure bar graphs & indicators',
                    'Fully responsive across mobile phones, tablets, and desktop displays',
                    'Clean modular architecture with component reusability and fast Vite builds'
                  ].map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.86rem', color: theme.textSecondary, lineHeight: 1.5 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section Cards */}
      <section style={{ padding: '20px 0 80px', position: 'relative', width: '100%' }}>
        <div className="responsive-container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              EXPLORE MORE
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: theme.textPrimary,
                marginTop: '6px'
              }}
            >
              Dive Into Dedicated Sections
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '20px',
              width: '100%'
            }}
          >
            {quickCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.path}
                className="interactive-card"
                style={{
                  background: theme.bgCard,
                  border: `1px solid ${theme.borderSubtle}`,
                  borderRadius: '20px',
                  padding: '28px 24px',
                  boxShadow: theme.shadowSmall,
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f1f5f9',
                      border: `1px solid ${theme.borderSubtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: theme.textPrimary,
                      marginBottom: '8px'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: theme.textSecondary,
                      lineHeight: '1.6',
                      margin: 0
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: card.color,
                    marginTop: '20px'
                  }}
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
