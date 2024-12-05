import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const rect = glowRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.setProperty('--x', `${x}px`);
        glowRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <img
          src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
          alt="Laboratory"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Interactive glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(29, 78, 216, 0.15), transparent 40%)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-bold cursor-pointer text-white leading-tight relative z-10">
              The Future of
              <span className="block relative">
              <span className="relative z-20 gradient-text animate-text-shimmer inline-block ">Medical Diagnostics</span>
                <span className="absolute top-0 left-0 -z-10 opacity-10 animate-cyber-glitch" aria-hidden="true">
                  Medical Diagnostics
                </span>
              </span>
            </h1>
          </div>
          <p className="text-xl text-white/80 mb-12 leading-relaxed cyber-border p-4 relative z-10">
            Experience next-generation laboratory testing with advanced AI-powered diagnostics
            and real-time results monitoring.
          </p>
          <div className="flex space-x-6 relative z-10">
            <a href="#contact" className="group cyber-button px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              <span className="relative z-10 flex items-center">
                Book Appointment
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#services" className="cyber-button px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300">
              <span className="relative z-10">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}