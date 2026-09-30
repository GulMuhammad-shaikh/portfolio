import React, { useState, useEffect } from 'react';
import { getTheme } from './styles/inlineStyles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // default dark
  });

  const theme = getTheme(isDark);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('portfolio_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.bgPrimary;
    document.body.style.color = theme.textPrimary;
  }, [theme]);

  const appContainerStyle = {
    backgroundColor: theme.bgPrimary,
    color: theme.textPrimary,
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <div style={appContainerStyle}>
      {/* Header & Navbar */}
      <Navbar theme={theme} isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Body Content */}
      <main>
        <Hero theme={theme} isDark={isDark} />
        <About theme={theme} isDark={isDark} />
        <Skills theme={theme} isDark={isDark} />
        <Experience theme={theme} isDark={isDark} />
        <Projects theme={theme} isDark={isDark} />
        <Services theme={theme} isDark={isDark} />
        <Education theme={theme} isDark={isDark} />
        <Contact theme={theme} isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer theme={theme} isDark={isDark} />
    </div>
  );
}

export default App;
