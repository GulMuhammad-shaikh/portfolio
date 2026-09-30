import React from 'react';
import { Services } from '../components/Services';

export const ServicesPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Services theme={theme} isDark={isDark} />
    </div>
  );
};
