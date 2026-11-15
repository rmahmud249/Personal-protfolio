// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalise the whole website.
// Every "[ ... ]" value is a placeholder — replace it with your real info.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Rasel Mahmud",
  initials: "RM",
  role: "Computer Science & Engineering Student | Web Developer | FL & DL Researcher",
  shortRole: "CSE Student · Web Developer",
  intro:
    "I build modern web systems and explore core computing problems with an engineering mindset. This space showcases my production projects alongside my Knowledge Hub  a living repository of tutorials, system architecture notes, and developer insights.",
  location: "Dhaka, Bangladesh",
  email: "rmahmud.wb@gmail.com",
  university: "Southeast University",
  resumeUrl: "/resume.pdf",
  photoUrl: "/portrait_400x500.png",
  socials: [
    { label: "GitHub", href: "https://github.com/rmahmud249", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/md-rasel-mahmud-598382423/", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com/", icon: "twitter" },
    { label: "Email", href: "mailto:rmahmud.wb@gmail.com", icon: "mail" },
  ],
  about: [
    "[Write a few sentences about who you are, where you study, and what got you into computer science.]",
    "[Describe the kind of problems you enjoy solving and the technologies you work with most.]",
    "[Share what you're currently learning and what kind of opportunities you're looking for — internships, research, collaborations.]",
  ],
  values: [
    { title: "Problem Solving", text: "Breaking complex problems into small, testable steps." },
    { title: "Clean Code", text: "Readable, maintainable software that others can build on." },
    { title: "Continuous Learning", text: "Always exploring new tools, papers and ideas." },
  ],
};

export type TechItem = { name: string; slug: string };
export const techStack: { group: string; items: TechItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Python", slug: "python" },
      { name: "C++", slug: "cplusplus" },
      { name: "Java", slug: "openjdk" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Linux", slug: "linux" },
      { name: "VS Code", slug: "vscodium" },
      { name: "Figma", slug: "figma" },
    ],
  },
];

export const expertise = [
  { icon: "code", title: "Web Development", text: "Responsive, accessible interfaces and full-stack web apps." },
  { icon: "database", title: "Databases", text: "Relational schema design, SQL queries and data modelling." },
  { icon: "cpu", title: "Algorithms & DS", text: "Competitive programming and efficient problem solving." },
  { icon: "shield", title: "Cybersecurity Basics", text: "Secure coding practices and web security fundamentals." },
  { icon: "flask", title: "Research", text: "Reading papers, running experiments, writing clearly." },
  { icon: "users", title: "Collaboration", text: "Teamwork, Git workflows and open-source contribution." },
];

export type Project = {
  slug: string;
  title: string;
  overview: string;
  category: "Web App" | "Research" | "Tool" | "Academic";
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  hue: number; 
  role?: string;
  duration?: string;
  problem?: string;
  approach?: string[];
  results?: string[];
};

export const caseStudyDefaults = {
  role: "[Your role — e.g. Solo developer]",
  duration: "[Timeline — e.g. 6 weeks]",
  problem: "[What problem were you solving? Who had it, and why did it matter?]",
  approach: [
    "[Step 1 — research, requirements or design decisions]",
    "[Step 2 — architecture and key technical choices]",
    "[Step 3 — implementation challenges and how you solved them]",
  ],
  results: ["[Outcome — e.g. measurable improvement]", "[What users or reviewers said]", "[What you learned]"],
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Nexorabd",
    overview: "[A short overview of what this project does, the problem it solves, and your role.]",
    category: "Web App",
    tech: ["JavaScript", "React", "Tailwind", "Node.js","Express.js","MongoDB"],
    github: "https://github.com/",
    demo: "https://rmahmud249.github.io/WEB-LAB-PROJECT/",
    featured: true,
    hue: 250,
  },
  {
    slug: "project-two",
    title: "[Project Two]",
    overview: "[Describe the project's goal, key features and what you learned building it.]",
    category: "Tool",
    tech: ["Python", "CLI"],
    github: "https://github.com/",
    featured: true,
    hue: 200,
  },
  {
    slug: "project-three",
    title: "[Project Three]",
    overview: "[An academic or course project — summarise the approach and results.]",
    category: "Academic",
    tech: ["C++", "Algorithms"],
    github: "https://github.com/",
    featured: true,
    hue: 300,
  },
  {
    slug: "project-four",
    title: "[Project Four]",
    overview: "[A research-oriented project or experiment — describe the question and findings.]",
    category: "Research",
    tech: ["Python", "Jupyter"],
    github: "https://github.com/",
    hue: 170,
  },
  {
    slug: "project-five",
    title: "[Project Five]",
    overview: "[Another web project with a database backend.]",
    category: "Web App",
    tech: ["Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com",
    hue: 30,
  },
];

