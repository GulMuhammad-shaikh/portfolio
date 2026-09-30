import { portfolioData } from '../data/portfolioData';

/**
 * Intelligent AI Knowledge Engine for Gul Muhammad's Portfolio Chatbot.
 * Provides instant, context-aware answers about skills, projects, experience,
 * education, contact methods, and general technical inquiries.
 */

export const generateBotResponse = (userMessage) => {
  const query = userMessage.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|greetings|hola|salam|assalam|aoa|what's up|sup|morning|evening|afternoon)\b/i.test(query)) {
    return {
      text: `Hello there! 👋 I am **Gul's AI Assistant**. How can I help you today? You can ask me about Gul's skills, his featured project **CampusCoin**, work experience, education, or how to get in touch!`,
      suggestions: ["Tell me about Gul", "What is CampusCoin?", "What are Gul's skills?", "How to contact Gul?"]
    };
  }

  // Who is Gul / About Gul
  if (query.includes('who is gul') || query.includes('about gul') || query.includes('tell me about yourself') || query.includes('tell me about gul') || query.includes('intro') || query.includes('bio')) {
    return {
      text: `**Gul Muhammad** is a passionate **MERN Stack Developer (AI Powered)** based in Karachi, Pakistan. 
      
He is currently pursuing an **Advance Diploma in Software Engineering (ADSE)** at Aptech Learning Center. He specializes in designing full-stack web applications, RESTful microservices, and dynamic responsive user interfaces using **React, Node.js, Express, MongoDB**, and modern **AI integrations**, backed by solid foundations in PHP and MySQL.`,
      suggestions: ["What projects has he built?", "What are his skills?", "Download Resume", "Contact Gul"]
    };
  }

  // Projects / CampusCoin / Expense Tracker
  if (query.includes('project') || query.includes('campus coin') || query.includes('campuscoin') || query.includes('expense') || query.includes('work') || query.includes('portfolio') || query.includes('tracker')) {
    return {
      text: `🪙 **Featured Project: CampusCoin – Student Finance & Expense Tracker**
      
CampusCoin is a modern web application built for students to track day-to-day expenditures, set campus allowances, categorize expenses, and monitor financial health with interactive analytics.
      
- **Technologies:** React, JavaScript, Vite, Tailwind CSS, Local Storage, Analytics
- **Live Demo:** [Open CampusCoin on Vercel](https://campus-coin-six.vercel.app/)
- **GitHub:** [Gul Muhammad's GitHub](https://github.com/GulMuhammad-shaikh)

Would you like to explore his technical skills or view his background?`,
      suggestions: ["What are his skills?", "Where has he worked?", "How to contact Gul?"]
    };
  }

  // Skills / Tech Stack
  if (query.includes('skill') || query.includes('stack') || query.includes('technolog') || query.includes('react') || query.includes('node') || query.includes('mongo') || query.includes('javascript') || query.includes('python') || query.includes('mern') || query.includes('ai') || query.includes('database')) {
    return {
      text: `💻 **Gul's Technical Toolkit:**

- **Frontend:** React.js, Next.js, JavaScript (ES6+), Modern HTML5/CSS3, Tailwind CSS, Bootstrap, Redux & Context API.
- **Backend & Database:** Node.js, Express.js, MongoDB & Mongoose, PHP & Laravel, MySQL, RESTful API design, JWT authentication.
- **AI & Tools:** AI API Integrations (OpenAI/Gemini), Prompt Engineering, Git & GitHub, Postman, Vite, VS Code, Vercel deployments.

He builds scalable, responsive, and performance-optimized full-stack systems.`,
      suggestions: ["What is CampusCoin?", "Work Experience", "Hire Gul Muhammad"]
    };
  }

  // Experience / Jobs / Companies
  if (query.includes('experience') || query.includes('company') || query.includes('work') || query.includes('job') || query.includes('bidec') || query.includes('coretech')) {
    return {
      text: `💼 **Gul's Professional Work Experience:**

1. **Web Developer @ Bidec Solutions Pvt Ltd · Karachi** (01 Dec 2025 – 01 Mar 2026)
   - Created and maintained dynamic, database-driven web applications.
   - Built database schemas, server-side business logic, responsive UI views, and security practices.

2. **Frontend Developer @ CoreTech Innovations · Nawabshah** (11 May 2025 – 12 Jun 2025)
   - Developed responsive user interfaces with semantic HTML, CSS, and modern JavaScript.
   - Focused on UI/UX, API integration, and performance optimization.`,
      suggestions: ["What projects has he built?", "What are his qualifications?", "Contact Gul"]
    };
  }

  // Education / Aptech / O Level / Degrees
  if (query.includes('education') || query.includes('study') || query.includes('degree') || query.includes('school') || query.includes('college') || query.includes('aptech') || query.includes('adse') || query.includes('qualification') || query.includes('o level')) {
    return {
      text: `🎓 **Education & Academic Credentials:**

1. **ADSE – Advance Diploma in Software Engineering**  
   *Aptech Learning Center* (07 Dec 2024 – Current)  
   Focus: Full-stack software engineering, databases, dynamic web systems, and modern architectural principles.

2. **O Level – Computer Science & General**  
   *Beaconhouse School System · Karachi, Pakistan* (2019 – 2022)

**Languages:** Gul is fluent in **English** (Professional), **Urdu** (Native), and **Sindhi** (Native).`,
      suggestions: ["What are his skills?", "Tell me about CampusCoin", "Contact Gul"]
    };
  }

  // Contact / Hire / Phone / Email / WhatsApp / Location
  if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('whatsapp') || query.includes('call') || query.includes('reach') || query.includes('location') || query.includes('address') || query.includes('karachi')) {
    return {
      text: `📬 **Get in Touch with Gul Muhammad:**

- **Email:** [gulnisarshaikh@gmail.com](mailto:gulnisarshaikh@gmail.com)
- **Phone / WhatsApp:** [0304-2681062](tel:03042681062) ([Chat on WhatsApp](https://wa.me/923042681062))
- **LinkedIn:** [linkedin.com/in/gul-muhammad-53a602356](https://www.linkedin.com/in/gul-muhammad-53a602356/)
- **GitHub:** [github.com/GulMuhammad-shaikh](https://github.com/GulMuhammad-shaikh)
- **Location:** Karachi, Pakistan
- **Status:** Open to Full-time Opportunities, Freelance, and Remote Projects!`,
      suggestions: ["Download Resume", "What is CampusCoin?", "What are his skills?"]
    };
  }

  // Resume / CV
  if (query.includes('resume') || query.includes('cv') || query.includes('download')) {
    return {
      text: `📄 **Gul's Resume & CV:**
      
You can download Gul's latest resume directly using the link below:
      
[📥 Download Gul Muhammad Web Developer (1).pdf](/Gul%20Muhammad%20Web%20Developer%20(1).pdf)
      
Feel free to reach out via email at **gulnisarshaikh@gmail.com** or phone **0304-2681062**!`,
      suggestions: ["Contact Gul", "What are his skills?", "Tell me about CampusCoin"]
    };
  }

  // AI capabilities
  if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('llm') || query.includes('chatbot') || query.includes('gpt') || query.includes('prompt')) {
    return {
      text: `🤖 **AI-Powered Engineering:**
      
Gul incorporates AI workflows into modern software development:
- Integrating OpenAI and Gemini APIs into web applications.
- Building smart conversational assistants and prompt pipelines.
- Automating data parsing and intelligent recommendations (like candidate matching in job portals and automated categorization).`,
      suggestions: ["What projects has he built?", "What are his skills?", "How to contact Gul?"]
    };
  }

  // Services offered
  if (query.includes('service') || query.includes('offer') || query.includes('can you do') || query.includes('what can gul do') || query.includes('freelance')) {
    return {
      text: `🛠️ **Services Gul Offers:**

1. **Full-Stack MERN Web Apps:** End-to-end applications using MongoDB, Express, React, Node.js.
2. **AI & API Integrations:** Smart chatbots, automated workflows, and LLM APIs.
3. **RESTful APIs & Backend Architecture:** Scalable Node.js & Express or PHP services with JWT authentication.
4. **Modern Responsive UI/UX:** Fast, accessible, mobile-first designs with sleek animations.
5. **Database Engineering:** Schema design, optimization, and queries for MongoDB & MySQL.`,
      suggestions: ["Hire Gul Muhammad", "View CampusCoin", "Download Resume"]
    };
  }

  // Thanks / Compliments
  if (query.includes('thank') || query.includes('thx') || query.includes('awesome') || query.includes('great') || query.includes('good') || query.includes('cool')) {
    return {
      text: `You're very welcome! 😊 Glad I could help. Let me know if you need any other information or want to connect with Gul directly!`,
      suggestions: ["Contact Gul", "View CampusCoin", "Download Resume"]
    };
  }

  // Default Fallback
  return {
    text: `I'd be glad to help with that! As **Gul's AI Assistant**, I can give you detailed answers about his **MERN Stack & AI capabilities**, his live project **CampusCoin**, his **work history at Bidec Solutions & CoreTech**, or help you get in touch with him.
    
What would you like to explore?`,
    suggestions: ["Tell me about Gul", "What is CampusCoin?", "What are his skills?", "How to contact Gul?"]
  };
};
