import React, { useEffect, useRef, useState } from 'react';
import { Code } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code size={24} />, 
      title: 'WordPress Development', 
      description: 'Expert in building responsive, high-performance websites using Elementor, WooCommerce, and custom PHP solutions.',
    },
    {
      icon: <Code size={24} />, 
      title: 'App Development with Flutter', 
      description: 'Creating complex, beautiful, responsive mobile apps for Android and iOS with Flutter.',
    },
    {
      icon: <Code size={24} />, 
      title: 'Strong Background in Coding.', 
      description: 'Intermediate skills in Python, C, C++, and Dart, with a knack for solving complex problems efficiently.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-mono font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${darkMode ? 'bg-white' : 'bg-black'}`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                I'm <span className="font-bold">Abdallah Driouich</span> from <span className="font-bold">Agadir, Morocco</span>.<br /> I build websites, mobile apps, and desktop tools that people use every day.<br /> I create <span className="font-bold">WordPress</span> sites with <span className="font-bold">Elementor</span>, <span className="font-bold">WooCommerce</span>, and custom <span className="font-bold">PHP</span> focusing on speed and clear design.<br /> I also develop cross-platform mobile apps for Android and iOS with <span className="font-bold">Flutter</span>, and I work with <span className="font-bold">Python</span>, <span className="font-bold">C</span>, <span className="font-bold">C++</span>, and <span className="font-bold">Dart</span> to solve real problems, automate tasks, and fix bugs.<br /> I enjoy building useful, reliable software because I love it, not just for work or money, and I bring hands-on experience from client projects and small real-world applications.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}`}>{feature.icon}</div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{feature.title}</h3>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
