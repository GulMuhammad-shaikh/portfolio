import React, { useState } from 'react';
import {
  Sparkles,
  Github,
  ExternalLink,
  Code2,
  Layers,
  ArrowUpRight,
  Briefcase,
  Music,
  Vote,
  HelpCircle,
  Leaf,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ theme, isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (id) => {
    const props = { size: 32, color: '#ffffff' };
    switch (id) {
      case 'job-portal':
        return <Briefcase {...props} />;
      case 'sound-app':
        return <Music {...props} />;
      case 'online-voting':
        return <Vote {...props} />;
      case 'quiz-system':
        return <HelpCircle {...props} />;
      case 'environmental-portal':
        return <Leaf {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
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
            <span>MY RECENT WORK</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: theme.textPrimary,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            Featured <span style={{ color: '#3b82f6' }}>Projects</span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: theme.textSecondary,
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            A curated collection of full-stack MERN systems, AI-enhanced utilities, and dynamic web portals.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '44px'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '9px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
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
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="interactive-card"
              style={{
                background: theme.bgCard,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${theme.borderSubtle}`,
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: theme.shadowMedium,
                transition: 'all 0.35s ease'
              }}
            >
              {/* Project Card Header Visual Banner */}
              <div
                style={{
                  height: '140px',
                  background: `linear-gradient(135deg, ${project.accentColor}dd, ${project.accentColor}44)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 28px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {getProjectIcon(project.id)}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      color: '#ffffff',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        background: '#f59e0b',
                        color: '#000000'
                      }}
                    >
                      ★ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: theme.textPrimary,
                    margin: '0 0 6px 0',
                    lineHeight: '1.3'
                  }}
                >
                  {project.title}
                </h3>

                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#3b82f6',
                    marginBottom: '14px',
                    display: 'block'
                  }}
                >
                  {project.subtitle}
                </span>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    color: theme.textSecondary,
                    marginBottom: '20px',
                    flex: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: theme.textMuted,
                    background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${theme.borderSubtle}`,
                    marginBottom: '18px'
                  }}
                >
                  ⚡ {project.metrics}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: '600',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        color: '#3b82f6'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '11px',
                      borderRadius: '10px',
                      background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                      border: `1px solid ${theme.borderSubtle}`,
                      color: theme.textPrimary,
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                    className="hover-lift"
                  >
                    <Github size={17} /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '11px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                    }}
                    className="hover-lift"
                  >
                    Live Demo <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
