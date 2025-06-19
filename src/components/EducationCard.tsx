import React from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const EducationCard: React.FC<AchievementCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl backdrop-blur-sm shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-600 text-text-light dark:text-text-dark"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-primary-light text-primary-dark">
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">
            {title}
          </h4>
          <p className="text-text-light dark:text-text-dark">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
