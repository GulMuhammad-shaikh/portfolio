import React from 'react';
import { Experience } from '../components/Experience';

export const ExperiencePage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Experience theme={theme} isDark={isDark} />
    </div>
  );
};
