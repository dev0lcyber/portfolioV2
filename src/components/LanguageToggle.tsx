import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'fr';
  onLanguageChange: (lang: 'en' | 'fr') => void;
  darkMode: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange, darkMode }) => {
  return (
    <div className="relative">
      <button
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          darkMode
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-gray-100 text-black hover:bg-gray-200'
        }`}
      >
        <Globe size={16} />
        <span className="text-sm font-mono">{language.toUpperCase()}</span>
      </button>
      <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <button
          onClick={() => onLanguageChange('en')}
          className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
            language === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
        >
          English
        </button>
        <button
          onClick={() => onLanguageChange('fr')}
          className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
            language === 'fr' ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
        >
          Français
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;