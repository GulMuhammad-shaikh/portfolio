import React from 'react';
import { Skills } from '../components/Skills';

export const SkillsPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Skills theme={theme} isDark={isDark} />
    </div>
  );
};
