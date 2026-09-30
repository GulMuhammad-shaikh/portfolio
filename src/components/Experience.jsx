import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = ({ theme, isDark }) => {
  return (
    <section id="experience" className="section-responsive" style={{ position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
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
            <span>MY PROFESSIONAL JOURNEY</span>
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
            Work <span style={{ color: '#3b82f6' }}>Experience</span>
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
            Track record of shipping dynamic web systems, building accessible frontends, and collaborating in production environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          className="timeline-container"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            borderLeft: `2px solid ${isDark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(37, 99, 235, 0.3)'}`,
            boxSizing: 'border-box',
            width: '100%'
          }}
        >
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                marginBottom: idx === portfolioData.experience.length - 1 ? '0' : '40px'
              }}
            >
              {/* Timeline Indicator Dot */}
              <div
                className="timeline-dot"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  border: `3px solid ${isDark ? '#0b0f19' : '#f8fafc'}`,
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
                }}
              />

              {/* Experience Card */}
              <div
                className="interactive-card card-padding"
                style={{
                  background: theme.bgCard,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${theme.borderSubtle}`,
                  borderRadius: '20px',
                  boxShadow: theme.shadowMedium,
                  boxSizing: 'border-box'
                }}
              >
                {/* Header Info */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '16px'
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        color: '#3b82f6',
                        background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.08)',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        marginBottom: '8px'
                      }}
                    >
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: theme.textPrimary,
                        margin: 0
                      }}
                    >
                      {exp.role}
                    </h3>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: theme.textPrimary
                      }}
                    >
                      <Building2 size={16} color="#8b5cf6" />
                      <span>{exp.company}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.82rem',
                        color: theme.textMuted,
                        marginTop: '2px'
                      }}
                    >
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span style={{ fontSize: '0.94rem', lineHeight: '1.6', color: theme.textSecondary }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: '600',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                        border: `1px solid ${theme.borderSubtle}`,
                        color: theme.textSecondary
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
