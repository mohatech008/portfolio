// ---------- Types ----------

export type Project = {
  title: string;
  subtitle: string;
  role: string;
  problem: string;
  solution: string;
  contribution?: string[];
  features: string[];
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

// ---------- Site config ----------

export const siteConfig = {
  name: "Mohamed Abdi Ahmed",
  role: "Full-Stack Software Engineer",
  tagline:
    "I turn manual processes into polished, reliable web platforms, from database to interface.",
  intro:
    "I'm a full-stack engineer who builds web platforms that replace manual processes with fast, reliable software. I built the ADE Association membership platform and contributed to the frontend of Enkaj, a real estate marketplace, using React, TypeScript, Tailwind CSS and Supabase. Before software, I managed wholesale operations, which taught me to build for the people who actually use the system.",
  description:
    "Full-stack engineer building web applications with React, Next.js, TypeScript, Supabase and PostgreSQL.",
  email: "mohamadeyaminka29@gmail.com",
    phone: "+254700000000",          
  phoneDisplay: "+254724094850", 
  whatsapp: "254724094850",         
  cv: "/CV.pdf",
  socials: {
    github: "https://github.com/mohatech008",
    linkedin: "https://www.linkedin.com/in/mohamed-ahmed-6a75a226a/",
  },
  techStrip: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
};

// ---------- Projects ----------

export const projects: Project[] = [
  {
    title: "ADE Association",
    subtitle: "Professional Community Management Platform",
    role: "Full-Stack Engineer",
    image: "/projects/ade.png",
    problem:
      "Professional associations struggle with manual membership processes, scattered records, fragmented communication and a weak online presence.",
    solution:
      "A responsive web platform that digitises membership registration, centralises member data and streamlines administration, with an admin dashboard, automated emails and a public organisational site.",
    features: [
      "Online membership registration and application management",
      "Secure admin authentication with role-based access",
      "Member approval and rejection workflows",
      "Automated membership status email notifications",
      "Passport photo upload and management",
      "Administrative reporting and data export",
      "Responsive organisational website",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend"],
    github: "",
    live: "https://adeassociation.org/",
  },
  {
    title: "Enkaj",
    subtitle: "Real Estate Marketplace for Kenya",
    role: "Frontend Engineer",
    image: "/projects/enkaj.png",
    problem:
      "Finding a rental or property in Nairobi usually means dealing with middlemen, hidden fees and unverified listings, while landlords struggle to reach genuine, pre-screened tenants.",
    solution:
      "A digital property marketplace that connects seekers directly with verified owners and providers. Seekers search with smart filters and book viewings online; providers manage listings and track performance from a dedicated dashboard.",
    contribution: [
      "Built responsive, mobile-first interfaces with React and Tailwind CSS",
      "Implemented property search and filtering UI",
      "Developed the provider dashboard screens",
      "Integrated the frontend with Supabase and PostgreSQL data",
    ],
    features: [
      "Property search for rentals, student housing, offices and homes for sale",
      "Smart filters by budget, distance and commute time",
      "Direct messaging between seekers and providers",
      "Book-to-view scheduling for verified viewings",
      "Provider dashboard with listing management and availability toggles",
      "Listing performance analytics",
    ],
    stack: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "",
    live: "https://www.enkaj.com",
  },
];

// ---------- Skills ----------

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Services",
    items: ["Resend", "Git", "GitHub"],
  },
  {
    title: "Deployment & Hosting",
    items: ["Vercel", "Netlify"],
  },
];

// ---------- Experience (most recent first) ----------

export const experience: Experience[] = [
  {
    role: "Frontend Developer Attachee",
    company: "Konvergenz Network Solutions",
    period: "June 2025 – August 2025",
    points: [
      "Assisted in building and maintaining responsive web interfaces with React.js, JavaScript, HTML and CSS.",
      "Implemented frontend components and improved user experience across the application.",
      "Collaborated with developers to troubleshoot issues, debug code and enhance functionality.",
      "Gained hands-on experience with API integration and professional software development workflows.",
      "Translated design requirements into functional, responsive web solutions.",
    ],
  },
  {
    role: "Wholesale Business Manager",
    company: "Global Make Traders Limited",
    period: "May 2024 – September 2024",
    points: [
      "Managed inventory systems, logistics coordination and customer service operations.",
      "Implemented a digital record-keeping solution to streamline sales tracking and reporting.",
      "Supported operational efficiency through structured inventory monitoring.",
    ],
  },
];