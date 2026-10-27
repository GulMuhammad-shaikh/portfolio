export const portfolioData = {
  personal: {
    name: "Gul Muhammad",
    firstName: "Gul",
    lastName: "Muhammad",
    title: "Full-Stack Developer (MERN Stack)",
    typingRoles: [
      "Full-Stack Developer",
      "MERN Stack Engineer",
      "React & Node.js Developer",
      "Next.js & REST API Specialist",
      "Software Engineer"
    ],
    tagline: "Building scalable, high-performance web applications and clean APIs using React, Node.js, Express, MongoDB, and Next.js.",
    email: "gulnisarshaikh@gmail.com",
    phone: "0304-2681062",
    location: "Karachi, Pakistan",
    availability: "Available for Full-time Roles & Projects",
    resumeUrl: "/Gul%20Muhammad%20Ai.pdf",
    github: "https://github.com/GulMuhammad-shaikh",
    linkedin: "https://www.linkedin.com/in/gul-muhammad-53a602356/",
    repoUrl: "https://github.com/GulMuhammad-shaikh/portfolio",
    vercelUrl: "https://portfolio-delta-two-x1zj6gtl3b.vercel.app/",
    aboutBio1: "I am a dedicated Full-Stack Developer specializing in the MERN stack, currently pursuing my Advance Diploma in Software Engineering (ADSE) from Aptech Learning Center. I engineer dynamic, responsive, and robust full-stack web applications blending clean frontend architecture with reliable backend microservices.",
    aboutBio2: "With hands-on experience in React, Node.js, Express, MongoDB, and Next.js alongside strong foundations in PHP and MySQL, I build systems that are performant, secure, and user-delighting. I focus on clean code, modular architecture, and seamless user experiences."
  },

  stats: [
    { label: "Hands-on Experience", value: "1+ Yrs" },
    { label: "Projects Completed", value: "12+" },
    { label: "Tech Stacks Mastered", value: "15+" },
    { label: "Code Quality & Passion", value: "100%" }
  ],

  skillCategories: [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "ai_tools", label: "AI & Tools" }
  ],

  skills: [
    // Frontend
    { name: "React.js", category: "frontend", level: 92, icon: "Atom", tag: "Frontend" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "FileCode2", tag: "Core" },
    { name: "Next.js", category: "frontend", level: 85, icon: "Globe", tag: "Full-Stack UI" },
    { name: "HTML5 & Modern CSS3", category: "frontend", level: 95, icon: "Palette", tag: "Frontend" },
    { name: "Tailwind & Bootstrap", category: "frontend", level: 90, icon: "Layout", tag: "UI Frameworks" },
    { name: "Redux & Context API", category: "frontend", level: 85, icon: "Boxes", tag: "State Management" },

    // Backend
    { name: "Node.js", category: "backend", level: 88, icon: "Server", tag: "Backend" },
    { name: "Express.js", category: "backend", level: 88, icon: "Cpu", tag: "REST APIs" },
    { name: "MongoDB & Mongoose", category: "backend", level: 86, icon: "Database", tag: "NoSQL DB" },
    { name: "PHP & Laravel", category: "backend", level: 85, icon: "Code", tag: "Backend" },
    { name: "MySQL Database", category: "backend", level: 85, icon: "HardDrive", tag: "Relational DB" },
    { name: "JWT & Auth Security", category: "backend", level: 88, icon: "ShieldCheck", tag: "Security" },

    // AI & Tools
    { name: "AI API Integration", category: "ai_tools", level: 86, icon: "Sparkles", tag: "AI Tech" },
    { name: "Prompt Engineering & RAG", category: "ai_tools", level: 84, icon: "Bot", tag: "AI Tech" },
    { name: "Git & GitHub", category: "ai_tools", level: 90, icon: "GitBranch", tag: "Version Control" },
    { name: "Vercel & Cloud Deploy", category: "ai_tools", level: 88, icon: "Cloud", tag: "DevOps" },
    { name: "Postman & API Testing", category: "ai_tools", level: 88, icon: "Terminal", tag: "Testing" },
    { name: "VS Code & Tooling", category: "ai_tools", level: 95, icon: "Laptop", tag: "Environment" }
  ],

  experience: [
    {
      period: "01 Dec 2025 – 01 Mar 2026",
      role: "Web Developer",
      company: "Bidec Solutions Pvt Ltd",
      location: "Karachi, Pakistan",
      type: "Full-Time / On-site",
      highlights: [
        "Responsible for the end-to-end creation, optimization, and maintenance of scalable web applications.",
        "Designed relational database schemas, robust server-side controllers, and responsive frontend views.",
        "Conducted system design, security auditing, debugging, and established version control best practices across team repos."
      ],
      skills: ["React", "PHP", "MySQL", "JavaScript", "Security", "Git"]
    },
    {
      period: "11 May 2025 – 12 Jun 2025",
      role: "Frontend Developer",
      company: "CoreTech Innovations",
      location: "Nawabshah, Pakistan",
      type: "Contract / Internship",
      highlights: [
        "Constructed responsive, pixel-perfect user-facing interfaces emphasizing modern UX/UI guidelines.",
        "Integrated dynamic REST endpoints, enhanced client-side performance, and ensured cross-browser accessibility.",
        "Collaborated in code reviews, feature testing, and modular UI component development."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "REST APIs"]
    }
  ],

  projects: [
    {
      id: "campus-coin",
      title: "CampusCoin – Student Finance & Expense Tracker",
      subtitle: "Personal Budgeting & Real-time Expense Management",
      category: "Fintech & Expense Tracker",
      featured: true,
      description: "CampusCoin is an intuitive student expense tracker designed to help learners manage campus allowances, log day-to-day expenditures, track savings targets, categorize expenses, and visualize financial habits with clean analytics.",
      tags: ["React.js", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "State Management", "Analytics"],
      github: "https://github.com/GulMuhammad-shaikh",
      live: "https://campus-coin-six.vercel.app/",
      accentColor: "#10b981",
      icon: "Wallet",
      themeKey: "emerald",
      badgeText: "Deployed on Vercel",
      highlights: [
        { label: "Daily Expense Logging", desc: "Categorize & track spending" },
        { label: "Budget & Analytics", desc: "Visual balance summaries" },
        { label: "Campus-Ready UI", desc: "Fast & mobile-friendly" }
      ],
      features: [
        "Instant transaction logging with dynamic category distribution",
        "Interactive budget vs actual expenditure bar indicators",
        "Fully responsive across mobile phones, tablets, and desktops",
        "Clean modular architecture with component reusability and fast Vite builds"
      ],
      metrics: "Daily Expense Tracking · Smart Categories · Visual Analytics"
    },
    {
      id: "dev-scribe",
      title: "DevScribe – Stories, Insights & Modern Perspectives",
      subtitle: "Modern Content & Tech Blogging Platform",
      category: "Content & Tech Platform",
      featured: true,
      description: "DevScribe is an engaging modern blogging platform covering current affairs, economic conditions, artificial intelligence, technology, and coding with an immaculate reading experience and responsive design.",
      tags: ["React.js", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Responsive UI", "Content Management"],
      github: "https://github.com/GulMuhammad-shaikh",
      live: "https://dev-scribe-beryl.vercel.app/",
      accentColor: "#6366f1",
      icon: "BookOpen",
      themeKey: "indigo",
      badgeText: "Deployed on Vercel",
      highlights: [
        { label: "Tech & AI Articles", desc: "Deep-dives & current insights" },
        { label: "Clean Reading Experience", desc: "Typography & responsive layout" },
        { label: "Fast & Interactive", desc: "Dynamic filtering & modern UI" }
      ],
      features: [
        "Curated multi-category articles across AI, Technology, Current Affairs & Economics",
        "Distraction-free typography with optimized readability and modern reader experience",
        "High-performance client routing and responsive layouts across all viewports",
        "Engineered with modern React, Vite, and Tailwind CSS for rapid loading speeds"
      ],
      metrics: "Curated Articles · Responsive Design · Fast Loading"
    }
  ],

  services: [
    {
      icon: "Layers",
      title: "Full-Stack MERN Development",
      description: "Architecting scalable end-to-end web applications utilizing MongoDB, Express, React, and Node.js with clean component architectures and robust APIs."
    },
    {
      icon: "Sparkles",
      title: "AI-Powered Features & Integrations",
      description: "Integrating intelligent LLM workflows, automated assistants, prompt pipelines, and smart predictive functionalities into web applications."
    },
    {
      icon: "Server",
      title: "RESTful API & Backend Engineering",
      description: "Building fast, well-documented REST APIs, secure authentication systems (JWT/Bcrypt), middleware, and high-efficiency database query pipelines."
    },
    {
      icon: "MonitorSmartphone",
      title: "Modern UI/UX & Responsive Web",
      description: "Crafting fluid, interactive, mobile-first web user interfaces equipped with slick micro-animations, glassmorphism, and dark/light modes."
    },
    {
      icon: "Database",
      title: "Database Design & Optimization",
      description: "Designing schema models for both NoSQL (MongoDB) and Relational (MySQL) databases with indexing, validation, and high performance."
    },
    {
      icon: "Rocket",
      title: "Cloud Deployment & Maintenance",
      description: "Streamlined CI/CD setups via GitHub, Vercel, and cloud hosting platforms with performance optimization and proactive bug resolution."
    }
  ],

  education: [
    {
      institution: "Aptech Learning Center",
      degree: "ADSE – Advance Diploma in Software Engineering",
      period: "07 Dec 2024 – Current",
      status: "In Progress",
      details: "Comprehensive study covering full-stack software development, database engineering, system design, modern JavaScript frameworks, and enterprise software practices."
    },
    {
      institution: "Beaconhouse School System",
      degree: "O Level – General & Computer Science",
      period: "01 Aug 2019 – 07 Aug 2022",
      status: "Completed",
      details: "Karachi, Pakistan. Built foundational analytical thinking, computing fundamentals, and rigorous mathematics proficiency."
    }
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency", flag: "🇬🇧" },
    { name: "Urdu", level: "Native / Bilingual", flag: "🇵🇰" },
    { name: "Sindhi", level: "Native / Bilingual", flag: "🇵🇰" }
  ]
};
