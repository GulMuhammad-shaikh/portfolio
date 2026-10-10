import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';

export const Contact = ({ theme, isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 py-1 px-3 text-xs font-semibold gap-1.5 border-primary/30 text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get in touch</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Contact <span className="text-primary">Me</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a project in mind, seeking a Full-Stack MERN Developer, or looking to collaborate? Reach out directly!
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Details (5 cols) */}
          <Card className="lg:col-span-5 p-6 sm:p-8 border-border/80 shadow-sm flex flex-col justify-between">
            <div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                Let's Build Something Great
              </CardTitle>

              <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-6">
                Whether you need a full-stack web application, clean REST APIs, or frontend engineering, I'm ready to contribute to your team.
              </CardDescription>

              <div className="flex flex-col gap-3.5">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-muted/30">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Email
                      </div>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl border border-border/70 bg-muted/30">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${portfolioData.personal.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* WhatsApp Quick Message Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                >
                  <a
                    href="https://wa.me/923042681062?text=Hi%20Gul%20Muhammad,%20I%20saw%20your%20portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Profiles Row */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-border">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="sm" className="gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </Card>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <Card className="lg:col-span-7 p-6 sm:p-8 border-border/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 px-4 flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mb-4">
                  <Check className="h-7 w-7" />
                </div>

                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Message Sent Successfully!
                </CardTitle>

                <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
                  Thank you for reaching out, <strong className="text-foreground">{formData.name || 'there'}</strong>! I will review your inquiry and get back to you promptly.
                </p>

                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="gap-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Send a Direct Message
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mt-1">
                    Fill out the form below and I will respond within 24 hours.
                  </CardDescription>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Project Inquiry"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Gul, I would like to discuss..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full sm:w-auto self-start gap-2 shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
