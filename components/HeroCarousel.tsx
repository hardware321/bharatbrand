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
    <div className="relative h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #443737 0%, #987284 50%, #D5AA9F 100%)' }}>
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
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          />
          {/* Top 10% gradient overlay for premium effect */}
          <div 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, 
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
      <div className="relative h-full flex items-center justify-center px-4 z-10">
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
              {/* Decorative Heart Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center animate-pulse shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #D5AA9F 0%, #E8D5B7 50%, #F4E1D2 100%)' }}
                  >
                    <Heart size={32} className="text-white fill-current" style={{ color: '#443737' }} />
                  </div>
                  <div className="absolute -inset-4 border-2 rounded-full animate-ping" style={{ borderColor: '#E8D5B7' }}></div>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
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
              
              {/* Subtitle */}
              <h2 className="text-2xl md:text-4xl mb-6 font-light leading-relaxed" style={{ color: '#F4E1D2' }}>
                {slide.subtitle}
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: '#E8D5B7' }}>
                {slide.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="group px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl min-w-[200px]"
                  style={{ 
                    background: 'linear-gradient(135deg, #E8D5B7 0%, #F4E1D2 100%)',
                    color: '#443737'
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {slide.cta}
                    <div className="w-2 h-2 rounded-full group-hover:animate-bounce" style={{ backgroundColor: '#443737' }}></div>
                  </span>
                </button>
                
                <button 
                  className="group border-2 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[200px] hover:bg-white"
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
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-6 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="group p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 backdrop-blur-md"
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
          <ChevronLeft size={28} className="transition-colors" style={{ color: '#F4E1D2' }} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="group p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 backdrop-blur-md"
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
          <ChevronRight size={28} className="transition-colors" style={{ color: '#F4E1D2' }} />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
        {/* Slide Indicators */}
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide ? 'w-12 h-3' : 'w-3 h-3 hover:scale-125'
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

        {/* Auto Play Control */}
        <button
          onClick={toggleAutoPlay}
          className="p-3 rounded-full transition-all duration-300 group backdrop-blur-md"
          style={{ backgroundColor: 'rgba(212, 170, 159, 0.2)' }}
        
        >
          {isAutoPlay ? (
            <Pause size={16} style={{ color: '#F4E1D2' }} />
          ) : (
            <Play size={16} style={{ color: '#F4E1D2' }} />
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

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-bounce"
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