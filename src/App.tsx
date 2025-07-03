import { useTheme } from './components/theme-provider';
import { motion, useScroll } from 'framer-motion';
import {
  ChevronDown, Github, Linkedin, Mail, Code2, Rocket, Download, Sun, Moon, Send, ExternalLink
} from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { TechStack } from './components/TechStack';
import { ContactButton } from './components/ContactButton';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import Experience from './components/Experience';
import { Certifications } from './components/Certifications';
import { Testimonials } from './components/Testimonials';
import { PhotoGallery } from './components/PhotoGallery';
import { useState, useEffect } from 'react';

import { projects, allTechnologies, contactInfo, photoGallery } from './mockData';

const LeetCodeIcon = () => (
  <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.667 2.667h-6.334a2.667 2.667 0 00-2.667 2.666v8h3v2h-3v3.334a2.666 2.666 0 002.666 2.666h6.334a2.667 2.667 0 002.667-2.666v-11.334a2.667 2.667 0 00-2.666-2.666zm.666 13.334a.667.667 0 01-.667.666h-6.666a.667.667 0 01-.666-.666v-8a.667.667 0 01.666-.666h6.333a.666.666 0 01.667.666v8z" />
    <path d="M12 7.667L9.333 10v8h1.334v-7.333l2.333-2.166-.667-.834z" />
  </svg>
);



