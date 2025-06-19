import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 p-6 rounded-xl text-center relative group"
    >
      <div className="inline-block p-2 bg-blue-500/20 rounded-full mb-4">
        <div className="text-blue-400">
          {icon}
        </div>
      </div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold mb-1"
      >
        {value}
      </motion.div>
      <div className="text-gray-400">{label}</div>
      <div className="absolute inset -0 border-2 border-transparent rounded-xl group-hover:border-blue-500/20 transition-all duration-300"></div>
    </motion.div>
  );
};