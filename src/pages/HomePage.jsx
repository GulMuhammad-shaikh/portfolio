import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, User, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { Hero } from '../components/Hero';
import { portfolioData } from '../data/portfolioData';

export const HomePage = ({ theme, isDark }) => {
  const quickCards = [
    {
      title: 'About Me',
      description: 'Get to know my journey as a MERN Stack Developer with an AI-Powered edge.',
      path: '/about',
      icon: <User size={24} color="#3b82f6" />,
      color: '#3b82f6'
    },
    {
      title: 'Featured Projects',
      description: 'Explore live web apps including CampusCoin, full-stack tools, and UI portals.',
      path: '/projects',
      icon: <Briefcase size={24} color="#10b981" />,
      color: '#10b981'
    },
    {
      title: 'Technical Skills',
      description: 'Review my toolkit across React, Node.js, Express, MongoDB, and AI integration.',
      path: '/skills',
      icon: <Code2 size={24} color="#8b5cf6" />,
      color: '#8b5cf6'
    },
    {
      title: 'Education & Background',
      description: 'Aptech ADSE Diploma, Beaconhouse O-Levels, and language proficiencies.',
      path: '/education',
      icon: <GraduationCap size={24} color="#f59e0b" />,
      color: '#f59e0b'
    }
  ];

  return (
    <div>
      <Hero theme={theme} isDark={isDark} />

      {/* Quick Navigation Cards on Home */}
      <section style={{ padding: '0 0 100px 0', position: 'relative' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: '700',
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              EXPLORE THE PORTFOLIO
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: '800',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {quickCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.path}
                className="interactive-card"
                style={{
                  background: theme.bgCard,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${theme.borderSubtle}`,
                  borderRadius: '20px',
                  padding: '28px',
                  boxShadow: theme.shadowSmall,
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                      border: `1px solid ${theme.borderSubtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: theme.textPrimary,
                      marginBottom: '8px'
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
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
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    color: card.color,
                    marginTop: '20px'
                  }}
                >
                  <span>Explore {card.title}</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
