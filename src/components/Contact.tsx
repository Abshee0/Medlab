import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: ['123 Medical Center Drive, Suite 100', 'New York, NY 10001'],
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['(555) 123-4567'],
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@medlabdiagnostics.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    content: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed',
    ],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 top-1/4 left-1/4 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bottom-1/4 right-1/4 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6 animate-text-shimmer">Get in Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg cyber-border p-4 glass-effect">
            Connect with our team for appointments, inquiries, or any questions about our advanced diagnostic services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-effect p-8 rounded-2xl cyber-border hover-scale">
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            <form className="space-y-6">
              {['Name', 'Email'].map((field, index) => (
                <div key={field} className="relative group">
                  <input
                    type={field.toLowerCase()}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder={field}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              ))}
              <div className="relative group">
                <textarea
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="Message"
                ></textarea>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
              <button
                type="submit"
                className="w-full cyber-button px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl hover-scale group cyber-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <info.icon className="h-8 w-8 text-blue-400 relative" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                {info.content.map((line, i) => (
                  <p key={i} className="text-white/70">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}