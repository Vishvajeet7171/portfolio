import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../mockData';

// Duplicate testimonials array to create seamless loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [animationDistance, setAnimationDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const distance = contentWidth / 2; // since content is duplicated, scroll half the width
      setAnimationDistance(distance);

      // Start animation
      controls.start({
        x: [-0, -distance],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: distance / 50, // speed: 50px per second
            ease: 'linear',
          },
        },
      });
    }
  }, [controls]);

  return (
    <section id="testimonials" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MessageSquare className="w-8 h-8 text-[#7f7fff]" />
          <h2
            className="text-4xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)',
            }}
          >
            Testimonials
          </h2>
        </motion.div>
        <div
          ref={containerRef}
          className="overflow-hidden pb-4"
        >
          <motion.div
            ref={contentRef}
            className="flex space-x-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedTestimonials.map(({ id, name, role, message, avatarUrl }, index) => (
              <motion.div
                key={`${id}-${index}`}
                className="min-w-[280px] bg-background-light dark:bg-surface-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center flex-shrink-0 border border-border-light dark:border-border-dark"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {avatarUrl && (
                  <img
                    src={avatarUrl}
                    alt={`${name} avatar`}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-light dark:border-primary-dark"
                  />
                )}
                <p className="text-text-light dark:text-text-dark italic mb-4">"{message}"</p>
                <p className="font-semibold text-text-light dark:text-text-dark">{name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{role}</p>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
