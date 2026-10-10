import React from 'react';
import {
  UserCheck,
  Download,
  Mail,
  Phone,
  MapPin,
  Languages,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';

export const About = ({ theme, isDark }) => {
  const infoItems = [
    { icon: <UserCheck className="h-4 w-4 text-blue-500" />, label: 'Name', value: portfolioData.personal.name },
    { icon: <Briefcase className="h-4 w-4 text-violet-500" />, label: 'Role', value: portfolioData.personal.title },
    { icon: <Mail className="h-4 w-4 text-rose-500" />, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
    { icon: <Phone className="h-4 w-4 text-emerald-500" />, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}` },
    { icon: <MapPin className="h-4 w-4 text-amber-500" />, label: 'Location', value: portfolioData.personal.location },
    { icon: <GraduationCap className="h-4 w-4 text-cyan-500" />, label: 'Education', value: 'ADSE @ Aptech Learning' },
    { icon: <Languages className="h-4 w-4 text-pink-500" />, label: 'Languages', value: 'English · Urdu · Sindhi' },
    { icon: <Sparkles className="h-4 w-4 text-blue-500" />, label: 'Specialty', value: 'Full-Stack MERN & REST APIs' }
  ];

  return (
    <section id="about" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get to know me</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Passionate Full-Stack Developer transforming complex requirements into clean, scalable, and intuitive digital experiences.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {portfolioData.stats.map((stat, idx) => (
            <Card key={idx} className="p-5 text-center border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bio Story Card (7 cols) */}
          <Card className="lg:col-span-7 p-6 sm:p-8 border-border/80 shadow-sm flex flex-col justify-between">
            <div>
              <Badge variant="secondary" className="mb-5 py-1 px-3 text-xs font-semibold gap-1.5">
                <Code2 className="h-3.5 w-3.5 text-primary" />
                <span>Full-Stack Problem Solver</span>
              </Badge>

              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                Crafting Next-Generation Web Architectures
              </CardTitle>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {portfolioData.personal.aboutBio1}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {portfolioData.personal.aboutBio2}
              </p>

              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  'Full-Stack JavaScript & MERN architecture expert',
                  'RESTful API development with robust authentication & security',
                  'Performance-first, responsive, and mobile-friendly UI interfaces',
                  'Strong relational & NoSQL database fundamentals (MongoDB, MySQL)'
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="default" className="gap-2 shadow-sm">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Gul Muhammad Web Developer (1).pdf"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="default" className="gap-2">
                <Link to="/contact">
                  <MessageSquare className="h-4 w-4" />
                  <span>Let's Talk</span>
                </Link>
              </Button>
            </div>
          </Card>

          {/* Quick Info Grid Card (5 cols) */}
          <Card className="lg:col-span-5 p-6 sm:p-8 border-border/80 shadow-sm">
            <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-6">
              Personal Coordinates
            </CardTitle>

            <div className="flex flex-col gap-3">
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl border border-border/60 bg-muted/30 hover:bg-muted/50 transition-colors gap-3"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="h-8 w-8 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm font-semibold text-primary hover:underline truncate max-w-[180px] text-right"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[180px] text-right">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
