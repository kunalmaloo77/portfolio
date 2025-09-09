import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kunal Maloo — Full Stack Developer",
  author: "Kunal Maloo",
  description:
    "Full Stack Developer from Surat, specializing in backend systems, web applications, and scalable solutions.",
  lang: "en",
  siteLogo: "/kunal-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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
    specialty: "Software Developer",
    summary:
      "Software Developer from Surat, specializing in backend systems, web applications, and scalable solutions.",
    email: "kunnalmaloo@gmail.com",
  },
  experience: [
    {
      company: "ASQI",
      position: "Associate Software Developer",
      startDate: "Jan 2025",
      endDate: "Current",
      summary: [
        "Used Agromonitoring APIs with farm polygons to generate key agricultural insights from satellite imagery.",
        "Developed user profile management enabling secure creation and updates by users or managers.",
        "Designed biochar procurement module with inspection, transport, payment, and order management workflows.",
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
    },
  ],
  projects: [
    {
      name: "Organic Shop",
      summary: "An e-commerce platform for organic products.",
      linkPreview: "https://organic-shop-frontend-alcg.vercel.app/",
      linkSource: "https://github.com/kunalmaloo77/organic-shop-backend",
      image: "/spotifu.png",
    },
    {
      name: "Shopper Extension",
      summary: "An extension to find cheaper prices on amazon.",
      linkPreview: "/",
      linkSource: "https://github.com/kunalmaloo77/smart-shopper-extension",
      image: "/shopify-clon.png",
    },
    {
      name: "Order Management Dashboard",
      summary: "A dashboard for managing customer orders.",
      linkPreview: "https://dash-board-frontend-jet.vercel.app/",
      linkSource: "https://github.com/kunalmaloo77/dashboard_backend",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I’m Kunal Maloo, a Full Stack Developer with experience in building scalable applications using Django REST Framework, React, and Next.js. Skilled in Python, C++, and JavaScript, I enjoy working across the stack to craft efficient and secure solutions. 
      With a strong background in DSA and database systems, I bring both problem-solving ability and practical implementation skills, along with familiarity in tools like Docker and Git for collaborative development.
    `,
    image: "/kunal-big.png",
  },
};
