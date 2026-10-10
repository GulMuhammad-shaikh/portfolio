import React from 'react';
import {
  Sparkles,
  Layers,
  Server,
  MonitorSmartphone,
  Database,
  Rocket
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { Card, CardTitle, CardContent } from '@/components/ui/card';

export const Services = ({ theme, isDark }) => {
  const getIcon = (iconName) => {
    const props = { className: 'h-6 w-6' };
    switch (iconName) {
      case 'Layers':
        return <Layers {...props} className="h-6 w-6 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles {...props} className="h-6 w-6 text-purple-500" />;
      case 'Server':
        return <Server {...props} className="h-6 w-6 text-emerald-500" />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone {...props} className="h-6 w-6 text-pink-500" />;
      case 'Database':
        return <Database {...props} className="h-6 w-6 text-amber-500" />;
      case 'Rocket':
        return <Rocket {...props} className="h-6 w-6 text-cyan-500" />;
      default:
        return <Layers {...props} className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>What I bring</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            My <span className="text-primary">Services</span> & Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Delivering high-value engineering across full-stack development, database architecture, and web deployments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.services.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 border-border/80 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-muted border border-border flex items-center justify-center mb-5">
                  {getIcon(service.icon)}
                </div>

                <CardTitle className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
