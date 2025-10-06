import React, { useEffect, useRef, useState } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'WordPress', level: 95, icon: '📝' },
    { name: 'Flutter/dart', level: 90, icon: '📱' },
    { name: 'SEO/SEA', level: 70, icon: '🔍' },
    { name: 'HTML/CSS', level: 95, icon: '🌐' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Elementor', level: 90, icon: '🚀' },
    { name: 'Linux', level: 60, icon: '💻' },
    { name: 'Problem Solving', level: 80, icon: '🗄️' },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-mono font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Skills & Expertise
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${darkMode ? 'bg-white' : 'bg-black'}`} />
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Technologies and tools I use to build secure and performant web solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3
                        className={`text-lg font-semibold ${
                          darkMode ? 'text-white' : 'text-black'
                        }`}
                      >
                        {skill.name}
                      </h3>
                    </div>
                    <span
                      className={`text-sm font-mono ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className={`w-full h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-1500 ease-out ${
                        darkMode ? 'bg-white' : 'bg-black'
                      }`}
                      style={{
                        width: animatedSkills.includes(index) ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Bash & batch'
,                'Elementor',
                'Git',
                'Docker',
                'Mobile Development',
                'SEO/SEA',
                'virtualization',
                'flask',
                'linux',
                'AI/ML',
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 border border-gray-700'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

