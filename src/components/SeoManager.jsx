import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeo = {
  '/': {
    title: 'Gul Muhammad | MERN Stack Developer (AI Powered) | Official Portfolio',
    description: 'Official portfolio of Gul Muhammad, Top MERN Stack Developer & AI Solutions Engineer in Karachi, Pakistan. Explore full-stack projects including CampusCoin.'
  },
  '/about': {
    title: 'About Gul Muhammad | MERN Stack Developer (AI Powered)',
    description: 'Learn more about Gul Muhammad, an experienced MERN Stack Developer with an AI-Powered edge based in Karachi, Pakistan.'
  },
  '/projects': {
    title: 'Projects by Gul Muhammad | CampusCoin & Full-Stack Web Apps',
    description: 'Discover featured projects by Gul Muhammad, including CampusCoin (student expense tracker) and scalable full-stack web applications.'
  },
  '/skills': {
    title: 'Technical Skills | Gul Muhammad (React, Node.js, Express, MongoDB)',
    description: 'Technical toolkit of Gul Muhammad: React, Node.js, Express, MongoDB, JavaScript, AI integration, REST APIs, and UI architecture.'
  },
  '/experience': {
    title: 'Experience & Background | Gul Muhammad',
    description: 'Professional experience, freelancing history, and development milestones of Gul Muhammad.'
  },
  '/services': {
    title: 'Services Offered | Gul Muhammad - Web Development & AI Solutions',
    description: 'Custom web development, MERN stack engineering, API development, and AI workflow integration by Gul Muhammad.'
  },
  '/education': {
    title: 'Education & Certifications | Gul Muhammad (Aptech ADSE)',
    description: 'Educational background of Gul Muhammad including ADSE from Aptech Learning and secondary education at Beaconhouse School System.'
  },
  '/contact': {
    title: 'Contact Gul Muhammad | Hire MERN Stack Developer',
    description: 'Get in touch with Gul Muhammad for full-stack opportunities, freelance contracts, or project collaborations. Phone: 0304-2681062, Email: gulnisarshaikh@gmail.com.'
  }
};

export const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSeo[location.pathname] || routeSeo['/'];
    document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const canonicalUrl = `https://portfolio-delta-two-x1zj6gtl3b.vercel.app${location.pathname === '/' ? '' : location.pathname}`;
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [location.pathname]);

  return null;
};
