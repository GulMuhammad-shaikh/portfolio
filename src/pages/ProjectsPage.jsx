import React from 'react';
import { Projects } from '../components/Projects';

export const ProjectsPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Projects theme={theme} isDark={isDark} />
    </div>
  );
};
