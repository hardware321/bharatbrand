"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Clock, Stethoscope, Calendar } from 'lucide-react';
import logo from "../newlogo.png"
import Image from 'next/image';

const MegaDiagnosticsNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'About Us', 
      href: '#',
      dropdown: ['Our Story', 'Our Commitment', 'Our Team', 'Why Trust Us']
    },
    { 
      name: 'Radiology Services', 
      href: '#',
      dropdown: ['Digital X-Ray', 'CT Scan', 'MRI', 'Ultrasound & Doppler', 'Mammography', 'Echocardiography']
    },
    { 
      name: 'Pathology Services', 
      href: '#',
      dropdown: ['Clinical Pathology', 'Biochemistry', 'Microbiology', 'Immunology & Serology', 'Cytology', 'Histopathology']
    },
    { 
      name: 'Interventional Radiology', 
      href: '#',
      dropdown: ['Minimally Invasive Treatments', 'IPD Facilities', 'Emergency Procedures', 'Expert Care']
    },
    { 
      name: 'Contact Us', 
      href: '#'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Gradient Overlay - Only visible when not scrolled */}
      <div 
        className={`fixed top-0 left-0 w-full pointer-events-none transition-opacity duration-500 z-40 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          height: '20vh',
          background: 'linear-gradient(180deg, rgba(74, 29, 74, 0.85) 0%, rgba(102, 51, 102, 0.7) 30%, rgba(139, 74, 139, 0.5) 60%, rgba(240, 217, 124, 0.2) 85%, transparent 100%)'
        }}
      />

      {/* Top Contact Bar - Desktop Only */}
      <div 
        className="hidden lg:block text-white py-3 px-4 text-sm relative z-50"
        style={{ 
          background: 'linear-gradient(135deg, #4a1d4a 0%, #663366 50%, #8b4a8b 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <Phone size={16} className="animate-pulse group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline group-hover:text-yellow-300 transition-colors">APPOINTMENTS: </span>
              <span className="group-hover:text-yellow-300 transition-colors">+91 93514 11126 | +91 90243 11126</span>
            </span>
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <Clock size={16} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-300 transition-colors">24x7 Available</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-300 transition-colors">megadiagnosticsudaipur@gmail.com</span>
            </span>
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <MapPin size={16} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-300 transition-colors">Udaipur, Rajasthan</span>
            </span>
            
            {/* Enhanced Book Test Button */}
            <button 
              className="group relative px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)',
                color: '#4a1d4a'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Test</span>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-0 shadow-2xl py-2' 
          : 'py-4'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(74, 29, 74, 0.2)' : 'none'
      }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Fixed and Properly Aligned */}
          <div className="flex items-center group cursor-pointer">
            <div className=" transition-transform duration-300 group-hover:scale-105">
              <Image 
                width={196}
                height={196}
                src={logo} 
                alt="Mega Diagnostics Logo" 
              />
            </div>
       
          </div>

          {/* Desktop Navigation - Enhanced Font Size */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-2 px-5 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    color: isScrolled ? '#4a1d4a' : '#ffffff',
                    background: 'transparent',
                    textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                  onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = isScrolled ? 'rgba(102, 51, 102, 0.1)' : 'rgba(240, 217, 124, 0.15)';
                    target.style.color = isScrolled ? '#663366' : '#e6c76b';
                    target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = isScrolled ? '#4a1d4a' : '#f0d97c';
                    target.style.transform = 'scale(1)';
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible transform translate-y-0' 
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                    style={{ 
                      background: 'rgba(248, 250, 252, 0.98)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(74, 29, 74, 0.2)'
                    }}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block px-4 py-3 transition-all duration-200 text-sm font-medium hover:transform hover:translate-x-2"
                        style={{ 
                          color: '#4a1d4a',
                          borderBottom: index < item.dropdown!.length - 1 ? '1px solid rgba(74, 29, 74, 0.1)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.background = 'linear-gradient(135deg, rgba(102, 51, 102, 0.1) 0%, rgba(139, 74, 139, 0.1) 100%)';
                          target.style.color = '#663366';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.background = 'transparent';
                          target.style.color = '#4a1d4a';
                        }}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Desktop Book Appointment Button */}
      
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg transition-all duration-300"
            style={{ 
              color: isScrolled ? '#4a1d4a' : '#f0d97c',
              textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = isScrolled ? 'rgba(74, 29, 74, 0.1)' : 'rgba(240, 217, 124, 0.1)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'transparent';
            }}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div 
            className="shadow-xl"
            style={{ 
              background: 'rgba(248, 250, 252, 0.98)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(74, 29, 74, 0.2)'
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 text-base font-semibold ${
                      isMobileMenuOpen ? 'animate-slide-in' : ''
                    }`}
                    style={{ 
                      color: '#4a1d4a',
                      animationDelay: `${index * 50}ms`
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.background = 'linear-gradient(135deg, rgba(102, 51, 102, 0.1) 0%, rgba(139, 74, 139, 0.1) 100%)';
                      target.style.color = '#663366';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.background = 'transparent';
                      target.style.color = '#4a1d4a';
                    }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem}
                          href="#"
                          className="block py-2 px-4 text-sm rounded-lg transition-all duration-200 font-medium"
                          style={{ color: '#663366' }}
                          onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = 'rgba(102, 51, 102, 0.1)';
                            target.style.color = '#4a1d4a';
                          }}
                          onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = 'transparent';
                            target.style.color = '#663366';
                          }}
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Book Appointment Button */}
              <div className="pt-4">
                <button 
                  className="group relative w-full px-6 py-3 rounded-full text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #4a1d4a 0%, #663366 100%)',
                    color: '#f0d97c'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <Calendar size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span>Book Appointment</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default MegaDiagnosticsNavbar;