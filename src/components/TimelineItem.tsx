import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  company: string;
  title: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  company,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-primary-light dark:bg-primary-dark rounded-full"
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-transparent hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-colors"
      >
        <div className="text-primary-light dark:text-primary-dark font-semibold mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-1 text-text-light dark:text-text-dark">{company}</h3>
        <div className="text-text-light dark:text-text-dark font-medium mb-4">{title}</div>
        <p className="text-text-light dark:text-text-dark">{description}</p>
      </motion.div>
    </motion.div>
  );
};
