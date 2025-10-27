import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Hello, World!', 'مرحبا بالعالم!', 'Hola, Mundo!'];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-pulse ${
              darkMode ? 'bg-white/10' : 'bg-black/5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Main Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="mb-8">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>
              <p
                className={`text-xl md:text-2xl lg:text-3xl font-light mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                I'm <span className="font-semibold">Abdallah Driouich</span> – Specialized in WordPress websites and Flutter apps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 font-mono font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                See My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 font-mono font-semibold rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className={`w-64 h-64 md:w-80 md:h-80 rounded-full border-4 overflow-hidden transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'border-white/20' : 'border-black/20'
                }`}
              >
                <img
                  src="/me1.webp"
                  alt="Abdallah Driouich"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
              </div>
              <div
                className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 ${
                  darkMode ? 'bg-green-400 border-black' : 'bg-green-500 border-white'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className={`p-2 rounded-full transition-colors ${
            darkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
          }`}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;