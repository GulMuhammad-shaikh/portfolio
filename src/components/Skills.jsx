import React, { useState } from 'react';
import {
  Sparkles,
  Code2,
  Database,
  Cpu,
  Server,
  Layers,
  Terminal,
  Globe,
  Bot,
  Layout,
  HardDrive,
  GitBranch,
  Laptop,
  Palette,
  ShieldCheck,
  Boxes,
  Atom,
  FileCode2,
  Cloud
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const Skills = ({ theme, isDark }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === activeCategory);

  const getIcon = (iconName) => {
    const props = { className: 'h-5 w-5' };
    switch (iconName) {
      case 'Atom':
        return <Atom {...props} className="h-5 w-5 text-sky-400" />;
      case 'FileCode2':
        return <FileCode2 {...props} className="h-5 w-5 text-amber-500" />;
      case 'Globe':
        return <Globe {...props} className="h-5 w-5 text-blue-500" />;
      case 'Palette':
        return <Palette {...props} className="h-5 w-5 text-pink-500" />;
      case 'Layout':
        return <Layout {...props} className="h-5 w-5 text-cyan-500" />;
      case 'Boxes':
        return <Boxes {...props} className="h-5 w-5 text-purple-500" />;
      case 'Server':
        return <Server {...props} className="h-5 w-5 text-emerald-500" />;
      case 'Cpu':
        return <Cpu {...props} className="h-5 w-5 text-orange-500" />;
      case 'Database':
        return <Database {...props} className="h-5 w-5 text-emerald-500" />;
      case 'Code':
        return <Code2 {...props} className="h-5 w-5 text-violet-500" />;
      case 'HardDrive':
        return <HardDrive {...props} className="h-5 w-5 text-blue-500" />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="h-5 w-5 text-pink-500" />;
      case 'Sparkles':
        return <Sparkles {...props} className="h-5 w-5 text-amber-500" />;
      case 'Bot':
        return <Bot {...props} className="h-5 w-5 text-purple-500" />;
      case 'GitBranch':
        return <GitBranch {...props} className="h-5 w-5 text-rose-500" />;
      case 'Cloud':
        return <Cloud {...props} className="h-5 w-5 text-cyan-500" />;
      case 'Terminal':
        return <Terminal {...props} className="h-5 w-5 text-yellow-500" />;
      case 'Laptop':
        return <Laptop {...props} className="h-5 w-5 text-blue-500" />;
      default:
        return <Code2 {...props} className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>My toolkit</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Extensive expertise spanning MERN full-stack development, modern frontend frameworks, database engineering, and modern web tooling.
          </p>
        </div>

        {/* Filter Tabs using shadcn Button */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {portfolioData.skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Button
                key={cat.id}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-full text-xs font-semibold transition-all duration-200"
              >
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Skills Grid using shadcn Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <Card
              key={idx}
              className="p-5 border-border/80 shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {skill.name}
                    </h3>
                    <Badge variant="outline" className="text-[10px] py-0 px-1.5 font-medium border-border/60">
                      {skill.tag}
                    </Badge>
                  </div>
                </div>

                <span className="text-xs font-bold text-primary font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
