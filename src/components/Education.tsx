import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star, Trophy } from 'lucide-react';
import { EducationCard } from './EducationCard';
import { education } from '../mockData';

export const Education: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="py-20 relative transition-colors duration-500 ease-in-out bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className="w-8 h-8 text-[#7f7fff]" />
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)',
                }}
            >
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
            className="p-8 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg transition-shadow duration-300 bg-white dark:bg-surface-dark text-gray-800 dark:text-text-dark"
            >
              <h3
                className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark"
              >
                B.Tech <br></br> Computer Science and Business Systems
              </h3>
              <p
                className="mb-2 text-text-light dark:text-text-dark"
              >
                JSPM’s Rajarshi Shahu College of Engineering, Pune
              </p>
              <p
            className="mb-6 text-primary-light dark:text-primary-dark"
              >
                CGPA: 8.18 | Expected Graduation: 2026
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {education.map((Education: { icon: string; title: string; description: string; }, index: number) => (
                <EducationCard
                  key={index}
                  icon={renderIcon(Education.icon)}
                  title={Education.title}
                  description={Education.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
