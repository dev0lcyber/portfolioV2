import React, { useEffect, useRef, useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for section reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal open & handle ESC key to close modal
  useEffect(() => {
    if (showModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal();
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [showModal]);

  const projects = [
    {
      title: 'Home Talfaza',
      description:
        'A website for Talfaza – IT, smart home, and television solutions, available in French and Arabic, fully built from scratch.',
      image: '/webimages/home-talfaza-ar.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'Support', 'multilingual'],
      status: 'Live',
      liveLink: 'https://fr.talfaza.ma/',
    },
    {
      title: 'Thami Bike Website',
      description:
        'A multilingual WordPress website for Thami Bike – designed with a simple, user-friendly UI to showcase guided bike tours and authentic cultural experiences in Taroudant, built entirely from scratch.',
      image: '/webimages/thami-bike.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'Custom plugins'],
      status: 'Live',
      liveLink: 'https://thami-bike.com/',
    },
    {
      title: 'IPTV Service Website',
      description:
        'WordPress site for Initial TV, a global IPTV provider offering movies, series, sports, and flexible subscription plans.',
      image: '/webimages/iptv.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'Payment integration'],
      status: 'Live',
      liveLink: 'https://initialtv.net/',
    },
    {
      title: 'Ride Sharing Platform',
      description:
        'WordPress website for Rai Limo, offering premium multilingual limo and airport services in Denver, designed with a clean, custom UI.',
      image: '/webimages/ride.webp',
      technologies: ['WordPress', 'Elementor', 'web3', 'Booking system'],
      status: 'Live',
      liveLink: 'https://vail-limo.com/carservicemiami/',
    },
    {
      title: 'Blog of Nowotch agence',
      description:
        'WordPress website for Nowotch agence, showcasing their services and portfolio with a modern design.',
      image: '/webimages/blog.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'SEO'],
      status: 'Live',
      liveLink: 'https://blog.nowotch.com/',
    },
    {
      title: 'Punchingbag Store',
      description:
        'WordPress e-commerce site for Punchingbag Store, specializing in high-quality punching bags and fitness equipment, featuring a sleek design and user-friendly navigation.',
      image: '/webimages/punchbag.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'SEO', 'WooCommerce'],
      status: 'Live',
      liveLink: 'https://pushingbag.nowotch.com/',
    },
        {
      title: 'EcoGrid living Blog',
      description:
        'Blog about off-grid living and solar technology and renewable energy solutions. made by wordpress, and I used wp-api with backend script to automate article creation and posting.',
      image: '/webimages/eco.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'SEO', 'AI', 'auto-post'],
      status: 'Live',
      liveLink: 'https://ecogridliving.lovestoblog.com/',
    },
    {
      title: 'Westyal Perfume Store',
      description:
        'WordPress e-commerce site for Westyal Perfume Store, specializing in high-quality perfumes and fragrances',
      image: '/webimages/westeyl.webp',
      technologies: ['WordPress', 'Elementor', 'WebP', 'SEO'],
      status: 'Live',
      liveLink: 'https://westyal.com/products/westyal-diffuseur-copy',
    },
    {
      title: 'Premium Coffee Beans App',
      description:
        'WordPress e-commerce site for Premium Coffee Beans, specializing in high-quality coffee products and accessories.',
      image: '/appsimages/premiume-coffebeans-app.webp',
      technologies: ['Flutter', 'Android', 'responsive', 'e-commerce', 'backend'],
      status: 'Live',
      liveLink: 'i see what are you doing here, hmmm, contact me so I CAN HELP YOU',
    },
    {
      title: 'anti-phone addiction App',
      description:
        'A mobile application designed to help users reduce phone addiction through various features like usage tracking, reminders, and focus modes.',
      image: '/appsimages/advance-to-do-app.webp',
      technologies: ['Flutter', 'Android', 'responsive', 'e-commerce', 'backend', 'UI/UX design', 'mobile development', 'low level permission handling'],
      status: 'Live',
      liveLink: 'i see what are you doing here, hmmm, contact me so I CAN HELP YOU',
    },
    {
      title: 'Smart Habit tracker App',
      description:
        'A mobile application designed to help users track and manage their habits effectively.',
      image: '/appsimages/habit-tracker-app.webp',
      technologies: ['Flutter', 'Android', 'responsive', 'e-commerce', 'backend', 'UI/UX design', 'mobile development'],
      status: 'Live',
      liveLink: 'i see what are you doing here, hmmm, contact me so I CAN HELP YOU',
    },
    {
      title: 'Clothing E-Shop App',
      description:
        'clothing e-commerce mobile app that serve as a platform for users to browse, select, and purchase clothing items directly from their mobile devices.',
      image: '/appsimages/clothing-e-shop-app.webp',
      technologies: ['Flutter', 'Android', 'responsive', 'e-commerce', 'UI/UX design', 'mobile development'],
      status: 'Live',
      liveLink: 'i see what are you doing here, hmmm, contact me so I CAN HELP YOU',
    },
    {
      title: 'Restaurant menu App',
      description:
        'A mobile application designed for restaurant management, allowing users to browse the menu, place orders, and make payments seamlessly.',
      image: '/appsimages/resturant-app-command.webp',
      technologies: ['Flutter', 'Android', 'responsive', 'e-commerce', 'stripe'],
      status: 'Live',
      liveLink: 'i see what are you doing here, hmmm, contact me so I CAN HELP YOU',
    },
  ];

  const initialVisibleCount = 3; // Show 3 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, initialVisibleCount);

  // Simple URL check: treat strings starting with http/https as external links
  const isValidUrl = (s: string) => {
    try {
      return /^https?:\/\//i.test(s);
    } catch {
      return false;
    }
  };

  const openModal = (src: string, title?: string) => {
    setModalImageSrc(src);
    setModalTitle(title || null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImageSrc(null);
    setModalTitle(null);
  };

  // click handler for image area: open link if link is a URL, otherwise open modal
  const handleImageClick = (project: typeof projects[number]) => {
    if (isValidUrl(project.liveLink)) {
      // open site in new tab for real URLs
      window.open(project.liveLink, '_blank', 'noopener,noreferrer');
    } else {
      openModal(project.image, project.title);
    }
  };

  const handleWantToSeeMore = () => {
    // Scroll to the <h2> with text "Get In Touch"
    const getInTouchHeading = Array.from(document.querySelectorAll('h2')).find(
      (h2) => h2.textContent?.trim() === 'Get In Touch'
    );
    if (getInTouchHeading) {
      getInTouchHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-mono font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
            My Projects
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${darkMode ? 'bg-white' : 'bg-black'}`} />
          <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Here are some of my recent WordPress projects that showcase my development and security expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`rounded-lg overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Project Image */}
                <div
                  role="button"
                  onClick={() => handleImageClick(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleImageClick(project);
                  }}
                  tabIndex={0}
                  className="relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                      <span className="text-sm font-semibold">{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs font-mono rounded-full ${
                          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button / Status */}
                  <div className={`inline-flex items-center space-x-2 font-mono font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span>Status: {project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > initialVisibleCount && (
          <div className="text-center mt-8">
            {showAll ? (
              <button
                onClick={handleWantToSeeMore}
                className={`px-6 py-3 rounded-full font-mono font-semibold transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Want to see more?
              </button>
            ) : (
              <button
                onClick={() => setShowAll(true)}
                className={`px-6 py-3 rounded-full font-mono font-semibold transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Show More
              </button>
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showModal && modalImageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              darkMode ? 'bg-black/70' : 'bg-gray-900/60'
            }`}
            style={{ backdropFilter: 'blur(6px)' }}
            aria-hidden="true"
          />

          <div
            className={`relative mx-4 max-w-md w-full rounded-2xl p-4 transform transition-all duration-300 ${
              darkMode ? 'bg-gray-900/90' : 'bg-white/90'
            } shadow-2xl`}
            style={{ zIndex: 60 }}
          >
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="absolute top-3 right-3 rounded-full p-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-4">
              {modalTitle && <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{modalTitle}</h3>}
              <div className="w-full flex items-center justify-center">
                <img
                  src={modalImageSrc}
                  alt={modalTitle || 'Project image'}
                  className="max-h-[60vh] object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
