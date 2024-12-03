import React, { useState, useEffect } from 'react';
import { Microscope } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.label.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50"></div>
              <Microscope className="h-8 w-8 text-white relative" />
              
            </div>
            <span className="text-xl font-bold gradient-text">MedLab Diagnostics</span>
          </a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-white/90 hover:text-white transition-colors relative group ${
                  activeSection === item.label.toLowerCase() ? 'text-white' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  activeSection === item.label.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}