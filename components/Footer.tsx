"use client";
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Activity, Stethoscope } from 'lucide-react';

const MegaDiagnosticsFooter = () => {
  return (
    <footer 
      className="text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #4a1d4a 0%, #663366 50%, #8b4a8b 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              backgroundColor: 'rgba(240, 217, 124, 0.1)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div 
                className="p-3 rounded-2xl mr-4 shadow-xl transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)'
                }}
              >
                <Activity size={24} className="font-bold" style={{ color: '#4a1d4a' }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#f0d97c' }}>
                  MEGA DIAGNOSTICS
                </h2>
                <p className="text-sm" style={{ color: '#e6c76b' }}>
                  advanced healthcare imaging
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#e6c76b' }}>
              Leading diagnostic center providing state-of-the-art medical imaging services, 
              pathology tests, and comprehensive health checkups with precision and care.
            </p>
            <div className="flex space-x-4">
              <Facebook 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#e6c76b' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#f0d97c';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#e6c76b';
                }}
              />
              <Twitter 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#e6c76b' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#f0d97c';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#e6c76b';
                }}
              />
              <Instagram 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#e6c76b' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#f0d97c';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#e6c76b';
                }}
              />
              <Linkedin 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#e6c76b' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#f0d97c';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#e6c76b';
                }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                'Home',
                'About Us', 
                'Our Services',
                'Book Test',
                'Health Packages',
                'Reports Online',
                'Contact Us'
              ].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm transition-all duration-300 transform hover:translate-x-2 inline-block group"
                    style={{ color: '#e6c76b' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#f0d97c';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#e6c76b';
                    }}
                  >
                    <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Digital X-Ray',
                'CT Scan & MRI',
                'Ultrasound & Doppler',
                'Blood Tests',
                'Pathology Services',
                'Health Checkups',
                'Home Collection',
                'Interventional Radiology'
              ].map((service, index) => (
                <li 
                  key={service}
                  className="text-sm cursor-pointer transition-all duration-300 hover:translate-x-1 transform group"
                  style={{ color: '#e6c76b' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#f0d97c';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#e6c76b';
                  }}
                >
                  <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#f0d97c' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e6c76b' }}></div>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  <p className="font-medium" style={{ color: '#f0d97c' }}>Main Center</p>
                  <p>Plot No.29-C, Madhuban</p>
                  <p>Udaipur - 313001, Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Phone 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  <p 
                    className="cursor-pointer transition-colors hover:underline"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#f0d97c';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#e6c76b';
                    }}
                  >
                    +91 93514 11126
                  </p>
                  <p 
                    className="cursor-pointer transition-colors hover:underline"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#f0d97c';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#e6c76b';
                    }}
                  >
                    +91 90243 11126
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail 
                  className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <p 
                  className="text-sm cursor-pointer transition-colors hover:underline"
                  style={{ color: '#e6c76b' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#f0d97c';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#e6c76b';
                  }}
                >
                  megadiagnosticsudaipur@gmail.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Clock 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#f0d97c' }}
                />
                <div className="text-sm" style={{ color: '#e6c76b' }}>
                  <p>Mon - Sat: 7:00 AM - 10:00 PM</p>
                  <p>Sunday: 8:00 AM - 8:00 PM</p>
                  <p className="font-medium mt-1" style={{ color: '#f0d97c' }}>
                    Emergency Services: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 relative"
          style={{ borderTop: '1px solid rgba(230, 199, 107, 0.3)' }}
        >
          {/* Decorative line */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 -mt-px"
            style={{ 
              background: 'linear-gradient(135deg, #e6c76b 0%, #f0d97c 100%)'
            }}
          ></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#e6c76b' }}>
              © 2024 Mega Diagnostics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Patient Rights', 'Quality Standards'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm transition-all duration-300 group"
                  style={{ color: '#e6c76b' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#f0d97c';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#e6c76b';
                  }}
                >
                  <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                    {link}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center items-center space-x-8 mt-8 pt-6" style={{ borderTop: '1px solid rgba(230, 199, 107, 0.2)' }}>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
              >
                <Activity size={20} style={{ color: '#4a1d4a' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#e6c76b' }}>ISO Certified</p>
            </div>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
              >
                <div className="text-sm font-bold" style={{ color: '#4a1d4a' }}>✓</div>
              </div>
              <p className="text-xs font-medium" style={{ color: '#e6c76b' }}>NABH Accredited</p>
            </div>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)' }}
              >
                <Stethoscope size={16} style={{ color: '#4a1d4a' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#e6c76b' }}>Trusted Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaDiagnosticsFooter;