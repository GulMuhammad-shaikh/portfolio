import React from 'react';
import {
  Sparkles,
  Github,
  ArrowUpRight,
  Wallet,
  BookOpen,
  TrendingUp,
  PieChart,
  ShieldCheck,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardTitle,
  CardContent
} from '@/components/ui/card';

export const Projects = ({ theme, isDark }) => {
  const getProjectIcon = (id) => {
    if (id === 'campus-coin') {
      return <Wallet className="h-7 w-7" />;
    }
    return <BookOpen className="h-7 w-7" />;
  };

  const getHeaderGradient = (id) => {
    if (id === 'campus-coin') {
      return 'from-emerald-500/15 via-primary/10 to-transparent';
    }
    return 'from-indigo-500/15 via-violet-500/10 to-transparent';
  };

  const getIconBg = (id) => {
    if (id === 'campus-coin') {
      return 'bg-emerald-600 text-white';
    }
    return 'bg-indigo-600 text-white';
  };

  const getLiveBtnClass = (id) => {
    if (id === 'campus-coin') {
      return 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';
    }
    return 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm';
  };

  const getHighlightIcon = (label) => {
    if (label.includes('Expense') || label.includes('Logging')) {
      return <TrendingUp className="h-5 w-5 text-emerald-500" />;
    }
    if (label.includes('Budget') || label.includes('Analytics')) {
      return <PieChart className="h-5 w-5 text-blue-500" />;
    }
    if (label.includes('Campus') || label.includes('Security')) {
      return <ShieldCheck className="h-5 w-5 text-purple-500" />;
    }
    if (label.includes('AI') || label.includes('Articles')) {
      return <Sparkles className="h-5 w-5 text-indigo-500" />;
    }
    if (label.includes('Reading') || label.includes('Typography')) {
      return <BookOpen className="h-5 w-5 text-violet-500" />;
    }
    return <Layers className="h-5 w-5 text-sky-500" />;
  };

  return (
    <section id="projects" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Applications</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Live production applications built with modern React architecture, clean UX/UI design, and responsive engineering.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {portfolioData.projects.map((project) => (
            <Card key={project.id} className="border-border/80 shadow-md overflow-hidden">
              {/* Top Banner */}
              <div
                className={`p-6 sm:p-8 bg-gradient-to-r ${getHeaderGradient(
                  project.id
                )} border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-14 w-14 rounded-2xl ${getIconBg(
                      project.id
                    )} flex items-center justify-center shadow-md shrink-0`}
                  >
                    {getProjectIcon(project.id)}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <Badge variant="success" className="text-[11px] font-semibold py-0.5 px-2">
                        {project.badgeText || 'Deployed on Vercel'}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-[11px] font-semibold py-0.5 px-2 bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                      >
                        ★ Live App
                      </Badge>
                      {project.category && (
                        <Badge variant="outline" className="text-[11px] font-medium py-0.5 px-2">
                          {project.category}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-extrabold text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>

                {/* Live CTAs */}
                <div className="flex items-center gap-3 shrink-0">
                  <Button asChild className={`gap-2 ${getLiveBtnClass(project.id)}`}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Feature Highlights Grid */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {project.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-border/70 bg-muted/30 flex items-center gap-3"
                      >
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          {getHighlightIcon(h.label)}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-foreground">
                            {h.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {h.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-2">
                    Technologies:
                  </span>
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="py-1 px-3 text-xs font-medium border-primary/25 bg-primary/5 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
