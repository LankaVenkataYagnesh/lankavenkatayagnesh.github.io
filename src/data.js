// ============================================================
// EDIT ME FIRST — almost all the text on the site lives here.
// Change a word here, save, and the site updates.
// ============================================================

export const profile = {
  name: 'Lanka Venkata Yagnesh',
  shortName: 'Yagnesh',
  initials: 'LY',
  role: 'MERN Stack Developer',
  tagline: 'Final-year ECE · NSRIT',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  locationShort: 'Visakhapatnam, AP · Open to anywhere in India & remote',
  educationShort: 'NSRIT · B.Tech ECE (2023–Present)',
  email: 'lenkasiva112@outlook.com',
  phoneDisplay: '+91 93983 17785',
  phoneLink: 'tel:+919398317785',
  linkedin: 'https://www.linkedin.com/in/lanka-venkata-yagnesh-b23941409/',
  linkedinLabel: 'linkedin.com/in/lanka-venkata-yagnesh-b23941409',
  github: 'https://github.com/LankaVenkataYagnesh',
  githubLabel: 'github.com/LankaVenkataYagnesh',
}

export const hero = {
  eyebrow: 'Open to internships · Final year · Graduating 2027',
  // The heading is split so the accent/outlined words keep their style.
  headingStart: 'Building web apps with the ',
  headingAccent: 'MERN stack',
  headingMid: ' — ',
  headingOutline: 'ready',
  headingEnd: ' for my next internship.',
  lead: "I'm Lanka Venkata Yagnesh, a final-year B.Tech ECE student at NSRIT, Visakhapatnam. I build full-stack applications with React, Node.js, Express and MongoDB — with secure JWT auth, REST APIs, and AI-powered workflows. I've completed a MERN internship with CSC India / APSCHE and I'm now looking for an internship outside college.",
}

export const facts = [
  { label: 'Focus', value: 'Full-stack web development' },
  { label: 'Core stack', value: 'MongoDB · Express · React · Node' },
  { label: 'Internship', value: 'CSC India / APSCHE · Apr–Jun 2026' },
  { label: 'Looking for', value: 'Internship outside college' },
  { label: 'Languages', value: 'English · Telugu · Hindi' },
]

export const stats = [
  { value: 'MERN', suffix: '.', text: 'End-to-end stack — UI, APIs, auth & database' },
  { value: '02', suffix: '.', text: 'Major full-stack projects with AI integration' },
  { value: '3', suffix: ' mo', text: 'MERN internship — CSC India / APSCHE' },
  { value: '2027', suffix: '.', text: 'Graduating — B.Tech ECE, NSRIT (JNTU-GV)' },
]

export const about = {
  intro:
    'ECE by degree, software by practice — I like building products that connect clean interfaces to solid backends.',
  paragraphs: [
    "I'm a final-year Electronics & Communication Engineering student at Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT), affiliated to JNTU-GV. Alongside my degree, I've built a strong foundation in Java, Data Structures & Algorithms, and full-stack web development.",
    'My hands-on work is in building RESTful APIs, managing SQL and MongoDB databases, and integrating Generative AI into backend workflows — from resume analysis and skill-gap detection to real-time e-commerce recovery systems.',
    "Exams are done and I'm in my final year — now focused on getting real-world experience through an internship outside college.",
  ],
}

export const lookingFor = {
  text: 'An internship where I can contribute as a developer from week one — shipping features, fixing bugs, and learning how production teams work.',
  roles: [
    'MERN Stack Developer Intern',
    'Full-Stack Developer Intern',
    'Software Engineer Intern',
    'Frontend Developer Intern',
    'Backend Developer Intern',
  ],
  checklist: [
    { label: 'Location:', text: 'Visakhapatnam, remote, or anywhere in India' },
    { label: 'Available:', text: 'Final-year student, ready to start' },
    { label: 'Strengths:', text: 'React UIs, Node/Express APIs, JWT auth, MongoDB CRUD' },
  ],
}

export const skillGroups = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'Responsive, component-based interfaces',
    tags: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Hooks', 'Context API', 'Axios'],
  },
  {
    num: '02',
    title: 'Backend & APIs',
    desc: 'Server logic, auth and data flow',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'CRUD Operations', 'Socket.IO', 'RBAC'],
  },
  {
    num: '03',
    title: 'Databases & Languages',
    desc: 'Data modelling and core programming',
    tags: ['MongoDB', 'MySQL / SQL', 'MongoDB Compass', 'JavaScript', 'Python', 'Java'],
  },
  {
    num: '04',
    title: 'AI Integration & Tools',
    desc: 'GenAI workflows and developer tooling',
    tags: ['Generative AI Integration', 'OpenRouter / Ollama APIs', 'Skill-Gap Analysis', 'Git & GitHub', 'VS Code', 'Postman', 'DSA', 'OOP'],
  },
]

