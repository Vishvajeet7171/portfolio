import React from 'react';
import { Calendar, MapPin, Briefcase, BriefcaseIcon } from 'lucide-react';
import { useTheme } from './theme-provider';
import { experiences } from '../mockData';

const Experience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
            <BriefcaseIcon className="w-8 h-8 text-[#7f7fff]" />
            <h2
              className="text-4xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #7f7fff, #a78bfa)',
                }}
            >
              Experience
            </h2>
          </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b ${theme === 'dark' ? 'from-cyan-500 via-purple-500 to-emerald-500' : 'from-cyan-300 via-purple-300 to-emerald-300'} transform md:-translate-x-0.5`}></div>

          <div className="space-y-12">
{experiences.map((exp: { colorDark: string; colorLight: string; title: string; period: string; location: string; company: string;description: string; achievements: string[] }, index: number) => {
  const color = theme === 'dark' ? exp.colorDark : exp.colorLight;
  return (
    <div
      key={`${exp.title}-${index}`}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:items-start`}
    >
      {/* Timeline Dot */}
      <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${color} transform md:-translate-x-2 z-10 border-4 ${theme === 'dark' ? 'border-slate-900' : 'border-white'}`}></div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
        <div className={`rounded-xl p-6 border transition-all duration-300 backdrop-blur-sm ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600' : 'bg-white/50 border-gray-300 hover:border-gray-400'}`}>
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${color} bg-opacity-20`}>
              <Briefcase className={theme === 'dark' ? 'text-white' : 'text-black'} size={20} />
            </div>
            <div className={`text-right ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'}`}>
              <div className="flex items-center text-sm mb-1">
                <Calendar size={14} className="mr-1" />
                {exp.period}
              </div>
              <div className="flex items-center text-sm">
                <MapPin size={14} className="mr-1" />
                {exp.location}
              </div>
            </div>
          </div>

          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{exp.title}</h3>
          <h4 className={`text-lg mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>{exp.company}</h4>
          <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-gray-800'}`}>{exp.description}</p>

          <div className="space-y-2">
            <h5 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-slate-200' : 'text-gray-700'}`}>Key Achievements:</h5>
            {exp.achievements.map((achievement: string, i: number) => (
              <div key={i} className="flex items-start">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'}`}></div>
                <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} text-sm`}>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
})}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="\vishvajeet_deokar.pdf"
            className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600' : 'from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500'} text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
          >
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
