import React from 'react';
import { Sparkles, GraduationCap, School, Calendar, Languages, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = ({ theme, isDark }) => {
  return (
    <section id="education" className="section-responsive" style={{ position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
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
            <span>MY QUALIFICATION</span>
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
            Education & <span style={{ color: '#3b82f6' }}>Training</span>
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
            Solid academic background in software engineering fundamentals, computational logic, and multilingual communication.
          </p>
        </div>

        {/* Languages Strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
            width: '100%'
          }}
        >
          {portfolioData.languages.map((lang, idx) => (
            <div
              key={idx}
              className="interactive-card"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                boxShadow: theme.shadowSmall
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{lang.flag}</span>
              <div>
                <span style={{ fontSize: '0.86rem', fontWeight: '700', color: theme.textPrimary, marginRight: '4px' }}>
                  {lang.name}
                </span>
                <span style={{ fontSize: '0.74rem', color: theme.textMuted }}>
                  ({lang.level})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="interactive-card card-padding"
              style={{
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                borderRadius: '20px',
                boxShadow: theme.shadowMedium,
                position: 'relative',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}
                >
                  {idx === 0 ? <GraduationCap size={28} /> : <School size={28} />}
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: edu.status === 'In Progress' ? '#3b82f6' : '#10b981',
                    background:
                      edu.status === 'In Progress'
                        ? (isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)')
                        : (isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)'),
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}
                >
                  <CheckCircle2 size={13} /> {edu.status}
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  color: theme.textMuted,
                  marginBottom: '10px'
                }}
              >
                <Calendar size={14} /> {edu.period}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.textPrimary,
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}
              >
                {edu.degree}
              </h3>

              <h4
                style={{
                  fontSize: '0.98rem',
                  fontWeight: '600',
                  color: '#3b82f6',
                  marginBottom: '14px'
                }}
              >
                {edu.institution}
              </h4>

              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.65',
                  color: theme.textSecondary,
                  margin: 0
                }}
              >
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
