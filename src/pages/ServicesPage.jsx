import React from 'react';
import { Services } from '../components/Services';

export const ServicesPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Services theme={theme} isDark={isDark} />
    </div>
  );
};
