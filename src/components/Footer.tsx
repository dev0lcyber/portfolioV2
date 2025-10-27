import React from 'react';
import {  Mail, Heart, MessageCircle } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/212684618157',
      label: 'WhatsApp',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:abdallahdri62@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-900 border-gray-800'
          : 'bg-gray-50 border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Brand */}
          <div
            className={`font-mono text-xl font-bold mb-6 md:mb-0 cursor-pointer transition-colors ${
              darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'
            }`}
            onClick={scrollToTop}
          >
            &lt;Abdallah/&gt;
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-black hover:bg-gray-200'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            className={`text-sm text-center md:text-right ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p className="flex items-center justify-center md:justify-end space-x-1">
              <span>© 2025 Abdallah Driouich — Built with coffee and patience & </span>
              <Heart size={16} className="text-red-500 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div
          className={`mt-8 pt-8 border-t text-center text-xs ${
            darkMode
              ? 'border-gray-800 text-gray-500'
              : 'border-gray-200 text-gray-500'
          }`}
        >
          <p>
            Passionate about creating secure, fast, and beautiful WordPress experiences and building innovative phone applications.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;