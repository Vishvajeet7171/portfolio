import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useTheme } from './theme-provider';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
  demoLink: string;
  githubLink: string;
  icon?: React.ReactNode;
  color?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  icon,
  color = 'from-cyan-400 to-purple-400',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const containerClass = theme === 'dark'
    ? 'flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group min-h-[520px]'
    : 'flex flex-col bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group min-h-[520px]';

  const iconColor = color; // Always use the passed color (dark theme color) regardless of theme

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={2000}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={containerClass}
      >
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r bg-opacity-60 backdrop-blur-sm shadow-lg ${iconColor}`}>
              <div className="text-white">{icon ? icon : <Github size={20} />}</div>
            </div>
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 overflow-auto">
                <ul className="list-disc list-inside text-sm leading-relaxed">
                  {description.split('. ').map((point, index) => (
                    point.trim() !== '' && <li key={index}>{point.trim()}{point.endsWith('.') ? '' : '.'}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>

          <div className="mb-6 space-y-2 text-sm">
            {technologies.frontend.length > 0 && (
              <div>
                <strong className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Frontend:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {technologies.frontend.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded-md text-xs ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-800'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {technologies.backend.length > 0 && (
              <div>
                <strong className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Backend:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {technologies.backend.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded-md text-xs ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-800'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {technologies.database.length > 0 && (
              <div>
                <strong className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Database:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {technologies.database.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded-md text-xs ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-800'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {technologies.deployment.length > 0 && (
              <div>
                <strong className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>Deployment:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {technologies.deployment.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded-md text-xs ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-gray-200 text-gray-800'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {githubLink && (
              <a
                href={githubLink}
                className={`flex items-center space-x-2 transition-colors duration-200 ${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <span className="text-sm">Code</span>
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                className={`flex items-center space-x-2 transition-colors duration-200 ${theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};
