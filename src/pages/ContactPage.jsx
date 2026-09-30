import React from 'react';
import { Contact } from '../components/Contact';

export const ContactPage = ({ theme, isDark }) => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Contact theme={theme} isDark={isDark} />
    </div>
  );
};
