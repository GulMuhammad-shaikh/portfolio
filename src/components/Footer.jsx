import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const Footer = ({ theme, isDark }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-12 md:py-16 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
          {/* Brand Link to Home */}
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-foreground no-underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {portfolioData.personal.name}
              </span>
              <Badge variant="outline" className="text-[11px] font-semibold py-0.5 px-2">
                Full-Stack
              </Badge>
            </Link>
            <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed">
              Building reliable web applications and modern architectures with React, Node.js, Express, and MongoDB. Open to engineering opportunities.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="icon" className="h-9 w-9">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="icon" className="h-9 w-9">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="icon" className="h-9 w-9">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                title="Email"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <Separator className="mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} <strong className="text-foreground font-semibold">{portfolioData.personal.name}</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2 font-medium">
            <span>React & Vite</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>shadcn/ui</span>
            <span>•</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 h-11 w-11 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-105"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
};
