import {
  Github,
  Linkedin,
  Globe,
  Terminal as TerminalIcon,
  ShieldCheck,
  Code2,
  Database,
  Server,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Jeffery Kobby Gaisey",
  shortName: "Jeffery Gaisey",
  initials: "JG",
  location: "Accra, Ghana",
  email: "jgaisey9@gmail.com",
  phone: "+233 20 867 6264",
  phoneHref: "tel:+233208676264",
  roles: [
    "IT & Cybersecurity Specialist",
    "Full-Stack Developer",
    "Ethical Hacker",
    "CTF Competitor",
  ],
  headline: "Building secure systems & modern web applications.",
  subheadline:
    "Cybersecurity undergraduate, full-stack engineer, and Top-5 global CTF finisher — shipping production software with a security-first mindset.",
  resumeUrl: "/Jeffery-Kobby-Gaisey-CV.pdf",
};

export type Social = {
  label: string;
  href: string;
  username: string;
  icon: LucideIcon;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
    username: "@jeffery-gaisey",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    username: "Jeffery Kobby Gaisey",
    icon: Linkedin,
  },
  {
    label: "TryHackMe",
    href: "https://tryhackme.com/",
    username: "jefferygaisey",
    icon: TerminalIcon,
  },
  {
    label: "HackTheBox",
    href: "https://app.hackthebox.com/",
    username: "jefferygaisey",
    icon: ShieldCheck,
  },
];

export const heroStats = [
  { label: "Global CTF Finish", value: 5, prefix: "Top ", suffix: "" },
  { label: "Full-Stack Projects Shipped", value: 12, prefix: "", suffix: "+" },
  { label: "CTF Boxes Pwned", value: 80, prefix: "", suffix: "+" },
  { label: "Years Coding", value: 4, prefix: "", suffix: "+" },
];

export const aboutHighlights = [
  {
    title: "Security-first engineering",
    description:
      "I design and build software with threat models in mind — input validation, secure auth, least-privilege roles, and hardened deployments.",
    icon: ShieldCheck,
  },
  {
    title: "Production-grade full-stack",
    description:
      "Shipped POS systems, e-commerce platforms, and internal tooling used by real businesses across Accra.",
    icon: Code2,
  },
  {
    title: "Hands-on offensive security",
    description:
      "Top-5 global CTF finisher with active practice on HackTheBox & TryHackMe — web exploitation, crypto, reverse engineering, forensics.",
    icon: TerminalIcon,
  },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 86 },
      { name: "JavaScript (ES2022)", level: 94 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 96 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 84 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      { name: "Penetration Testing", level: 88 },
      { name: "Ethical Hacking", level: 90 },
      { name: "Cryptography", level: 78 },
      { name: "Network Security", level: 82 },
      { name: "Vulnerability Assessment", level: 84 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 76 },
      { name: "SQL Query Optimization", level: 80 },
      { name: "Schema Design", level: 84 },
    ],
  },
  {
    title: "Dev Tools",
    icon: Cpu,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Burp Suite", level: 84 },
      { name: "Postman", level: 86 },
      { name: "Docker (basics)", level: 70 },
    ],
  },
  {
    title: "Operating Systems",
    icon: TerminalIcon,
    skills: [
      { name: "Linux (Kali, Ubuntu, Parrot)", level: 90 },
      { name: "Windows Server", level: 74 },
      { name: "Bash Scripting", level: 82 },
      { name: "System Hardening", level: 78 },
    ],
  },
];

