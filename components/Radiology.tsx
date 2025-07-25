"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle, 
  Users,
  ArrowRight,
  Stethoscope,
  LucideIcon
} from 'lucide-react';

// TypeScript interfaces
interface Procedure {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ComparisonItem {
  aspect: string;
  traditional: string;
  interventional: string;
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

const InterventionalRadiology: React.FC = () => {
  useScrollAnimation();

  const procedures: Procedure[] = [
    {
      title: 'Varicose Vein Laser Ablation',
      description: 'Minimally invasive treatment for varicose veins using laser energy to close affected veins.',
      benefits: ['No surgical incisions', 'Local anesthesia only', 'Same-day discharge', 'Quick recovery'],
      icon: Zap
    },
    {
      title: 'Uterine Fibroid Embolization',
      description: 'Non-surgical treatment for uterine fibroids by blocking blood supply to the fibroids.',
      benefits: ['Preserves uterus', 'No surgery required', 'Faster recovery', 'Reduced bleeding'],
      icon: Heart
    },
    {
      title: 'Liver Tumor Embolization',
      description: 'Targeted treatment for liver tumors by blocking blood supply to cancerous tissue.',
      benefits: ['Precise targeting', 'Minimal side effects', 'Outpatient procedure', 'Effective results'],
      icon: Shield
    },
    {
      title: 'Prostate Artery Embolization',
      description: 'Treatment for enlarged prostate by reducing blood flow to prostate tissue.',
      benefits: ['No surgery needed', 'Preserves function', 'Quick procedure', 'Minimal downtime'],
      icon: Users
    },
    {
      title: 'Dialysis Access Care',
      description: 'Maintenance and repair of dialysis access points for kidney patients.',
      benefits: ['Extends access life', 'Reduces complications', 'Same-day procedure', 'Expert care'],
      icon: Heart
    },
    {
      title: 'Deep Vein Thrombosis Treatment',
      description: 'Advanced catheter-based treatment for blood clots in deep veins.',
      benefits: ['Clot removal', 'Prevents complications', 'Minimally invasive', 'Rapid results'],
      icon: Zap
    },
    {
      title: 'Peripheral Artery Disease Intervention',
      description: 'Balloon angioplasty and stenting for blocked arteries in arms and legs.',
      benefits: ['Restores blood flow', 'Improves mobility', 'No major surgery', 'Long-lasting results'],
      icon: Stethoscope
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: Shield,
      title: 'No Incisions',
      description: 'All procedures are performed through small punctures, not surgical cuts.'
    },
    {
      icon: Zap,
      title: 'No Stitches',
      description: 'Tiny entry points heal naturally without the need for stitches.'
    },
    {
      icon: Clock,
      title: 'Same-Day Discharge',
      description: 'Most patients go home the same day as their procedure.'
    },
    {
      icon: Heart,
      title: 'Local Anesthesia',
      description: 'Procedures performed under local anesthesia for patient comfort.'
    },
    {
      icon: Users,
      title: 'Minimal Downtime',
      description: 'Return to normal activities much faster than traditional surgery.'
    },
    {
      icon: CheckCircle,
      title: 'High Success Rate',
      description: 'Proven effective results with minimal complications.'
    }
  ];

  const comparisonData: ComparisonItem[] = [
    { aspect: 'Recovery Time', traditional: '2-6 weeks', interventional: '1-3 days' },
    { aspect: 'Hospital Stay', traditional: '3-7 days', interventional: 'Same day' },
    { aspect: 'Anesthesia', traditional: 'General', interventional: 'Local' },
    { aspect: 'Complications', traditional: 'Higher risk', interventional: 'Lower risk' },
    { aspect: 'Scarring', traditional: 'Visible scars', interventional: 'No scars' }
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
        
        .stagger-animation {
          animation-fill-mode: both;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>
      
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-20 hero-gradient text-white">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6 scroll-animate fade-up">
              Precision Without Surgery
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 scroll-animate fade-up-delay-1">
              Image-guided treatments that are non-surgical, safer, and quicker to recover from. 
              Experience the future of medical interventions in Rajasthan.
            </p>
            <div className="scroll-animate fade-up-delay-2">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300">
                Consult Our Specialist
              </Button>
            </div>
          </div>
          
          {/* Floating medical icons */}
          <div className="absolute top-20 left-10 text-white/20 floating-animation">
            <Heart className="h-8 w-8" />
          </div>
          <div className="absolute top-32 right-16 text-white/20 floating-animation" style={{animationDelay: '2s'}}>
            <Shield className="h-6 w-6" />
          </div>
          <div className="absolute bottom-20 left-20 text-white/20 floating-animation" style={{animationDelay: '4s'}}>
            <Stethoscope className="h-10 w-10" />
          </div>
        </section>

        {/* Procedures Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Procedures We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced minimally invasive procedures performed by expert interventional radiologists 
                using state-of-the-art imaging technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {procedures.map((procedure, index) => (
                <Card key={index} className={`card-hover scroll-animate stagger-${(index % 6) + 1} shadow-lg border-0`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg pulse-slow">
                        <procedure.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{procedure.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{procedure.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {procedure.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose <span className="text-gradient">Interventional Radiology?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experience the advantages of minimally invasive procedures over traditional surgery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className={`text-center p-6 card-hover scroll-animate stagger-${(index % 6) + 1} scale-in border-0 shadow-lg`}>
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-in-left">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Traditional Surgery vs{' '}
                  <span className="text-gradient">Interventional Radiology</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  See how our minimally invasive approach compares to traditional surgical methods.
                </p>
                
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <div key={index} className={`bg-white p-4 rounded-lg shadow-sm border transform hover:scale-105 transition-all duration-300 stagger-${index + 1}`} style={{animationDelay: `${0.1 * index}s`}}>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{item.aspect}</span>
                        <div className="flex space-x-8">
                          <div className="text-right">
                            <div className="text-sm text-red-600">Traditional Surgery</div>
                            <div className="font-medium">{item.traditional}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Our Approach</div>
                            <div className="font-medium text-green-600">{item.interventional}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative scroll-animate slide-in-right">
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden shadow-2xl">
                  {/* Placeholder for medical equipment image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center floating-animation">
                        <Stethoscope className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700">Advanced Medical Technology</h3>
                      <p className="text-gray-600 mt-2">State-of-the-art interventional radiology suite</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Expert Care Team</h2>
              <p className="text-xl text-gray-600">
                Led by Dr. Bharat Gupta, Expert Interventional Radiologist with 12+ years of experience.
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto p-8 scroll-animate scale-in shadow-2xl border-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center floating-animation shadow-lg">
                    <span className="text-4xl font-bold text-white">BG</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Dr. Bharat Gupta</h3>
                  <p className="text-gray-600">Interventional Radiologist</p>
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    {[
                      '12+ years of specialized experience',
                      'Fellowship trained in Interventional Radiology',
                      'Pioneer in bringing advanced procedures to Rajasthan',
                      'Committed to providing world-class care locally'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center space-x-3 stagger-animation stagger-${index + 1}`}>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient text-white">
          <div className="max-w-7xl mx-auto text-center scroll-animate">
            <h2 className="text-4xl font-bold mb-4">Ready for a Minimally Invasive Solution?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Consult with our expert team to learn if interventional radiology is right for your condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-blue text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterventionalRadiology;