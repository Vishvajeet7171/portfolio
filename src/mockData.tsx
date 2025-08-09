import React from 'react';
import { Code, Github, Cloud, Server, Package, Layers, Figma, Gift, Terminal, Database, Zap, Box, Monitor, ChevronDown, Rocket, Shield, Smartphone, Phone, MapPin, Globe, Mail, Code2 } from 'lucide-react';
import photo1 from '/photo1.jpg';
import photo2 from '/photo2.jpg';
import photo3 from '/photo3.jpg';
import photo4 from '/photo4.jpg';
import photo5 from '/photo5.jpg';
import photo6 from '/photo6.jpg';
import photo7 from '/photo7.jpg';
import photo8 from '/photo8.jpg';
import photo9 from '/photo9.jpg';
import photo10 from '/photo10.jpg';
import photo11 from '/photo11.jpg';
import cert1 from '/cert1.jpg';
import cert2 from '/cert2.jpeg';

import cert5 from '/cert5.jpg';
import cert6 from '/cert6.jpg';

interface Technologies {
  frontend: string[];
  backend: string[];
  database: string[];
  deployment: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technologies;
  demoLink: string;
  githubLink: string;
  icon: React.ReactNode;
  color: string;
}

export const education = [
  {
    icon: 'Star',
    title: "HSC",
    description: " Dr.Kadam Jeevan Vikas Prashala, Indapur | Percentage: 91% | Year: 2021"
  },
  {
    icon: 'Trophy',
    title: "SSC",
    description: " V.P.I.E.M.S, Indapur | Percentage: 86.20% | Year: 2019"
  }
];

export const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Pimpri Chinchwad Police Commissionerate',
    location: 'Pune, Maharashtra',
    period: 'Oct 2024 – Jan 2025',
    description:
      'Developed an Electron.js-based complaint and document tracking system to streamline internal operations for the police department.',
    achievements: [
      'Reduced paperwork by 50% and document retrieval time by 40%',
      'Used by 10+ officers to manage over 2,500 complaints and 1,000 documents',
      'Received recognition from the Commissioner of Police for system efficiency'
    ],
    colorLight: 'from-rose-500 to-pink-500',
    colorDark: 'from-rose-700 to-pink-700'
  },
  {
    title: 'AI & ML Developer',
    company: 'UIDAI Passive Bot Detection – Final Year Project',
    location: 'Pune, Maharashtra',
    period: 'Jan 2025 – Mar 2025',
    description:
    'Developed a passive bot detection system using frontend data capture and backend ML analysis to secure UIDAI portals without CAPTCHAs.',
    achievements: [
    'Captured 10+ browser environment and behavioral parameters using JavaScript',
    'Trained a Random Forest & XGBoost model with over 87-90% accuracy in bot vs. human classification',
    'Ensured smooth user experience by minimizing active user interactions'
    ],
    colorLight: 'from-orange-500 to-yellow-500',
    colorDark: 'from-orange-700 to-yellow-700'
  },
  {
    title: 'Full Stack Developer (Ongoing)',
    company: 'ERP System for College (Academic)',
    location: 'Pune, Maharashtra',
    period: 'Mar 2025 – Present',
    description:
      'Designing and developing a college ERP system for academic record management and internal workflows.',
    achievements: [
      'Implemented real-time synchronization using Supabase',
      'Built secure authentication and scalable backend with Nest.js',
      'Integrated modern responsive UI with Tailwind CSS and React'
    ],
    colorLight: 'from-emerald-500 to-teal-500',
    colorDark: 'from-emerald-700 to-teal-700'
  },
  {
    title: 'Full Stack Developer (Ongoing)',
    company: 'Training & Placement Portal (Academic)',
    location: 'Pune, Maharashtra',
    period: 'May 2025 – Present',
    description:
      'Developing a portal to manage student placements, job listings, and recruiter interactions.',
    achievements: [
      'Built core logic for student-job matching system',
      'Implemented backend APIs with Nest.js and Supabase',
      'Designed UI for profile management and real-time notifications'
    ],
    colorLight: 'from-indigo-500 to-blue-500',
    colorDark: 'from-indigo-700 to-blue-700'
  }
];

export const certifications = [
  {
    title: "Appreciation Letter",
    issuer: "Commissioner Office",
    date: "2025",
    image: cert1,
    link: "https://drive.google.com/file/d/1_5GjaGD14_WOlyKsbLc8SYmqWKzad1hn/view?usp=sharing"
  },
  {
    title: "Cyber Security",
    issuer: "paloalto",
    date: "2024",
    image: cert2,
    link: "https://drive.google.com/file/d/1JzIHJ6XOQhpBamcXFKYChg65H0SoMwmw/view?usp=sharing"
  },
  {
    title: "Python",
    issuer: "IIT Bombay",
    date: "2023",
    image: cert5,
    link: "https://drive.google.com/file/d/1fJXhCURmpFoL9ikdSan8Ww6YCfr8loKd/view?usp=sharing"
  },
  {
    title: "MongoDB",
    issuer: "MongoDB",
    date: "2025",
    image: cert6,
    link: "https://drive.google.com/file/d/12j_JbJDlx7ZprNh-woOJOKmdl2Umpspb/view?usp=sharing"
  },

];


