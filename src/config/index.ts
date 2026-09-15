import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kunal Maloo — Full Stack Developer",
  author: "Kunal Maloo",
  description:
    "Backend Developer specializing in scalable APIs, distributed systems, and data pipeline optimization. Experienced with Django REST Framework, Node.js, and PostgreSQL.",
  lang: "en",
  siteLogo: "/kunal-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Technical Skills", href: "#techstack" },
    { text: "Achievements", href: "#achievements" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/kunnalmaloo" },
    { text: "LinkedIn", href: "https://linkedin.com/in/kunal-maloo" },
    { text: "Github", href: "https://github.com/kunalmaloo77/" },
    { text: "Leetcode", href: "https://leetcode.com/u/kunalmaloo/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kunal Maloo",
    specialty: "Backend Developer",
    summary:
      "Backend Developer specializing in scalable APIs, distributed systems, and data pipeline optimization. Experienced with Django REST Framework, Node.js, and PostgreSQL.",
    email: "kunnalmaloo@gmail.com",
  },
  techStack: {
    title: "Technical Expertise",
    categories: [
      {
        name: "Backend Frameworks",
        items: ["Django REST Framework", "Express.js", "Node.js", "Geo-Django"],
      },
      {
        name: "Databases & Caching",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      },
      {
        name: "Distributed Systems",
        items: ["Celery", "Message Queues", "Task Processing", "WebSockets"],
      },
      {
        name: "APIs & Integration",
        items: [
          "RESTful APIs",
          "Third-party API Integration",
          "Webhooks",
          "JWT Authentication",
        ],
      },
      {
        name: "DevOps & Tools",
        items: ["Docker", "Git", "AWS S3", "CI/CD"],
      },
      {
        name: "Languages",
        items: ["Python", "JavaScript", "C/C++", "SQL"],
      },
    ],
  },
  experience: [
    {
      company: "ASQI",
      position: "Associate Software Developer",
      startDate: "Jan 2025",
      endDate: "Current",
      summary: [
        "Architected announcement dispatcher with Celery for distributed task processing, broadcasting WhatsApp notifications to 10,000+ users with automatic retry mechanisms.",
        "Optimized agricultural data pipeline using Agromonitoring APIs and Geo-Django, reducing satellite imagery analysis costs by 95%.",
        "Designed and implemented RESTful APIs for biochar procurement workflow including multi-stage inspection, transport tracking, and payment processing with complete audit trails.",
        "Built scalable user management system with role-based access control supporting secure CRUD operations.",
      ],
      technologies: [
        "Django REST Framework",
        "Geo-Django",
        "Celery",
        "PostgreSQL",
        "Redis",
        "REST APIs",
      ],
    },
    {
      company: "Softwave",
      position: "Full Stack Developer",
      startDate: "Oct 2023",
      endDate: "April 2024",
      summary: [
        "Integrated the Instagram Basic Display API to fetch user data and dynamically render it on client websites.",
        "Configured custom collections in Strapi (headless CMS) to support flexible and scalable content management.",
        "Developed multiple dynamic websites using NextJS with Strapi as the backend, ensuring efficient data flow.",
      ],
      technologies: [
        "Node.js",
        "Strapi",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
    },
  ],
  achievements: {
    title: "Key Achievements",
    items: [
      {
        title: "DSA Problem Solver",
        description:
          "Solved 350+ data structures and algorithm problems on LeetCode with focus on system design and optimization",
        link: "https://leetcode.com/u/kunalmaloo/",
        metric: "350+",
      },
      {
        title: "Cost Optimization",
        description:
          "Reduced agricultural data processing costs by 95% through efficient API integration and caching strategies at ASQI",
        metric: "95%",
      },
      {
        title: "Scale Achievement",
        description:
          "Built and deployed notification system serving 10,000+ active users with 99.9% delivery success rate",
        metric: "10K+",
      },
    ],
  },
  projects: [
    {
      name: "Organic Shop",
      summary:
        "Production-ready e-commerce REST API with advanced security and payment processing",
      description:
        "Built a scalable backend supporting JWT authentication with Redis-based refresh token rotation, AWS S3 integration for asset management, and Razorpay payment gateway. Implemented role-based admin panel with comprehensive product, order, and user management.",
      linkPreview: "https://organic-shop-frontend-alcg.vercel.app/",
      linkSource: "https://github.com/kunalmaloo77/organic-shop-backend",
      image: "/spotifu.png",
    },
    {
      name: "Realtime-Chatapp",
      summary:
        "WebSocket-based chat system with real-time messaging and presence detection",
      description:
        "Building a scalable chat application using Supabase for real-time subscriptions, PostgreSQL for data persistence, and Next.js API routes. Features include typing indicators, read receipts, and optimistic UI updates.",
      linkPreview: "/",
      linkSource: "/",
      image: "/",
    },
    {
      name: "Shopper Extension",
      description: "",
      summary:
        "AI-powered product recommendation engine for price optimization",
      linkPreview: "/",
      linkSource: "https://github.com/kunalmaloo77/smart-shopper-extension",
      image: "/shopify-clon.png",
    },
    {
      name: "Order Management Dashboard",
      summary:
        "Multi-channel order processing system with real-time status tracking",
      description:
        "Developed backend API handling orders from multiple delivery platforms with barcode scanning integration for real-time status updates. Custom form processing for special order types beyond standard web orders.",
      linkPreview: "https://dash-board-frontend-jet.vercel.app/",
      linkSource: "https://github.com/kunalmaloo77/dashboard_backend",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I'm Kunal Maloo, a Backend Developer passionate about building scalable, high-performance systems. 
  
      With hands-on production experience at ASQI, I've architected distributed task processing systems using Celery and designed RESTful APIs serving thousands of users.
      
      My technical foundation includes strong problem-solving skills, deep understanding of database optimization (PostgreSQL, MongoDB, Redis), and expertise in building secure, production-ready APIs.
      
      Currently expanding my skills in real-time systems and WebSocket architectures.
    `,
    image: "/kunal-big.png",
    skills: {
      backend: [
        "Python/Django",
        "Node.js/Express",
        "REST API Design",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
      systemDesign: [
        "Distributed Systems",
        "Message Queues (Celery)",
        "Caching Strategies",
        "Database Optimization",
      ],
      tools: ["Docker", "Git", "AWS S3", "Celery", "WebSockets"],
      fundamentals: [
        "Data Structures & Algorithms",
        "System Design",
        "Database Design",
      ],
    },
  },
};
