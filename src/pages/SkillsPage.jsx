import React from 'react';
import { Skills } from '../components/Skills';

export const SkillsPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Skills theme={theme} isDark={isDark} />
    </div>
  );
};
