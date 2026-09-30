import React from 'react';
import { Experience } from '../components/Experience';

export const ExperiencePage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Experience theme={theme} isDark={isDark} />
    </div>
  );
};
