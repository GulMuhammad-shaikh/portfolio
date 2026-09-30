import React from 'react';
import { About } from '../components/About';

export const AboutPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <About theme={theme} isDark={isDark} />
    </div>
  );
};
