"use client";
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const NimaayaFooter = () => {
  return (
    <footer 
      className="text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #443737 0%, #987284 50%, #D5AA9F 100%)'
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
              backgroundColor: 'rgba(244, 225, 210, 0.1)'
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
                  background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)'
                }}
              >
                <Heart size={24} className="font-bold" style={{ color: '#443737' }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#F4E1D2' }}>
                  NIMAAYA
                </h2>
                <p className="text-sm" style={{ color: '#E8D5B7' }}>
                  women's centre for health
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E8D5B7' }}>
              Premier women's healthcare center providing comprehensive fertility treatments, 
              gynecology services, and compassionate care for every stage of life.
            </p>
            <div className="flex space-x-4">
              <Facebook 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#E8D5B7' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
              />
              <Twitter 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#E8D5B7' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
              />
              <Instagram 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#E8D5B7' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
              />
              <Linkedin 
                className="h-6 w-6 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-6" 
                style={{ color: '#E8D5B7' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 
              className="text-lg font-semibold flex items-center gap-2"
              style={{ color: '#F4E1D2' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E8D5B7' }}></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                'Home',
                'About Us', 
                'IVF Treatment',
                'Gynecology Services',
                'Video Consultation',
                'Success Stories',
                'Contact Us'
              ].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm transition-all duration-300 transform hover:translate-x-2 inline-block group"
                    style={{ color: '#E8D5B7' }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#F4E1D2';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#E8D5B7';
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
              style={{ color: '#F4E1D2' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E8D5B7' }}></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'IVF & ICSI Treatment',
                'Fertility Consultation',
                'Gynecological Surgery',
                'Maternity Care',
                'Hormonal Therapy',
                'Reproductive Health',
                'Pre-pregnancy Counseling'
              ].map((service, index) => (
                <li 
                  key={service}
                  className="text-sm cursor-pointer transition-all duration-300 hover:translate-x-1 transform group"
                  style={{ color: '#E8D5B7' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#F4E1D2';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#E8D5B7';
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
              style={{ color: '#F4E1D2' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E8D5B7' }}></div>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#F4E1D2' }}
                />
                <div className="text-sm" style={{ color: '#E8D5B7' }}>
                  <p className="font-medium" style={{ color: '#F4E1D2' }}>Surat Center</p>
                  <p>123 Medical Plaza, Surat, Gujarat</p>
                  <p className="mt-1 font-medium" style={{ color: '#F4E1D2' }}>Vadodara Center</p>
                  <p>456 Health Complex, Vadodara, Gujarat</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Phone 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#F4E1D2' }}
                />
                <div className="text-sm" style={{ color: '#E8D5B7' }}>
                  <p 
                    className="cursor-pointer transition-colors hover:underline"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#F4E1D2';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#E8D5B7';
                    }}
                  >
                    Surat: +91-261-6119900
                  </p>
                  <p 
                    className="cursor-pointer transition-colors hover:underline"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#F4E1D2';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#E8D5B7';
                    }}
                  >
                    Vadodara: +91-265-6839900
                  </p>
                  <p 
                    className="cursor-pointer transition-colors hover:underline"
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#F4E1D2';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.color = '#E8D5B7';
                    }}
                  >
                    Ahmedabad: +91-7961199900
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail 
                  className="h-5 w-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#F4E1D2' }}
                />
                <p 
                  className="text-sm cursor-pointer transition-colors hover:underline"
                  style={{ color: '#E8D5B7' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#F4E1D2';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#E8D5B7';
                  }}
                >
                  hello@nimaaya.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Clock 
                  className="h-5 w-5 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                  style={{ color: '#F4E1D2' }}
                />
                <div className="text-sm" style={{ color: '#E8D5B7' }}>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                  <p className="font-medium mt-1" style={{ color: '#F4E1D2' }}>
                    Emergency Consultations: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-12 pt-8 relative"
          style={{ borderTop: '1px solid rgba(232, 213, 183, 0.3)' }}
        >
          {/* Decorative line */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 -mt-px"
            style={{ 
              background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)'
            }}
          ></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#E8D5B7' }}>
              © 2024 Nimaaya Women's Centre for Health. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Medical Ethics', 'Patient Rights'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm transition-all duration-300 group"
                  style={{ color: '#E8D5B7' }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#F4E1D2';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.color = '#E8D5B7';
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
          <div className="flex justify-center items-center space-x-8 mt-8 pt-6" style={{ borderTop: '1px solid rgba(232, 213, 183, 0.2)' }}>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)' }}
              >
                <Heart size={20} style={{ color: '#443737' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#E8D5B7' }}>ISO Certified</p>
            </div>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)' }}
              >
                <div className="text-sm font-bold" style={{ color: '#443737' }}>✓</div>
              </div>
              <p className="text-xs font-medium" style={{ color: '#E8D5B7' }}>NABH Accredited</p>
            </div>
            <div className="text-center group">
              <div 
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)' }}
              >
                <div className="text-sm font-bold" style={{ color: '#443737' }}>★</div>
              </div>
              <p className="text-xs font-medium" style={{ color: '#E8D5B7' }}>Award Winning</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NimaayaFooter;