export type Project = {
  title: string;
  category: "Full-Stack" | "Cybersecurity" | "Web";
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "SlideAI — AI Presentation Generator",
    category: "Full-Stack",
    tagline: "Turn a prompt into a polished, themed slide deck in seconds.",
    description:
      "A live full-stack web app that generates fully designed presentations from a single prompt. The React front-end streams LLM responses, structures them into slides, and renders themed templates in real time.",
    features: [
      "Prompt → slide deck generation",
      "Streamed LLM responses",
      "Themed slide templates",
      "Export & share decks",
      "Authentication & session handling",
    ],
    stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS"],
    demo: "https://www.slideai.site/",
  },
  {
    title: "CampusMart GH",
    category: "Full-Stack",
    tagline: "Live student e-commerce marketplace for Ghanaian campuses.",
    description:
      "A production multi-vendor e-commerce platform connecting students, sellers and shoppers across Ghanaian campuses. Ships product listings, cart and checkout flows, vendor dashboards and secure authentication end-to-end.",
    features: [
      "Multi-vendor product listings",
      "Cart, checkout & order tracking",
      "Search & category filtering",
      "Vendor dashboard",
      "Secure authentication",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    demo: "https://www.campusmartgh.com/web/shop",
  },
  {
    title: "School Canteen POS System",
    category: "Full-Stack",
    tagline: "Production POS handling daily orders, inventory and access roles.",
    description:
      "End-to-end point-of-sale platform built for a school canteen. Cashiers process orders, inventory auto-deducts, and admins review sales reports — all behind secure, role-based authentication.",
    features: [
      "Order management",
      "Automatic inventory deduction",
      "Sales reporting & analytics",
      "Role-based access control",
      "Secure authentication & sessions",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Retail POS System",
    category: "Full-Stack",
    tagline: "Barcode-driven retail checkout with analytics dashboard.",
    description:
      "Modern retail POS supporting barcode-based checkout, real-time inventory tracking, low-stock alerts, and a clean analytics dashboard for owners.",
    features: [
      "Barcode-based checkout",
      "Analytics dashboard",
      "Inventory management",
      "Low-stock alerts",
      "Secure session handling",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Encryption & Decryption Application",
    category: "Cybersecurity",
    tagline: "Cryptography toolkit covering classical and modern ciphers.",
    description:
      "Python application demonstrating classical and modern cryptography. Encrypts files and strings, manages keys safely and exposes a clean CLI/GUI for everyday use.",
    features: [
      "Classical ciphers (Caesar, Vigenère)",
      "Modern symmetric & asymmetric encryption",
      "File encryption & decryption",
      "Secure key generation & storage",
      "Tamper-detection via HMAC",
    ],
    stack: ["Python", "cryptography", "Tkinter"],
    github: "https://github.com/",
  },
  {
    title: "E-Commerce Website",
    category: "Full-Stack",
    tagline: "Storefront with cart, auth and an admin dashboard.",
    description:
      "Full e-commerce platform with product catalog, shopping cart, secure checkout, order tracking, and a dedicated admin dashboard for managing inventory and orders.",
    features: [
      "Shopping cart & checkout",
      "Authentication & sessions",
      "Order management",
      "Admin dashboard",
      "Product & category management",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Bella Africa NGO",
    category: "Web",
    tagline: "Live marketing & programs site for an Accra-based NGO.",
    description:
      "Responsive marketing website I built and maintain for Bella Africa — a non-profit operating out of Accra. Covers programs, impact stories, donation calls-to-action and contact flows, with a focus on speed and accessibility.",
    features: [
      "Responsive design",
      "Custom content management",
      "Performance & SEO optimization",
      "Donation & contact CTAs",
      "Analytics integration",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    demo: "https://bellafrica.org/",
  },
  {
    title: "Savanet Ghana — NGO Website",
    category: "Web",
    tagline: "Programs and impact site for a Ghanaian non-profit.",
    description:
      "Live marketing site for Savanet Ghana — programs, impact stories, leadership and contact flows. Built for fast mobile loads and accessible content on slower connections.",
    features: [
      "Responsive, mobile-first layouts",
      "Programs & impact sections",
      "Contact & enquiry forms",
      "SEO-friendly markup",
      "Accessible content structure",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    demo: "https://www.savanet-gh.org/",
  },
  {
    title: "Personal Portfolio Website",
    category: "Web",
    tagline: "This very portfolio — built from scratch.",
    description:
      "A handcrafted portfolio with project showcases, cybersecurity write-ups and a responsive, accessible UI built on a calm, modern light theme.",
    features: [
      "Responsive UI",
      "Project showcase",
      "Cybersecurity writeups",
      "Interactive terminal",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/",
    demo: "#",
  },
];

export const achievements = [
  {
    year: "2025",
    title: "HTB University CTF 2025",
    subtitle: "5th place globally — out of 1,128 teams",
    description:
      "Finished Top 5 worldwide in HackTheBox's flagship university CTF, covering web, pwn, reverse engineering, crypto and forensics.",
    metric: "Top 0.4%",
  },
  {
    year: "2025",
    title: "brCTF v3",
    subtitle: "4th place overall",
    description:
      "Top-four finish across all categories in brCTF v3 — including advanced web exploitation and cryptography challenges.",
    metric: "4th / Global",
  },
  {
    year: "Ongoing",
    title: "HackTheBox & TryHackMe",
    subtitle: "Active practitioner — boxes, labs and rooms",
    description:
      "Continuously pwning boxes and completing offensive-security rooms, with a focus on web exploitation and Active Directory attacks.",
    metric: "80+ pwned",
  },
  {
    year: "2024 → present",
    title: "ESA Cyber Security Community",
    subtitle: "Member & contributor",
    description:
      "Active member of the ESA Cyber Security Community — mentoring juniors, leading internal CTF practice and sharing security write-ups.",
    metric: "Community",
  },
];

export const experience = [
  {
    role: "Website & Social Media Manager",
    company: "Bella Africa NGO",
    period: "2024 — Present",
    location: "Accra, Ghana (Remote)",
    bullets: [
      "Built and maintain the organisation's website end-to-end — front-end, CMS, hosting and uptime.",
      "Lead social media strategy across platforms; grew engagement through consistent, data-driven content.",
      "Monitor analytics and traffic dashboards; report KPIs and conversion trends to leadership monthly.",
      "Apply basic web-security hygiene — HTTPS, role-restricted admin access, sanitised inputs and regular updates.",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "Meta Suite", "Google Analytics"],
  },
];

export const education = [
  {
    degree: "B.Sc. Cyber Security",
    school: "Ghana Communication Technology University",
    period: "2023 — Expected July 2027",
    location: "Accra, Ghana",
    coursework: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Database Systems",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];

export const certifications = [
  { name: "TryHackMe — Pre-Security Path", issuer: "TryHackMe", year: "2024" },
  { name: "TryHackMe — Jr Penetration Tester", issuer: "TryHackMe", year: "2025" },
  { name: "HTB Academy — CPTS Track (in progress)", issuer: "HackTheBox", year: "2025" },
  { name: "Cisco — Introduction to Cybersecurity", issuer: "Cisco NetAcad", year: "2024" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "CTF" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const placeholderSocialIcon = Globe;
