import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getTheme } from './styles/inlineStyles';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Chatbot } from './components/Chatbot';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isDark, setIsDark] = useState(() => {
    // Default to Light Mode whenever user opens this website
    try {
      const sessionTheme = sessionStorage.getItem('portfolio_theme');
      if (sessionTheme) return sessionTheme === 'dark';
    } catch {}
    return false; // Default: Light Mode
  });

  const theme = getTheme(isDark);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        sessionStorage.setItem('portfolio_theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    // Ensure any legacy localStorage dark mode from previous sessions is cleared
    try {
      localStorage.removeItem('portfolio_theme');
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.body.style.backgroundColor = theme.bgPrimary;
    document.body.style.color = theme.textPrimary;
  }, [theme, isDark]);

  const appContainerStyle = {
    backgroundColor: theme.bgPrimary,
    color: theme.textPrimary,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflowX: 'hidden',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={appContainerStyle}>
        {/* Header & Navbar */}
        <Navbar theme={theme} isDark={isDark} toggleTheme={toggleTheme} />

        {/* Dedicated Page Views */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage theme={theme} isDark={isDark} />} />
            <Route path="/about" element={<AboutPage theme={theme} isDark={isDark} />} />
            <Route path="/skills" element={<SkillsPage theme={theme} isDark={isDark} />} />
            <Route path="/experience" element={<ExperiencePage theme={theme} isDark={isDark} />} />
            <Route path="/projects" element={<ProjectsPage theme={theme} isDark={isDark} />} />
            <Route path="/services" element={<ServicesPage theme={theme} isDark={isDark} />} />
            <Route path="/education" element={<EducationPage theme={theme} isDark={isDark} />} />
            <Route path="/contact" element={<ContactPage theme={theme} isDark={isDark} />} />
            {/* Fallback to Home for unknown routes */}
            <Route path="*" element={<HomePage theme={theme} isDark={isDark} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer theme={theme} isDark={isDark} />

        {/* Global Live Chatbot Widget */}
        <Chatbot theme={theme} isDark={isDark} />
      </div>
    </BrowserRouter>
  );
}

export default App;
