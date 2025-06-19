import React, { ReactNode, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  skills: string[];
  color: string;
}

interface Particle {
  left: string;
  top: string;
  backgroundColor: string;
  x: number;
  y: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize particles to avoid recalculating on each render
  const particles: Particle[] = useMemo(() => {
    return [...Array(5)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      backgroundColor: `hsl(${Math.random() * 360}, 80%, 50%)`,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
  }, []);

  return (
    <div
      tabIndex={0} // Make focusable for keyboard users
      aria-label={`${title} skill card`}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        gyroscope={true}
      >
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 relative group border border-gray-300 dark:border-slate-600/50 hover:border-slate-600 dark:hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden min-h-[16rem] shadow-none"
          role="region"
          aria-describedby={`${title}-skills`}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))`,
            }}
            aria-hidden="true"
          />

          {/* Floating particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: particle.x,
                      y: particle.y,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      left: particle.left,
                      top: particle.top,
                      backgroundColor: particle.backgroundColor,
                      opacity: 0.9,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div
                className={`p-3 rounded-lg bg-gradient-to-r bg-opacity-20 text-gray-900 dark:text-white transition-colors duration-300 ${color}`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            </motion.div>

            <ul id={`${title}-skills`} className="flex flex-wrap gap-2" aria-label={`${title} skills list`}>
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-gray-200/50 text-gray-900 text-sm rounded-md hover:bg-gray-300/50 transition-colors duration-200 dark:bg-slate-700/50 dark:text-slate-300 dark:hover:bg-slate-600/50"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            {/* Progress indicator */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.5 }}
              className={`absolute bottom-0 left-0 h-0.5 bg-cyan-600 dark:bg-cyan-400`}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};
