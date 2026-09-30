import React from 'react';
import {
  Sparkles,
  Github,
  ArrowUpRight,
  Wallet,
  CheckCircle2,
  TrendingUp,
  PieChart,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ theme, isDark }) => {
  const project = portfolioData.projects[0]; // CampusCoin

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
      <div className="responsive-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#3b82f6',
              background: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)',
              border: `1px solid ${theme.borderSubtle}`,
              marginBottom: '16px'
            }}
          >
            <Sparkles size={15} />
            <span>FEATURED APPLICATION</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: theme.textPrimary,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            Featured <span style={{ color: '#3b82f6' }}>Project</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: theme.textSecondary,
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Live production application built with modern React architecture, real-time budgeting logic, and responsive design.
          </p>
        </div>

        {/* High-Impact Spotlight Project Card */}
        <div
          className="interactive-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            background: theme.bgCard,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: `1px solid ${theme.borderSubtle}`,
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: theme.shadowLarge,
            boxSizing: 'border-box',
            width: '100%'
          }}
        >
          {/* Top Banner */}
          <div
            className="card-padding"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
              borderBottom: `1px solid ${theme.borderSubtle}`,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.35)'
                }}
              >
                <Wallet size={32} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    Deployed on Vercel
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: '#f59e0b',
                      color: '#000000'
                    }}
                  >
                    ★ Live App
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: '800',
                    color: theme.textPrimary,
                    margin: 0
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Live CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '0.94rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                }}
                className="hover-lift"
              >
                Live Demo <ArrowUpRight size={18} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                  color: theme.textPrimary,
                  border: `1px solid ${theme.borderSubtle}`,
                  fontWeight: '600',
                  fontSize: '0.94rem',
                  textDecoration: 'none'
                }}
                className="hover-lift"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Card Body */}
          <div className="card-padding">
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                lineHeight: '1.8',
                color: theme.textSecondary,
                marginBottom: '28px'
              }}
            >
              {project.description}
            </p>

            {/* Feature Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '16px',
                marginBottom: '32px'
              }}
            >
              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <TrendingUp size={22} color="#10b981" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: theme.textPrimary }}>Daily Expense Logging</div>
                  <div style={{ fontSize: '0.76rem', color: theme.textMuted }}>Categorize & track spending habits</div>
                </div>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <PieChart size={22} color="#3b82f6" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: theme.textPrimary }}>Budget & Analytics</div>
                  <div style={{ fontSize: '0.76rem', color: theme.textMuted }}>Visual balance & expense summaries</div>
                </div>
              </div>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <ShieldCheck size={22} color="#8b5cf6" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: theme.textPrimary }}>Campus-Ready UI</div>
                  <div style={{ fontSize: '0.76rem', color: theme.textMuted }}>Fast, responsive, and mobile-friendly</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '700', color: theme.textMuted, marginRight: '4px' }}>
                TECHNOLOGIES:
              </span>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    color: '#3b82f6'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
