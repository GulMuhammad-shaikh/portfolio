import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';

export const Hero = ({ theme, isDark }) => {
  const techStack = [
    { name: 'React.js', color: '#38bdf8' },
    { name: 'Node.js', color: '#22c55e' },
    { name: 'Express.js', color: '#94a3b8' },
    { name: 'MongoDB', color: '#10b981' },
    { name: 'JavaScript (ES6+)', color: '#f59e0b' },
    { name: 'Next.js', color: isDark ? '#ffffff' : '#0f172a' },
    { name: 'Tailwind CSS', color: '#06b6d4' },
    { name: 'PHP & MySQL', color: '#8b5cf6' },
    { name: 'REST APIs', color: '#ec4899' },
    { name: 'Git & GitHub', color: '#f97316' }
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden w-full">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authoritative Developer Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Availability Status Badge */}
            <Badge variant="success" className="mb-5 py-1.5 px-3.5 text-xs font-medium gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for full-time roles & projects</span>
            </Badge>

            {/* Clear, High-Impact Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] mb-5">
              Engineering reliable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400">
                full-stack
              </span>{' '}
              web applications.
            </h1>

            {/* Authentic, Trustworthy Bio */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Hi, I'm <strong className="text-foreground font-semibold">Gul Muhammad</strong> — a Full-Stack Developer specializing in the MERN stack in Karachi, Pakistan. I craft performant web platforms with React, Node.js, Express, and MongoDB, focused on clean architecture and great user experiences.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <Button asChild size="lg" className="gap-2 shadow-sm">
                <Link to="/projects">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              {/* Secondary: Download Resume */}
              <Button asChild variant="outline" size="lg" className="gap-2 shadow-sm">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Gul Muhammad Web Developer (1).pdf"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>

              {/* Tertiary: Contact */}
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </Link>
              </Button>
            </div>

            {/* Quick Metrics / Credibility Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-border w-full max-w-xl">
              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  1+ Yrs
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Hands-on Experience
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  CampusCoin
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Featured Project
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  ADSE
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Aptech Learning
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  Karachi
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  Sindh, Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Developer Presentation Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Card className="w-full max-w-md overflow-hidden border-border/80 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Card Window Top Header */}
              <CardHeader className="py-3 px-4 flex flex-row items-center justify-between border-b border-border bg-muted/40 space-y-0">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] font-mono font-medium text-muted-foreground tracking-wider uppercase">
                  developer.profile
                </div>
              </CardHeader>

              {/* Developer Photo Container */}
              <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-primary/5 via-muted/20 to-muted/80 flex items-end justify-center overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Gul Muhammad - Full-Stack Developer"
                  className="w-full h-full object-contain object-bottom drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />

                {/* Floating Profile Details Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-background/85 backdrop-blur-md border border-border flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      Gul Muhammad
                    </div>
                    <div className="text-xs font-semibold text-primary">
                      Full-Stack MERN Developer
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span>Karachi</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <CardFooter className="py-3 px-4 flex items-center justify-between border-t border-border bg-card">
                <div className="flex items-center gap-2">
                  <Button asChild variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </div>

                <Badge variant="success" className="text-[11px] font-semibold py-0.5 px-2">
                  Verified
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-14 pt-8 border-t border-border w-full">
          <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">
            Core Technologies & Toolkit
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {techStack.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="py-1.5 px-3 text-xs font-medium bg-card/50 hover:bg-accent/60 transition-colors gap-2"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span>{tech.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
