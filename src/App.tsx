import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { translations } from './utils/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language') as 'en' | 'fr';
    if (savedTheme) setDarkMode(savedTheme === 'dark');
    else setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('language', language);
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode, language]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleLanguageChange = (lang: 'en' | 'fr') => setLanguage(lang);

  const t = translations[language];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* SEO & Meta Tags */}
      <Helmet>
        {/* Basic SEO */}
        <title>Abdallah Driouich Portfolio</title>
        <meta name="description" content="Portfolio of Abdallah Driouich – web developer specialized in WordPress websites and Flutter apps." />
        <meta name="keywords" content="portfolio, web developer, frontend, Abdallah Driouich, React, Tailwind, WordPress, Flutter" />
        <meta name="author" content="Abdallah Driouich" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Abdallah Driouich Portfolio" />
        <meta property="og:description" content="Portfolio of Abdallah Driouich – web developer specialized in WordPress websites and Flutter apps." />
        <meta property="og:url" content="https://abdallah.driouich.site" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://abdallah.driouich.site/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdallah Driouich Portfolio" />
        <meta name="twitter:description" content="Portfolio of Abdallah Driouich – web developer specialized in WordPress websites and Flutter apps." />
        <meta name="twitter:image" content="https://abdallah.driouich.site/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abdallah.driouich.site" />
      </Helmet>

      {/* Header and Sections */}
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        language={language}
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      <main>
        <Hero darkMode={darkMode} translations={t} />
        <About darkMode={darkMode} translations={t} />
        <Projects darkMode={darkMode} translations={t} />
        <Skills darkMode={darkMode} translations={t} />
        <Contact darkMode={darkMode} translations={t} />
      </main>
      <Footer darkMode={darkMode} translations={t} />
    </div>
  );
}

export default App;
