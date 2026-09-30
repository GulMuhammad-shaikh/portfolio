import React from 'react';
import {
  Sparkles,
  Layers,
  Bot,
  Server,
  MonitorSmartphone,
  Database,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Services = ({ theme, isDark }) => {
  const getIcon = (iconName) => {
    const props = { size: 28, color: '#3b82f6' };
    switch (iconName) {
      case 'Layers':
        return <Layers {...props} color="#3b82f6" />;
      case 'Sparkles':
        return <Sparkles {...props} color="#8b5cf6" />;
      case 'Server':
        return <Server {...props} color="#10b981" />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone {...props} color="#ec4899" />;
      case 'Database':
        return <Database {...props} color="#f59e0b" />;
      case 'Rocket':
        return <Rocket {...props} color="#06b6d4" />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section id="services" style={{ padding: '80px 0', position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
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
            <span>WHAT I BRING</span>
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
            My <span style={{ color: '#3b82f6' }}>Services</span> & Competencies
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
            Delivering high-value solutions across full-stack development, AI enhancements, database architecture, and web deployments.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            width: '100%'
          }}
        >
          {portfolioData.services.map((service, idx) => (
            <div
              key={idx}
              className="interactive-card card-padding"
              style={{
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                borderRadius: '20px',
                boxShadow: theme.shadowSmall,
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                  border: `1px solid ${theme.borderSubtle}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px'
                }}
              >
                {getIcon(service.icon)}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: theme.textPrimary,
                  marginBottom: '12px'
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: '1.7',
                  color: theme.textSecondary,
                  margin: 0,
                  flex: 1
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