function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, toggleTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter(project =>
        project.technologies.frontend.includes(selectedTech!) ||
        project.technologies.backend.includes(selectedTech!) ||
        project.technologies.database.includes(selectedTech!) ||
        project.technologies.deployment.includes(selectedTech!)
      )
    : projects;

  // New state and effect for floating blobs
  const [blob1Pos, setBlob1Pos] = useState({ x: 0, y: 0 });
  const [blob2Pos, setBlob2Pos] = useState({ x: 0, y: 0 });
  const [blob3Pos, setBlob3Pos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBlob1Pos({
        x: (Math.random() - 0.5) * 20, // random float between -10 and 10
        y: (Math.random() - 0.5) * 20,
      });
      setBlob2Pos({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
      });
      setBlob3Pos({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
      });
    }, 3000); // update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background-light text-gray-800 dark:bg-background-dark dark:text-gray-200 relative transition-colors duration-500 ease-in-out">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-50/95 backdrop-blur-sm shadow-md dark:bg-background-dark/95'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.a>
            <div className="hidden md:flex items-center gap-10 font-semibold text-lg">
              <motion.a href="#about" className="hover:text-blue-600 dark:hover:text-violet-400 transition" whileHover={{ scale: 1.1 }}>About</motion.a>
              <motion.a href="#experience" className="hover:text-blue-600 dark:hover:text-violet-400 transition" whileHover={{ scale: 1.1 }}>Experience</motion.a>
              <motion.a href="#skills" className="hover:text-blue-600 dark:hover:text-violet-400 transition" whileHover={{ scale: 1.1 }}>Skills</motion.a>
              <motion.a href="#projects" className="hover:text-blue-600 dark:hover:text-violet-400 transition" whileHover={{ scale: 1.1 }}>Projects</motion.a>
              <motion.a href="#contact" className="hover:text-blue-600 dark:hover:text-violet-400 transition" whileHover={{ scale: 1.1 }}>Contact</motion.a>
            </div>
            <div className="flex items-center gap-5">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full bg-blue-200 dark:bg-violet-700 hover:bg-blue-300 dark:hover:bg-violet-600 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-900" />}
              </button>
              <motion.a
                href="\vishvajeet_deokar.pdf"
                download
                className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 w-5 h-5" />
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24">
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, #FF007F, #8A2BE2, #FF4500, #32CD32)`,
                backgroundSize: "400% 400%",
                animation: "gradient 5s ease infinite",
                WebkitTextFillColor: "transparent"
              }}
            >
              Full Stack Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Building scalable applications from frontend to backend
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <ContactButton icon={<Github />} href="https://github.com/Vishvajeet7171?tab=repositories" label="GitHub" />
              <ContactButton icon={<Linkedin />} href="https://www.linkedin.com/in/vishvajeet-deokar-85aa1821b/" label="LinkedIn" />
              <ContactButton icon={<Mail />} href="mailto:vishvajeetdeokar8@gmail.com" label="Email" />
              <ContactButton icon={<LeetCodeIcon />} href="https://leetcode.com/u/vishvajeet7171/" label="LeetCode" />
           </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg 
                        hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 
                        shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-600 text-black dark:text-white font-semibold rounded-lg 
                        hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="text-slate-400 mx-auto" size={32} />
          </div>
        </div>
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl animate-pulse"
          animate={{ x: blob1Pos.x, y: blob1Pos.y }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '1s' }}
          animate={{ x: blob2Pos.x, y: blob2Pos.y }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-emerald-500/30 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '2s' }}
          animate={{ x: blob3Pos.x, y: blob3Pos.y }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 2 }}
        />

      </header>

      {/* Main Content */}
      <main>
        <AboutMe />
        <Education />
        <Experience />
        <section id="skills" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-16">
                <Code2 className="w-8 h-8 text-[#7f7fff]" />
                <h2 className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)' }}>
                  Tech Stack
                </h2>
              </div>
              <TechStack />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-16">
                <Rocket className="w-8 h-8 text-[#7f7fff]" />
                <h2 className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)' }}>
                  Featured Projects
                </h2>
              </div>
              <div className="mb-8 flex flex-wrap gap-4 justify-center">
                <button
                  className={`px-5 py-3 rounded-full border-2 font-semibold transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                    selectedTech === null ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  onClick={() => setSelectedTech(null)}
                  aria-pressed={selectedTech === null}
                >
                  All
                </button>
                {allTechnologies.map((tech: string) => (
                  <button
                    key={tech}
                    className={`px-5 py-3 rounded-full border-2 font-semibold transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                      selectedTech === tech ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                    onClick={() => setSelectedTech(tech)}
                    aria-pressed={selectedTech === tech}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} icon={project.icon} color={project.color} />
              ))}
              </div>
              <div className="text-center mt-12">
                <a
                  href="https://github.com/Vishvajeet7171?tab=repositories"
                  className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-600 
                             text-black dark:text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 
                             transition-all duration-200"
                >
                  <Github size={20} />
                  <span>View All Projects</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <Certifications />
            <div className="text-center mt-12">
              <a
                href="https://drive.google.com/drive/folders/1xLEcj4hTszOW0oHsLgmFecVX8DOBkfuS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View all certifications on Google Drive"
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-600 
                           text-black dark:text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 
                           transition-all duration-200"
              >
                <ExternalLink size={20} />
                <span>View All Certifications</span>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Photo Gallery Section */}
        <PhotoGallery photos={photoGallery} />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-background-dark">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-2 bg-blue-500/20 rounded-full mb-8">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-8">Let's Build Something Amazing</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                Looking for opportunities to create innovative solutions and collaborate on exciting projects.
              </p>
            </motion.div>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Let's Connect</h3>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl 
                                 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 
                                 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 mr-4`}>
                        <div className="text-gray-800 dark:text-white">{info.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-gray-800 dark:text-white font-semibold">{info.label}</h4>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                   rounded-lg text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 
                                   focus:outline-none transition-colors duration-200"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                   rounded-lg text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 
                                   focus:outline-none transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 
                                 focus:outline-none transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                                 rounded-lg text-gray-800 dark:text-white placeholder-gray-400 focus:border-cyan-400 
                                 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white 
                               font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 
                               transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl 
                               flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="py-12 bg-white/50 backdrop-blur-sm dark:bg-black/50">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 dark:text-gray-400">
          <p>© 2025 Vishvajeet Deokar. All rights reserved.</p>
          <div className="flex items-center gap-6 text-lg">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              className="hover:text-black dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppContent;
