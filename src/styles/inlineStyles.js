export const getTheme = (isDark) => {
  return {
    isDark,
    bgPrimary: isDark ? '#0a0c10' : '#f8fafc',
    bgSecondary: isDark ? '#10141d' : '#ffffff',
    bgTertiary: isDark ? '#181d28' : '#f1f5f9',
    bgCard: isDark ? 'rgba(16, 20, 29, 0.8)' : '#ffffff',
    bgCardHover: isDark ? 'rgba(24, 30, 44, 0.95)' : '#f8fafc',
    borderSubtle: isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0',
    borderHover: isDark ? 'rgba(59, 130, 246, 0.45)' : 'rgba(37, 99, 235, 0.4)',
    textPrimary: isDark ? '#f8fafc' : '#0f172a',
    textSecondary: isDark ? '#94a3b8' : '#475569',
    textMuted: isDark ? '#64748b' : '#64748b',
    accent: '#2563eb',
    accentGradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)',
    accentGradientSubtle: isDark
      ? 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(59,130,246,0.08))'
      : 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(59,130,246,0.05))',
    glowColor: isDark ? 'rgba(37, 99, 235, 0.2)' : 'rgba(37, 99, 235, 0.12)',
    navGlass: isDark ? 'rgba(10, 12, 16, 0.85)' : 'rgba(255, 255, 255, 0.88)',
    shadowSmall: isDark ? '0 2px 8px rgba(0, 0, 0, 0.4)' : '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04)',
    shadowMedium: isDark ? '0 8px 24px rgba(0, 0, 0, 0.5)' : '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
    shadowLarge: isDark ? '0 16px 36px rgba(0, 0, 0, 0.65)' : '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
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