export const experience = [
  {
    date: 'Apr 2026 — Jun 2026',
    dateLines: ['Visakhapatnam, AP', 'APSCHE Student Internship Initiative'],
    title: 'MERN Stack Developer Intern',
    org: 'Council for Skills and Competencies (CSC India) / APSCHE',
    bullets: [
      'Completed full-stack training and project development using MongoDB, Express.js, React.js and Node.js.',
      'Built responsive user interfaces and backend services with secure JWT authentication and RESTful API endpoints for client–server data sync.',
      'Implemented end-to-end CRUD operations on MongoDB with schema modelling for data consistency and performance.',
    ],
    cert: 'Certificate ID: CSCIndia-6C93MU0A',
  },
  {
    date: 'Virtual Internship',
    dateLines: ['Remote'],
    title: 'Embedded System Developer — Virtual Intern',
    org: 'EduSkills',
    bullets: [
      'Virtual internship in embedded systems, complementing my ECE coursework with hands-on systems exposure alongside my software development focus.',
    ],
    cert: null,
  },
]

export const projects = [
  {
    num: '01',
    variant: 'v1',
    badge: 'AI · E-Commerce',
    badgeGreen: false,
    title: 'Cart Rescue AI & SnapCart',
    desc: 'AI-powered e-commerce & cart-abandonment recovery platform — customer storefront plus an admin AI dashboard.',
    codeLines: [
      { dim: true, text: '// SnapCart — live recovery' },
      { text: 'cart.status → ', accent: '"recovered"', after: ' · risk.score: 0.12' },
      { text: 'socket.emit(', accent: '"checkout:recovered"', after: ')' },
    ],
    bullets: [
      'Architected an end-to-end platform with a dynamic storefront (SnapCart) and administrative dashboard (Cart Rescue).',
      'Built multi-agent AI backend workflows orchestrated by Node.js / Express microservices with real-time Socket.IO communication and MongoDB persistence.',
      'Integrated REST APIs, checkout flows, Razorpay payment-recovery concepts, and real-time risk-scoring algorithms.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'REST APIs', 'Razorpay'],
  },
  {
    num: '02',
    variant: 'v2',
    badge: 'Full-Stack · GenAI',
    badgeGreen: true,
    title: 'Campus Management System & AI Skill Bridge',
    desc: 'Campus AI Bridge — digitises campus admin workflows and gives students automated skill-gap analysis.',
    codeLines: [
      { dim: true, text: '// Campus AI Bridge — skill gap' },
      { text: 'resume → skills: [', accent: '"React", "Node"', after: ']' },
      { text: 'roadmap.generate() → ', accent: '"ready"' },
    ],
    bullets: [
      'Developed a full-stack MERN application for campus administration with student and admin modules.',
      'Integrated Generative AI workflows (OpenRouter / Ollama APIs) for resume analysis, skill-gap detection, and automated learning roadmaps.',
      'Designed role-based access control (RBAC), JWT authentication, and optimised MongoDB query handlers for scalable performance.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC', 'GenAI APIs'],
  },
]

export const projectsNote =
  'Also built as part of coursework & labs: Machine Learning lab implementations (KNN, ID3 decision tree, ANN backpropagation, genetic algorithms) and ECE lab work in Microwave & Optical Communications and Digital Image Processing.'

export const education = [
  {
    dot: 'B.T',
    title: 'B.Tech — Electronics & Communication Engineering',
    desc: 'Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT) · Affiliated to JNTU-GV · 2023 – Present',
  },
  {
    dot: '+2',
    title: 'Intermediate — MPC',
    desc: 'Narayana Junior College · 2021 – 2023',
  },
  {
    dot: '10',
    title: 'SSC',
    desc: 'The Presidential School · 2021',
  },
]

export const foundations =
  'Data Structures & Algorithms, Object-Oriented Programming, Database Management, and REST API design — applied across projects and internship work.'

export const languages = ['English', 'Telugu', 'Hindi']

export const howIWork =
  'Git & GitHub for version control, Postman for API testing, VS Code as my daily editor. I learn fastest by building and shipping.'

export const contact = {
  headingStart: "Let's talk about an ",
  headingAccent: 'internship.',
  text: "I'm actively looking for an internship outside college — MERN / full-stack roles preferred, open to frontend, backend, and software engineering internships anywhere in India or remote. The fastest way to reach me is email.",
  footerNote: 'Visakhapatnam, Andhra Pradesh, India · Final-year B.Tech ECE, NSRIT · Graduating 2027',
}
