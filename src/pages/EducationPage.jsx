import React from 'react';
import { Education } from '../components/Education';

export const EducationPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Education theme={theme} isDark={isDark} />
    </div>
  );
};
