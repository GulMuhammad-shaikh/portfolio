import React from 'react';
import { Projects } from '../components/Projects';

export const ProjectsPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Projects theme={theme} isDark={isDark} />
    </div>
  );
};
