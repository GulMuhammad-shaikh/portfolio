import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeo = {
  '/': {
    title: 'Gul Muhammad | Full-Stack & MERN Developer | Official Portfolio',
    description: 'Official portfolio of Gul Muhammad, Full-Stack MERN Developer in Karachi, Pakistan. Explore production web applications including CampusCoin.'
  },
  '/about': {
    title: 'About Gul Muhammad | Full-Stack Software Developer',
    description: 'Learn more about Gul Muhammad, Full-Stack MERN Developer based in Karachi, Pakistan.'
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

    const canonicalUrl = `https://portfolio-delta-two-x1zj6gtl3b.vercel.app${location.pathname === '/' ? '' : location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);
  }, [location.pathname]);

  return null;
};
