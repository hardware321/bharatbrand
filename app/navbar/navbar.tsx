'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Loader2 } from 'lucide-react';
import logo from "../logo.jpg"
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diagnostic Services', href: '/diagnostic-services' },
    { name: 'Interventional Radiology', href: '/interventional-radiology' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog & Testimonials', href: '/blog' },

    { name: 'Contact', href: '/contact' },
  ];

  const handleBookAppointment = () => {
    setIsBookingLoading(true);
    
    // Simulate booking process (replace with actual booking logic)
    setTimeout(() => {
      setIsBookingLoading(false);
      // Add your booking logic here
      alert('Redirecting to booking page...');
    }, 2000);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Emergency: +91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Udaipur, Rajasthan</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Home Test Available | NABL & CAP Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
                          <Image src={logo} alt="Logo" width={200} height={40} />

            {/* <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
            </div> */}
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-900">Mega Diagnostics</h1>
              <p className="text-sm text-gray-600">Udaipur</p>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={handleBookAppointment}
              disabled={isBookingLoading}
              className={`
                relative overflow-hidden
                bg-blue-600 hover:bg-blue-700 
                disabled:bg-blue-400 disabled:cursor-not-allowed
                text-white px-6 py-2 rounded-lg font-medium 
                transition-all duration-300 ease-in-out
                transform hover:scale-105 active:scale-95
                ${isBookingLoading ? 'animate-pulse' : ''}
              `}
            >
              <span className={`flex items-center justify-center gap-2 ${isBookingLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
                Book Appointment
              </span>
              
              {/* Loading overlay */}
              <div className={`
                absolute inset-0 flex items-center justify-center
                ${isBookingLoading ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-200
              `}>
                <Loader2 className="h-5 w-5 animate-spin text-white" />
                <span className="ml-2 text-white">Booking...</span>
              </div>
              
              {/* Ripple effect on click */}
              <div className={`
                absolute inset-0 rounded-lg
                ${isBookingLoading ? 'animate-ping bg-white opacity-20' : ''}
              `}></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 border-l-4 border-blue-600 pl-4'
                      : 'text-gray-700 hover:text-blue-600 pl-4'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button 
                  onClick={handleBookAppointment}
                  disabled={isBookingLoading}
                  className={`
                    relative overflow-hidden
                    bg-blue-600 hover:bg-blue-700 
                    disabled:bg-blue-400 disabled:cursor-not-allowed
                    text-white px-6 py-2 rounded-lg font-medium 
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105 active:scale-95
                    w-full
                    ${isBookingLoading ? 'animate-pulse' : ''}
                  `}
                >
                  <span className={`flex items-center justify-center gap-2 ${isBookingLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
                    Book Appointment
                  </span>
                  
                  {/* Loading overlay */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    ${isBookingLoading ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-200
                  `}>
                    <Loader2 className="h-5 w-5 animate-spin text-white" />
                    <span className="ml-2 text-white">Booking...</span>
                  </div>
                  
                  {/* Ripple effect on click */}
                  <div className={`
                    absolute inset-0 rounded-lg
                    ${isBookingLoading ? 'animate-ping bg-white opacity-20' : ''}
                  `}></div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;