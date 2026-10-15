import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: '/about',
    title: 'About Gul Muhammad | Full-Stack Software Developer',
    description: 'Learn more about Gul Muhammad, Full-Stack MERN Developer based in Karachi, Pakistan. Explore engineering background, Aptech ADSE education, and core values.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/about',
    heading: 'About Gul Muhammad - Full-Stack Developer',
    summary: 'Dedicated Full-Stack Developer specializing in the MERN stack, currently pursuing an Advance Diploma in Software Engineering (ADSE) from Aptech Learning. Explore my background, engineering principles, and experience.'
  },
  {
    path: '/projects',
    title: 'Projects by Gul Muhammad | CampusCoin & Full-Stack Web Apps',
    description: 'Discover featured projects by Gul Muhammad, including CampusCoin (student expense tracker) and scalable full-stack web applications.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/projects',
    heading: 'Featured Projects by Gul Muhammad',
    summary: 'Production web applications engineered by Gul Muhammad, featuring CampusCoin — a smart campus expense and budget tracker built for students with real-time financial tracking and interactive analytics.'
  },
  {
    path: '/skills',
    title: 'Technical Skills | Gul Muhammad (React, Node.js, Express, MongoDB)',
    description: 'Technical toolkit of Gul Muhammad: React, Node.js, Express, MongoDB, JavaScript, Next.js, REST APIs, and modern web architecture.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/skills',
    heading: 'Technical Skills & Toolkit - Gul Muhammad',
    summary: 'Comprehensive full-stack toolkit of Gul Muhammad covering React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Next.js, Tailwind CSS, PHP, MySQL, and RESTful API architecture.'
  },
  {
    path: '/experience',
    title: 'Experience & Background | Gul Muhammad',
    description: 'Professional experience, engineering history, and development milestones of Gul Muhammad.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/experience',
    heading: 'Professional Experience - Gul Muhammad',
    summary: 'Hands-on development experience of Gul Muhammad, including roles at Bidec Solutions Pvt Ltd (Web Developer) and CoreTech Innovations (Frontend Developer).'
  },
  {
    path: '/services',
    title: 'Services Offered | Gul Muhammad - Web Development & Full-Stack Solutions',
    description: 'Custom web development, MERN stack engineering, API development, and software solutions by Gul Muhammad.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/services',
    heading: 'Services & Competencies - Gul Muhammad',
    summary: 'Engineering services provided by Gul Muhammad: custom full-stack web application development, MERN architecture, REST API design, database schema modeling, and frontend performance optimization.'
  },
  {
    path: '/education',
    title: 'Education & Certifications | Gul Muhammad (Aptech ADSE)',
    description: 'Educational background of Gul Muhammad including ADSE from Aptech Learning and secondary education at Beaconhouse School System.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/education',
    heading: 'Education & Qualifications - Gul Muhammad',
    summary: 'Academic qualifications and software engineering credentials of Gul Muhammad, including Advance Diploma in Software Engineering (ADSE) from Aptech Learning Center.'
  },
  {
    path: '/contact',
    title: 'Contact Gul Muhammad | Hire MERN Stack Developer',
    description: 'Get in touch with Gul Muhammad for full-stack opportunities, freelance contracts, or project collaborations. Phone: 0304-2681062, Email: gulnisarshaikh@gmail.com.',
    canonical: 'https://portfolio-delta-two-x1zj6gtl3b.vercel.app/contact',
    heading: 'Contact Gul Muhammad - Full-Stack Developer',
    summary: 'Get in touch with Gul Muhammad for full-stack roles, freelance inquiries, or collaborations. Direct Email: gulnisarshaikh@gmail.com | Phone / WhatsApp: +92-304-2681062.'
  }
];

function generateRoutes() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log(`Generating self-canonical static route pages from dist/index.html...`);

  for (const route of routes) {
    let customHtml = baseHtml;

    // Replace Title
    customHtml = customHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    customHtml = customHtml.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${route.title}" />`);

    // Replace Description
    customHtml = customHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

    // Replace Canonical URL
    customHtml = customHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${route.canonical}" />`);

    // Replace Open Graph Meta
    customHtml = customHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    customHtml = customHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`);
    customHtml = customHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${route.canonical}" />`);

    // Replace Twitter Meta
    customHtml = customHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    customHtml = customHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.description}" />`);
    customHtml = customHtml.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${route.canonical}" />`);

    // Update ProfilePage URL in structured data
    customHtml = customHtml.replace(
      /"url": "https:\/\/portfolio-delta-two-x1zj6gtl3b\.vercel\.app\/",\s*"name": "Gul Muhammad - Full-Stack Developer Portfolio"/,
      `"url": "${route.canonical}",\n      "name": "${route.title}"`
    );

    // Update noscript block for route-specific SEO content
    const noscriptContent = `
    <noscript>
      <div style="padding: 40px; font-family: sans-serif; max-width: 800px; margin: 0 auto; color: #111;">
        <h1>${route.heading}</h1>
        <p>${route.summary}</p>
        <p><a href="https://portfolio-delta-two-x1zj6gtl3b.vercel.app/">Return to Gul Muhammad Portfolio Home</a></p>
      </div>
    </noscript>`;
    customHtml = customHtml.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptContent);

    // Write directory index.html (e.g. dist/about/index.html)
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.join(routeDir, 'index.html'), customHtml, 'utf-8');

    // Also write clean-url HTML file (e.g. dist/about.html)
    const cleanHtmlPath = path.join(distDir, `${route.path.replace(/^\//, '')}.html`);
    fs.writeFileSync(cleanHtmlPath, customHtml, 'utf-8');

    console.log(`✓ Generated static self-canonical page for ${route.path} -> canonical: ${route.canonical}`);
  }

  console.log('Successfully generated all self-canonical route pages for Google Search Console indexing!');
}

generateRoutes();
