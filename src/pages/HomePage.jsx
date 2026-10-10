import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code2,
  Sparkles,
  User,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Github,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import { Hero } from '../components/Hero';
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

export const HomePage = ({ theme, isDark }) => {
  const quickCards = [
    {
      title: 'About Me',
      description: 'Background, ADSE studies at Aptech, engineering principles, and core values.',
      path: '/about',
      icon: <User className="h-5 w-5 text-blue-500" />,
      colorClass: 'text-blue-500'
    },
    {
      title: 'Technical Skills',
      description: 'Comprehensive toolkit across React, Node.js, Express, MongoDB, and modern tools.',
      path: '/skills',
      icon: <Code2 className="h-5 w-5 text-violet-500" />,
      colorClass: 'text-violet-500'
    },
    {
      title: 'Work Experience',
      description: 'Hands-on roles at Bidec Solutions, CoreTech Innovations, and production workflows.',
      path: '/experience',
      icon: <Briefcase className="h-5 w-5 text-emerald-500" />,
      colorClass: 'text-emerald-500'
    },
    {
      title: 'Education & Aptech',
      description: 'Advance Diploma in Software Engineering (ADSE) and academic qualifications.',
      path: '/education',
      icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
      colorClass: 'text-amber-500'
    }
  ];

  return (
    <div className="w-full">
      {/* High-Trust Hero Section */}
      <Hero theme={theme} isDark={isDark} />

      {/* Featured Project Showcase: CampusCoin */}
      <section className="py-10 md:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Proof of Work</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Featured Project Spotlight
              </h2>
            </div>

            <Button asChild variant="ghost" className="gap-1.5 text-primary self-start sm:self-auto hover:text-primary">
              <Link to="/projects">
                <span>View all projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* CampusCoin Spotlight Card */}
          <Card className="border-border/80 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-sm">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <Badge variant="success" className="text-[11px] font-semibold py-0.5 px-2">
                      Fintech · Student Expense Tracker
                    </Badge>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground mt-0.5">
                      CampusCoin
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  A real-time financial tracking and budgeting web app created for college students. Enables daily expenditure logging, category breakdown, smart savings goals, and visual spending analytics.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React.js', 'JavaScript ES6+', 'Vite', 'Tailwind CSS', 'State Management', 'Analytics'].map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs font-medium py-1 px-2.5 bg-secondary/60 hover:bg-secondary border border-border/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild size="default" className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
                    <a
                      href="https://campus-coin-six.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="default" className="gap-2">
                    <a
                      href="https://github.com/GulMuhammad-shaikh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>View GitHub Repo</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Key Features Box (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                    Core System Architecture
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      'Instant transaction logging with dynamic category distribution',
                      'Interactive budget vs actual expenditure bar indicators',
                      'Fully responsive across mobile phones, tablets, and desktops',
                      'Clean modular architecture with component reusability and fast Vite builds'
                    ].map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Explore Section Cards */}
      <section className="py-10 pb-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Portfolio Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              Explore Dedicated Sections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.path}
                className="group block no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
              >
                <Card className="h-full flex flex-col justify-between p-6 border-border/80 hover:border-primary/50 hover:shadow-md transition-all duration-200">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-muted border border-border flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      {card.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary pt-5 mt-auto">
                    <span>Explore section</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