export const ICONS = [
  { icon: <Code size={25} color="#61dafb" />, label: 'React' },
  { icon: <Github size={25} color="#000" />, label: 'GitHub' },
  { icon: <Cloud size={25} color="#FF9900" />, label: 'AWS' },
  { icon: <Server size={25} color="#34D399" />, label: 'Server' },
  { icon: <Package size={25} color="#F7DF1E" />, label: 'NPM' },
  { icon: <Layers size={25} color="#8B5CF6" />, label: 'Redux' },
  { icon: <Figma size={25} color="#F24E1E" />, label: 'Figma' },
  { icon: <Gift size={25} color="#F05032" />, label: 'Git' },
  { icon: <Terminal size={25} color="#64748B" />, label: 'Bash' },
  { icon: <Database size={25} color="#4ADE80" />, label: 'Database' },
  { icon: <Zap size={25} color="#38B2AC" />, label: 'Tailwind' },
  { icon: <Box size={25} color="#0EA5E9" />, label: 'Kubernetes' },
  { icon: <Monitor size={25} color="#1E3A8A" />, label: 'VS Code' },
  { icon: <ChevronDown size={25} color="#7f7fff" />, label: 'ChevronDown' },
  { icon: <Rocket size={25} color="#7f7fff" />, label: 'Rocket' },
  { icon: <Shield size={25} color="#34D399" />, label: 'Shield' },
  { icon: <Smartphone size={25} color="#F24E1E" />, label: 'Smartphone' },
  { icon: <Phone size={25} color="#F05032" />, label: 'Phone' },
  { icon: <MapPin size={25} color="#64748B" />, label: 'MapPin' },
  { icon: <Globe size={25} color="#4ADE80" />, label: 'Globe' },
];

export const allTechnologies: string[] = [
  "Electron.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "SQLite",
  "Streamlit",
  "Plotly",
  "Python",
  "React",
  "Tailwind CSS",
  "Nest.js",
  "Supabase",
  "Express",
  "MongoDB"
];

