import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Code2, Cpu, Cloud } from 'lucide-react';
import { SkillCard } from './SkillCard';


const technologies: {
  category: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}[] = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    items: ["JavaScript", "TypeScript", "React.js", "Tailwind CSS", "HTML", "CSS", "Electron.js"],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: 'from-emerald-500 to-green-500',
    items: ["Node.js", "Nest.js", "Express", "Supabase"],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    color: 'from-purple-500 to-violet-500',
    items: ["SQL", "SQLite", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
    items: ["Supabase", "Docker", "AWS"],
  },
  {
    category: "Concepts & Tools",
    icon: <Globe className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    items: ["Data Structures & Algorithms", "OOP (C++)", "Git", "GitHub", "Visual Studio Code", "Postman"],
  },
  {
    category: "Languages",
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    items: ["C", "C++", "Python (Basic)"],
  }
];

export const TechStack: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <SkillCard
            icon={tech.icon}
            title={tech.category}
            skills={tech.items}
            color={tech.color}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
