import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

interface ContactButtonProps {
  icon: ReactNode;
  href: string;
  label: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ icon, href, label }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full shadow-sm transition-colors
        ${isDark ? 'bg-gray-600 text-gray-100 hover:bg-gray-100 hover:text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-gray-100'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </motion.a>
  );
};
