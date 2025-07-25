'use client';

import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import image from '@/public/images/uploads/CXJBuXQLTvTKxUZDrQIgU_photonew.jpg';
import { 
  Award, 
  Users, 
  Heart, 
  Target,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  LucideIcon
} from 'lucide-react';

// TypeScript interfaces
interface Achievement {
  number: string;
  label: string;
  icon: LucideIcon;
}

// Custom hook for scroll animations
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const About: React.FC = () => {
  useScrollAnimation();

  const achievements: Achievement[] = [
    { number: '12+', label: 'Years Experience', icon: Clock },
    { number: '1000+', label: 'Happy Patients', icon: Users },
    { number: '1st', label: 'In Rajasthan', icon: Award },
    { number: '24/7', label: 'Emergency Care', icon: Shield }
  ];

  const facilities: string[] = [
    'State-of-the-art Interventional Suite',
    'Advanced Pathology Laboratory',
    'High-resolution Imaging Equipment',
    'Dedicated Recovery Areas',
    'Emergency Care Facilities',
    'Home Collection Services'
  ];

  const qualifications: string[] = [
    'Fellowship in Interventional Radiology',
    'MD in Radiodiagnosis',
    '12+ years of specialized experience',
    'Pioneer in advanced interventional procedures'
  ];

  return (
    <>
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-up {
          animation-delay: 0.1s;
        }
        
        .fade-up-delay-1 {
          animation-delay: 0.2s;
        }
        
        .fade-up-delay-2 {
          animation-delay: 0.3s;
        }
        
        .fade-up-delay-3 {
          animation-delay: 0.4s;
        }
        
        .slide-in-left {
          transform: translateX(-50px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in-left.animate-in {
          transform: translateX(0);
          opacity: 1;
        }
        
        .slide-in-right {
          transform: translateX(50px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in-right.animate-in {
          transform: translateX(0);
          opacity: 1;
        }
        
        .scale-in {
          transform: scale(0.9);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scale-in.animate-in {
          transform: scale(1);
          opacity: 1;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .counter-animation {
          animation: countUp 2s ease-out forwards;
        }
        
        @keyframes countUp {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .stagger-animation {
          animation-fill-mode: both;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        
        .bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          70% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
          transition: box-shadow 0.3s ease;
        }
        
        .glow-effect:hover {
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
        }
      `}</style>
      
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-20 hero-gradient text-white relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6 scroll-animate fade-up">
              About Mega Diagnostics
            </h1>
            <p className="text-xl max-w-3xl mx-auto scroll-animate fade-up-delay-1">
              Pioneering advanced healthcare in Rajasthan with a commitment to 
              innovation, compassion, and excellence in medical care.
            </p>
          </div>
          
          {/* Floating medical icons */}
          <div className="absolute top-20 left-10 text-white/20 floating-animation">
            <Heart className="h-8 w-8" />
          </div>
          <div className="absolute top-32 right-16 text-white/20 floating-animation" style={{animationDelay: '2s'}}>
            <Shield className="h-6 w-6" />
          </div>
          <div className="absolute bottom-20 left-20 text-white/20 floating-animation" style={{animationDelay: '4s'}}>
            <Award className="h-10 w-10" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 shadow-2xl border-0 card-hover scroll-animate slide-in-left glow-effect">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center floating-animation">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide world-class diagnostic and interventional radiology services 
                    to the people of Southern Rajasthan, making advanced healthcare accessible 
                    without the need to travel to metropolitan cities. We are committed to 
                    delivering accurate diagnoses and minimally invasive treatments with 
                    compassion and excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 shadow-2xl border-0 card-hover scroll-animate slide-in-right glow-effect">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center floating-animation" style={{animationDelay: '1s'}}>
                    <Heart className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the leading healthcare institution in Rajasthan, recognized for 
                    our innovative approach to combining comprehensive diagnostics with 
                    advanced interventional procedures. We envision a future where every 
                    patient in our region has access to cutting-edge medical technology 
                    and expert care close to home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Achievements</h2>
              <p className="text-xl text-gray-600">
                Milestones that reflect our commitment to excellence in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`text-center p-6 shadow-lg border-0 card-hover scroll-animate scale-in stagger-${index + 1} counter-animation`}>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center pulse-slow">
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Expert */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Expert</h2>
              <p className="text-xl text-gray-600">
                Leading the revolution in interventional radiology in Rajasthan.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto p-8 shadow-2xl border-0 scroll-animate scale-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center floating-animation shadow-2xl">
                    <Image src={image} alt="Dr. Bharat Gupta" layout="fill" className="rounded-full" />
                  </div>
                  <h3 className="text-2xl font-boldImagetext-gray-900">Dr. Bharat Gupta</h3>
                  <p className="text-gradient font-semibold text-lg">Expert Interventional Radiologist</p>
                  <p className="text-gray-600">12+ Years Experience</p>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Qualifications & Experience</h4>
                  <div className="space-y-3 mb-6">
                    {qualifications.map((qualification, index) => (
                      <div key={index} className={`flex items-center space-x-3 stagger-animation stagger-${index + 1}`}>
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{qualification}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Heart className="h-5 w-5 text-red-500 mr-2" />
                      Vision for Rural Rajasthan
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      "My vision is to bring world-class interventional radiology to every corner of 
                      Rajasthan, ensuring that patients don't have to travel far for advanced medical 
                      care. Through Mega Diagnostics, we're making cutting-edge treatments accessible 
                      to all, right here in our homeland."
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Facility Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Facility</h2>
              <p className="text-xl text-gray-600">
                Modern infrastructure designed for optimal patient care and comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className={`p-6 text-center shadow-lg border-0 card-hover scroll-animate scale-in stagger-${(index % 6) + 1}`}>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{facility}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-in-left">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Serving <span className="text-gradient">Southern Rajasthan</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Strategically located in Udaipur to serve the entire Southern Rajasthan region, 
                  making advanced healthcare accessible to communities across the area.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <MapPin className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Our Location</h3>
                      <p className="text-gray-600">Udaipur, Rajasthan</p>
                      <p className="text-gray-500 text-sm">Easily accessible from all major areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Users className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Serving Communities</h3>
                      <p className="text-gray-600">Udaipur, Bhilwara, Chittorgarh, Rajsamand</p>
                      <p className="text-gray-500 text-sm">And surrounding areas of Southern Rajasthan</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-8 shadow-2xl border-0 scroll-animate slide-in-right glow-effect">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-gray-600 mb-6">Ready to experience advanced healthcare?</p>
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full mb-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Schedule Consultation
                      </Button>
                      <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                        Learn More About Our Services
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;