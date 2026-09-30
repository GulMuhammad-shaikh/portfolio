import React from 'react';
import { About } from '../components/About';

export const AboutPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <About theme={theme} isDark={isDark} />
    </div>
  );
};
