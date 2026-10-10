import React from 'react';
import { Sparkles, GraduationCap, School, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const Education = ({ theme, isDark }) => {
  return (
    <section id="education" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>My qualifications</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Education & <span className="text-primary">Training</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Solid academic background in software engineering fundamentals, computational logic, and multilingual communication.
          </p>
        </div>

        {/* Languages Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {portfolioData.languages.map((lang, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="py-1.5 px-3.5 text-xs font-medium border-border/80 bg-card/60 gap-2 shadow-sm"
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-bold text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">({lang.level})</span>
            </Badge>
          ))}
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 border-border/80 shadow-sm hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    {idx === 0 ? <GraduationCap className="h-6 w-6" /> : <School className="h-6 w-6" />}
                  </div>

                  <Badge
                    variant={edu.status === 'In Progress' ? 'info' : 'success'}
                    className="gap-1 py-0.5 px-2.5 text-xs"
                  >
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{edu.status}</span>
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  {edu.degree}
                </h3>

                <h4 className="text-sm font-semibold text-primary mb-3">
                  {edu.institution}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
