"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {  Play, Pause } from 'lucide-react';

const NimaayaHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Handle window width safely and initial load animation
  useEffect(() => {
    setIsMounted(true);
    
    // Trigger load animation after component mounts
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Helper function to get responsive values
  const getResponsiveValue = (mobile: number, tablet: number, desktop: number) => {
    if (!isMounted) return desktop;
    if (windowWidth < 640) return mobile;
    if (windowWidth < 1024) return tablet;
    return desktop;
  };

  const slides = [
    {
      id: 1,
      title: "MEGA Care. MEGA Accuracy.",
      subtitle: "Advanced Diagnostic and Interventional Radiology Center",
      description: "Rajasthan's first fully digital, automated diagnostic center with cutting-edge technology and expert radiologists from top institutes of India.",
      image: "https://plus.unsplash.com/premium_photo-1679288660702-987a6fecf262?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Book Diagnostic Test",
      secondary: "View Services"
    },
    {
      id: 2,
      title: "Precision You Can See",
      subtitle: "State of the Art Facilities & 24x7 Availability",
      description: "From MRI to Interventional Radiology - comprehensive diagnostic services with advanced technology, experienced professionals, and world-class patient care.",
      image: "https://plus.unsplash.com/premium_photo-1723809656722-ba56481bce5d?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Emergency Services",
      secondary: "Contact Us"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  }, [isTransitioning, currentSlide]);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, nextSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="relative h-[70vh] sm:h-[70vh] md:h-[80vh] pt-[40px] lg:h-screen overflow-hidden bg-gray-900">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      {/* Text Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-500 ease-out ${
                index === currentSlide
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-4'
              }`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >

              {/* Main Title */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight transition-all duration-700 ease-out ${
                hasLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`} style={{ 
                transitionDelay: '200ms',
                background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 50%, #f0d97c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {slide.title}
              </h1>
              
              {/* Subtitle */}
              <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-light leading-relaxed text-gray-200 transition-all duration-700 ease-out ${
                hasLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`} style={{ transitionDelay: '400ms' }}>
                {slide.subtitle}
              </h2>
              
              {/* Description */}
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-300 transition-all duration-700 ease-out ${
                hasLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`} style={{ transitionDelay: '600ms' }}>
                {slide.description}
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ease-out ${
                hasLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`} style={{ transitionDelay: '800ms' }}>
                <button 
                  className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-lg transition-all duration-200 min-w-[200px] hover:shadow-lg transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #4a1d4a 0%, #8b4a8b 100%)' }}
                >
                  {slide.cta}
                </button>
                
                <button 
                  className="w-full sm:w-auto px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 min-w-[200px] hover:shadow-lg transform hover:scale-105"
                  style={{ 
                    borderColor: '#f0d97c',
                    color: '#f0d97c',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)';
                    target.style.color = '#4a1d4a';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'transparent';
                    target.style.color = '#f0d97c';
                  }}
                >
                  {slide.secondary}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-200 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2' 
                  : 'w-2 h-2 hover:scale-125'
              }`}
              style={{
                background: index === currentSlide 
                  ? 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)'
                  : 'rgba(240, 217, 124, 0.4)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                if (index !== currentSlide) {
                  target.style.backgroundColor = 'rgba(240, 217, 124, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                if (index !== currentSlide) {
                  target.style.backgroundColor = 'rgba(240, 217, 124, 0.4)';
                }
              }}
            />
          ))}
        </div>

        {/* Auto Play Control */}
        <button
          onClick={toggleAutoPlay}
          className="p-2 backdrop-blur-sm rounded-full transition-all duration-200"
          style={{ backgroundColor: 'rgba(74, 29, 74, 0.3)' }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(74, 29, 74, 0.5)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(74, 29, 74, 0.3)';
          }}
        >
          {isAutoPlay ? (
            <Pause size={14} style={{ color: '#f0d97c' }} />
          ) : (
            <Play size={14} style={{ color: '#f0d97c' }} />
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-20" style={{ backgroundColor: 'rgba(240, 217, 124, 0.2)' }}>
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: 'linear-gradient(135deg, #f0d97c 0%, #e6c76b 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default NimaayaHeroSection;