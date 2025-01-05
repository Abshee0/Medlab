import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Shield, label: 'Accredited Labs', value: '100%' },
  { icon: Award, label: 'Success Rate', value: '99.9%' },
  { icon: Users, label: 'Satisfied Patients', value: '50K+' },
  { icon: Clock, label: 'Years Experience', value: '20+' },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 top-1/4 right-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bottom-1/4 left-1/4 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1582719298866-977ee81c87d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern Laboratory"
              className="rounded-2xl shadow-2xl relative hover-scale cyber-border"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-2xl animate-pulse-glow"></div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Leading the Way in
                <span className="block gradient-text animate-text-shimmer">Medical Innovation</span>
              </h2>
              <p className="text-white/80 mb-8 cyber-border rounded-2xl p-4 glass-effect">
                With over two decades of excellence, Medical Laboratory pioneers the future of medical testing. 
                Our state-of-the-art facilities combine AI-powered diagnostics with expert human oversight for 
                unparalleled accuracy and speed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl hover-scale group cyber-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <stat.icon className="h-8 w-8 text-blue-400 relative" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}