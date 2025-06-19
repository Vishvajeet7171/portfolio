import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { colors } from '../colors';
import { certifications } from '../mockData';

export const Certifications: React.FC = () => {
  return (
    <section
      className="py-20 relative transition-colors duration-500 ease-in-out bg-background-light dark:bg-background-dark text-primary-700 dark:text-primary-300"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-16">
            <Award className="w-8 h-8 text-[#7f7fff]" />
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)',
                }}
            >
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden group backdrop-blur-sm shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#FF3B30';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#E0E0E0';
                }}
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t "
                    style={{
                      backgroundImage: `linear-gradient(to top, ${colors.text.dark}, transparent)`,
                    }}
                  ></div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 text-black dark:text-white"
                  >
                    {cert.title}
                  </h3>
<p className="mb-4 text-gray-600 dark:text-gray-400">
  {cert.issuer}
</p>
                  <div className="flex items-center justify-between ">
<span className="text-sm text-gray-600 dark:text-gray-400">
  {cert.date}
</span>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                    >
                      <ExternalLink
                        className="w-5 h-5"
                        style={{ color: '#4DD0E1' }}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
