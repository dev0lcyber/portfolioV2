import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');
    else setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('lang', 'en');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Helmet>
        {/* Basic SEO - Concise */}
        <title>Abdallah Driouich - Web Dev Agadir</title>
        <meta name="description" content="Abdallah Driouich, top web & app dev in Agadir, Morocco, specializing in WordPress & Flutter." />
        <meta name="keywords" content="Abdallah Driouich, web developer Agadir, WordPress, Flutter, custom software Morocco" />
        <meta name="author" content="Abdallah Driouich" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        {/* Open Graph - Concise */}
        <meta property="og:title" content="Abdallah Driouich - Web Dev Agadir" />
        <meta property="og:description" content="Top web & app dev in Agadir, Morocco, specializing in WordPress & Flutter." />
        <meta property="og:url" content="https://portfolio.driouich.me" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://portfolio.driouich.me/og-image.png" />
        <meta property="og:image:alt" content="Abdallah Driouich Portfolio" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Abdallah Driouich Portfolio" />
        <meta property="og:updated_time" content="2025-10-27T10:46:00+01:00" />

        {/* Twitter - Concise */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Abdallah Driouich - Web Dev Agadir" />
        <meta name="twitter:description" content="Top web & app dev in Agadir, Morocco, specializing in WordPress & Flutter." />
        <meta name="twitter:image" content="https://portfolio.driouich.me/og-image.png" />
        <meta name="twitter:image:alt" content="Abdallah Driouich Portfolio" />

        {/* Canonical */}
        <link rel="canonical" href="https://portfolio.driouich.me" />

        {/* Structured Data - Person */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdallah Driouich",
            "alternateName": "Abdallah Driouich Developer",
            "jobTitle": "Web and Mobile App Developer",
            "description": "Highly skilled developer in Agadir, Morocco, specializing in WordPress, Flutter, and custom software solutions for businesses worldwide.",
            "url": "https://portfolio.driouich.me",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Agadir",
              "addressRegion": "Souss-Massa",
              "addressCountry": "MA"
            },
            "email": "mailto:contact@driouich.me",
            "telephone": "+212 684618157",
            "knowsAbout": ["WordPress Development", "Flutter App Development", "Custom Software", "SEO Optimization", "Responsive Design"],
            "image": "https://portfolio.driouich.me/profile-image.jpg",
            "sameAs": [
              "https://github.com/dev0lcyber",
              "https://www.linkedin.com/in/abdellah-jj-266517328/",
              "https://twitter.com/"
            ]
          })}
        </script>

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web and Mobile Development",
            "provider": { "@type": "Person", "name": "Abdallah Driouich" },
            "areaServed": { "@type": "Place", "name": "Agadir, Morocco" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Development Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": "WordPress Development", "priceCurrency": "USD", "price": "150.00" },
                { "@type": "Offer", "itemOffered": "Flutter App Development", "priceCurrency": "USD", "price": "175.00" },
                { "@type": "Offer", "itemOffered": "Custom Software Solutions", "priceCurrency": "USD", "price": "150.00" },
                { "@type": "Offer", "itemOffered": "تطوير ووردبريس" },
                { "@type": "Offer", "itemOffered": "تطوير تطبيقات فلاتر" },
                { "@type": "Offer", "itemOffered": "حلول برمجية مخصصة" },
                { "@type": "Offer", "itemOffered": "Développement WordPress" },
                { "@type": "Offer", "itemOffered": "Développement d'apps Flutter" },
                { "@type": "Offer", "itemOffered": "Solutions logicielles personnalisées" }
              ]
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does Abdallah Driouich provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I provide WordPress website development, Flutter mobile app creation, and bespoke software solutions tailored to client needs."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Abdallah Driouich stand out as a developer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I offer expertise in modern technologies, local Agadir support, and a commitment to delivering high-quality, responsive designs."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get started with Abdallah Driouich?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fill out the contact form on this page or email me at contact@driouich.me to discuss your project."
                }
              }
            ]
          })}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FW03YM43Z"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7FW03YM43Z');
          `}
        </script>
      </Helmet>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;