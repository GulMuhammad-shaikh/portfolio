import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const Navbar = ({ theme, isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ];

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 w-full border-b transition-all duration-200 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-border shadow-sm'
          : 'bg-background/70 backdrop-blur-sm border-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-foreground no-underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1"
        >
          <Avatar className="h-9 w-9 border border-border ring-2 ring-primary/20 transition-transform group-hover:scale-105">
            <AvatarImage src="/profile.png" alt={portfolioData.personal.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
              {portfolioData.personal.firstName[0]}
              {portfolioData.personal.lastName[0]}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
                {portfolioData.personal.name}
              </span>
              <Badge variant="outline" className="hidden sm:inline-flex text-[10px] py-0 px-1.5 font-medium border-border/80">
                Full-Stack
              </Badge>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Status Badge (Desktop) */}
          <div className="hidden xl:flex items-center mr-2">
            <Badge variant="success" className="gap-1.5 py-1 px-2.5 font-normal text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to work
            </Badge>
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
            >
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 text-muted-foreground hover:text-foreground"
            title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700 transition-transform hover:-rotate-12" />
            )}
          </Button>

          {/* Resume Download Pill Button */}
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex gap-1.5 shadow-sm"
          >
            <a
              href={portfolioData.personal.resumeUrl}
              download="Gul Muhammad Web Developer (1).pdf"
              title="Download Resume (PDF)"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur-xl border-b border-border z-40 overflow-y-auto animate-in fade-in-50 slide-in-from-top-4 duration-200">
          <div className="max-w-md mx-auto p-6 flex flex-col gap-6">
            {/* Status Pill */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Availability
              </span>
              <Badge variant="success" className="gap-1.5 py-1 px-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Roles
              </Badge>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons in Mobile Drawer */}
            <div className="flex flex-col gap-3 pt-2">
              <Button asChild size="lg" className="w-full gap-2">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Gul Muhammad Web Developer (1).pdf"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </Button>

              <div className="flex items-center justify-center gap-3 pt-2">
                <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