export const projects: Project[] = [
  {
    title: "Complaint Tracking System",
    description: "Built an Electron.js desktop app used by 10+ officers to track 2,500+ complaints reducing paperwork by 50% and retrieval time by 40%. Received recognition from the Commissioner of Police for enhancing internal tracking processes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["Electron.js", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js"],
      database: ["SQLite"],
      deployment: ["Pimpri Chinchwad Police Commissionerate"]
    },
    demoLink: "#",
    githubLink: "https://github.com/vjhvyvsxquj/complaint-portal.git",
    icon: <Zap size={20} />,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: "Document Tracking System",
    description: "Built an Electron.js desktop app used by 10+ officers to track 1,000+ documents, reducing paperwork by 50% and retrieval time by 40%. Received recognition from the Commissioner of Police for enhancing internal tracking processes.",
    image: "https://plus.unsplash.com/premium_photo-1726079247028-181ca92a1195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMGRvY3VtZW50c3xlbnwwfDB8MHx8fDA%3D?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["Electron.js", "JavaScript", "HTML", "CSS"],
      backend: ["Node.js"],
      database: ["SQLite"],
      deployment: ["Pimpri Chinchwad Police Commissionerate", "JSPM’s Rajarshi Shahu College of Engineering"]
    },
    demoLink: "#",
    githubLink: "https://github.com/vjhvyvsxquj/Document-tracking.git",
    icon: <Server size={20} />,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: "UIDAI Passive Bot Detection",
    description: "Developed a passive bot detection system using frontend data capture and backend ML analysis to secure UIDAI portals without CAPTCHAs.",
    image: "https://th.bing.com/th/id/OIP.z-I-9X9_l1GvXn_pajfxsAHaHa?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["Streamlit", "Plotly"],
      backend: ["Python"],
      database: [],
      deployment: []
    },
    demoLink: "#",
    githubLink: "https://github.com/vjhvyvsxquj/captcha.git",
    icon: <Shield size={20} />,
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: "ERP for College",
    description: "Creating a full-stack ERP platform for managing academics, workflows, and user roles. Developed REST APIs and integrated real-time sync and auth with Nest.js and Supabase.",
    image: "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149373210.jpg?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Nest.js"],
      database: ["Supabase"],
      deployment: []
    },
    demoLink: "#",
    githubLink: "https://github.com/vjhvyvsxquj/erp.git",
    icon: <Smartphone size={20} />,
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: "Training and Placement Portal for College",
    description: "Designing a role-based portal for students, recruiters, and admins with real-time updates. Built backend logic for profiles, job listings, and applications using Nest.js and Supabase.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&full=crop&q=80",
    technologies: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Nest.js"],
      database: ["Supabase"],
      deployment: []
    },
    demoLink: "#",
    githubLink: "https://github.com/vjhvyvsxquj/Training-and-Placement-portal.git",
    icon: <Code2 size={20} />,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Full Stack Paytm App',
    description: 'A full stack app mimicking Paytm functionalities.',
    image: 'https://img.freepik.com/free-vector/flat-design-minimal-technology-facebook-post_23-2149146031.jpg?auto=format&full=crop&q=80',
    technologies: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      deployment: [],
    },
    demoLink: 'https://example.com/demo3',
    githubLink: 'https://github.com/vjhvyvsxquj/paytm-full-stack.git',
    icon: <Database size={20} />,
    color: 'from-pink-500 to-rose-500',
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Vinoy Kumar Choubey',
    role: 'Commissioner of Police',
    message: 'The system significantly improved our internal document tracking and reduced manual workload across departments.',
    avatarUrl: 'https://mumbaimessenger.com/wp-content/uploads/2020/09/Vinoy-Choube-IPS.jpg',
  },
  {
    id: 2,
    name: 'Sandeep Doiphode',
    role: 'Deputy Commissioner of Police',
    message: 'A technically robust and user-friendly solution. It streamlined complaint handling and boosted operational efficiency.',
    avatarUrl: photo7,
  },
  {
    id: 3,
    name: 'Ravikiran Nale',
    role: 'Police Inspector',
    message: 'The application enhanced real-time tracking and made information access faster and more reliable.',
    avatarUrl: photo6,
  },
  {
    id: 4,
    name: 'Saagar Panmand',
    role: 'Police Inspector',
    message: 'An impactful tool that brought clarity and speed to our documentation and complaint systems.',
    avatarUrl: photo10,
  },
  {
    id: 5,
    name: 'Pravin Swami',
    role: 'Assistant Police Inspector',
    message: 'Very effective software that addressed real problems in our workflow. The interface is intuitive and efficient.',
    avatarUrl: photo9,
  },
  {
    id: 6,
    name: 'Sagar Poman',
    role: 'Police Sub Inspector',
    message: 'A practical and well-developed solution that helped reduce paperwork and saved valuable time.',
    avatarUrl: photo8,
  },
  {
    id: 7,
    name: 'Dr. Kavita Moholkar',
    role: 'HOD, CSBS Department, RSCOE',
    message: 'Demonstrated strong problem-solving and development skills through impactful academic and industry collaborations.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/faculty/5eed08d1-072a-44d3-a5f8-e551fa78c04b.png',
  },
  {
    id: 8,
    name: 'Prof. Vidyashree Kokane',
    role: 'Faculty, CSBS Department, RSCOE',
    message: 'Consistently displayed creativity and initiative in project development, with attention to detail and execution.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/faculty/bed32c86-3639-45f1-8a43-431dfe044a66.png',
  },
  {
    id: 9,
    name: 'Dr. Sunil Kandalkar',
    role: 'Dean, RSCOE',
    message: 'Exemplifies technical excellence and a strong commitment to delivering real-world solutions.',
    avatarUrl: 'https://www.jspmrscoe.edu.in/Images/InternalPages/Deans/SGKandalkar.png',
  }
];


export const photoGallery = [
  {
    src: photo1,
    title: 'Leadership Dialogue with DCP Sandeep Doiphode',
    description: 'A thought-provoking exchange on leadership and community safety with Deputy Commissioner Sandeep Doiphode.'
  },
  {
    src: photo2,
    title: 'Honored by Pimpri Chinchwad Police',
    description: 'Receiving special recognition from the Pimpri Chinchwad Commissionerate for outstanding civic contribution.'
  },
  {
    src: photo3,
    title: 'Republic Day Celebrations at Commissioner’s Office',
    description: 'Marking India’s pride with a ceremonial salute at the Commissioner’s Office on Republic Day.'
  },
  {
    src: photo4,
    title: 'National Spirit at the Commissionerate',
    description: 'A moment of unity and patriotism during the Republic Day event at the Commissioner’s campus.'
  },
  {
    src: photo5,
    title: 'Felicitation for Remarkable Achievement',
    description: 'An inspiring honor at college in recognition of exemplary accomplishments and dedication.'
  },
  {
    src: photo11,
    title: "Project Demonstration and Development Showcase",
    description: "Showcasing innovative project work and key development highlights."
  }

];

export const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'vishvajeetdeokar@gmail.com',
    href: 'mailto:vishvajeetdeokar8@gmailk.com',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+91 8421057210',
    href: 'tel:8421057210',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: '#',
    color: 'from-purple-500 to-violet-500'
  }
];
