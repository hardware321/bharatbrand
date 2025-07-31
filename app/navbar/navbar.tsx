"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';

const NimaayaNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'About Us', 
      href: '#',
      dropdown: ['Our Story', 'Mission & Vision', 'Team', 'Awards']
    },
    { 
      name: 'Video Consultation', 
      href: '#'
    },
    { 
      name: 'Treatments', 
      href: '#',
      dropdown: ['IVF Treatment', 'Gynecology', 'Fertility Services', 'Maternity Care']
    },
    { 
      name: 'Our IVF Centers', 
      href: '#',
      dropdown: ['Surat Center', 'Vadodara Center', 'Ahmedabad Center']
    },
    { 
      name: 'Facilities', 
      href: '#',
      dropdown: ['Laboratory', 'Operation Theatre', 'Recovery Rooms', 'Equipment']
    },
    { 
      name: 'Contact Us', 
      href: '#'
    },
    { 
      name: 'IVF Training', 
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
      {/* Top Contact Bar - Desktop Only */}
      <div 
        className="hidden lg:block text-white py-3 px-4 text-sm"
        style={{ 
          background: 'linear-gradient(135deg, #443737 0%, #987284 50%, #D5AA9F 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <Phone size={16} className="animate-pulse group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline group-hover:text-yellow-200 transition-colors">APPOINTMENTS: </span>
              <span className="group-hover:text-yellow-200 transition-colors">Surat: +91-261-6119900 | Vadodara: +91-265-6839900 | Ahmedabad: +91-7961199900</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 transition-colors cursor-pointer group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-200 transition-colors">hello@nimaaya.com</span>
            </span>
            <button 
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)',
                color: '#443737'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(135deg, #F4E1D2 0%, #E8D5B7 100%)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)';
              }}
            >
              Book Appointment
            </button>
            <div className="flex gap-3">
              <Facebook size={18} className="cursor-pointer transition-all transform hover:scale-110" style={{ color: '#F4E1D2' }} 
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
              />
              <Instagram size={18} className="cursor-pointer transition-all transform hover:scale-110" style={{ color: '#F4E1D2' }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#E8D5B7';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#F4E1D2';
                }}
              />
            </div>
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
          ? 'rgba(244, 225, 210, 0.95)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(152, 114, 132, 0.2)' : 'none'
      }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 shadow-xl"
              style={{
                background: isScrolled 
                  ? 'linear-gradient(135deg, #987284 0%, #D5AA9F 50%, #E8D5B7 100%)' 
                  : 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)'
              }}
            >
              <span 
                className="text-2xl font-bold transition-colors duration-500"
                style={{ color: isScrolled ? '#F4E1D2' : '#443737' }}
              >
                N
              </span>
            </div>
            <div className="ml-4">
              <h1 
                className="text-2xl font-bold transition-all duration-500"
                style={{ 
                  color: isScrolled ? '#443737' : '#F4E1D2',
                  textShadow: isScrolled ? 'none' : '0 2px 4px rgba(68, 55, 55, 0.3)'
                }}
              >
                NIMAAYA
              </h1>
              <p 
                className="text-sm transition-all duration-500"
                style={{ 
                  color: isScrolled ? '#987284' : '#E8D5B7',
                  textShadow: isScrolled ? 'none' : '0 1px 2px rgba(68, 55, 55, 0.2)'
                }}
              >
                women's centre for health
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                  style={{ 
                    color: isScrolled ? '#443737' : '#F4E1D2',
                    background: 'transparent'
                  }}
                  onClick={() => item.dropdown && handleDropdownToggle(item.name)}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = isScrolled ? 'rgba(152, 114, 132, 0.1)' : 'rgba(244, 225, 210, 0.1)';
                    target.style.color = isScrolled ? '#987284' : '#E8D5B7';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = isScrolled ? '#443737' : '#F4E1D2';
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible transform translate-y-0' 
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                    style={{ 
                      background: 'rgba(244, 225, 210, 0.98)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(152, 114, 132, 0.2)'
                    }}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block px-4 py-3 transition-all duration-200"
                        style={{ 
                          color: '#443737',
                          borderBottom: index < item.dropdown!.length - 1 ? '1px solid rgba(152, 114, 132, 0.1)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.background = 'linear-gradient(135deg, rgba(213, 170, 159, 0.1) 0%, rgba(232, 213, 183, 0.1) 100%)';
                          target.style.color = '#987284';
                        }}
                        onMouseLeave={(e) => {
                          const target = e.target as HTMLElement;
                          target.style.background = 'transparent';
                          target.style.color = '#443737';
                        }}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg transition-all duration-300"
            style={{ 
              color: isScrolled ? '#443737' : '#F4E1D2'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = isScrolled ? 'rgba(152, 114, 132, 0.1)' : 'rgba(244, 225, 210, 0.1)';
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
              background: 'rgba(244, 225, 210, 0.98)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(152, 114, 132, 0.2)'
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isMobileMenuOpen ? 'animate-slide-in' : ''
                    }`}
                    style={{ 
                      color: '#443737',
                      animationDelay: `${index * 50}ms`
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.background = 'linear-gradient(135deg, rgba(213, 170, 159, 0.1) 0%, rgba(232, 213, 183, 0.1) 100%)';
                      target.style.color = '#987284';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.background = 'transparent';
                      target.style.color = '#443737';
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
                          className="block py-2 px-4 text-sm rounded-lg transition-all duration-200"
                          style={{ color: '#987284' }}
                          onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = 'rgba(213, 170, 159, 0.1)';
                            target.style.color = '#443737';
                          }}
                          onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.backgroundColor = 'transparent';
                            target.style.color = '#987284';
                          }}
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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

export default NimaayaNavbar;