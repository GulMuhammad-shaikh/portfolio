import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Database,
  Cpu,
  Server,
  Layers,
  Terminal,
  Globe,
  Bot,
  Layout,
  HardDrive,
  GitBranch,
  Laptop,
  Palette,
  ShieldCheck,
  Boxes,
  Atom,
  FileCode2,
  Cloud
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = ({ theme, isDark }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory);

  const getIcon = (iconName) => {
    const props = { size: 22, color: '#3b82f6' };
    switch (iconName) {
      case 'Atom':
        return <Atom {...props} color="#38bdf8" />;
      case 'FileCode2':
        return <FileCode2 {...props} color="#f59e0b" />;
      case 'Globe':
        return <Globe {...props} color="#ffffff" />;
      case 'Palette':
        return <Palette {...props} color="#ec4899" />;
      case 'Layout':
        return <Layout {...props} color="#06b6d4" />;
      case 'Boxes':
        return <Boxes {...props} color="#8b5cf6" />;
      case 'Server':
        return <Server {...props} color="#10b981" />;
      case 'Cpu':
        return <Cpu {...props} color="#f97316" />;
      case 'Database':
        return <Database {...props} color="#10b981" />;
      case 'Code':
        return <Code2 {...props} color="#8b5cf6" />;
      case 'HardDrive':
        return <HardDrive {...props} color="#3b82f6" />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} color="#ec4899" />;
      case 'Sparkles':
        return <Sparkles {...props} color="#f59e0b" />;
      case 'Bot':
        return <Bot {...props} color="#8b5cf6" />;
      case 'GitBranch':
        return <GitBranch {...props} color="#f43f5e" />;
      case 'Cloud':
        return <Cloud {...props} color="#06b6d4" />;
      case 'Terminal':
        return <Terminal {...props} color="#eab308" />;
      case 'Laptop':
        return <Laptop {...props} color="#3b82f6" />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="skills" className="section-responsive" style={{ position: 'relative', boxSizing: 'border-box', width: '100%', overflow: 'hidden' }}>
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
            <span>MY TOOLKIT</span>
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
            Technical <span style={{ color: '#3b82f6' }}>Skills</span>
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
            Extensive expertise spanning MERN full-stack development, modern frontend frameworks, database engineering, and AI tool integration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px'
          }}
        >
          {portfolioData.skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: isActive ? '1px solid transparent' : `1px solid ${theme.borderSubtle}`,
                  background: isActive
                    ? 'linear-gradient(135deg, #2563eb, #7c3aed)'
                    : isDark
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'rgba(0, 0, 0, 0.03)',
                  color: isActive ? '#ffffff' : theme.textSecondary,
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(37, 99, 235, 0.35)' : 'none'
                }}
                className="hover-lift"
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            width: '100%'
          }}
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="interactive-card"
              style={{
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                borderRadius: '16px',
                padding: '24px',
                boxShadow: theme.shadowSmall
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                      border: `1px solid ${theme.borderSubtle}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: theme.textPrimary,
                        margin: 0
                      }}
                    >
                      {skill.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        color: theme.textMuted,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: '700',
                    color: '#3b82f6'
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div
                style={{
                  width: '100%',
                  height: '7px',
                  background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