export const skills = [
  { name: "C/C++/Java/Python", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 99 },
  { name: "MySQL/MongoDB", level: 80 },
  { name: "Node.js/Express.js", level: 85 },
  { name: "Git/GitHub", level: 80 },
];
export const softSkills = ["Communication", "Teamwork", "Time Management", "Technical Writing", "Presentation", "Adaptability"];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  status: "Published" | "Under Review" | "In Progress";
  summary: string;
  link?: string;
};
export const publications: Publication[] = [
{
  title: "The Entanglement of Spatial Non-IID Variance and Temporal Concept Drift in Federated Graph Neural Networks for Intrusion Detection",
  venue: "Under Preparation",
  year: "2026",
  status: "In Progress",
  summary: "Investigates federated intrusion detection under cross-client Non-IID data distributions and temporal concept drift. Explores adaptive graph representations, drift detection, and continual learning mechanisms to address evolving attack patterns while maintaining previously learned intrusion knowledge.",
},
{
  title: "Explainable Federated Graph Neural Networks for Trustworthy Network Intrusion Detection",
  venue: "Under Preparation",
  year: "2026",
  status: "In Progress",
  summary: "Developed an explainable Federated Graph Neural Network for network intrusion detection by integrating SHAP and graph-based explanation methods. Analyzes important network features and graph relationships influencing model predictions, while evaluating detection performance and interpretability across federated clients to support trustworthy cybersecurity decisions.",
},
];
export const researchInterests = ["Federated Learning (FL)", "Deep Learning (DL)", "Digital Image Processing","Vision-Language Models (VLMs)", "Natural Language Processing (NLP)",];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Programming" | "Web Development" | "Databases" | "Cybersecurity" | "Experiences" | "Research";
  date: string; // YYYY-MM-DD
  readTime: string;
  body: string[]; // paragraphs; lines starting with "## " become headings, "```" blocks become code
};

export const posts: Post[] = [
  {
    slug: "welcome-to-my-learning-hub",
    title: "Welcome to My Learning Hub",
    excerpt: "Why I'm writing in public, and what you can expect to find here.",
    category: "Experiences",
    date: "2026-10-01",
    readTime: "3 min",
    body: [
      "[This is a sample post. Replace it with your own writing in src/content/site.ts.]",
      "## Why write in public?",
      "[Explain your motivation — teaching reinforces learning, building a public record of growth, helping others.]",
      "## What's coming",
      "[List the topics you plan to cover: tutorials, guides, research notes.]",
    ],
  },
  {
    slug: "sql-joins-explained",
    title: "[Tutorial] SQL Joins Explained Simply",
    excerpt: "[A short summary of a database tutorial you've written.]",
    category: "Databases",
    date: "2026-09-15",
    readTime: "6 min",
    body: [
      "[Introduce the concept.]",
      "## Example",
      "```\nSELECT s.name, c.title\nFROM students s\nINNER JOIN courses c ON c.id = s.course_id;\n```",
      "[Explain the result and other join types.]",
    ],
  },
  {
    slug: "responsive-layouts-guide",
    title: "[Guide] Building Responsive Layouts",
    excerpt: "[A short summary of a web development guide.]",
    category: "Web Development",
    date: "2026-08-20",
    readTime: "5 min",
    body: ["[Write your guide here.]"],
  },
  {
    slug: "web-security-basics",
    title: "[Notes] Web Security Basics Every Developer Should Know",
    excerpt: "[A short summary of a cybersecurity article.]",
    category: "Cybersecurity",
    date: "2026-07-10",
    readTime: "7 min",
    body: ["[Write your article here.]"],
  },
];

export type TimelineItem = { title: string; org: string; period: string; text: string; tags?: string[] };
export const education: TimelineItem[] = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "Southeast University",
    period: "2023 – 2027",
    text: "CGPA: 3.93/4.00, Vice President (Computer & Programming Club)",
    tags: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networking", "Artificial Intelligence (AI)"],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "Dania College",
    period: "2020",
    text: "Science / 5.00 / Academic Excellence",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Kamalapur Sher-e-Bangla Railway High School and College",
    period: "2018",
    text: "Science / 5.00 / Academic Excellence",
  },
];
export const achievements = ["[Achievement — e.g. contest ranking]", "[Achievement — e.g. scholarship]", "[Achievement — e.g. hackathon]"];

export type Certificate = { title: string; issuer: string; date: string; credentialUrl?: string; skills: string[] };
export const certificates: Certificate[] = [
  { title: "[Certificate Title]", issuer: "[Issuing Organisation]", date: "[Month Year]", skills: ["[Skill]"] },
  { title: "[Training / Workshop]", issuer: "[Organiser]", date: "[Month Year]", skills: ["[Skill]"] },
  { title: "[Online Course]", issuer: "[Platform]", date: "[Month Year]", skills: ["[Skill]"] },
];

export const learningNow = [
  { title: "LLMs, NLP, VLMs, and Advanced Federated Learning", text: "Exploring large language models, natural language processing, vision-language models, and advanced federated learning techniques to develop intelligent, multimodal, and privacy-preserving AI systems." },
  { title: "Research Papers on Federated Learning and Explainable AI", text: "Studying recent research on federated graph neural networks, Non-IID data, concept drift, explainable AI, and emerging AI architectures to identify research challenges and potential improvements." },
  { title: "Explainable Federated Graph Neural Network for Network Intrusion Detection", text: "Developing a privacy-preserving intrusion detection system using federated graph neural networks, SHAP-based explainability, and adaptive learning techniques to improve threat detection, model interpretability, and robustness." },
];
