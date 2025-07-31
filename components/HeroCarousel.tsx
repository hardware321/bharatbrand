"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Heart } from 'lucide-react';

const NimaayaHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Health is Happiness",
      subtitle: "Your journey to wellness starts here with compassionate care",
      description: "Experience world-class women's healthcare with our team of expert doctors and state-of-the-art facilities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Book Consultation",
      secondary: "Learn More"
    },
    {
      id: 2,
      title: "Women's Wellness Center",
      subtitle: "Comprehensive care for every stage of life",
      description: "From adolescence to menopause, we provide specialized healthcare services tailored to women's unique needs.",
      image: "https://plus.unsplash.com/premium_photo-1723809656722-ba56481bce5d?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Explore Services",
      secondary: "Find Location"
    },
    {
      id: 3,
      title: "Expert Medical Care",
      subtitle: "Advanced treatments with compassionate approach",
      description: "Our fertility specialists and gynecologists use cutting-edge technology to provide the best possible outcomes.",
      image: "https://plus.unsplash.com/premium_photo-1679288660702-987a6fecf262?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Meet Our Experts",
      secondary: "Success Stories"
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
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #443737 0%, #987284 50%, #D5AA9F 100%)' }}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
              // Better mobile positioning - center and contain for small screens
              backgroundSize: window.innerWidth < 768 ? 'cover' : 'cover',
              backgroundPosition: window.innerWidth < 768 ? 'center center' : 'center center'
            }}
          />
          {/* Enhanced gradient overlay with mobile-specific adjustments */}
          <div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: window.innerWidth < 768 
                ? `linear-gradient(to bottom, 
                    #44373780 0%, 
                    #98728450 10%, 
                    #D5AA9F30 20%, 
                    rgba(68, 55, 55, 0.4) 100%
                  )`
                : `linear-gradient(to bottom, 
                    #44373740 0%, 
                    #98728430 5%, 
                    #D5AA9F20 8%, 
                    transparent 10%
                  )`
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-800 ease-out ${
                index === currentSlide
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              {/* Decorative Heart Icon - Responsive sizing */}
              <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
                <div className="relative">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center animate-pulse shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #D5AA9F 0%, #E8D5B7 50%, #F4E1D2 100%)' }}
                  >
                    <Heart size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 26 : 32} className="text-white fill-current" style={{ color: '#443737' }} />
                  </div>
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 border-2 rounded-full animate-ping opacity-75" style={{ borderColor: '#E8D5B7' }}></div>
                </div>
              </div>

              {/* Main Title - Better mobile typography */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
                <span 
                  className="bg-clip-text text-transparent drop-shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 50%, #D5AA9F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {slide.title}
                </span>
              </h1>
              
              {/* Subtitle - Mobile responsive */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 lg:mb-6 font-light leading-relaxed px-2" style={{ color: '#F4E1D2' }}>
                {slide.subtitle}
              </h2>
              
              {/* Description - Better mobile readability */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#E8D5B7' }}>
                {slide.description}
              </p>
              
              {/* CTA Buttons - Mobile stacked layout */}
              <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center px-4">
                <button 
                  className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl min-w-[180px] sm:min-w-[200px]"
                  style={{ 
                    background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)',
                    color: '#443737'
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {slide.cta}
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full group-hover:animate-bounce" style={{ backgroundColor: '#443737' }}></div>
                  </span>
                </button>
                
                <button 
                  className="group border-2 w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[180px] sm:min-w-[200px] hover:bg-white"
                  style={{ 
                    borderColor: '#E8D5B7',
                    color: '#F4E1D2'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = '#F4E1D2';
                    target.style.color = '#443737';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#F4E1D2';
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {slide.secondary}
                    <ChevronRight size={window.innerWidth < 640 ? 16 : 20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Smaller on mobile */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 sm:px-4 lg:px-6 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="group p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(212, 170, 159, 0.2)' }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(212, 170, 159, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(212, 170, 159, 0.2)';
          }}
        >
          <ChevronLeft size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 28} className="transition-colors" style={{ color: '#F4E1D2' }} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="group p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(212, 170, 159, 0.2)' }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(212, 170, 159, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'rgba(212, 170, 159, 0.2)';
          }}
        >
          <ChevronRight size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 28} className="transition-colors" style={{ color: '#F4E1D2' }} />
        </button>
      </div>

      {/* Bottom Controls - Mobile responsive */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 sm:gap-4 lg:gap-6 z-20">
        {/* Slide Indicators - Smaller on mobile */}
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2 sm:w-10 lg:w-12 sm:h-2.5 lg:h-3' 
                  : 'w-2 h-2 sm:w-2.5 lg:w-3 sm:h-2.5 lg:h-3 hover:scale-125'
              }`}
              style={{
                background: index === currentSlide 
                  ? 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)'
                  : 'rgba(232, 213, 183, 0.4)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                if (index !== currentSlide) {
                  target.style.backgroundColor = 'rgba(232, 213, 183, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                if (index !== currentSlide) {
                  target.style.backgroundColor = 'rgba(232, 213, 183, 0.4)';
                }
              }}
            />
          ))}
        </div>

        {/* Auto Play Control - Smaller on mobile */}
        <button
          onClick={toggleAutoPlay}
          className="p-2 sm:p-2.5 lg:p-3 rounded-full transition-all duration-300 group backdrop-blur-md"
          style={{ backgroundColor: 'rgba(212, 170, 159, 0.2)' }}
        >
          {isAutoPlay ? (
            <Pause size={window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 14 : 16} style={{ color: '#F4E1D2' }} />
          ) : (
            <Play size={window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 14 : 16} style={{ color: '#F4E1D2' }} />
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-20" style={{ backgroundColor: 'rgba(232, 213, 183, 0.2)' }}>
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)'
          }}
        />
      </div>

      {/* Floating Elements - Fewer on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(window.innerWidth < 640 ? 3 : 6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              backgroundColor: 'rgba(232, 213, 183, 0.3)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NimaayaHeroSection;