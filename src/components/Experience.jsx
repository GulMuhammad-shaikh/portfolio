import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const Experience = ({ theme, isDark }) => {
  return (
    <section id="experience" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>My professional journey</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Track record of shipping dynamic web systems, building accessible frontends, and collaborating in production environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 h-4 w-4 rounded-full bg-primary ring-4 ring-background border-2 border-background shadow-sm" />

              {/* Experience Card */}
              <Card className="p-6 sm:p-7 border-border/80 shadow-sm hover:border-primary/50 transition-colors">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <Badge variant="outline" className="gap-1.5 py-0.5 px-2.5 text-xs text-primary border-primary/30 mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-sm font-semibold text-foreground">
                      <Building2 className="h-4 w-4 text-violet-500" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1 text-xs text-muted-foreground mt-0.5">
                      <MapPin className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-2.5 mb-5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                  {exp.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="secondary"
                      className="text-xs font-medium py-0.5 px-2 bg-muted hover:bg-muted/80 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
