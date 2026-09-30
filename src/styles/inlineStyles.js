export const getTheme = (isDark) => {
  return {
    isDark,
    bgPrimary: isDark ? '#0b0f19' : '#f8fafc',
    bgSecondary: isDark ? '#111827' : '#ffffff',
    bgTertiary: isDark ? '#1f2937' : '#f1f5f9',
    bgCard: isDark ? 'rgba(17, 24, 39, 0.75)' : 'rgba(255, 255, 255, 0.85)',
    bgCardHover: isDark ? 'rgba(31, 41, 55, 0.9)' : 'rgba(241, 245, 249, 0.95)',
    borderSubtle: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    borderHover: isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(37, 99, 235, 0.4)',
    textPrimary: isDark ? '#f9fafb' : '#0f172a',
    textSecondary: isDark ? '#9ca3af' : '#475569',
    textMuted: isDark ? '#6b7280' : '#64748b',
    accent: '#3b82f6',
    accentGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
    accentGradientSubtle: isDark
      ? 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))'
      : 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
    glowColor: isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(59, 130, 246, 0.15)',
    navGlass: isDark ? 'rgba(11, 15, 25, 0.8)' : 'rgba(255, 255, 255, 0.85)',
    shadowSmall: isDark ? '0 4px 6px -1px rgba(0, 0, 0, 0.4)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    shadowMedium: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.08)',
    shadowLarge: isDark ? '0 20px 25px -5px rgba(0, 0, 0, 0.6)' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  };
};

export const createStyles = (theme) => ({
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 24px',
    width: '100%',
    boxSizing: 'border-box'
  },

  section: {
    padding: '100px 0',
    position: 'relative',
    boxSizing: 'border-box'
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative'
  },

  sectionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '9999px',
    fontSize: '0.82rem',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#3b82f6',
    background: theme.accentGradientSubtle,
    border: `1px solid ${theme.borderSubtle}`,
    marginBottom: '16px'
  },

  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    fontWeight: '800',
    color: theme.textPrimary,
    letterSpacing: '-0.02em',
    margin: '0 0 16px 0',
    lineHeight: '1.2'
  },

  sectionSubtitle: {
    fontSize: '1.05rem',
    color: theme.textSecondary,
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: '1.6'
  },

  gradientText: {
    background: theme.accentGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  },

  card: {
    background: theme.bgCard,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: `1px solid ${theme.borderSubtle}`,
    borderRadius: '20px',
    padding: '30px',
    boxShadow: theme.shadowMedium,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  },

  buttonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '14px 28px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    color: '#ffffff',
    fontSize: '0.98rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)'
  },

  buttonSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '13px 26px',
    borderRadius: '12px',
    background: theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
    color: theme.textPrimary,
    fontSize: '0.98rem',
    fontWeight: '600',
    border: `1px solid ${theme.borderSubtle}`,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },

  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: '500',
    background: theme.isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
    color: theme.textSecondary,
    border: `1px solid ${theme.borderSubtle}`
  }
});
