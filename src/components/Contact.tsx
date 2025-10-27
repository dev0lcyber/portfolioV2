import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Abdallah! I'm ${formData.name} (${formData.email}). ${formData.message}`;
    const whatsappLink = `https://wa.me/212684618157?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-black' : 'bg-white'
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
            Get In Touch
          </h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${darkMode ? 'bg-white' : 'bg-black'}`} />
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            sending me a message via WhatsApp is the fastest way to reach me. Whether you have a project in mind, need assistance, or just want to say hello, I'm here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                darkMode ? 'text-white' : 'text-black'
              }`}
            >
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                  }`}
                >
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/212684618157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    +212 684 618 157
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                  }`}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:contact@driouich.me"
                    className={`transition-colors ${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    contact@driouich.me
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                  }`}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Agadir, Morocco
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I typically respond within 24 hours. Looking forward to hearing about your project!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {isSubmitted ? (
              <div
                className={`text-center p-8 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <CheckCircle
                  size={48}
                  className={`mx-auto mb-4 ${
                    darkMode ? 'text-green-400' : 'text-green-500'
                  }`}
                />
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  WhatsApp Opened!
                </h3>
                <p
                  className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  WhatsApp should open with your message. Thank you for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white'
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white'
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-white focus:border-white'
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 font-mono font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${
                    darkMode
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <span>Send via WhatsApp</span>
                  <MessageCircle size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;