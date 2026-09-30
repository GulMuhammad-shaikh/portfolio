import React from 'react';
import { Education } from '../components/Education';

export const EducationPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Education theme={theme} isDark={isDark} />
    </div>
  );
};
