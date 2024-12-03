import React from 'react';
import { TestTube2, Heart, Brain, Dna } from 'lucide-react';

const services = [
  {
    icon: TestTube2,
    title: 'Clinical Laboratory',
    description: 'Advanced testing services powered by AI and automation.',
  },
  {
    icon: Heart,
    title: 'Cardiac Testing',
    description: 'Real-time monitoring and instant cardiac analysis.',
  },
  {
    icon: Brain,
    title: 'Neurological Testing',
    description: '3D brain mapping and cognitive performance analysis.',
  },
  {
    icon: Dna,
    title: 'Genetic Testing',
    description: 'Next-gen sequencing with predictive analytics.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        
        <div className="absolute w-96 h-96 top-1/4 left-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bottom-1/4 right-1/4 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold gradient-text mb-6 animate-text-shimmer">Our Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg cyber-border p-4">
            Pioneering the future of medical diagnostics with cutting-edge technology
            and unparalleled precision.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover-scale group cursor-pointer cyber-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-glow"></div>
                <service.icon className="h-12 w-12 text-blue-400 relative" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}