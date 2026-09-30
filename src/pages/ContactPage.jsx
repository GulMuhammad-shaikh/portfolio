import React from 'react';
import { Contact } from '../components/Contact';

export const ContactPage = ({ theme, isDark }) => {
  return (
    <div className="page-wrapper">
      <Contact theme={theme} isDark={isDark} />
    </div>
  );
};
